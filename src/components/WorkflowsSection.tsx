import { useState } from "react"
import { ChevronRight } from "lucide-react"

const carouselCards = [
  { id: 1, category: "Владельцы клиник", title: "Видеть не только итоговую выручку, но и путь к ней", mockup: "owner" },
  { id: 2, category: "Управляющие", title: "Контролировать процессы через данные, а не вручную", mockup: "manager" },
  { id: 3, category: "Маркетологи", title: "Понимать, какие каналы приносят деньги, а не заявки", mockup: "marketer" },
  { id: 4, category: "Главные врачи", title: "Видеть влияние лечения и рекомендаций на выручку", mockup: "doctor" },
]

function OwnerMockup() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="text-xs text-gray-400 mb-1">Выручка клиники — июнь</div>
      {[
        { label: "Первичные", val: "₽ 1 240 000", up: true },
        { label: "Повторные", val: "₽ 3 870 000", up: true },
        { label: "Лояльные", val: "₽ 2 100 000", up: false },
      ].map((row) => (
        <div key={row.label} className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-lg px-3 py-2">
          <span className="text-xs text-gray-500">{row.label}</span>
          <span className={`text-xs font-semibold ${row.up ? "text-green-600" : "text-gray-700"}`}>{row.val}</span>
        </div>
      ))}
    </div>
  )
}

function ManagerMockup() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="text-xs text-gray-400 mb-1">Точки потерь — этот месяц</div>
      {[
        { label: "Нет записи после звонка", pct: 23, color: "bg-red-400" },
        { label: "Не дошли до приёма", pct: 14, color: "bg-orange-400" },
        { label: "Нет возврата 6 мес+", pct: 38, color: "bg-yellow-400" },
      ].map((row) => (
        <div key={row.label} className="flex items-center gap-3">
          <span className="text-xs text-gray-500 w-36 flex-shrink-0">{row.label}</span>
          <div className="flex-1 h-1.5 bg-gray-100 rounded-full">
            <div className={`h-full rounded-full ${row.color}`} style={{ width: `${row.pct * 2}%` }} />
          </div>
          <span className="text-xs text-gray-400">{row.pct}%</span>
        </div>
      ))}
    </div>
  )
}

function MarketerMockup() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="text-xs text-gray-400 mb-1">Каналы → Выручка</div>
      {[
        { label: "Контекст", leads: 84, revenue: "₽ 420k" },
        { label: "Соцсети", leads: 210, revenue: "₽ 190k" },
        { label: "Сарафан", leads: 41, revenue: "₽ 680k" },
      ].map((row) => (
        <div key={row.label} className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-lg px-3 py-2">
          <span className="text-xs text-gray-500">{row.label}</span>
          <span className="text-xs text-gray-400">{row.leads} заявок</span>
          <span className="text-xs font-semibold text-indigo-600">{row.revenue}</span>
        </div>
      ))}
    </div>
  )
}

function DoctorMockup() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="text-xs text-gray-400 mb-1">Рекомендации → Возврат</div>
      <div className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-3">
        <div className="text-xs text-gray-700 font-medium mb-2">Гигиена каждые 6 мес</div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-gray-200 rounded-full">
            <div className="h-full rounded-full bg-green-500" style={{ width: "72%" }} />
          </div>
          <span className="text-xs text-green-600 font-medium">72%</span>
        </div>
      </div>
      <div className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-3">
        <div className="text-xs text-gray-700 font-medium mb-2">Без рекомендации</div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-gray-200 rounded-full">
            <div className="h-full rounded-full bg-red-400" style={{ width: "21%" }} />
          </div>
          <span className="text-xs text-red-500 font-medium">21%</span>
        </div>
      </div>
    </div>
  )
}

function CardMockup({ type }: { type: string }) {
  switch (type) {
    case "owner": return <OwnerMockup />
    case "manager": return <ManagerMockup />
    case "marketer": return <MarketerMockup />
    case "doctor": return <DoctorMockup />
    default: return null
  }
}

export function WorkflowsSection() {
  const [scrollPosition, setScrollPosition] = useState(0)

  return (
    <section className="relative py-[120px]" style={{ backgroundColor: "#FAFBFF" }}>
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: "20%", background: "linear-gradient(to bottom, rgba(0,0,0,0.015), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="lg:max-w-xl">
            <div className="flex items-center gap-2 mb-6" id="audience">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-sm text-gray-400">Для кого</span>
              <ChevronRight className="w-4 h-4 text-gray-300" />
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] text-gray-900 max-w-md"
              style={{ letterSpacing: "-0.0325em", fontVariationSettings: '"opsz" 28', fontWeight: 538, lineHeight: 1.1 }}
            >
              Кому подойдёт круглый стол
            </h2>
          </div>
          <p className="text-gray-500 lg:max-w-md lg:pt-12 leading-relaxed">
            Мероприятие создано для руководителей и специалистов стоматологических клиник, которые хотят управлять через данные.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${scrollPosition * (100 / 4)}%)` }}
          >
            {carouselCards.map((card) => (
              <div key={card.id} className="flex-shrink-0 w-[calc(25%-12px)] min-w-[280px]">
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden h-[300px] flex flex-col shadow-sm">
                  <div className="flex-1 relative overflow-hidden">
                    <CardMockup type={card.mockup} />
                    <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(255,255,255,0.98), transparent)" }} />
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400 mb-1">{card.category}</p>
                    <p className="text-sm text-gray-800 leading-snug">{card.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
