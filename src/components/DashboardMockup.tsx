import { motion } from "framer-motion"

const months = ["МАРТ\n2024","АПРЕЛЬ\n2024","МАЙ\n2024","ИЮНЬ\n2024","ИЮЛЬ\n2024","АВГ\n2024","СЕНТ\n2024","ОКТ\n2024","НОЯ\n2024","ДЕК\n2024","ЯНВ\n2025","ФЕВ\n2025"]

const heatRow = [
  { v: 33, d: "+200%", hot: true },
  { v: 19, d: "+216%", hot: true },
  { v: 22, d: "+10%",  hot: false },
  { v: 34, d: "+100%", hot: true },
  { v: 31, d: "+93%",  hot: true },
  { v: 29, d: "+141%", hot: true },
  { v: 29, d: "+26%",  hot: false },
  { v: 44, d: "+158%", hot: true },
  { v: 42, d: "+110%", hot: true },
  { v: 47, d: "+123%", hot: true },
  { v: 37, d: "+76%",  hot: true },
  { v: 35, d: "+94%",  hot: true },
]

const convRow = [
  { v: "54%", hot: true }, { v: "31%", hot: false }, { v: "40%", neg: true },
  { v: "58%", hot: true }, { v: "74%", hot: true },  { v: "51%", hot: false },
  { v: "41%", hot: false }, { v: "43%", hot: false }, { v: "42%", hot: false },
  { v: "34%", hot: false }, { v: "35%", hot: false }, { v: "40%", hot: false },
]

const cohorts = [
  { label: "март 2024",    n: 33, pct: "+83%", rec: 18, rPct: "54%", months: [1,1,0,3,1,1,1,1,1,1,0] },
  { label: "апрель 2024",  n: 19, pct: "+42%", rec: 6,  rPct: "31%", months: [null,1,0,1,0,1,0,1,0,0,0] },
  { label: "май 2024",     n: 22, pct: "+15%", rec: 9,  rPct: "40%", months: [null,null,0,0,2,0,0,0,2,0,2] },
  { label: "июнь 2024",   n: 34, pct: "+54%", rec: 20, rPct: "58%", months: [null,null,null,2,1,1,4,3,2,0,0] },
  { label: "июль 2024",   n: 31, pct: "-8%",  rec: 23, rPct: "74%", months: [null,null,null,null,1,1,2,4,3,2,2] },
  { label: "август 2024", n: 29, pct: "-6%",  rec: 15, rPct: "51%", months: [null,null,null,null,null,3,1,2,2,3,0] },
  { label: "сентябрь 2024",n:29, pct: "0%",   rec: 12, rPct: "41%", months: [null,null,null,null,null,null,1,4,1,0,null] },
  { label: "октябрь 2024", n: 44, pct: "+51%", rec: 19, rPct: "43%", months: [null,null,null,null,null,null,null,1,1,0,3] },
  { label: "ноябрь 2024",  n: 42, pct: "+4%",  rec: 18, rPct: "42%", months: [null,null,null,null,null,null,null,null,4,2,1] },
  { label: "декабрь 2024", n: 47, pct: "+11%", rec: 16, rPct: "34%", months: [null,null,null,null,null,null,null,null,null,1,0] },
  { label: "январь 2025",  n: 37, pct: "-21%", rec: 13, rPct: "35%", months: [null,null,null,null,null,null,null,null,null,null,0] },
  { label: "февраль 2025", n: 35, pct: "-5%",  rec: 14, rPct: "40%", months: [] },
]

function HeatCell({ v, hot, neg }: { v?: number | string, hot?: boolean, neg?: boolean }) {
  if (v === undefined || v === null) return <td className="border border-white/5 w-16 min-w-[56px]" />
  const bg = neg ? "rgba(239,68,68,0.25)" : hot ? "rgba(34,197,94,0.22)" : "rgba(34,197,94,0.08)"
  const color = neg ? "#f87171" : hot ? "#86efac" : "#6b7280"
  return (
    <td className="border border-white/5 text-center py-1 w-16 min-w-[56px]" style={{ background: bg }}>
      <span className="text-[9px] font-medium" style={{ color }}>{v}</span>
    </td>
  )
}

