export default function Footer() {
  return (
    <footer className="bg-teal-950 text-teal-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-serif text-xl font-bold text-white">ClawControl</span>
            </div>
            <p className="text-sm text-teal-400 leading-relaxed">
              Безопасные ИИ-агенты для бизнеса на базе OpenClaw. Работает в РФ, оплата российскими картами.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-sm text-teal-400 hover:text-white transition-colors">Внедрение за 24 часа</a></li>
              <li><a href="#services" className="text-sm text-teal-400 hover:text-white transition-colors">Защита бюджета</a></li>
              <li><a href="#services" className="text-sm text-teal-400 hover:text-white transition-colors">ИИ-лаборатория</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Компания</h4>
            <ul className="space-y-2">
              <li><a href="#team" className="text-sm text-teal-400 hover:text-white transition-colors">Команда</a></li>
              <li><a href="#testimonials" className="text-sm text-teal-400 hover:text-white transition-colors">Отзывы</a></li>
              <li><a href="#contact" className="text-sm text-teal-400 hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Связаться</h4>
            <ul className="space-y-2">
              <li className="text-sm text-teal-400">Telegram: @clawcontrol</li>
              <li className="text-sm text-teal-400">info@clawcontrol.ru</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-800 pt-8 text-center">
          <p className="text-sm text-teal-500">
            &copy; {new Date().getFullYear()} ClawControl. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
