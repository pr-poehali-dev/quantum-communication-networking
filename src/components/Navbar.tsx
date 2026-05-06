export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-[#FAFBFF]/80 backdrop-blur-md">
      <div className="w-full flex justify-center px-6 py-4">
        <div className="w-full max-w-4xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-gray-900 font-semibold tracking-tight">Future IT Dent</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#pain" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Проблема</a>
            <a href="#program" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Программа</a>
            <a href="#product" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Продукт</a>
            <a href="#audience" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Для кого</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#register" className="text-sm text-white bg-indigo-600 hover:bg-indigo-500 px-3.5 py-1.5 rounded-md transition-colors font-medium">
              Зарегистрироваться
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