export function DashboardMockup() {
  return (
    <motion.div
      className="w-full h-full flex overflow-hidden"
      style={{ background: "#fff", fontFamily: "Inter, sans-serif" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      {/* Sidebar */}
      <div className="flex-shrink-0 border-r flex flex-col" style={{ width: "160px", background: "#f8faf8", borderColor: "#e5e7eb" }}>
        {/* Logo */}
        <div className="flex items-center gap-2 px-3 py-3 border-b" style={{ borderColor: "#e5e7eb" }}>
          <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(34,197,94,0.15)" }}>
            <span style={{ color: "#16a34a", fontSize: "10px" }}>✦</span>
          </div>
          <span className="font-semibold text-xs" style={{ color: "#111" }}>Future IT Dent</span>
        </div>

        <div className="py-2">
          <div className="px-3 pt-2 pb-1">
            <span className="uppercase tracking-wider" style={{ fontSize: "8px", color: "#9ca3af" }}>Модули</span>
          </div>
          {["Карточка пациента","Календарь","Расписание врачей","Чат","Мои задачи","CRM"].map(item => (
            <div key={item} className="flex items-center gap-2 px-3 py-1.5 cursor-pointer" style={{ color: "#6b7280" }}>
              <div className="w-1 h-1 rounded-full" style={{ background: "#d1d5db" }} />
              <span style={{ fontSize: "9px" }}>{item}</span>
            </div>
          ))}
          <div className="px-3 pt-3 pb-1">
            <span className="uppercase tracking-wider" style={{ fontSize: "8px", color: "#9ca3af" }}>Аналитика</span>
          </div>
          {["Каналы","Общая"].map(item => (
            <div key={item} className="flex items-center gap-2 px-3 py-1.5 cursor-pointer" style={{ color: "#6b7280" }}>
              <div className="w-1 h-1 rounded-full" style={{ background: "#d1d5db" }} />
              <span style={{ fontSize: "9px" }}>{item}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md mx-1 cursor-pointer" style={{ background: "rgba(34,197,94,0.12)" }}>
            <div className="w-1 h-1 rounded-full" style={{ background: "#16a34a" }} />
            <span style={{ fontSize: "9px", color: "#16a34a", fontWeight: 600 }}>Цикличные</span>
          </div>
          {["ДМС","Финансы","Врачи","Администраторы"].map(item => (
            <div key={item} className="flex items-center gap-2 px-3 py-1.5 cursor-pointer" style={{ color: "#9ca3af" }}>
              <div className="w-1 h-1 rounded-full" style={{ background: "#e5e7eb" }} />
              <span style={{ fontSize: "9px" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden" style={{ background: "#fff" }}>
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-2 border-b flex-shrink-0" style={{ borderColor: "#e5e7eb" }}>
          <div className="flex items-center gap-3">
            <span style={{ fontSize: "10px", color: "#9ca3af" }}>🗓</span>
            <span style={{ fontSize: "10px", color: "#9ca3af" }}>💬</span>
            <span style={{ fontSize: "10px", color: "#9ca3af" }}>☑</span>
          </div>
          <div className="flex items-center gap-2">
            <span style={{ fontSize: "9px", color: "#6b7280" }}>Пушкино</span>
            <div className="w-5 h-5 rounded-full" style={{ background: "#22c55e" }} />
          </div>
        </div>

        {/* Content scroll */}
        <div className="flex-1 overflow-auto p-4" style={{ fontSize: "10px" }}>

          {/* Title */}
          <div className="text-base font-semibold mb-3" style={{ color: "#111" }}>Лояльные (Спящие)</div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span style={{ color: "#6b7280", fontSize: "9px" }}>‹ февраль ›</span>
              <span style={{ color: "#6b7280", fontSize: "9px" }}>‹ 2025 ›</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ background: "#dcfce7" }}>
                <div className="w-2 h-1 rounded-full" style={{ background: "#22c55e" }} />
                <span style={{ fontSize: "8px", color: "#16a34a" }}>Тепловая карта</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ background: "#dcfce7" }}>
                <div className="w-2 h-1 rounded-full" style={{ background: "#22c55e" }} />
                <span style={{ fontSize: "8px", color: "#16a34a" }}>Измерения (%)</span>
              </div>
              <div className="px-2 py-0.5 rounded border" style={{ borderColor: "#22c55e", color: "#16a34a", fontSize: "8px" }}>График</div>
              <div className="px-2 py-0.5 rounded" style={{ background: "#22c55e", color: "#fff", fontSize: "8px" }}>Когорта</div>
            </div>
          </div>

          {/* Heat table */}
          <div className="overflow-x-auto mb-5">
            <table className="border-collapse" style={{ borderColor: "#e5e7eb", width: "100%" }}>
              <thead>
                <tr>
                  <th className="text-left py-1 pr-3 border border-white/5 min-w-[90px]" style={{ fontSize: "8px", color: "#9ca3af", background: "#f9fafb" }}>ПОКАЗАТЕЛЬ</th>
                  {months.map(m => (
                    <th key={m} className="text-center py-1 border min-w-[52px]" style={{ fontSize: "7px", color: "#9ca3af", background: "#f9fafb", borderColor: "#e5e7eb", whiteSpace: "pre" }}>{m}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1 pr-3 border" style={{ fontSize: "8px", color: "#374151", borderColor: "#e5e7eb", paddingLeft: "4px" }}>Спящие</td>
                  {heatRow.map((c, i) => (
                    <td key={i} className="text-center py-1 border min-w-[52px]" style={{ background: c.hot ? "rgba(34,197,94,0.2)" : "rgba(34,197,94,0.06)", borderColor: "#e5e7eb" }}>
                      <div className="font-semibold" style={{ fontSize: "9px", color: "#111" }}>{c.v}</div>
                      <div style={{ fontSize: "7px", color: c.hot ? "#16a34a" : "#6b7280" }}>{c.d}</div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-1 pr-3 border" style={{ fontSize: "8px", color: "#374151", borderColor: "#e5e7eb", paddingLeft: "4px" }}>Записались</td>
                  {[18,6,9,20,23,15,12,19,18,16,13,14].map((v, i) => (
                    <td key={i} className="text-center py-1 border" style={{ background: i === 2 ? "rgba(239,68,68,0.15)" : "rgba(34,197,94,0.06)", borderColor: "#e5e7eb" }}>
                      <div className="font-semibold" style={{ fontSize: "9px", color: "#111" }}>{v}</div>
                      <div style={{ fontSize: "7px", color: i === 2 ? "#ef4444" : "#16a34a" }}>{i === 2 ? "-25%" : i === 0 ? "+350%" : "+90%"}</div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-1 pr-3 border" style={{ fontSize: "8px", color: "#2563eb", fontWeight: 600, borderColor: "#e5e7eb", paddingLeft: "4px" }}>% Конверсия</td>
                  {convRow.map((c, i) => (
                    <td key={i} className="text-center py-1 border" style={{ background: c.neg ? "rgba(239,68,68,0.15)" : "rgba(34,197,94,0.15)", borderColor: "#e5e7eb" }}>
                      <span style={{ fontSize: "9px", fontWeight: 600, color: c.neg ? "#ef4444" : "#16a34a" }}>{c.v}</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cohort title */}
          <div className="font-semibold mb-2" style={{ color: "#111", fontSize: "12px" }}>Когортный анализ</div>

          {/* Cohort table */}
          <div className="overflow-x-auto">
            <table className="border-collapse" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th className="text-left py-1 pr-2 border min-w-[90px]" style={{ fontSize: "7px", color: "#9ca3af", background: "#f9fafb", borderColor: "#e5e7eb", paddingLeft: "4px" }}>КОГОРТА</th>
                  <th className="text-center py-1 border min-w-[52px]" style={{ fontSize: "7px", color: "#9ca3af", background: "#f9fafb", borderColor: "#e5e7eb" }}>В РАБОТЕ</th>
                  <th className="text-center py-1 border min-w-[52px]" style={{ fontSize: "7px", color: "#9ca3af", background: "#f9fafb", borderColor: "#e5e7eb" }}>ЗАПИСАЛИСЬ</th>
                  {months.slice(0, 10).map(m => (
                    <th key={m} className="text-center py-1 border min-w-[44px]" style={{ fontSize: "7px", color: "#9ca3af", background: "#f9fafb", borderColor: "#e5e7eb", whiteSpace: "pre" }}>{m.split("\n")[0]}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cohorts.map((row) => (
                  <tr key={row.label}>
                    <td className="py-1 border" style={{ fontSize: "8px", color: "#374151", borderColor: "#e5e7eb", paddingLeft: "4px" }}>{row.label}</td>
                    <td className="text-center py-1 border" style={{ background: "rgba(59,130,246,0.15)", borderColor: "#e5e7eb" }}>
                      <div className="font-semibold" style={{ fontSize: "9px", color: "#1d4ed8" }}>{row.n}</div>
                      <div style={{ fontSize: "7px", color: row.pct.startsWith("-") ? "#ef4444" : "#16a34a" }}>{row.pct}</div>
                    </td>
                    <td className="text-center py-1 border" style={{ borderColor: "#e5e7eb" }}>
                      <div style={{ fontSize: "9px", color: "#374151" }}>{row.rec}</div>
                      <div style={{ fontSize: "7px", color: "#16a34a" }}>{row.rPct}</div>
                    </td>
                    {row.months.map((v, i) => (
                      <td key={i} className="text-center py-1 border" style={{
                        background: v === null ? "transparent" : v === 0 ? "rgba(239,68,68,0.1)" : "rgba(34,197,94,0.12)",
                        borderColor: "#e5e7eb"
                      }}>
                        {v !== null && <span style={{ fontSize: "9px", color: v === 0 ? "#ef4444" : "#16a34a" }}>{v}</span>}
                      </td>
                    ))}
                    {Array.from({ length: Math.max(0, 10 - row.months.length) }).map((_, i) => (
                      <td key={`empty-${i}`} className="border" style={{ borderColor: "#e5e7eb" }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
