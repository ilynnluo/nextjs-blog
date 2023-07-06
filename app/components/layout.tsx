import Topbar from "./topbar/Topbar"
import SideMenu from "./mainContent/MainContent"
import MainContent from "./mainContent/MainContent"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Topbar />
      <main>
        <MainContent />
      </main>
    </div>
  )
}