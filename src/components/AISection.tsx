import { motion } from "framer-motion"
import { ChevronRight, Check } from "lucide-react"

const questions = [
  { q: "Какие пациенты приносят основную выручку", selected: true },
  { q: "Где клиника теряет первичных пациентов", selected: false },
  { q: "Почему не возвращаются через 6 месяцев", selected: false },
  { q: "Какие действия реально влияют на рост", selected: false },
  { q: "Как проверить гипотезу и не слить бюджет", selected: false },
  { q: "Рост — это результат или совпадение", selected: false },
]

export function AISection() {
  return (
    <div className="relative z-20 py-[120px]" style={{ backgroundColor: "#FAFBFF" }}>
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: "20%", background: "linear-gradient(to bottom, rgba(0,0,0,0.015) 0%, transparent 100%)" }} />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-gray-400 text-sm">Главная идея</span>
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[44px] text-gray-900 max-w-3xl mb-8"
            style={{ letterSpacing: "-0.0325em", fontVariationSettings: '"opsz" 28', fontWeight: 538, lineHeight: 1.1 }}
          >
            От отчётов — к управлению выручкой
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-gray-500 max-w-md mb-8">
            <span className="text-gray-900 font-medium">Future IT Dent — это не про графики.</span> Это ответы на ключевые вопросы вашего бизнеса.
          </motion.p>

          <motion.a
            href="#register"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
            className="px-6 py-3 bg-[#49B76E] text-white font-medium rounded-lg hover:bg-[#5dc47e] transition-colors text-sm flex items-center gap-2 mb-16 w-fit"
          >
            Зарегистрироваться
            <ChevronRight className="w-4 h-4" />
          </motion.a>

          {/* Questions dropdown mockup */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="flex justify-center mb-24">
            <div style={{ perspective: "900px", userSelect: "none", WebkitUserSelect: "none", width: "100%", maxWidth: "720px", position: "relative" }}>
              <div style={{ transformOrigin: "top", willChange: "transform", transform: "translateY(0%) rotateX(30deg) scale(1.15)", position: "relative" }}>
                <div style={{ border: "1px solid rgba(200,200,210,0.6)", background: "linear-gradient(rgba(255,255,255,0.8) 40%, rgba(250,251,255,0.4) 100%)", borderRadius: "8px", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, boxShadow: "inset 0 1px 4px rgba(0,0,0,0.04)", pointerEvents: "none", zIndex: 10 }} />
                <div style={{ background: "linear-gradient(180deg, transparent 60%, #FAFBFF 100%)", height: "40%", position: "absolute", bottom: "-2px", left: "-180px", right: "-180px", pointerEvents: "none", zIndex: 11 }} />
                <div className="border border-gray-200 rounded-t-xl px-5 py-4 bg-white">
                  <span className="text-gray-400 italic text-sm">Ключевые вопросы бизнеса...</span>
                </div>
                <div className="border border-t-0 border-gray-200 rounded-b-xl py-1 bg-white/90">
                  {questions.map((item, index) => (
                    <div
                      key={item.q}
                      style={item.selected ? {
                        transform: "scale(1.04) rotateX(17deg)",
                        background: "linear-gradient(#f0f0ff 0%, #e8e8fa 100%)",
                        borderRadius: "6px",
                        height: "48px",
                        position: "relative",
                        boxShadow: "0 4px 16px rgba(99,102,241,0.12)",
                        zIndex: 20,
                        marginLeft: "-12px",
                        marginRight: "-12px",
                      } : { opacity: 1 - index * 0.06, height: "42px" }}
                    >
                      <div className="flex items-center justify-between h-full" style={{ paddingLeft: "24px", paddingRight: "24px", gap: "12px" }}>
                        <div className="flex items-center gap-3">
                          <span className="text-[#6ecc89] text-lg">—</span>
                          <span className={item.selected ? "text-gray-900 font-medium text-sm" : "text-gray-600 text-sm"}>{item.q}</span>
                        </div>
                        {item.selected && <Check className="w-4 h-4 text-[#5dc47e]" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom two columns */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-t md:border-r border-b border-gray-200 pt-8 md:pt-12 pr-0 md:pr-12 pb-10 md:pb-16">
                <h3 className="text-gray-800 font-medium text-xl mb-3">Аналитика движения пациентов</h3>
                <p className="text-gray-500 text-base mb-8">Автоматическое разделение на группы, сквозной путь от обращения до повторного визита, детализация до конкретного пациента.</p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#6ecc89]" />
                    <span className="text-gray-500 text-sm font-medium">Путь пациента</span>
                  </div>
                  {[
                    { label: "Откуда пришёл",   icon: "✓", bg: "bg-green-50",  border: "border-green-200", text: "text-green-600" },
                    { label: "Записался ли",     icon: "✓", bg: "bg-green-50",  border: "border-green-200", text: "text-green-600" },
                    { label: "Дошёл до приёма",  icon: "✓", bg: "bg-green-50",  border: "border-green-200", text: "text-green-600" },
                    { label: "Оплатил ли",       icon: "!",  bg: "bg-yellow-50", border: "border-yellow-200", text: "text-yellow-600" },
                    { label: "Вернулся ли",      icon: "✗", bg: "bg-red-50",    border: "border-red-200",    text: "text-red-500" },
                  ].map((step) => (
                    <div key={step.label} className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
                      <span className={`w-6 h-6 rounded-md border flex items-center justify-center text-xs font-bold flex-shrink-0 ${step.bg} ${step.border} ${step.text}`}>{step.icon}</span>
                      <span className="text-gray-600 text-sm">{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-b border-gray-200 pt-8 md:pt-12 pl-0 md:pl-12 pb-10 md:pb-16">
                <h3 className="text-gray-800 font-medium text-xl mb-3">PDSA Future IT Dent</h3>
                <p className="text-gray-500 text-base mb-8">Вы ставите цель → внедряете изменение → измеряете результат → принимаете решение.</p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-gray-500 text-sm font-medium">Что можно проверить</span>
                  </div>
                  <div className="space-y-2">
                    {["Рост выручки","Средний чек","Первичные пациенты","Повторные визиты","Конверсию планов лечения","Эффективность акций"].map((item) => (
                      <div key={item} className="flex items-center gap-3 py-1.5">
                        <span className="w-6 h-6 rounded-md border border-[#c2ecd1] bg-[#e6f7ed] flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-[#49B76E]" />
                        </span>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}