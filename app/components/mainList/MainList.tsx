import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import initPosts from '../../../data/postsData.json' assert { type: "json" }

interface PostProp {
  "id": number
  "title": string
  "cover": string
  "introduction": string
  "length": number
  "unit": string
  "areaTags": string[]
  "departure": {
    "province": string
    "city": string
  },
  "desitinations": {
    "id": number
    "province": string
    "city": string
    "spots": {
      "id": number
      "name": string
    }[]
    "features": {
      "id": number
      "name": string
    }[]
    "activities": {
      "id": number
      "name": string
    }[]
  }[]
}

export default function MainList(props: { selectedSideMenuItem: string }) {
  const selectedSideMenuItem = props.selectedSideMenuItem
  const postsData = initPosts.initPosts
  let result = postsData.filter(post => post.areaTags.filter(tag => tag.includes(selectedSideMenuItem)).length !== 0)
  // fiter by selected menu
  return <div className='w-full'>
    {
      result.map((post: PostProp) => (
        <div className="mb-4 mx-2 bg-white rounded-lg shadow-md overflow-hidden" key={post.id}>
          <Link className="md:flex" href='/posts'>
            <div className="md:shrink-0">
              <Image className="object-cover w-full h-auto md:w-44 md:h-60" width='180' height='240' priority={true} src={post.cover} alt="Simco Lake" />
            </div>
            <div className="p-4">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{post.departure.province}</div>
              <h1 className="block mt-1 text-lg leading-tight font-medium">{post.title}</h1>
              <p className="mt-2 text-sm text-slate-500">{post.introduction}</p>
              <div className="flex mt-4">
                <h6 className="text-xs text-slate-800 font-semibold">Departure:</h6>
                <h6 className="ml-2 text-xs text-slate-500">{post.departure.city}</h6>
              </div>
              {/* destinations */}
              <div className="flex mt-2">
                <h6 className="text-xs text-slate-800 font-semibold">Desitination: </h6>
                <h6 className="ml-2 text-xs text-slate-500">{post.desitinations.map((post) => post.city)}</h6>
              </div>
              <div className="flex mt-2">
                <h6 className="text-xs text-slate-800 font-semibold">length: </h6>
                <h6 className="ml-2 text-xs text-slate-500">{post.length} {post.unit}</h6>
              </div>
              <div className="flex mt-2">
                {
                  post.desitinations.map((desitination) =>
                    desitination.activities.map((activity: { id: number, name: string }) => (
                      <div className="mr-2 py-0 px-2 rounded-xl bg-sky-400 text-xs text-white" key={activity.id}>{activity.name}</div>
                    )
                    ))
                }
              </div>
            </div>
          </Link>
        </div>
      ))
    }
  </div>
}