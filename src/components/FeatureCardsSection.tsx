import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const painPoints = [
  {
    title: "Есть обращение — нет записи",
    desc: "Пациент позвонил, но не записался. Клиника не видит этот момент.",
    color: "bg-red-500/10 border-red-500/20",
    dot: "bg-red-400",
  },
  {
    title: "Записался — но не дошёл",
    desc: "Запись есть. Пациента нет. Кресло пустое, время потеряно.",
    color: "bg-orange-500/10 border-orange-500/20",
    dot: "bg-orange-400",
  },
  {
    title: "Был приём — нет оплаты",
    desc: "Лечение провели, план назначили. Деньги не получили.",
    color: "bg-yellow-500/10 border-yellow-500/20",
    dot: "bg-yellow-400",
  },
  {
    title: "Выпал через 6 месяцев",
    desc: "Пациент ушёл на плановый осмотр и не вернулся. Клиника этого не заметила.",
    color: "bg-purple-500/10 border-purple-500/20",
    dot: "bg-purple-400",
  },
  {
    title: "Есть рост — нет понимания",
    desc: "Выручка выросла. Почему? Что сработало? Никто не знает.",
    color: "bg-blue-500/10 border-blue-500/20",
    dot: "bg-blue-400",
  },
]

export function FeatureCardsSection() {
  return (
    <div className="relative z-20 py-40" id="pain" style={{ backgroundColor: "#09090B" }}>
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
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-zinc-400 text-sm">Проблема</span>
            <ChevronRight className="w-4 h-4 text-zinc-500" />
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[44px] text-white max-w-md"
              style={{
                letterSpacing: "-0.0325em",
                fontVariationSettings: '"opsz" 28',
                fontWeight: 538,
                lineHeight: 1.1,
              }}
            >
              Клиники теряют деньги<br />не в рекламе —<br />а внутри процессов
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md"
            >
              <p className="text-zinc-400 leading-relaxed">
                Такие потери не выглядят как проблема — они растворяются в таблицах, отчётах и ощущениях команды.{" "}
                <a href="#register" className="text-white inline-flex items-center gap-1 hover:underline">
                  На круглом столе покажем как это исправить <ChevronRight className="w-4 h-4" />
                </a>
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
                className={`border rounded-2xl p-6 ${point.color} bg-zinc-900/50`}
              >
                <div className={`w-2 h-2 rounded-full ${point.dot} mb-4`} />
                <h3 className="text-white font-medium text-base mb-2">{point.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="border border-indigo-500/30 rounded-2xl p-6 bg-indigo-500/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-2 h-2 rounded-full bg-indigo-400 mb-4" />
                <h3 className="text-white font-medium text-base mb-2">На круглом столе покажем выход</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">Как превратить данные в управляемый рост.</p>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}