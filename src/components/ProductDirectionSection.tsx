import { ChevronRight } from "lucide-react"

export function ProductDirectionSection() {
  return (
    <section className="relative py-40 px-6 md:px-12 lg:px-24" id="program">
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-zinc-400 text-sm">Программа мероприятия</span>
          <ChevronRight className="w-4 h-4 text-zinc-500" />
        </div>

        <h2
          className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-white mb-8 max-w-3xl"
          style={{
            letterSpacing: "-0.0325em",
            fontVariationSettings: '"opsz" 28',
            fontWeight: 538,
            lineHeight: 1.1,
          }}
        >
          Что разберём на круглом столе
        </h2>

        <p className="text-zinc-400 text-lg max-w-md mb-16">
          <span className="text-white font-medium">Без теории ради теории.</span> Только реальные сценарии: полный путь пациента, точки потери выручки, постановка гипотез и оценка результатов.
        </p>

        {/* 3D Timeline Visualization */}
        <div
          className="relative w-full mb-16"
          style={{
            perspective: "1200px",
          }}
        >
          <div
            className="relative"
            style={{
              transform: "rotateX(50deg) rotateZ(-35deg)",
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
          >
            {/* Timeline ruler with tick marks */}
            <div className="relative h-[400px]">
              {/* Diagonal dashed line */}
              <div
                className="absolute w-[1px] bg-zinc-600/50"
                style={{
                  height: "600px",
                  left: "55%",
                  top: "-100px",
                  transform: "rotate(0deg)",
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent, transparent 4px, rgba(113, 113, 122, 0.5) 4px, rgba(113, 113, 122, 0.5) 8px)",
                }}
              />

              {/* Timeline header with dates and tick marks */}
              <div className="absolute top-0 left-0 right-0 flex items-end">
                {/* Tick marks row */}
                <div className="flex items-end gap-[3px] absolute bottom-0 left-[5%] right-0">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-zinc-600/60"
                      style={{
                        width: "1px",
                        height: i % 7 === 0 ? "16px" : "8px",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Date labels */}
              <div className="absolute text-zinc-500 text-sm" style={{ left: "8%", top: "80px" }}>
                30
              </div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "18%", top: "55px" }}>
                3 АВГ
              </div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "32%", top: "35px" }}>
                10
              </div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "48%", top: "15px" }}>
                17
              </div>
              <div
                className="absolute px-3 py-1 rounded-md bg-zinc-700/80 text-zinc-300 text-sm font-medium"
                style={{ left: "58%", top: "-10px" }}
              >
                22 АВГ
              </div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "70%", top: "-5px" }}>
                24
              </div>
              <div className="absolute text-zinc-500/50 text-sm" style={{ left: "88%", top: "-25px" }}>
                СЕН
              </div>

              {/* Project bars */}
              {/* Realtime inference bar */}
              <div
                className="absolute rounded-lg bg-zinc-800/90 border border-zinc-700/50 px-4 py-3 flex items-center gap-3"
                style={{
                  left: "5%",
                  top: "100px",
                  width: "45%",
                  height: "48px",
                }}
              >
                <div className="w-4 h-4 rotate-45 bg-zinc-500/60" />
                <span className="text-zinc-300 text-sm font-medium">Инференс в реальном времени</span>
                <div
                  className="absolute w-5 h-5 rotate-45 border-2 border-green-500 bg-transparent"
                  style={{ right: "15%", top: "50%", transform: "translateY(-50%) rotate(45deg)" }}
                />
              </div>

              {/* Prototype bar */}
              <div
                className="absolute rounded-lg bg-zinc-800/70 border border-zinc-700/40 px-4 py-3 flex items-center gap-3"
                style={{
                  left: "15%",
                  top: "155px",
                  width: "25%",
                  height: "44px",
                }}
              >
                <div className="w-3 h-3 rotate-45 bg-zinc-600/60" />
                <span className="text-zinc-500 text-sm">Прототип</span>
              </div>

              {/* Beta bar */}
              <div
                className="absolute rounded-lg bg-zinc-800/90 border border-zinc-700/50 px-4 py-3 flex items-center justify-between"
                style={{
                  left: "45%",
                  top: "155px",
                  width: "45%",
                  height: "48px",
                }}
              >
                <span className="text-zinc-400 text-sm">Бета</span>
                <div className="flex gap-0.5">
                  <div className="w-2.5 h-2.5 rotate-45 bg-zinc-500/60" />
                  <div className="w-2.5 h-2.5 rotate-45 bg-zinc-500/60" />
                  <div className="w-2.5 h-2.5 rotate-45 bg-zinc-500/60" />
                </div>
              </div>

              {/* RLHF fine tuning bar */}
              <div
                className="absolute rounded-lg bg-zinc-800/70 border border-zinc-700/40 px-4 py-3 flex items-center justify-between"
                style={{
                  left: "35%",
                  top: "240px",
                  width: "28%",
                  height: "48px",
                }}
              >
                <span className="text-zinc-400 text-sm">RLHF-дообучение</span>
                <div className="flex gap-0.5">
                  <div className="w-2.5 h-2.5 rotate-45 bg-zinc-500/60" />
                  <div className="w-2.5 h-2.5 rotate-45 bg-zinc-500/60" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom two-column section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left column - Manage projects end-to-end */}
          <div className="border-t border-r border-b border-zinc-800 pt-10 pr-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">Аналитика движения пациентов</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Разделите пациентов на группы и управляйте каждой: первичные, повторные, лояльные, ДМС.
            </p>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
              <h4 className="text-lg font-medium text-zinc-200 mb-5">Сегменты пациентов</h4>
              {[
                { label: "Первичные", color: "bg-blue-500", pct: "34%" },
                { label: "Повторные", color: "bg-indigo-500", pct: "41%" },
                { label: "Лояльные", color: "bg-green-500", pct: "18%" },
                { label: "ДМС", color: "bg-yellow-500", pct: "7%" },
              ].map((seg) => (
                <div key={seg.label} className="flex items-center gap-4 mb-3">
                  <span className="text-zinc-500 text-sm w-24">{seg.label}</span>
                  <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${seg.color}`} style={{ width: seg.pct }} />
                  </div>
                  <span className="text-zinc-400 text-sm w-8 text-right">{seg.pct}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-b border-zinc-800 pt-10 pl-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">Когортный анализ</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Анализируйте поведение пациентов во времени: когда пришли, оплатили, вернулись.
            </p>

            <div className="relative h-48">
              <div
                className="absolute rounded-lg bg-zinc-800/40 border border-zinc-700/30 px-4 py-2"
                style={{ top: 0, left: "10%", width: "80%" }}
              >
                <span className="flex items-center gap-2 text-zinc-500 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  Когорта янв — не вернулись через 6 мес
                </span>
              </div>
              <div
                className="absolute rounded-lg bg-zinc-800/60 border border-zinc-700/40 px-4 py-2"
                style={{ top: "30px", left: "5%", width: "85%" }}
              >
                <span className="flex items-center gap-2 text-zinc-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  Когорта фев — 40% вернулись
                </span>
              </div>
              <div
                className="absolute rounded-xl bg-zinc-800/90 border border-zinc-700/50 px-5 py-4"
                style={{ top: "60px", left: 0, width: "95%" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-500" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                    </svg>
                  </span>
                  <span className="text-green-500 font-medium text-sm">Когорта март — 68% вернулись</span>
                </div>
                <p className="text-zinc-300 text-sm mb-3">Что изменили: скрипты администраторов + напоминания</p>
                <span className="text-zinc-500 text-xs">PDSA подтвердил гипотезу</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-zinc-800">
          {/* Left column - Feature list */}
          <div className="border-r border-zinc-800 pt-16 pr-10 pb-16 flex flex-col justify-center">
            <h3 className="text-2xl font-medium text-zinc-200 mb-8 leading-tight">
              Где клиника
              <br />
              теряет выручку
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-red-500" />
                <span className="text-zinc-200 font-medium">Есть обращение — нет записи</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-orange-500/80" />
                <span className="text-zinc-400">Есть запись — пациент не дошёл</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-yellow-500/70" />
                <span className="text-zinc-400">Был приём — нет оплаты</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-purple-500/60" />
                <span className="text-zinc-500">Есть план лечения — нет возврата</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-zinc-500/40" />
                <span className="text-zinc-500">Пациент «выпал» через 6 месяцев</span>
              </div>
            </div>
          </div>

          {/* Right column - PDSA mockup */}
          <div className="pt-10 pl-10 pb-16">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 text-zinc-400 text-sm">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span>PDSA Future IT Dent</span>
                <span className="ml-auto text-zinc-600">Гипотеза #7</span>
              </div>

              <div className="p-5">
                <div className="mb-4">
                  <span className="text-xs text-zinc-500">Гипотеза</span>
                  <p className="text-zinc-200 text-sm font-medium mt-1">Напоминания за 2 дня до приёма снизят неявки</p>
                </div>

                {[
                  { step: "Plan", label: "Запустить напоминания в мае", color: "bg-blue-500", done: true },
                  { step: "Do", label: "Внедрено для 120 пациентов", color: "bg-indigo-500", done: true },
                  { step: "Study", label: "Неявки: было 23% → стало 11%", color: "bg-green-500", done: true },
                  { step: "Act", label: "Масштабировать на всю клинику", color: "bg-orange-500", done: false },
                ].map((row) => (
                  <div key={row.step} className="flex items-start gap-3 mb-3">
                    <div className={`w-1 h-full rounded-full ${row.color} flex-shrink-0 self-stretch min-h-[4px]`} style={{ width: "3px" }} />
                    <div>
                      <span className={`text-xs font-medium ${row.done ? "text-zinc-300" : "text-zinc-500"}`}>{row.step}</span>
                      <p className={`text-xs mt-0.5 ${row.done ? "text-zinc-400" : "text-zinc-600"}`}>{row.label}</p>
                    </div>
                  </div>
                ))}

                <div className="flex flex-col gap-2 mt-6">
                  <div className="flex gap-2 flex-wrap">
                    <div className="h-2 bg-indigo-500/30 rounded w-20" />
                    <div className="h-2 bg-zinc-700/30 rounded w-16" />
                    <div className="h-2 bg-zinc-700/50 rounded w-24" />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <div className="h-2 bg-zinc-700/30 rounded w-16" />
                    <div className="h-2 bg-green-500/30 rounded w-20" />
                    <div className="h-2 bg-zinc-700/50 rounded w-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span className="text-zinc-200 font-medium">Первичные</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Откуда пришли, записались ли, дошли ли до приёма.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-zinc-200 font-medium">Повторные</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Вернулись ли, когда и что повлияло на возврат.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-zinc-200 font-medium">Лояльные</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Основная доходность — кто приносит больше всего.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="text-zinc-200 font-medium">ДМС</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Сравнение маржинальности с другими сегментами.</p>
          </div>
        </div>
      </div>
    </section>
  )
}