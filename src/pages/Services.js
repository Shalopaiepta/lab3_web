import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // 1. Импортируем axios

function Services() {
  // 2. Убираем const courses = [...] и создаем состояние
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // 3. Используем useEffect для загрузки данных при старте
  useEffect(() => {
    // Наш бэкенд работает на 5001 порту
    axios.get('http://localhost:5001/api/courses')
      .then(response => {
        setCourses(response.data); // Сохраняем данные с бэка в состояние
        setLoading(false);
      })
      .catch(error => {
        console.error('Ошибка при загрузке курсов:', error);
        setLoading(false);
      });
  }, []); // [] = выполнить 1 раз при монтировании

  // 4. Показываем заглушку во время загрузки
  if (loading) {
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
              <p>Загрузка курсов...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
            {/* 5. Рендерим курсы, полученные из состояния (с бэкенда) */}
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

                {/* !!! ВНИМАНИЕ !!!
                  В нашем простом бэкенде мы не стали создавать
                  отдельную таблицу для "features" (массив фич).
                  Поэтому этого поля в `course` нет, и код ниже вызовет ошибку.
                  Просто УДАЛИ или ЗАКОММЕНТИРУЙ этот блок <ul>...</ul>
                */}
                {/* <ul className="course-card__features">
                  {course.features.map((feature, index) => (
                    <li key={index} className="course-card__feature">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                */}

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