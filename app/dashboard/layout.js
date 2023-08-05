import Nav from "@/app/components/Nav";

export default function DashboardLayout({children}) {
  return (
    <section>
      <Nav/>
      {children}
    </section>
  )
}
