import { motion } from "framer-motion"

const stats = [
  { value: "60–90", label: "минут", desc: "насыщенного контента" },
  { value: "4", label: "темы", desc: "аналитика, PDSA, когорты, потери" },
  { value: "0", label: "теории ради теории", desc: "только реальные сценарии" },
  { value: "19", label: "мая", desc: "онлайн, бесплатно" },
]

export function LogoCloud() {
  return (
    <div className="relative z-20 pb-24 pt-8" style={{ backgroundColor: "#FAFBFF" }}>
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-700 mb-2"
          >
            После круглого стола вы сможете принимать решения на основе данных
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-500 mb-16"
          >
            А не ощущений, догадок и слепой интуиции.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl sm:text-6xl font-semibold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-indigo-600 font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}