import Layout from "./components/layout"
import SideMenu from "./components/sideMenu/SideMenu"
import Topbar from "./components/topbar/Topbar"

export default function Home() {
  return (
    <Layout>
      <Topbar />
      <main className="max-w-7xl mx-auto pt-6">
        <SideMenu />
      </main>
    </Layout>
  )
}
