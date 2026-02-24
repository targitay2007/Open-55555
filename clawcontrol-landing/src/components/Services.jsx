const services = [
  {
    badge: '+1',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Внедрение за 24 часа',
    subtitle: 'Боитесь сломать сервер?',
    description:
      'Внедряем агента за 24 часа без вашего участия в коде. Вы получаете работающего цифрового сотрудника в Telegram. Мы берём на себя аренду VPS, настройку окружения и подключение API.',
    details:
      'Вам не нужно разбираться с докером, зависимостями и пугающими ошибками терминала. Если система не начнёт выполнять ваши задачи через 5 дней — мы возвращаем 100% оплаты по договору.',
    result: 'Готовый ассистент за 1 день без технической головной боли.',
    color: 'teal',
  },
  {
    badge: '+4',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Защита бюджета и данных',
    subtitle: 'Пугают скрытые расходы и утечки?',
    description:
      'Без контроля агент способен сжечь $100 за пару дней из-за фоновых запросов. Мы настраиваем жёсткие лимиты: ваши затраты на токены языковой модели составят предсказуемые $3–20 в месяц.',
    details:
      'Агент работает в изолированном контейнере, а API-ключи надёжно зашифрованы. Мы исключаем риск случайного удаления нужных писем и файлов — критические действия требуют подтверждения.',
    result: 'Абсолютная сохранность данных и защита вашего бюджета.',
    color: 'emerald',
  },
  {
    badge: '+4',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: 'ИИ-лаборатория за 60 дней',
    subtitle: 'Устали от «чёрных ящиков»?',
    description:
      'Формат лаборатории с поддержкой куратора для тех, кто хочет управлять системой самостоятельно. За 2 месяца вы своими руками собираете оргструктуру из 5 автономных агентов под реальные задачи бизнеса.',
    details:
      'Вы научитесь разворачивать свой VPN на VPS за 30 минут, генерировать 30 постов для соцсетей за один вечер и автоматизировать ежедневные аналитические отчёты. Вы поймёте логику работы через веб-интерфейс и перестанете зависеть от разработчиков.',
    result: '5 рабочих цифровых сотрудников и полный контроль над технологией.',
    color: 'cyan',
  },
]

const colorMap = {
  teal: {
    iconBg: 'bg-teal-600',
    badgeBg: 'bg-teal-100',
    badgeText: 'text-teal-700',
    resultBg: 'bg-teal-50',
    resultBorder: 'border-teal-200',
    resultText: 'text-teal-800',
    accent: 'bg-teal-500',
  },
  emerald: {
    iconBg: 'bg-emerald-600',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-700',
    resultBg: 'bg-emerald-50',
    resultBorder: 'border-emerald-200',
    resultText: 'text-emerald-800',
    accent: 'bg-emerald-500',
  },
  cyan: {
    iconBg: 'bg-cyan-600',
    badgeBg: 'bg-cyan-100',
    badgeText: 'text-cyan-700',
    resultBg: 'bg-cyan-50',
    resultBorder: 'border-cyan-200',
    resultText: 'text-cyan-800',
    accent: 'bg-cyan-500',
  },
}

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4">
            3 услуги
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-950 mb-6">
            Всё, что нужно для запуска ИИ&#8209;агента
          </h2>
          <p className="text-lg text-teal-700/70">
            От быстрого внедрения до полного обучения вашей команды
          </p>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {services.map((service, index) => {
            const colors = colorMap[service.color]
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow p-6 sm:p-8 lg:p-10"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                  {/* Icon and badge */}
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:min-w-[80px]">
                    <div className={`w-14 h-14 ${colors.iconBg} rounded-2xl flex items-center justify-center shrink-0`}>
                      {service.icon}
                    </div>
                    <span className={`inline-block px-3 py-1 ${colors.badgeBg} ${colors.badgeText} text-xs font-bold rounded-full`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-amber-600 mb-2">
                      {service.subtitle}
                    </p>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-teal-950 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-teal-800/80 leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <p className="text-teal-700/60 leading-relaxed mb-6">
                      {service.details}
                    </p>

                    {/* Result */}
                    <div className={`inline-flex items-center gap-3 px-5 py-3 ${colors.resultBg} border ${colors.resultBorder} rounded-xl`}>
                      <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className={`text-sm font-semibold ${colors.resultText}`}>
                        Результат: {service.result}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
