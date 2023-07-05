import Image from 'next/image'
import Link from 'next/link'
import * as postData from '../../../data/postsData.json'

interface PostProp {
  "id": number
  "title": string
  "cover": string
  "introduction": string
  "length": number
  "unit": string
  "departure": {
    "province": string
    "city": string
  },
  "desitination": {
    "id": number
    "province": string
    "city": string
    "spot": string
    "features": string
    "activities": {
      "id": number
      "name": string
    }[]
  }[]
}


export default function MainList() {
  return <div className='w-full'>
    {
      postData.map((item: PostProp) => (
        <div className="mb-4 mx-2 bg-white rounded-lg shadow-md overflow-hidden" key={item.id}>
          <Link className="md:flex" href='/posts'>
            <div className="md:shrink-0">
              <Image className="object-cover md:w-44 md:h-60" width={180} height={240} src={item.cover} alt="Simco Lake" />
            </div>
            <div className="p-4">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item.departure.province}</div>
              <h1 className="block mt-1 text-lg leading-tight font-medium">{item.title}</h1>
              <p className="mt-2 text-sm text-slate-500">{item.introduction}</p>
              <div className="flex mt-4">
                <h6 className="text-xs text-slate-800 font-semibold">Departure:</h6>
                <h6 className="ml-2 text-xs text-slate-500">{item.departure.city}</h6>
              </div>
              {/* destinations */}
              <div className="flex mt-2">
                <h6 className="text-xs text-slate-800 font-semibold">Desitination: </h6>
                <h6 className="ml-2 text-xs text-slate-500">{item.desitination.map((item) => item.city)}</h6>
              </div>
              <div className="flex mt-2">
                <h6 className="text-xs text-slate-800 font-semibold">length: </h6>
                <h6 className="ml-2 text-xs text-slate-500">{item.length} {item.unit}</h6>
              </div>
              <div className="flex mt-2">
                {
                  item.desitination.map((item) =>
                    item.activities.map((activity: { id: number, name: string }) => (
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