'use client'
import { useState, ChangeEvent, MouseEvent } from "react"
import RootLayout from "./layout"
import MainList from "./components/mainList/MainList"
import Navbar from "./components/navbar/Navbar"
import Topbar from "./components/topbar/Topbar"

export default function Home() {
  const [selectedSideMenuItem, setSelectedSideMenuItem] = useState<string>('')
  const [keywordValue, setKeywordValue] = useState<string>('')
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setKeywordValue(e.currentTarget.value)
  const handleSideMenu = (e: MouseEvent<HTMLButtonElement>) => setSelectedSideMenuItem(e.currentTarget.value)

  return (
    <RootLayout>
      <Topbar />
      <div className="grid grid-cols-5 max-w-7xl mx-auto pt-6">
        <div className="col-span-5 sm:col-span-1">
          <Navbar handleSearch={handleSearch} handleSideMenu={handleSideMenu} keywordValue={keywordValue} />
        </div>
        <div className="col-span-5 sm:col-span-4">
          <MainList selectedSideMenuItem={selectedSideMenuItem} keywordValue={keywordValue} />
        </div>
      </div>
    </RootLayout>
  )
}
