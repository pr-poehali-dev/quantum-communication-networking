import { motion } from "framer-motion"

export function ProductScreenshot() {
  const doctors = [
    { name: "Баранов Евгений", short: "БАРАНОВ Е.А.", pct: 0, slots: [] },
    { name: "Бобров Илья Иванович", short: "БОБРОВ И.И.", pct: 48, highlight: true, slots: [
      { time: "10:30–12:30", name: "Куксилина Бронислава К.", color: "bg-purple-500/80" },
      { time: "16:00–18:00", name: "Уткин Арсен Алиевич", color: "bg-green-500/80" },
    ]},
    { name: "Вайцеховская Дарья В.", short: "ВАЙЦЕХОВСКАЯ Д.В.", pct: 48, slots: [
      { time: "09:00–10:30", name: "Широкова Ефросиния Р.", color: "bg-blue-500/80" },
      { time: "11:00–12:00", name: "Канадина Раиса А.", color: "bg-blue-500/80" },
      { time: "12:30–13:30", name: "Канадина Раиса А.", color: "bg-blue-500/80" },
      { time: "13:30–15:45", name: "Типалова Камилла В.", color: "bg-blue-500/80" },
    ]},
    { name: "Гавриков Владислав А.", short: "ГАВРИКОВ В.А.", pct: 56, slots: [
      { time: "10:00–11:00", name: "Ситникова Нелли В.", color: "bg-red-500/80" },
      { time: "11:30–13:30", name: "Киселева Жасмин С.", color: "bg-red-500/80" },
      { time: "14:30–16:00", name: "Степанишин Кондрат С.", color: "bg-green-500/80" },
    ]},
    { name: "Калицина Снежана Ю.", short: "", pct: 0, slots: [] },
    { name: "Кузнецов Алексей М.", short: "", pct: 0, slots: [] },
    { name: "Ликина Ольга Н.", short: "ЛИКИНА О.Н.", pct: 7, slots: [
      { time: "08:30–10:15", name: "Грибакин Осип А.", color: "bg-emerald-500/80" },
      { time: "11:00–13:00", name: "Махнер Наум А.", color: "bg-yellow-500/80" },
      { time: "13:00–14:15", name: "Янкелевич Ян Даниилович", color: "bg-emerald-500/80" },
      { time: "14:30–16:00", name: "Шалупов Евграф Данисович", color: "bg-emerald-500/80" },
      { time: "17:00–19:00", name: "Дуболазов Никанор Ф.", color: "bg-emerald-500/80" },
    ]},
  ]

  const times = ["08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00"]

  return (
    <div className="relative z-20 py-8" style={{ backgroundColor: "#09090B" }}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto px-6"
        style={{ maxWidth: "1200px" }}
      >
        {/* Glow behind */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "10%", left: "50%",
            transform: "translateX(-50%)",
            width: "800px", height: "400px",
            background: "radial-gradient(ellipse at center, rgba(99,102,241,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Browser chrome */}
        <div
          className="relative overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ background: "#141414", borderColor: "rgba(255,255,255,0.06)" }}
          >
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <div
              className="flex-1 mx-4 rounded-md px-3 py-1 text-xs text-zinc-600 text-center"
              style={{ background: "#1a1a1a", maxWidth: "300px", margin: "0 auto" }}
            >
              app.futuredent.ru
            </div>
          </div>

          {/* App layout */}
          <div className="flex" style={{ background: "#0f1510", minHeight: "480px" }}>

            {/* Sidebar */}
            <div
              className="flex-shrink-0 border-r"
              style={{ width: "160px", background: "#0d120e", borderColor: "rgba(255,255,255,0.05)" }}
            >
              {/* Logo */}
              <div className="flex items-center gap-2 px-3 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 text-[10px]">✦</span>
                </div>
                <span className="text-white text-xs font-semibold">Future IT Dent</span>
              </div>

              {/* Nav items */}
              <div className="py-2">
                <div className="px-2 pt-2 pb-1">
                  <span className="text-[9px] text-zinc-600 uppercase tracking-wider px-2">Модули</span>
                </div>
                {["Карточка пациента","Календарь","Расписание врачей"].map((item) => (
                  <div key={item} className="flex items-center gap-2 px-3 py-1.5 text-zinc-500 hover:text-zinc-300 cursor-pointer">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                    <span className="text-[10px]">{item}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md mx-1 cursor-pointer" style={{ background: "rgba(34,197,94,0.12)" }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-[10px] text-green-400 font-medium">Новый календарь</span>
                </div>
                {["Чат","Мои задачи","CRM","Аналитика","Отчёты","Бюджет","Сотрудники"].map((item) => (
                  <div key={item} className="flex items-center gap-2 px-3 py-1.5 text-zinc-600 cursor-pointer">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                    <span className="text-[10px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Top bar */}
              <div
                className="flex items-center justify-between px-4 py-2 border-b flex-shrink-0"
                style={{ background: "#0d120e", borderColor: "rgba(255,255,255,0.05)" }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-zinc-500">Обзор</span>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-md" style={{ background: "rgba(34,197,94,0.15)" }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-[10px] text-green-400 font-medium">Филиал №1</span>
                  </div>
                  <span className="text-xs text-zinc-500">События</span>
                </div>
                <span className="text-[10px] text-zinc-600">четверг, 19 марта 2026</span>
              </div>

              {/* Calendar header */}
              <div
                className="flex items-center justify-between px-4 py-3 border-b flex-shrink-0"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <div>
                  <div className="text-lg font-semibold text-white">Филиал №1</div>
                  <div className="text-[10px] text-zinc-500">четверг, 19 марта 2026</div>
                </div>
                <div className="flex items-center gap-2">
                  {["День","Неделя","Поток"].map((v, i) => (
                    <div
                      key={v}
                      className="px-2 py-1 rounded text-[10px] cursor-pointer"
                      style={i === 0 ? { background: "rgba(255,255,255,0.08)", color: "#fff" } : { color: "#71717a" }}
                    >
                      {v}
                    </div>
                  ))}
                  <div className="flex items-center gap-1 px-2 py-1 rounded text-[10px]" style={{ background: "rgba(34,197,94,0.15)", color: "#4ade80" }}>
                    <span>▼</span> Фильтры
                  </div>
                  <div
                    className="flex items-center gap-1 px-3 py-1 rounded text-[10px] font-medium cursor-pointer"
                    style={{ background: "#22c55e", color: "#fff" }}
                  >
                    + Новая запись
                  </div>
                </div>
              </div>

              {/* Calendar grid */}
              <div className="flex flex-1 overflow-hidden">
                {/* Time column */}
                <div className="flex-shrink-0 border-r" style={{ width: "48px", borderColor: "rgba(255,255,255,0.05)" }}>
                  <div className="h-8 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }} />
                  {times.map((t) => (
                    <div key={t} className="h-7 flex items-start justify-end pr-2 pt-0.5">
                      <span className="text-[9px] text-zinc-700">{t}</span>
                    </div>
                  ))}
                </div>

                {/* Doctor columns */}
                <div className="flex flex-1 overflow-x-auto">
                  {doctors.map((doc) => (
                    <div
                      key={doc.name}
                      className="flex-shrink-0 border-r flex flex-col"
                      style={{ minWidth: "120px", borderColor: "rgba(255,255,255,0.04)" }}
                    >
                      {/* Doctor header */}
                      <div
                        className="h-8 border-b px-2 flex flex-col justify-center"
                        style={{ borderColor: "rgba(255,255,255,0.05)" }}
                      >
                        <div className="text-[9px] text-zinc-300 font-medium leading-tight truncate">{doc.name}</div>
                        {doc.pct > 0 && (
                          <div className="flex items-center gap-1 mt-0.5">
                            <div className="h-0.5 rounded-full flex-1 bg-zinc-800">
                              <div
                                className="h-full rounded-full bg-green-500"
                                style={{ width: `${doc.pct}%` }}
                              />
                            </div>
                            <span className="text-[8px] text-zinc-600">{doc.pct}%</span>
                          </div>
                        )}
                      </div>

                      {/* Slots */}
                      <div className="flex-1 relative" style={{ minHeight: `${times.length * 28}px` }}>
                        {doc.slots.length === 0 ? (
                          <div className="flex items-center justify-center h-full">
                            <span className="text-[9px] text-zinc-700">Нет событий</span>
                          </div>
                        ) : (
                          doc.slots.map((slot, i) => (
                            <div
                              key={i}
                              className={`absolute left-1 right-1 rounded px-1 py-0.5 ${slot.color} bg-opacity-20`}
                              style={{
                                top: `${28 + i * 56}px`,
                                height: "52px",
                                border: `1px solid ${slot.color.replace("bg-", "").replace("/80","")}-500`,
                                borderColor: "rgba(255,255,255,0.1)",
                              }}
                            >
                              <div className="text-[8px] text-white/80 font-medium leading-tight">{slot.time}</div>
                              <div className="text-[8px] text-white/60 leading-tight mt-0.5 line-clamp-2">{slot.name}</div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to top, #09090B 20%, transparent 100%)" }}
          />
        </div>
      </motion.div>
    </div>
  )
}
