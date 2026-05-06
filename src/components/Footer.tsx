export function Footer() {
  const footerLinks: Record<string, { label: string; href: string }[]> = {
    "Мероприятие": [
      { label: "Программа", href: "#program" },
      { label: "Забронировать место", href: "#register" },
      { label: "Для кого", href: "#audience" },
    ],
    "Продукт": [
      { label: "Аналитика пациентов", href: "#product" },
      { label: "PDSA-модуль", href: "#product" },
      { label: "Когортный анализ", href: "#product" },
    ],
    "Контакты": [
      { label: "Telegram", href: "#" },
      { label: "Написать нам", href: "#" },
    ],
  }

  return (
    <footer className="border-t border-gray-200 py-12 px-6" style={{ backgroundColor: "#FAFBFF" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="text-gray-900 font-semibold text-sm">Future IT Dent</span>
            <p className="text-gray-400 text-xs mt-2 leading-relaxed">Аналитика и PDSA для стоматологических клиник</p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-gray-700 font-medium text-sm mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-gray-700 transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-gray-100 text-gray-400 text-xs">
          © 2026 Future IT Dent. Все права защищены.
        </div>
      </div>
    </footer>
  )
}