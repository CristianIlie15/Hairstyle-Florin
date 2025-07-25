import heroBG from "./assets/Hero/hero.jpg"

function App() {
  return (
<section className="relative w-full min-h-[600px] md:min-h-[720px] overflow-hidden flex items-center">
  {/* Background blur image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm md:blur-none z-0"
    style={{ backgroundImage: `url(${heroBG})` }}
  />

  {/* Content container */}
  <div className="relative z-10 w-full flex flex-col items-center justify-center text-center text-white p-6 md:w-1/2 md:ml-auto md:items-start md:text-left md:p-12">
    <h3 className="text-sm md:text-base uppercase tracking-widest mb-2">Subtitlu mic</h3>
    <h1 className="text-3xl md:text-5xl font-bold mb-4">Titlu Principal</h1>
    <ul className="space-y-2 mb-6 mt-3">
      <li>✂️ Primul punct</li>
      <li>✂️ Al doilea punct</li>
      <li>✂️ Al treilea punct</li>
      <li>✂️ Al patrulea punct</li>
    </ul>
    <button className="mt-6 bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition">
      Află mai mult
    </button>
  </div>
</section>

  )
}

export default App
