import { ChevronRight } from "lucide-react"

export function ProductDirectionSection() {
  return (
    <section className="relative py-[120px] px-6 md:px-12 lg:px-24" id="program">
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.015), transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-gray-400 text-sm">Программа мероприятия</span>
          <ChevronRight className="w-4 h-4 text-gray-300" />
        </div>

        <h2
          className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-gray-900 mb-8 max-w-3xl"
          style={{
            letterSpacing: "-0.0325em",
            fontVariationSettings: '"opsz" 28',
            fontWeight: 538,
            lineHeight: 1.1,
          }}
        >
          Что разберём на круглом столе
        </h2>

        <p className="text-gray-500 text-lg max-w-md mb-16">
          <span className="text-gray-900 font-medium">Без теории ради теории.</span> Только реальные сценарии: полный путь пациента, точки потери выручки, постановка гипотез и оценка результатов.
        </p>

        {/* Program steps — full-bleed 3D like Hero, hidden on mobile */}
        <div
          className="hidden sm:block"
          style={{
            width: "100vw",
            marginLeft: "calc(-50vw + 50%)",
            position: "relative",
            height: 680,
            marginBottom: 0,
            overflow: "hidden",
          }}
        >
          {/* fade bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
            style={{ height: 260, background: "linear-gradient(to top, #FAFBFF 25%, transparent 100%)" }}
          />

          {/* perspective container */}
          <div
            style={{
              contain: "strict",
              perspective: "4000px",
              perspectiveOrigin: "100% 0",
              width: "100%",
              height: "100%",
              transformStyle: "preserve-3d",
              position: "relative",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                transformOrigin: "0 0",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                border: "1px solid #e5e7eb",
                borderRadius: 10,
                boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                width: 1200,
                height: 640,
                margin: "220px auto auto",
                position: "absolute",
                top: 0, bottom: 0, left: 0, right: 0,
                transform: "translate(2%) scale(1.2) rotateX(47deg) rotateY(31deg) rotate(324deg)",
                transformStyle: "preserve-3d",
                overflow: "hidden",
              }}
            >
              {/* titlebar */}
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "12px 20px", borderBottom: "1px solid #f0f0f4", background: "#fafafa" }}>
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#fca5a5" }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#fde68a" }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#86efac" }} />
                <span style={{ marginLeft: 10, fontSize: 12, color: "#9ca3af", fontFamily: "Inter, sans-serif" }}>Программа вебинара · 09.06.2026</span>
              </div>

              {/* content */}
              <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", gap: 14, fontFamily: "Inter, sans-serif" }}>
                {[
                  { num: "01", title: "Полный путь пациента", desc: "Откуда пришёл, записался ли, дошёл ли, оплатил ли — сквозная воронка без пробелов", accent: "#3b82f6", time: "12:00" },
                  { num: "02", title: "Точки потери выручки", desc: "Где именно клиника теряет деньги: между обращением и записью, между записью и приёмом, после приёма", accent: "#6366f1", time: "12:20" },
                  { num: "03", title: "Постановка гипотез", desc: "Как сформулировать проверяемую гипотезу роста и не слить бюджет на изменения, которые не работают", accent: "#8b5cf6", time: "12:40" },
                  { num: "04", title: "Оценка результатов", desc: "PDSA-цикл в действии: как понять, сработало ли изменение, и принять решение о масштабировании", accent: "#22c55e", time: "13:00" },
                ].map((item, i) => (
                  <div
                    key={item.num}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 16,
                      padding: "18px 20px",
                      borderRadius: 10,
                      border: `1px solid ${i === 0 ? "#e0e7ff" : "#f0f0f4"}`,
                      background: i === 0 ? "#fafbff" : "#fff",
                      boxShadow: i === 0 ? "0 2px 16px rgba(99,102,241,0.08)" : "none",
                    }}
                  >
                    <div style={{ width: 3, borderRadius: 99, alignSelf: "stretch", flexShrink: 0, background: item.accent, minHeight: 48 }} />
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#d1d5db", flexShrink: 0, width: 28 }}>{item.num}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 6 }}>
                        <span style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{item.title}</span>
                        <span style={{ fontSize: 12, color: "#9ca3af", background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 999, padding: "2px 10px", flexShrink: 0 }}>~20 мин</span>
                      </div>
                      <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                    </div>
                    <div style={{ fontSize: 13, color: "#9ca3af", flexShrink: 0, fontVariantNumeric: "tabular-nums", paddingTop: 2 }}>{item.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Program steps — mobile list */}
        <div className="sm:hidden flex flex-col gap-3 mb-12">
          {[
            { num: "01", title: "Полный путь пациента", desc: "Откуда пришёл, записался ли, дошёл ли, оплатил ли — сквозная воронка без пробелов", accent: "#3b82f6", time: "12:00" },
            { num: "02", title: "Точки потери выручки", desc: "Где именно клиника теряет деньги: между обращением и записью, между записью и приёмом, после приёма", accent: "#6366f1", time: "12:20" },
            { num: "03", title: "Постановка гипотез", desc: "Как сформулировать проверяемую гипотезу роста и не слить бюджет на изменения, которые не работают", accent: "#8b5cf6", time: "12:40" },
            { num: "04", title: "Оценка результатов", desc: "PDSA-цикл в действии: как понять, сработало ли изменение, и принять решение о масштабировании", accent: "#22c55e", time: "13:00" },
          ].map((item, i) => (
            <div key={item.num} className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white px-4 py-4" style={{ borderLeftColor: item.accent, borderLeftWidth: 3 }}>
              <span className="text-sm font-bold text-gray-300 flex-shrink-0 w-6">{item.num}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-sm font-semibold text-gray-900">{item.title}</span>
                  <span className="text-xs text-gray-400 flex-shrink-0">{item.time}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom two-column section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left column - Manage projects end-to-end */}
          <div className="border-t md:border-r border-b border-gray-200 pt-8 md:pt-10 pr-0 md:pr-10 pb-10 md:pb-16">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Аналитика движения пациентов</h3>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Разделите пациентов на группы и управляйте каждой: первичные, повторные, лояльные, ДМС.
            </p>

            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h4 className="text-lg font-medium text-gray-800 mb-5">Сегменты пациентов</h4>
              {[
                { label: "Первичные", color: "bg-blue-500", pct: "34%" },
                { label: "Повторные", color: "bg-[#5dc47e]", pct: "41%" },
                { label: "Лояльные", color: "bg-green-500", pct: "18%" },
                { label: "ДМС", color: "bg-yellow-500", pct: "7%" },
              ].map((seg) => (
                <div key={seg.label} className="flex items-center gap-4 mb-3">
                  <span className="text-gray-400 text-sm w-24">{seg.label}</span>
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${seg.color}`} style={{ width: seg.pct }} />
                  </div>
                  <span className="text-gray-500 text-sm w-8 text-right">{seg.pct}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-b border-gray-200 pt-8 md:pt-10 pl-0 md:pl-10 pb-10 md:pb-16">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Когортный анализ</h3>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Анализируйте поведение пациентов во времени: когда пришли, оплатили, вернулись.
            </p>

            <div className="relative h-48">
              <div
                className="absolute rounded-lg bg-gray-100/60 border border-gray-200 px-4 py-2"
                style={{ top: 0, left: "10%", width: "80%" }}
              >
                <span className="flex items-center gap-2 text-gray-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  Когорта янв — не вернулись через 6 мес
                </span>
              </div>
              <div
                className="absolute rounded-lg bg-gray-100/80 border border-gray-200 px-4 py-2"
                style={{ top: "30px", left: "5%", width: "85%" }}
              >
                <span className="flex items-center gap-2 text-gray-500 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  Когорта фев — 40% вернулись
                </span>
              </div>
              <div
                className="absolute rounded-xl bg-white border border-gray-200 shadow-sm px-5 py-4"
                style={{ top: "60px", left: 0, width: "95%" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-500" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                    </svg>
                  </span>
                  <span className="text-green-600 font-medium text-sm">Когорта март — 68% вернулись</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">Что изменили: скрипты администраторов + напоминания</p>
                <span className="text-gray-400 text-xs">PDSA подтвердил гипотезу</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200">
          <div className="border-r border-gray-200 pt-16 pr-10 pb-16 flex flex-col justify-center">
            <h3 className="text-2xl font-medium text-gray-900 mb-8 leading-tight">
              Где клиника<br />теряет выручку
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-red-500" />
                <span className="text-gray-800 font-medium">Есть обращение — нет записи</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-orange-500/80" />
                <span className="text-gray-500">Есть запись — пациент не дошёл</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-yellow-500/70" />
                <span className="text-gray-500">Был приём — нет оплаты</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-purple-500/60" />
                <span className="text-gray-400">Есть план лечения — нет возврата</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-gray-300" />
                <span className="text-gray-400">Пациент «выпал» через 6 месяцев</span>
              </div>
            </div>
          </div>

          <div className="pt-8 md:pt-10 pl-0 md:pl-10 pb-10 md:pb-16 flex justify-center md:block">
            <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm w-full max-w-sm md:max-w-none">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 text-gray-500 text-sm">
                <span className="w-2 h-2 rounded-full bg-[#6ecc89]" />
                <span>PDSA Future IT Dent</span>
                <span className="ml-auto text-gray-400">Гипотеза #7</span>
              </div>
              <div className="p-5">
                <div className="mb-4">
                  <span className="text-xs text-gray-400">Гипотеза</span>
                  <p className="text-gray-800 text-sm font-medium mt-1">Напоминания за 2 дня до приёма снизят неявки</p>
                </div>
                {[
                  { step: "Plan", label: "Запустить напоминания в мае", color: "bg-blue-500", done: true },
                  { step: "Do", label: "Внедрено для 120 пациентов", color: "bg-[#5dc47e]", done: true },
                  { step: "Study", label: "Неявки: было 23% → стало 11%", color: "bg-green-500", done: true },
                  { step: "Act", label: "Масштабировать на всю клинику", color: "bg-orange-500", done: false },
                ].map((row) => (
                  <div key={row.step} className="flex items-start gap-3 mb-3">
                    <div className={`rounded-full ${row.color} flex-shrink-0 self-stretch min-h-[4px]`} style={{ width: "3px" }} />
                    <div>
                      <span className={`text-xs font-medium ${row.done ? "text-gray-700" : "text-gray-400"}`}>{row.step}</span>
                      <p className={`text-xs mt-0.5 ${row.done ? "text-gray-500" : "text-gray-300"}`}>{row.label}</p>
                    </div>
                  </div>
                ))}
                <div className="flex flex-col gap-2 mt-6">
                  <div className="flex gap-2 flex-wrap">
                    <div className="h-2 bg-[#c2ecd1] rounded w-20" />
                    <div className="h-2 bg-gray-100 rounded w-16" />
                    <div className="h-2 bg-gray-100 rounded w-24" />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <div className="h-2 bg-gray-100 rounded w-16" />
                    <div className="h-2 bg-green-100 rounded w-20" />
                    <div className="h-2 bg-gray-100 rounded w-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#6ecc89]" />
              <span className="text-gray-800 font-medium">Первичные</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">Откуда пришли, записались ли, дошли ли до приёма.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-gray-800 font-medium">Повторные</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">Вернулись ли, когда и что повлияло на возврат.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-gray-800 font-medium">Лояльные</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">Основная доходность — кто приносит больше всего.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="text-gray-800 font-medium">ДМС</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">Сравнение маржинальности с другими сегментами.</p>
          </div>
        </div>
      </div>
    </section>
  )
}