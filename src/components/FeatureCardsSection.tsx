import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const painPoints = [
  { title: "Есть обращение — нет записи", desc: "Пациент позвонил, но не записался. Клиника не видит этот момент.", color: "border-red-200 bg-red-50/60", dot: "bg-red-400" },
  { title: "Записался — но не дошёл", desc: "Запись есть. Пациента нет. Кресло пустое, время потеряно.", color: "border-orange-200 bg-orange-50/60", dot: "bg-orange-400" },
  { title: "Был приём — нет оплаты", desc: "Лечение провели, план назначили. Деньги не получили.", color: "border-yellow-200 bg-yellow-50/60", dot: "bg-yellow-400" },
  { title: "Выпал через 6 месяцев", desc: "Пациент ушёл на плановый осмотр и не вернулся. Клиника этого не заметила.", color: "border-purple-200 bg-purple-50/60", dot: "bg-purple-400" },
  { title: "Есть рост — нет понимания", desc: "Выручка выросла. Почему? Что сработало? Никто не знает.", color: "border-blue-200 bg-blue-50/60", dot: "bg-blue-400" },
]

export function FeatureCardsSection() {
  return (
    <div className="relative z-20 py-[120px]" id="pain" style={{ backgroundColor: "#FAFBFF" }}>
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: "20%", background: "linear-gradient(to bottom, rgba(0,0,0,0.015) 0%, transparent 100%)" }} />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-gray-400 text-sm">Проблема</span>
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[44px] text-gray-900 max-w-md"
              style={{ letterSpacing: "-0.0325em", fontVariationSettings: '"opsz" 28', fontWeight: 538, lineHeight: 1.1 }}
            >
              Клиники теряют деньги<br />не в рекламе,<br />а внутри процессов
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-md">
              <p className="text-gray-500 leading-relaxed">
                Такие потери не выглядят как проблема — они растворяются в таблицах, отчётах и ощущениях команды.{" "}
                <a href="#register" className="text-gray-900 inline-flex items-center gap-1 hover:underline font-medium">
                  На круглом столе покажем как это исправить <ChevronRight className="w-4 h-4" />
                </a>
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
                className={`border rounded-2xl p-6 ${point.color}`}
              >
                <div className={`w-2 h-2 rounded-full ${point.dot} mb-4`} />
                <h3 className="text-gray-900 font-medium text-base mb-2">{point.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}
              className="border border-[#c2ecd1] rounded-2xl p-6 bg-[#f0fbf4]/60"
            >
              <div className="w-2 h-2 rounded-full bg-[#5dc47e] mb-4" />
              <h3 className="text-gray-900 font-medium text-base mb-2">На круглом столе покажем выход</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Как превратить данные в управляемый рост.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}