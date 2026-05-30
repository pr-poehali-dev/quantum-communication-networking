import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const achievements = [
  { title: "Создание и развитие «Future Smile»", text: "Под руководством Николая клиники стали лидерами на рынке стоматологических услуг. Успешно внедрены инновационные подходы, значительно увеличившие число постоянных пациентов." },
  { title: "Запуск «Future IT Pro»", text: "Разработка и внедрение продуктов Future IT Dent и Future Care 360, которые оптимизируют процессы в стоматологии и улучшают взаимодействие с пациентами." },
  { title: "Развитие компании «Инертразвитие»", text: "Успешное управление компанией, занимающейся разработкой и продажей нерудных материалов — стабильный рост бизнеса и расширение клиентской базы." },
]

export function SpeakerSection() {
  return (
    <div className="relative z-20 py-[120px]" style={{ backgroundColor: "#FAFBFF" }}>
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-10"
          >
            <div className="w-2 h-2 rounded-full bg-[#49B76E]" />
            <span className="text-gray-400 text-sm">Спикер вебинара</span>
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Left — text */}
            <div className="flex-1 min-w-0">
              <motion.h2
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
                className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 uppercase mb-1"
              >
                Николай Латышев
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-500 text-sm sm:text-base mb-6 leading-relaxed"
              >
                Основатель, Генеральный директор и совладелец стоматологических клиник «Future Smile» и компании «Future IT Pro». Владелец компании «Инертразвитие».
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }}
                className="w-8 h-px bg-gray-300 mb-6"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-600 text-sm leading-relaxed mb-8"
              >
                С более чем 20-летним опытом в предпринимательской деятельности, успешно реализовал множество проектов в сфере здравоохранения и информационных технологий. Участник Московского инновационного кластера и Академии инноваторов.
              </motion.p>

              <div className="flex flex-col gap-5">
                {achievements.map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
                    className="flex gap-3"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#49B76E] flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 text-sm font-medium mb-0.5">{a.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{a.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right — photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-shrink-0 w-full lg:w-[380px]"
            >
              <div className="relative rounded-2xl overflow-hidden bg-[#eef0f8]" style={{ aspectRatio: "1/1" }}>
                <img
                  src="https://cdn.poehali.dev/projects/1469ebbc-f5f2-410f-a6b6-ad7c1a2f72dd/bucket/d5bf23bf-c1df-4199-a365-63da99556d0b.png"
                  alt="Николай Латышев"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  )
}