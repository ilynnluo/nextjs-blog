import Image from 'next/image'

export default function MainList() {
  return <div className='w-full'>
    <div className="mx-2 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:shrink-0">
          <Image width={180} height={240} src="/simco.jpg" alt="Modern building architecture" className="object-cover md:w-44 md:h-60" />
        </div>
        <div className="p-4">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Ontario</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Swimming and picnic in Willow Beach Conservation Area</a>
          <p className="mt-2 text-sm text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine?
            We have a list of places to do just that.</p>
          <div className="flex mt-4">
            <h6 className="text-xs text-slate-800 font-semibold">Departure:</h6>
            <h6 className="ml-2 text-xs text-slate-500">Aurora</h6>
          </div>
          <div className="flex mt-2">
            <h6 className="text-xs text-slate-800 font-semibold">Destination:</h6>
            <h6 className="ml-2 text-xs text-slate-500">Georgina</h6>
          </div>
          <div className="flex mt-2">
            <h6 className="text-xs text-slate-800 font-semibold">Hours:</h6>
            <h6 className="ml-2 text-xs text-slate-500">4</h6>
          </div>
          <div className="flex mt-2">
            <div className="py-0 px-2 rounded-xl bg-sky-400 text-xs text-white">Swimming</div>
            <div className="ml-2 py-0 px-2 rounded-xl bg-red-400 text-xs text-white">Picnic</div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-4 mx-2 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:shrink-0">
          <Image width={180} height={240} src="/kejimkujik.jpg" alt="Modern building architecture" className="object-cover md:w-44 md:h-60" />
        </div>
        <div className="p-4">
          <div className="uppercase tracking-wide text-sm text-sky-400 font-semibold">Nova Scotia</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Hiking in Kejimkujik National Park and National Historic Site</a>
          <p className="mt-2 text-sm text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine?
            We have a list of places to do just that.</p>
          <div className="flex mt-4">
            <h6 className="text-xs text-slate-800 font-semibold">Departure:</h6>
            <h6 className="ml-2 text-xs text-slate-500">Halifax</h6>
          </div>
          <div className="flex mt-2">
            <h6 className="text-xs text-slate-800 font-semibold">Destination:</h6>
            <h6 className="ml-2 text-xs text-slate-500">Caledonia</h6>
          </div>
          <div className="flex mt-2">
            <h6 className="text-xs text-slate-800 font-semibold">Days:</h6>
            <h6 className="ml-2 text-xs text-slate-500">2</h6>
          </div>
          <div className="flex mt-2">
            <div className="py-0 px-2 rounded-xl bg-green-400 text-xs text-white">Hiking</div>
            <div className="ml-2 py-0 px-2 rounded-xl bg-amber-400 text-xs text-white">Canoeing</div>
          </div>
        </div>
      </div>
    </div>
  </div>
}