const testimonials = [
  {
    name: 'Ирина Соколова',
    role: 'Владелица интернет-магазина',
    text: 'Раньше я тратила 3 часа в день на ответы клиентам в Telegram. Теперь агент отвечает мгновенно, а я занимаюсь развитием бизнеса. За первый месяц расходы на API составили всего $8 — меньше, чем кофе по пятницам. Главное — я наконец не боюсь, что что-то сломается, потому что всё под контролем.',
    rating: 5,
    initials: 'ИС',
    color: 'bg-rose-500',
  },
  {
    name: 'Артём Волков',
    role: 'Маркетолог, агентство «Точка роста»',
    text: 'Мы подключили агента для генерации контента в соцсети. 30 постов за вечер — это не преувеличение. До этого пробовали настроить сами через Docker, но утонули в ошибках терминала. Команда ClawControl развернула всё за день. Изолированный контейнер и лимиты на расход — ровно то, чего нам не хватало.',
    rating: 5,
    initials: 'АВ',
    color: 'bg-violet-500',
  },
  {
    name: 'Олег Черняев',
    role: 'IT-директор, производственная компания',
    text: 'Я скептически относился к ИИ-агентам из-за рисков безопасности. Но после лаборатории за 60 дней моя команда самостоятельно управляет пятью агентами. Мы автоматизировали ежедневные отчёты и сократили время на аналитику втрое. Зашифрованные ключи и подтверждение критических действий — именно такой уровень контроля нужен в корпоративной среде.',
    rating: 5,
    initials: 'ОЧ',
    color: 'bg-amber-500',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4">
            Отзывы
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-950 mb-6">
            Что говорят наши клиенты
          </h2>
          <p className="text-lg text-teal-700/70">
            Реальные истории тех, кто уже автоматизировал рутину с&nbsp;ClawControl
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-teal-50/50 rounded-2xl border border-teal-100 p-8 flex flex-col hover:shadow-md transition-shadow"
            >
              {/* Quote icon */}
              <svg className="w-8 h-8 text-teal-300 mb-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>

              <p className="text-teal-800/80 leading-relaxed flex-1 mb-6">
                {t.text}
              </p>

              <div className="border-t border-teal-100 pt-4">
                <StarRating count={t.rating} />
                <div className="flex items-center gap-3 mt-3">
                  <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center`}>
                    <span className="text-sm font-bold text-white">{t.initials}</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-teal-950">{t.name}</div>
                    <div className="text-xs text-teal-600">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
