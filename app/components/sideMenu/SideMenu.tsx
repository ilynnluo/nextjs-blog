export default function SideMenu() {
  const ontariArea = [
    {
      id: 1,
      name: 'GTA'
    },
    {
      id: 2,
      name: '2H-GTA'
    }
  ]
  return <div className="px-2">
    <form action="submit">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            className="h-5 w-5 text-slate-400 fill-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </span>
        <input type="text" className=" placeholder:text-slate-400 font-medium block bg-white border border-slate-300 rounded-md 
        py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm"
          placeholder="Quick search" name="search"
        />
      </label>
    </form>
    <section className="pt-6">
      <h3 className="mb-3 text-base text-slate-600 font-semibold">Ontario</h3>
      <ul>
        {
          ontariArea.map((item) => (
            <li key={item.id} className="cursor: cursor-pointer">
              <button className="flex items-center my-3 h-5 ps-4 border-s border-slate-200 hover:border-slate-600 active:border-sky-500 focus:border-sky-500">
                <h6 className="text-sm text-slate-600 font-medium">{item.name}</h6>
              </button>
            </li>
          )
          )
        }

      </ul>
    </section>
  </div>
}