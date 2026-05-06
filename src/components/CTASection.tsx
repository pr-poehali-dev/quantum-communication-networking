export function CTASection() {
  return (
    <section className="py-[120px] px-6" style={{ backgroundColor: "#FAFBFF" }}>
      <div className="max-w-6xl mx-auto">
        <div className="border border-gray-200 rounded-2xl p-6 sm:p-12 bg-white text-center shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#5dc47e]" />
            <span className="text-sm text-gray-400">Регистрация</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-[44px] text-gray-900 mb-4 sm:mb-6 mx-auto max-w-3xl"
            style={{
              letterSpacing: "-0.0325em",
              fontVariationSettings: '"opsz" 28',
              fontWeight: 538,
              lineHeight: 1.1,
            }}
          >
            Управлять клиникой без аналитики<br />значит управлять вслепую
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto mb-2 leading-relaxed">
            Ощущения показывают, что «что-то не так». Данные показывают — где именно и почему.
          </p>
          <p className="text-gray-400 text-sm mb-10">19 мая 2026 · 12:00 · Онлайн · Бесплатно</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button className="px-6 py-3 bg-[#49B76E] text-white font-medium rounded-lg hover:bg-[#5dc47e] transition-colors text-sm">
              Забронировать место
            </button>
            <button className="px-6 py-3 border border-gray-200 text-gray-600 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm">
              Программа
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}