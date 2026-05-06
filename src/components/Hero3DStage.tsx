import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { DashboardMockup } from "./DashboardMockup"
import { Navbar } from "./Navbar"
import { LogoCloud } from "./LogoCloud"
import { FeatureCardsSection } from "./FeatureCardsSection"
import { AISection } from "./AISection"
import { ProductDirectionSection } from "./ProductDirectionSection"
import { WorkflowsSection } from "./WorkflowsSection"
import { CTASection } from "./CTASection"

const BG = "#FAFBFF"

export function Hero3DStage() {
  const [yOffset, setYOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const offset = Math.min(scrollY / 300, 1) * -20
      setYOffset(offset)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const baseTransform = {
    translateX: 2,
    scale: 1.2,
    rotateX: 47,
    rotateY: 31,
    rotateZ: 324,
  }

  return (
    <>
      <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: BG }}>
        <Navbar />

        {/* Subtle glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -30%)",
            width: "1200px",
            height: "800px",
            background: "radial-gradient(ellipse at center, rgba(99,102,241,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Main content */}
        <div className="relative z-10 pt-20 sm:pt-28 flex flex-col">
          {/* Hero text */}
          <div className="w-full flex justify-center px-4 sm:px-6 mt-8 sm:mt-16">
            <div className="w-full max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs sm:text-sm mb-4 sm:mb-6"
                style={{ borderColor: "rgba(99,102,241,0.25)", background: "rgba(99,102,241,0.06)", color: "#4F46E5" }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#6366F1" }} />
                Онлайн-вебинар · 12 мая 2026 · 12:00
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] text-balance"
                style={{ color: "#111827" }}
              >
                Круглый стол Future IT Dent
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-3 sm:mt-4 text-base sm:text-xl font-medium"
                style={{ color: "#374151" }}
              >
                Как управлять ростом стоматологии через аналитику и PDSA
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-3 sm:mt-4 text-sm sm:text-base max-w-xl leading-relaxed"
                style={{ color: "#6B7280" }}
              >
                Покажем, как с помощью аналитики движения пациентов и PDSA видеть полный путь пациента, находить точки потери выручки и принимать решения на основе данных — а не ощущений.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-2 text-xs sm:text-sm"
                style={{ color: "#9CA3AF" }}
              >
                Для владельцев, управляющих, главных врачей и маркетологов · Онлайн
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3"
                id="register"
              >
                <button
                  className="px-5 sm:px-6 py-2.5 sm:py-3 font-medium rounded-lg text-sm transition-colors"
                  style={{ background: "#4F46E5", color: "#fff" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#4338CA")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#4F46E5")}
                >
                  Зарегистрироваться
                </button>
                <button
                  className="px-5 sm:px-6 py-2.5 sm:py-3 font-medium rounded-lg text-sm transition-colors"
                  style={{ border: "1px solid #E5E7EB", color: "#374151", background: "#fff" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#F9FAFB")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
                >
                  Программа
                </button>
              </motion.div>
            </div>
          </div>

          {/* 3D Stage — скрыт на мобиле */}
          <div
            className="relative hidden sm:block"
            style={{
              width: "100vw",
              marginLeft: "-50vw",
              marginRight: "-50vw",
              position: "relative",
              left: "50%",
              right: "50%",
              height: "700px",
              marginTop: "-60px",
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 h-72 z-10 pointer-events-none"
              style={{ background: `linear-gradient(to top, ${BG} 20%, transparent 100%)` }}
            />
            <div
              style={{
                transform: `translateY(${yOffset}px)`,
                transition: "transform 0.1s ease-out",
                contain: "strict",
                perspective: "4000px",
                perspectiveOrigin: "100% 0",
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
                position: "relative",
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  backgroundColor: "#fff",
                  transformOrigin: "0 0",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  border: "1px solid #e5e7eb",
                  borderRadius: "10px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                  width: "1600px",
                  height: "900px",
                  margin: "280px auto auto",
                  position: "absolute",
                  top: 0, bottom: 0, left: 0, right: 0,
                  transform: `translate(${baseTransform.translateX}%) scale(${baseTransform.scale}) rotateX(${baseTransform.rotateX}deg) rotateY(${baseTransform.rotateY}deg) rotate(${baseTransform.rotateZ}deg)`,
                  transformStyle: "preserve-3d",
                  overflow: "hidden",
                }}
              >
                <DashboardMockup />
              </motion.div>
            </div>
          </div>

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