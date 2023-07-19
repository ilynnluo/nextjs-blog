
import Image from "next/image"
import Link from "next/link"
import { PostProp } from "../mainList/MainList"
import { spawn } from "child_process"

export default function DetailContent({ post }: { post: PostProp | null }) {
  console.log('recevied post: ', post)
  return (
    <div>
      {/* cucumber */}
      <ul className="flex pl-2">
        <li className="pl-2 after:content-['/'] after:pl-2">
          <Link href='/'>Home</Link>
        </li>
        <li className="pl-2 after:content-['/'] after:pl-2">Ontario</li>
        <li className="px-2">GTA</li>
      </ul>
      {/* main content */}
      <div>
        <div className="p-4">
          <div className="uppercase tracking-wide text-sm text-sky-400 font-semibold">{post?.departure.province}</div>
          <h1 className="block mt-4 text-xl leading-tight font-medium text-black">{post?.title}</h1>

          <div className="flex mt-4">
            <h6 className="text-sm text-slate-800 font-semibold">Departure:</h6>
            <h6 className="ml-2 text-sm text-slate-500">{post?.departure.city}</h6>
          </div>
          <div className="flex mt-2">
            <h6 className="text-md text-slate-800 font-semibold">Destination:</h6>
            {
              post?.desitinations.map((des) => <h6 key={des.id} className="ml-2 text-md text-slate-500">{des.city}</h6>)
            }
          </div>
          <div className="flex mt-2">
            <h6 className="text-md text-slate-800 font-semibold">{post?.unit}:</h6>
            <h6 className="ml-2 text-md text-slate-500">{post?.length}</h6>
          </div>
          <div className="flex mt-2">
            {
              post?.desitinations.map((des) => <div key={des.id} className="mr-1 py-0 px-2 rounded-xl bg-green-400 text-xs text-white">
                {
                  des.activities.map((a) => <span key={a.id}>{a.name}</span>)
                }
                </div>)
            }
          </div>
          <div className="mt-4">
            <p className="text-md text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine?
              We have a list of places to do just that.</p>
            <Image width={180} height={240} src="/kejimkujik.jpg" alt="Modern building architecture" className="py-4 object-cover md:w-44 md:h-60" />
          </div>
        </div>
      </div>
    </div>
  )
}