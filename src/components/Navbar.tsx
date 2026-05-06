"use client"
import { useState } from "react"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-[#FAFBFF]/80 backdrop-blur-md">
      <div className="w-full flex justify-center px-4 sm:px-6 py-3 sm:py-4">
        <div className="w-full max-w-4xl flex items-center justify-between">
          <a href="https://future-it-dent.ru/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img src="https://cdn.poehali.dev/projects/1469ebbc-f5f2-410f-a6b6-ad7c1a2f72dd/bucket/e54a53a2-53ad-4053-b48a-81a44cf1b129.png" alt="Future IT Dent" className="h-8 sm:h-10 w-auto" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#pain" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Проблема</a>
            <a href="#program" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Программа</a>
            <a href="#audience" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Для кого</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="#register" className="text-sm text-white bg-[#49B76E] hover:bg-[#5dc47e] px-3.5 py-1.5 rounded-md transition-colors font-medium">
              Забронировать место
            </a>
            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
              onClick={() => setOpen(!open)}
              aria-label="Меню"
            >
              <span className={`block w-5 h-0.5 bg-gray-600 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-gray-600 transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-gray-600 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-[#FAFBFF] px-6 py-4 flex flex-col gap-4">
          {[["#pain","Проблема"],["#program","Программа"],["#audience","Для кого"]].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="text-sm text-gray-600 hover:text-gray-900 transition-colors py-1">
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}