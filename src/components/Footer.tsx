export function Footer() {
  const footerLinks = {
    "Продукт": ["Аналитика движения пациентов", "PDSA-модуль", "Когортный анализ", "Интеграция с МИС", "Интеграция с CRM"],
    "Мероприятие": ["Программа круглого стола", "Зарегистрироваться", "Формат: онлайн", "Длительность: 60–90 мин"],
    "Для кого": ["Владельцы клиник", "Управляющие", "Главные врачи", "Маркетологи"],
    "Контакты": ["Написать нам", "Telegram", "Поддержка"],
  }

  return (
    <footer className="border-t border-zinc-800 py-16 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-white font-semibold text-sm">Future IT Dent</span>
            <p className="text-zinc-600 text-xs mt-2 leading-relaxed">Аналитика и PDSA для стоматологических клиник</p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-medium text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-800/60 text-zinc-600 text-xs">
          © 2025 Future IT Dent. Все права защищены.
        </div>
      </div>
    </footer>
  )
}