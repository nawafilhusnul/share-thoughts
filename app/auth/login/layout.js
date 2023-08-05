import Nav from "@/app/components/Nav";

export default function LoginLayout({children}) {
  return (
    <section>
      <Nav/>
      {children}
    </section>
  )
}
