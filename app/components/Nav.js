'use client'
import Link from "next/link";
import {auth} from "../../utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import Image from "next/image";

export default function Nav(){
  const [user,loading]=useAuthState(auth);

  return (
    <nav className="flex justify-between items-center py-10">
      <Link href="/">
        <button className="text-lg font-medium">Share Thoughts</button>
      </Link>
      <ul className="flex items-center gap-10">
        {!user && (
          <Link className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8" href="/auth/login">Join Now</Link>
          )}
        {user &&(
          <div className="flex items-center gap-6">
            <Link href="/post">
              <button className="font-medium bg-cyan-500 rounded-md text-white py-2 px-4 text-sm">Post</button>
            </Link>
            <Link href="/dashboard">
              <img className="w-12 rounded-full cursor-pointer" src={user.photoURL}/>
            </Link>
          </div>
        )}
        </ul>
    </nav>
  )
}
