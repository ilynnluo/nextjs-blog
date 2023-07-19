'use client'
import { useState, useEffect, ChangeEvent, MouseEvent } from "react"
import DetailLayout from "./layout"
import Navbar from "../../components/navbar/Navbar"
import DetailContent from "../../components/detailContent/DetailContent"
import Topbar from "../../components/topbar/Topbar"
import axios from 'axios'
// import { useParams } from 'next/navigation'

export default function DetailPage({ params }: { params: { id: string }}) {
  // const params = useParams()
  const [selectedSideMenuItem, setSelectedSideMenuItem] = useState<string>('')
  const [post, setPost] = useState(null)
  const getPost = async () => {
    try {
      const { data: response } = await axios.get(`http://localhost:3000/posts/${params.id}`)
      setPost(response)
      return post
    } catch (e) {
      console.log(e)
    }
  }
  const [keywordValue, setKeywordValue] = useState<string>('')
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setKeywordValue(e.currentTarget.value)
  const handleSideMenu = (e: MouseEvent<HTMLButtonElement>) => setSelectedSideMenuItem(e.currentTarget.value)
  useEffect(() => {
    getPost()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <DetailLayout>
      <Topbar />
      <div className="grid grid-cols-5 max-w-7xl mx-auto pt-6">
        <div className="col-span-5 sm:col-span-1">
          <Navbar handleSearch={handleSearch} handleSideMenu={handleSideMenu} keywordValue={keywordValue} />
        </div>
        <div className="col-span-5 sm:col-span-4">
          <DetailContent post={post} />
        </div>
      </div>
    </DetailLayout>
  )
}
