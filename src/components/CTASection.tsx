export function CTASection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="border border-zinc-800 rounded-2xl p-12 bg-zinc-900/30 text-center">
          <p className="text-zinc-500 text-sm mb-4">12 мая · Онлайн · Бесплатно</p>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-white tracking-tight mb-4">
            Управлять клиникой без аналитики — значит управлять вслепую
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
            Ощущения показывают, что «что-то не так». Данные показывают — где именно и почему.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 transition-colors text-sm">
              Зарегистрироваться на круглый стол
            </button>
            <button className="px-5 py-3 border border-zinc-700 text-zinc-300 font-medium rounded-lg hover:bg-zinc-800 transition-colors text-sm">
              Узнать программу
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}