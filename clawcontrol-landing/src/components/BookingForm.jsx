import { useState } from 'react'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column: info */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4">
              Контакты
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-950 mb-6">
              Готовы внедрить ИИ&#8209;агента?
            </h2>
            <p className="text-lg text-teal-700/70 mb-10">
              Оставьте заявку — мы свяжемся в&nbsp;течение 2&nbsp;часов
              и&nbsp;обсудим вашу задачу. Без обязательств.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-950 mb-1">Быстрый ответ</h4>
                  <p className="text-sm text-teal-700/70">Отвечаем на заявки в течение 2 часов в рабочее время</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-950 mb-1">Гарантия возврата</h4>
                  <p className="text-sm text-teal-700/70">100% возврат, если система не заработает за 5 дней</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-950 mb-1">Оплата российскими картами</h4>
                  <p className="text-sm text-teal-700/70">Работаем в РФ, принимаем оплату в рублях</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: form */}
          <div>
            {submitted ? (
              <div className="bg-white rounded-2xl border border-teal-100 shadow-lg p-8 sm:p-10 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-teal-950 mb-3">
                  Заявка отправлена!
                </h3>
                <p className="text-teal-700/70">
                  Мы свяжемся с вами в течение 2 часов. Спасибо за доверие!
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-teal-100 shadow-lg p-8 sm:p-10"
              >
                <h3 className="font-serif text-2xl font-bold text-teal-950 mb-6">
                  Оставить заявку
                </h3>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-teal-800 mb-1.5">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-teal-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-teal-800 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ivan@example.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-teal-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-teal-800 mb-1.5">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (999) 123-45-67"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-teal-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-teal-800 mb-1.5">
                      Интересующая услуга *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow bg-white"
                    >
                      <option value="">Выберите услугу</option>
                      <option value="deploy">Внедрение за 24 часа</option>
                      <option value="security">Защита бюджета и данных</option>
                      <option value="lab">ИИ-лаборатория за 60 дней</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-teal-800 mb-1.5">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Расскажите о вашей задаче..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-teal-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-xl hover:bg-teal-700 transition-all hover:shadow-lg hover:shadow-teal-600/25 cursor-pointer"
                >
                  Внедрить агента с гарантией
                </button>

                <p className="text-xs text-teal-600/50 mt-4 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
