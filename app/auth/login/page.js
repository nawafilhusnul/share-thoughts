'use client';
import {FcGoogle} from "react-icons/fc";
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {auth} from "../../../utils/firebase";
import {useRouter} from "next/navigation";
import {useAuthState} from "react-firebase-hooks/auth";
import {useEffect} from "react";

export default function Page(){
  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  // sign in with Google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      route.push("/")
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user){
      route.push("/")
    }else{
      console.log("login")
    }
  },[user])
  return (
    <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg mx-10">
      <h2 className="text-2xl font-medium">Join Today</h2>
      <div className="py-4">
        <h3 className="py-4">Sign in with one of the provider</h3>
        <button onClick={GoogleLogin} className="text-white bg-gray-700 w-full font-medium rounded-lg flex align-middle p-4 gap-2">
          <FcGoogle className="text-2xl"/>
          Sign in with google
        </button>
      </div>
    </div>
  )
}


