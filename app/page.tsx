import Layout from "./components/layout"
import MainList from "./components/mainList/MainList"
import SideMenu from "./components/sideMenu/SideMenu"
import Topbar from "./components/topbar/Topbar"

export default function Home() {
  return (
    <Layout>
      <Topbar />
      <main className="grid grid-cols-5 max-w-7xl mx-auto pt-6">
        <div className="col-span-5 sm:col-span-1">
          <SideMenu />
        </div>
        <div className="col-span-5 sm:col-span-4">
          <MainList />
        </div>
      </main>
    </Layout>
  )
}
