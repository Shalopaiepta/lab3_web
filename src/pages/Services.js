import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const courses = [
    {
      id: 1,
      title: "Основы Roblox Studio",
      description: "Изучите интерфейс Roblox Studio, создайте свою первую игру",
      duration: "4 недели",
      level: "Начинающий",
      price: "4,990 ₽",
      features: [
        "Знакомство с Roblox Studio",
        "Создание базовых объектов",
        "Работа с материалами и текстурами",
        "Публикация игры"
      ]
    },
    {
      id: 2,
      title: "Программирование на Lua",
      description: "Освойте язык Lua для создания игровой логики в Roblox",
      duration: "6 недель",
      level: "Продвинутый",
      price: "7,990 ₽",
      features: [
        "Синтаксис языка Lua",
        "Работа с переменными и функциями",
        "События и обработчики",
        "Создание интерактивных элементов"
      ]
    },
    {
      id: 3,
      title: "Создание многопользовательских игр",
      description: "Разработайте полноценную многопользовательскую игру",
      duration: "8 недель",
      level: "Эксперт",
      price: "12,990 ₽",
      features: [
        "Сетевое программирование",
        "Система игроков",
        "Чаты и коммуникация",
        "Монетизация игры"
      ]
    }
  ];

  return (
    <div className="services">
      <div className="services__container">
        <header className="services__header">
          <h1 className="services__title">Наши курсы</h1>
          <p className="services__subtitle">
            Выберите подходящий курс для изучения программирования в Roblox
          </p>
        </header>

        <div className="courses">
          <div className="courses__grid">
            {courses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-card__header">
                  <h3 className="course-card__title">{course.title}</h3>
                  <span className={`course-card__level course-card__level--${course.level.toLowerCase()}`}>
                    {course.level}
                  </span>
                </div>
                
                <p className="course-card__description">
                  {course.description}
                </p>

                <div className="course-card__info">
                  <div className="course-card__duration">
                    <span className="course-card__icon">⏱️</span>
                    {course.duration}
                  </div>
                  <div className="course-card__price">
                    {course.price}
                  </div>
                </div>

                <ul className="course-card__features">
                  {course.features.map((feature, index) => (
                    <li key={index} className="course-card__feature">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="btn btn--primary course-card__btn">
                  Записаться на курс
                </Link>
              </div>
            ))}
          </div>
        </div>

        <section className="services__info">
          <h2 className="services__info-title">Что вы получите</h2>
          <div className="services__benefits">
            <div className="benefit">
              <div className="benefit__icon">📚</div>
              <h3 className="benefit__title">Методические материалы</h3>
              <p className="benefit__description">
                Полный набор уроков, примеров кода и дополнительных материалов
              </p>
            </div>
            <div className="benefit">
              <div className="benefit__icon">👥</div>
              <h3 className="benefit__title">Поддержка сообщества</h3>
              <p className="benefit__description">
                Закрытый чат для учеников, где вы можете задавать вопросы
              </p>
            </div>
            <div className="benefit">
              <div className="benefit__icon">🏆</div>
              <h3 className="benefit__title">Сертификат</h3>
              <p className="benefit__description">
                По окончании курса вы получите сертификат о прохождении
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;