import { motion } from "framer-motion"

const months = ["МАРТ\n2024","АПРЕЛЬ\n2024","МАЙ\n2024","ИЮНЬ\n2024","ИЮЛЬ\n2024","АВГ\n2024","СЕНТ\n2024","ОКТ\n2024","НОЯ\n2024","ДЕК\n2024","ЯНВ\n2025","ФЕВ\n2025"]

const sleepRow = [
  { v: 33, d: "+200%" }, { v: 19, d: "+216%" }, { v: 22, d: "+10%" },
  { v: 34, d: "+100%" }, { v: 31, d: "+93%" },  { v: 29, d: "+141%" },
  { v: 29, d: "+26%" },  { v: 44, d: "+158%" }, { v: 42, d: "+110%" },
  { v: 47, d: "+123%" }, { v: 37, d: "+76%" },  { v: 35, d: "+94%" },
]
const recRow = [18,6,9,20,23,15,12,19,18,16,13,14]
const recD   = ["+350%","+500%","-25%","+233%","+109%","+150%","-7.69%","+90%","+80%","+60%","+62%","+100%"]
const convRow = ["54.55%","31.58%","40.91%","58.82%","74.19%","51.72%","41.38%","43.18%","42.86%","34.04%","35.14%","40%"]

const cohorts = [
  { label: "март 2024",     n: 33, dp: "+83%", rec: 18, rp: "54%", vals: [1,1,0,3,1,1,1,1,1,1,0] },
  { label: "апрель 2024",   n: 19, dp: "+42%", rec: 6,  rp: "31%", vals: [null,1,0,1,0,1,0,1,0,0,0] },
  { label: "май 2024",      n: 22, dp: "+15%", rec: 9,  rp: "40%", vals: [null,null,0,0,2,0,0,0,2,0,2] },
  { label: "июнь 2024",     n: 34, dp: "+54%", rec: 20, rp: "58%", vals: [null,null,null,2,1,1,4,3,2,0,0] },
  { label: "июль 2024",     n: 31, dp: "-8%",  rec: 23, rp: "74%", vals: [null,null,null,null,1,1,2,4,3,2,2] },
  { label: "август 2024",   n: 29, dp: "-6%",  rec: 15, rp: "51%", vals: [null,null,null,null,null,3,1,2,2,3,0] },
  { label: "сентябрь 2024", n: 29, dp: "0%",   rec: 12, rp: "41%", vals: [null,null,null,null,null,null,1,4,1,0,null] },
  { label: "октябрь 2024",  n: 44, dp: "+51%", rec: 19, rp: "43%", vals: [null,null,null,null,null,null,null,1,1,0,3] },
  { label: "ноябрь 2024",   n: 42, dp: "+4%",  rec: 18, rp: "42%", vals: [null,null,null,null,null,null,null,null,4,2,1] },
  { label: "декабрь 2024",  n: 47, dp: "+11%", rec: 16, rp: "34%", vals: [null,null,null,null,null,null,null,null,null,1,0] },
  { label: "январь 2025",   n: 37, dp: "-21%", rec: 13, rp: "35%", vals: [null,null,null,null,null,null,null,null,null,null,0] },
  { label: "февраль 2025",  n: 35, dp: "-5%",  rec: 14, rp: "40%", vals: [] },
]

const B = "#e5e7eb"

