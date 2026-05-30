export function RegisterSection() {
  return (
    <section id="register" className="py-[120px] px-4 sm:px-6" style={{ backgroundColor: "#FAFBFF" }}>
      <div className="max-w-lg mx-auto">
        <div className="border border-gray-200 rounded-2xl p-6 sm:p-10 bg-white shadow-sm text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#5dc47e] animate-pulse" />
            <span className="text-sm text-gray-400">Регистрация</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl text-gray-900 mb-2"
            style={{ letterSpacing: "-0.02em", fontWeight: 600, lineHeight: 1.15 }}
          >
            Зарегистрируйтесь на вебинар
          </h2>
          <p className="text-gray-400 text-sm mb-8">09.06.2026 · Онлайн · Бесплатно</p>

          <form
            className="flex flex-col gap-3"
            onSubmit={e => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#6ecc89] focus:ring-2 focus:ring-[#e6f7ed] transition"
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#6ecc89] focus:ring-2 focus:ring-[#e6f7ed] transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#6ecc89] focus:ring-2 focus:ring-[#e6f7ed] transition"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#49B76E] hover:bg-[#5dc47e] text-white font-medium rounded-lg text-sm transition-colors mt-1"
            >
              Забронировать место
            </button>
          </form>

          <p className="text-xs text-gray-400 mt-4">
            Отправляя форму, вы соглашаетесь на обработку персональных данных
          </p>
        </div>
      </div>
    </section>
  )
}