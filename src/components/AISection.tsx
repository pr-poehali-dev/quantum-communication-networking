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
    <div className="relative z-20 py-40" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-zinc-400 text-sm">Главная идея</span>
            <ChevronRight className="w-4 h-4 text-zinc-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[44px] text-white max-w-3xl mb-8"
            style={{
              letterSpacing: "-0.0325em",
              fontVariationSettings: '"opsz" 28',
              fontWeight: 538,
              lineHeight: 1.1,
            }}
          >
            От отчётов — к управлению выручкой
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 max-w-md mb-8"
          >
            <span className="text-white font-medium">Future IT Dent — это не про графики.</span> Это ответы на ключевые вопросы вашего бизнеса.
          </motion.p>

          <motion.a
            href="#register"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 transition-colors text-sm flex items-center gap-2 mb-16 w-fit"
          >
            Зарегистрироваться
            <ChevronRight className="w-4 h-4" />
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-24"
          >
            <div
              style={{
                perspective: "900px",
                userSelect: "none",
                WebkitUserSelect: "none",
                width: "100%",
                maxWidth: "720px",
                position: "relative",
              }}
            >
              <div
                style={{
                  transformOrigin: "top",
                  willChange: "transform",
                  transform: "translateY(0%) rotateX(30deg) scale(1.15)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    border: "1px solid rgba(66, 66, 66, 0.5)",
                    background: "linear-gradient(rgba(255, 255, 255, 0.1) 40%, rgba(8, 9, 10, 0.1) 100%)",
                    borderRadius: "8px",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    boxShadow:
                      "inset 0 1.503px 5.261px rgba(255, 255, 255, 0.04), inset 0 -0.752px 0.752px rgba(255, 255, 255, 0.1)",
                    pointerEvents: "none",
                    zIndex: 10,
                  }}
                />
                <div
                  style={{
                    background: "linear-gradient(180deg, transparent 0%, #09090B 100%)",
                    height: "80%",
                    position: "absolute",
                    bottom: "-2px",
                    left: "-180px",
                    right: "-180px",
                    pointerEvents: "none",
                    zIndex: 11,
                  }}
                />
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-t-xl px-5 py-4">
                  <span className="text-zinc-500 italic">Ключевые вопросы бизнеса...</span>
                </div>
                <div className="bg-zinc-900/80 border border-t-0 border-zinc-700 rounded-b-xl py-1">
                  {questions.map((item, index) => (
                    <div
                      key={item.q}
                      style={
                        item.selected
                          ? {
                              transform: "scale(1.04) rotateX(17deg)",
                              background: "linear-gradient(#343434 0%, #2d2d2d 100%)",
                              borderRadius: "6px",
                              height: "48px",
                              position: "relative",
                              boxShadow:
                                "inset 0 -2.75px 4.75px rgba(255, 255, 255, 0.14), inset 0 -0.752px 0.752px rgba(255, 255, 255, 0.1), 0 54px 73px 3px rgba(0, 0, 0, 0.5)",
                              zIndex: 20,
                              marginLeft: "-12px",
                              marginRight: "-12px",
                            }
                          : {
                              opacity: 1 - index * 0.13,
                              height: "42px",
                            }
                      }
                    >
                      <div
                        className="flex items-center justify-between h-full"
                        style={{ paddingLeft: "24px", paddingRight: "24px", gap: "12px" }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-indigo-400 text-lg">—</span>
                          <span className={item.selected ? "text-white font-medium" : "text-zinc-300"}>
                            {item.q}
                          </span>
                        </div>
                        {item.selected && <Check className="w-4 h-4 text-indigo-400" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-t border-r border-b border-zinc-800/60 pt-12 pr-12 pb-16">
                <h3 className="text-zinc-200 font-medium text-xl mb-3">Аналитика движения пациентов</h3>
                <p className="text-zinc-500 text-base mb-8">
                  Автоматическое разделение на группы, сквозной путь от обращения до повторного визита, детализация до конкретного пациента.
                </p>

                <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    <span className="text-zinc-400 text-sm font-medium">Путь пациента</span>
                  </div>
                  {[
                    { label: "Откуда пришёл", status: "✓", color: "text-green-400" },
                    { label: "Записался ли", status: "✓", color: "text-green-400" },
                    { label: "Дошёл до приёма", status: "✓", color: "text-green-400" },
                    { label: "Оплатил ли", status: "!", color: "text-yellow-400" },
                    { label: "Вернулся ли", status: "✗", color: "text-red-400" },
                  ].map((step) => (
                    <div key={step.label} className="flex items-center justify-between py-2.5 border-b border-zinc-800/40 last:border-0">
                      <span className="text-zinc-400 text-sm">{step.label}</span>
                      <span className={`text-sm font-medium ${step.color}`}>{step.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-b border-zinc-800/60 pt-12 pl-12 pb-16">
                <h3 className="text-zinc-200 font-medium text-xl mb-3">PDSA Future IT Dent</h3>
                <p className="text-zinc-500 text-base mb-8">
                  Вы ставите цель → внедряете изменение → измеряете результат → принимаете решение.
                </p>

                <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-zinc-400 text-sm font-medium">Что можно проверить</span>
                  </div>
                  <div className="space-y-2">
                    {["Рост выручки", "Средний чек", "Первичные пациенты", "Повторные визиты", "Конверсию планов лечения", "Эффективность акций"].map((item) => (
                      <div key={item} className="flex items-center gap-2 py-1.5">
                        <Check className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                        <span className="text-zinc-400 text-sm">{item}</span>
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