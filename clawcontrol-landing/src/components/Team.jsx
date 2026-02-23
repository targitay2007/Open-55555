const team = [
  {
    name: 'Алексей Морозов',
    role: 'DevOps-инженер',
    bio: 'Более 8 лет в разработке облачных решений. Отвечает за безопасное развёртывание агентов: настройка VPS, Docker-контейнеров и систем мониторинга. Гарантирует, что ваш агент работает стабильно 24/7.',
    skills: ['Docker', 'VPS', 'Мониторинг'],
    initials: 'АМ',
    color: 'bg-teal-600',
  },
  {
    name: 'Мария Ковалёва',
    role: 'ИИ-архитектор',
    bio: 'Специалист по языковым моделям и промпт-инженерии. Проектирует логику агентов, настраивает API-интеграции и оптимизирует расход токенов. Превращает ваши бизнес-задачи в чёткие инструкции для ИИ.',
    skills: ['LLM', 'API', 'Промпты'],
    initials: 'МК',
    color: 'bg-emerald-600',
  },
  {
    name: 'Дмитрий Петров',
    role: 'Куратор обучения',
    bio: 'Ведёт ИИ-лабораторию и обучает команды. Помогает выстроить оргструктуру из 5 автономных агентов, объясняет сложные концепции простым языком. С ним вы перестанете зависеть от разработчиков.',
    skills: ['Обучение', 'Автоматизация', 'Бизнес'],
    initials: 'ДП',
    color: 'bg-cyan-600',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 sm:py-28 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4">
            Команда
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-950 mb-6">
            Эксперты, которым можно доверять
          </h2>
          <p className="text-lg text-teal-700/70">
            Три специалиста закрывают все этапы: от настройки инфраструктуры до обучения вашей команды
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow p-8 text-center group"
            >
              {/* Avatar */}
              <div className={`w-20 h-20 ${member.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform`}>
                <span className="text-2xl font-bold text-white">{member.initials}</span>
              </div>

              <h3 className="font-serif text-xl font-bold text-teal-950 mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-teal-600 mb-4">
                {member.role}
              </p>
              <p className="text-teal-700/70 text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