export function DashboardMockup() {
  return (
    <motion.div
      className="w-full h-full flex overflow-hidden"
      style={{ background: "#fff", fontFamily: "Inter, sans-serif", fontSize: "10px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      {/* Sidebar */}
      <div style={{ width: 160, flexShrink: 0, background: "#f8faf8", borderRight: `1px solid ${B}`, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 12px", borderBottom: `1px solid ${B}` }}>
          <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(22,163,74,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ color: "#16a34a", fontSize: 9 }}>✦</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: 10, color: "#111" }}>Future IT Dent</span>
        </div>

        <div style={{ padding: "8px 0" }}>
          <div style={{ padding: "6px 12px 2px", fontSize: 7, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em" }}>Модули</div>
          {["Карточка пациента","Календарь","Расписание врачей","Чат","Мои задачи","CRM"].map(item => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 12px", color: "#6b7280", cursor: "pointer" }}>
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#d1d5db" }} />
              <span style={{ fontSize: 9 }}>{item}</span>
            </div>
          ))}
          <div style={{ padding: "8px 12px 2px", fontSize: 7, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em" }}>Аналитика</div>
          {["Каналы","Общая"].map(item => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 12px", color: "#6b7280" }}>
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#d1d5db" }} />
              <span style={{ fontSize: 9 }}>{item}</span>
            </div>
          ))}
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 10px", margin: "2px 4px", borderRadius: 6, background: "rgba(22,163,74,0.1)", cursor: "pointer" }}>
            <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#16a34a" }} />
            <span style={{ fontSize: 9, color: "#16a34a", fontWeight: 600 }}>Цикличные</span>
          </div>
          {["ДМС","Финансы","Врачи","Администраторы","Координаторы","Планы","Склад"].map(item => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 6, padding: "3px 12px", color: "#9ca3af" }}>
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#e5e7eb" }} />
              <span style={{ fontSize: 9 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: "#fff" }}>
        {/* Topbar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 16px", borderBottom: `1px solid ${B}`, flexShrink: 0 }}>
          <div style={{ display: "flex", gap: 10, color: "#9ca3af", fontSize: 11 }}>
            <span>🗓</span><span>💬</span><span>☑</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 9, color: "#374151" }}>
            <span>Пушкино ▾</span>
            <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#22c55e" }} />
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflow: "auto", padding: "16px 20px" }} className="scrollbar-hide">

          {/* Title */}
          <div style={{ fontSize: 15, fontWeight: 600, color: "#111827", marginBottom: 10 }}>Лояльные (Спящие)</div>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <div style={{ display: "flex", gap: 8, fontSize: 9, color: "#6b7280" }}>
              <span>‹ февраль ›</span><span>‹ 2025 ›</span>
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              {["Тепловая карта","Измерения (%)"].map(l => (
                <div key={l} style={{ display: "flex", alignItems: "center", gap: 4, padding: "2px 8px", borderRadius: 999, background: "#dcfce7", fontSize: 8 }}>
                  <div style={{ width: 12, height: 7, borderRadius: 999, background: "#22c55e" }} />
                  <span style={{ color: "#15803d" }}>{l}</span>
                </div>
              ))}
              <div style={{ padding: "2px 8px", borderRadius: 4, border: "1px solid #22c55e", color: "#16a34a", fontSize: 8 }}>График</div>
              <div style={{ padding: "2px 8px", borderRadius: 4, background: "#22c55e", color: "#fff", fontSize: 8, fontWeight: 600 }}>Когорта</div>
            </div>
          </div>

          {/* Heatmap table */}
          <div style={{ overflowX: "auto", marginBottom: 16 }}>
            <table style={{ borderCollapse: "collapse", width: "100%", tableLayout: "auto" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "3px 6px", fontSize: 8, color: "#9ca3af", background: "#f9fafb", border: `1px solid ${B}`, minWidth: 80 }}>ПОКАЗАТЕЛЬ</th>
                  {months.map(m => (
                    <th key={m} style={{ textAlign: "center", padding: "3px 4px", fontSize: 7, color: "#9ca3af", background: "#f9fafb", border: `1px solid ${B}`, whiteSpace: "pre", minWidth: 48 }}>{m}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "3px 6px", fontSize: 8, color: "#374151", border: `1px solid ${B}` }}>Спящие</td>
                  {sleepRow.map((c, i) => (
                    <td key={i} style={{ textAlign: "center", padding: "3px 2px", border: `1px solid ${B}`, background: "rgba(34,197,94,0.18)" }}>
                      <div style={{ fontWeight: 700, fontSize: 9, color: "#111" }}>{c.v}</div>
                      <div style={{ fontSize: 7, color: "#16a34a" }}>{c.d}</div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={{ padding: "3px 6px", fontSize: 8, color: "#374151", border: `1px solid ${B}` }}>Записались</td>
                  {recRow.map((v, i) => (
                    <td key={i} style={{ textAlign: "center", padding: "3px 2px", border: `1px solid ${B}`, background: i === 2 ? "rgba(239,68,68,0.14)" : "rgba(34,197,94,0.06)" }}>
                      <div style={{ fontWeight: 700, fontSize: 9, color: "#111" }}>{v}</div>
                      <div style={{ fontSize: 7, color: i === 2 ? "#ef4444" : "#16a34a" }}>{recD[i]}</div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={{ padding: "3px 6px", fontSize: 8, color: "#2563eb", fontWeight: 700, border: `1px solid ${B}` }}>% Конверсия</td>
                  {convRow.map((v, i) => (
                    <td key={i} style={{ textAlign: "center", padding: "3px 2px", border: `1px solid ${B}`, background: i === 2 ? "rgba(239,68,68,0.14)" : "rgba(34,197,94,0.18)" }}>
                      <span style={{ fontWeight: 700, fontSize: 9, color: i === 2 ? "#ef4444" : "#15803d" }}>{v}</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cohort title */}
          <div style={{ fontSize: 13, fontWeight: 600, color: "#111827", marginBottom: 8 }}>Когортный анализ</div>

          {/* Cohort table */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ borderCollapse: "collapse", width: "100%", tableLayout: "auto" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "3px 6px", fontSize: 7, color: "#9ca3af", background: "#f9fafb", border: `1px solid ${B}`, minWidth: 88 }}>КОГОРТА</th>
                  <th style={{ textAlign: "center", padding: "3px 4px", fontSize: 7, color: "#9ca3af", background: "#f9fafb", border: `1px solid ${B}`, minWidth: 52 }}>В РАБОТЕ</th>
                  <th style={{ textAlign: "center", padding: "3px 4px", fontSize: 7, color: "#9ca3af", background: "#f9fafb", border: `1px solid ${B}`, minWidth: 52 }}>ЗАПИСАЛИСЬ</th>
                  {months.slice(0, 11).map(m => (
                    <th key={m} style={{ textAlign: "center", padding: "3px 2px", fontSize: 7, color: "#9ca3af", background: "#f9fafb", border: `1px solid ${B}`, minWidth: 40, whiteSpace: "pre" }}>{m.split("\n")[0]}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cohorts.map((row) => (
                  <tr key={row.label}>
                    <td style={{ padding: "3px 6px", fontSize: 8, color: "#374151", border: `1px solid ${B}` }}>{row.label}</td>
                    <td style={{ textAlign: "center", padding: "3px 4px", border: `1px solid ${B}`, background: "rgba(59,130,246,0.12)" }}>
                      <div style={{ fontWeight: 700, fontSize: 9, color: "#1d4ed8" }}>{row.n}</div>
                      <div style={{ fontSize: 7, color: row.dp.startsWith("-") ? "#ef4444" : "#16a34a" }}>{row.dp}</div>
                    </td>
                    <td style={{ textAlign: "center", padding: "3px 4px", border: `1px solid ${B}` }}>
                      <div style={{ fontSize: 9, color: "#374151" }}>{row.rec}</div>
                      <div style={{ fontSize: 7, color: "#16a34a" }}>{row.rp}</div>
                    </td>
                    {Array.from({ length: 11 }).map((_, i) => {
                      const v = row.vals[i]
                      return (
                        <td key={i} style={{
                          textAlign: "center", padding: "3px 2px", border: `1px solid ${B}`,
                          background: v === null || v === undefined ? "transparent" : v === 0 ? "rgba(239,68,68,0.1)" : "rgba(34,197,94,0.14)"
                        }}>
                          {v !== null && v !== undefined && (
                            <span style={{ fontSize: 9, color: v === 0 ? "#ef4444" : "#15803d" }}>{v}</span>
                          )}
                        </td>
                      )
                    })}
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
