import Topbar from "./topbar/Topbar"
import SideMenu from "./sideMenu/SideMenu"
import MainList from "./mainList/MainList"
import DetailPage from "./detailPage/detailPage"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Topbar />
      <div className="grid grid-cols-5 max-w-7xl mx-auto pt-6">
        <div className="col-span-5 sm:col-span-1">
          <SideMenu />
        </div>
        <div className="col-span-5 sm:col-span-4">
          <main>
            <MainList />
            <DetailPage />
          </main>
        </div>
      </div>
    </div>
  )
}