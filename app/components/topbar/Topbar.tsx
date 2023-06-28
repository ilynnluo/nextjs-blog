export default function Topbar() {
  return <header className="border-b-2 border-slate-200">
    <section className="flex justify-between max-w-7xl min-h-15 mx-auto py-4 px-2">
      <div className="text-lg">🗺️ Traveling</div>
      <div className="invisible sm:visible">contact</div>
      <div className="sm:hidden">menu</div>
    </section>
  </header>
}