import Nav from "@/app/components/Nav";

export default function PostLayout({children}) {
  return (
    <section>
      <Nav/>
      {children}
    </section>
  )
}
