import Image from "next/image"
import Link from "next/link"

export default function DetailContent() {
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
          <div className="uppercase tracking-wide text-sm text-sky-400 font-semibold">Nova Scotia</div>
          <h1 className="block mt-4 text-xl leading-tight font-medium text-black">Hiking in Kejimkujik National Park and National Historic Site</h1>

          <div className="flex mt-4">
            <h6 className="text-sm text-slate-800 font-semibold">Departure:</h6>
            <h6 className="ml-2 text-sm text-slate-500">Halifax</h6>
          </div>
          <div className="flex mt-2">
            <h6 className="text-md text-slate-800 font-semibold">Destination:</h6>
            <h6 className="ml-2 text-md text-slate-500">Caledonia</h6>
          </div>
          <div className="flex mt-2">
            <h6 className="text-md text-slate-800 font-semibold">Days:</h6>
            <h6 className="ml-2 text-md text-slate-500">2</h6>
          </div>
          <div className="flex mt-2">
            <div className="py-0 px-2 rounded-xl bg-green-400 text-xs text-white">Hiking</div>
            <div className="ml-2 py-0 px-2 rounded-xl bg-amber-400 text-xs text-white">Canoeing</div>
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