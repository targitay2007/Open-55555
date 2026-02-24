export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-teal-50 via-white to-teal-100 pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-teal-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-teal-100/40 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column: text */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-teal-800">OpenClaw Platform</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-950 leading-tight mb-6">
              Сложно настроить ИИ?{' '}
              <span className="text-teal-600">
                Запустим безопасного цифрового сотрудника за&nbsp;день.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-teal-800/80 leading-relaxed mb-8">
              OpenClaw забирает на себя рутину: читает почту, ведёт соцсети
              и&nbsp;отвечает клиентам 24/7 прямо в&nbsp;Telegram. Мы разворачиваем
              агента на облачном сервере&nbsp;&mdash; работает в&nbsp;РФ без VPN
              и&nbsp;оплачивается российскими картами.
            </p>

            <ul className="space-y-3 mb-10 text-teal-800/70">
              {[
                'Жёсткие лимиты на API — защита от невидимых расходов',
                'Изолированный контейнер — никаких утечек данных',
                'Никаких «чёрных ящиков» — только готовая система',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-xl hover:bg-teal-700 transition-all hover:shadow-lg hover:shadow-teal-600/25"
              >
                Внедрить агента с гарантией
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-300 text-teal-700 text-lg font-semibold rounded-xl hover:bg-teal-50 transition-all"
              >
                Узнать подробнее
              </a>
            </div>
          </div>

          {/* Right column: visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="bg-white rounded-2xl shadow-2xl shadow-teal-900/10 p-8 border border-teal-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg">
                    <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-teal-900">Почта обработана</div>
                      <div className="text-xs text-teal-600">12 писем отсортировано</div>
                    </div>
                    <svg className="w-5 h-5 text-green-500 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg">
                    <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-teal-900">Telegram</div>
                      <div className="text-xs text-teal-600">3 клиента получили ответ</div>
                    </div>
                    <svg className="w-5 h-5 text-green-500 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-teal-900">Аналитика</div>
                      <div className="text-xs text-amber-600">Формирую отчёт...</div>
                    </div>
                    <div className="ml-auto w-5 h-5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-teal-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-teal-600">Расход API сегодня</span>
                    <span className="font-semibold text-teal-900">$0.12</span>
                  </div>
                  <div className="mt-2 h-2 bg-teal-100 rounded-full">
                    <div className="h-2 bg-teal-500 rounded-full" style={{ width: '6%' }} />
                  </div>
                  <div className="text-xs text-teal-500 mt-1">Лимит: $2.00 / день</div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-teal-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-teal-900">Контейнер изолирован</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
