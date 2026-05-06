import { motion } from "framer-motion"
import { Navbar } from "./Navbar"
import { LogoCloud } from "./LogoCloud"
import { ProductScreenshot } from "./ProductScreenshot"
import { FeatureCardsSection } from "./FeatureCardsSection"
import { AISection } from "./AISection"
import { ProductDirectionSection } from "./ProductDirectionSection"
import { WorkflowsSection } from "./WorkflowsSection"
import { CTASection } from "./CTASection"

export function Hero3DStage() {

  return (
    <>
      <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#09090B" }}>
        <Navbar />

        {/* Subtle glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -30%)",
            width: "1200px",
            height: "800px",
            background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
          }}
        />

        {/* Main content */}
        <div className="relative z-10 pt-28 flex flex-col">
          {/* Hero text - contained and centered */}
          <div className="w-full flex justify-center px-6 mt-16">
            <div className="w-full max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                Онлайн-вебинар · 12 мая 2026 · 12:00
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white leading-[1.1] text-balance"
              >
                Круглый стол Future IT Dent
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-4 text-xl text-zinc-300 font-medium"
              >
                Как управлять ростом стоматологии через аналитику и PDSA
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-4 text-base text-zinc-400 max-w-xl leading-relaxed"
              >
                Покажем, как с помощью аналитики движения пациентов и PDSA видеть полный путь пациента, находить точки потери выручки и принимать решения на основе данных — а не ощущений.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-2 text-sm text-zinc-500"
              >
                Для владельцев, управляющих, главных врачей и маркетологов · Онлайн
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 flex items-center gap-3"
                id="register"
              >
                <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 transition-colors text-sm">
                  Зарегистрироваться
                </button>
                <button className="px-6 py-3 border border-zinc-700 text-zinc-300 font-medium rounded-lg hover:bg-zinc-800 transition-colors text-sm">
                  Программа
                </button>
              </motion.div>
            </div>
          </div>



          <ProductScreenshot />
          <LogoCloud />
          <FeatureCardsSection />
          <AISection />
          <ProductDirectionSection />
          <WorkflowsSection />
          <CTASection />
        </div>
      </section>
    </>
  )
}