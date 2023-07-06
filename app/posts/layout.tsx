import Topbar from "../components/topbar/Topbar"
import SideMenu from "../components/mainContent/MainContent"
import MainList from "../components/mainList/MainList"
import DetailPage from "../components/detailPage/detailPage"

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
            <DetailPage />
          </main>
        </div>
      </div>
    </div>
  )
}