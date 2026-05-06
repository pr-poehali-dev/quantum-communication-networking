export function CTASection() {
  return (
    <section className="py-40 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="border border-zinc-800 rounded-2xl p-12 bg-zinc-900/30 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <span className="text-sm text-zinc-400">Регистрация</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[44px] text-white mb-6 mx-auto max-w-3xl"
            style={{
              letterSpacing: "-0.0325em",
              fontVariationSettings: '"opsz" 28',
              fontWeight: 538,
              lineHeight: 1.1,
            }}
          >
            Управлять клиникой без аналитики<br />значит управлять вслепую
          </h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto mb-2 leading-relaxed">
            Ощущения показывают, что «что-то не так». Данные показывают — где именно и почему.
          </p>
          <p className="text-zinc-500 text-sm mb-10">12 мая 2026 · 12:00 · Онлайн · Бесплатно</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 transition-colors text-sm">
              Зарегистрироваться
            </button>
            <button className="px-6 py-3 border border-zinc-700 text-zinc-300 font-medium rounded-lg hover:bg-zinc-800 transition-colors text-sm">
              Программа
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}