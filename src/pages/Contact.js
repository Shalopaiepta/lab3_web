import React, { useState } from 'react';
import axios from 'axios'; // 1. Импортируем axios

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    age: '',
    experience: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 2. Делаем handleSubmit асинхронным
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // 3. Отправляем данные на бэкенд
      // Убедись, что бэкенд запущен на 5001
      const response = await axios.post(
        'http://localhost:5001/api/applications', 
        formData // axios сам превратит это в JSON
      );

      // (Этот console.log можно оставить для отладки)
      console.log('Сервер ответил:', response.data);
      
      setSubmitted(true);
      
      // Сброс формы через 3 секунды
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: '',
          age: '',
          experience: '',
          message: ''
        });
      }, 3000);

    } catch (error) {
      console.error('Ошибка при отправке заявки:', error);
      // Если бэкенд упал или выключен, мы увидим ошибку здесь
      alert('Произошла ошибка при отправке. Попробуйте позже.');
    }
  };

  if (submitted) {
    return (
      <div className="contact">
        <div className="contact__container">
          <div className="contact__success">
            <div className="contact__success-icon">✅</div>
            <h2 className="contact__success-title">Заявка отправлена!</h2>
            <p className="contact__success-message">
              Спасибо за интерес к нашей школе программирования. 
              Мы свяжемся с вами в течение 24 часов.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact">
      <div className="contact__container">
        <header className="contact__header">
          <h1 className="contact__title">Записаться на курс</h1>
          <p className="contact__subtitle">
            Заполните форму ниже, и мы свяжемся с вами для подбора подходящего курса
          </p>
        </header>

        <div className="contact__content">
          <div className="contact__form-section">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form__group">
                <label className="form__label" htmlFor="name">
                  Имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form__input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Введите ваше имя"
                />
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="email">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form__input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@email.com"
                />
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="phone">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form__input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="course">
                  Интересующий курс *
                </label>
                <select
                  id="course"
                  name="course"
                  className="form__select"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Выберите курс</option>
                  <option value="basics">Основы Roblox Studio</option>
                  <option value="lua">Программирование на Lua</option>
                  <option value="multiplayer">Многопользовательские игры</option>
                  <option value="all">Все курсы</option>
                </select>
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="age">
                  Возраст
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  className="form__input"
                  value={formData.age}
                  onChange={handleChange}
                  min="8"
                  max="100"
                  placeholder="Укажите ваш возраст"
                />
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="experience">
                  Опыт программирования
                </label>
                <select
                  id="experience"
                  name="experience"
                  className="form__select"
                  value={formData.experience}
                  onChange={handleChange}
                >
                  <option value="">Выберите уровень</option>
                  <option value="none">Нет опыта</option>
                  <option value="beginner">Начинающий</option>
                  <option value="intermediate">Средний</option>
                  <option value="advanced">Продвинутый</option>
                </select>
              </div>

              <div className="form__group">
                <label className="form__label" htmlFor="message">
                  Дополнительная информация
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form__textarea"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Расскажите о ваших целях и ожиданиях от курса"
                />
              </div>

              <button type="submit" className="btn btn--primary btn--large">
                Отправить заявку
              </button>
            </form>
          </div>

          <div className="contact__info">
            <div className="contact__card">
              <h3 className="contact__card-title">Наши преимущества</h3>
              <ul className="contact__advantages">
                <li className="contact__advantage">
                  <span className="contact__advantage-icon">🎯</span>
                  Индивидуальный подход к каждому ученику
                </li>
                <li className="contact__advantage">
                  <span className="contact__advantage-icon">⚡</span>
                  Быстрый старт - первые результаты за неделю
                </li>
                <li className="contact__advantage">
                  <span className="contact__advantage-icon">🏆</span>
                  Сертификат по окончании курса
                </li>
                <li className="contact__advantage">
                  <span className="contact__advantage-icon">💬</span>
                  Поддержка 24/7 в чате учеников
                </li>
              </ul>
            </div>

            <div className="contact__card">
              <h3 className="contact__card-title">Контакты</h3>
              <div className="contact__details">
                <div className="contact__detail">
                  <span className="contact__detail-icon">📧</span>
                  <span className="contact__detail-text">info@codeschool.ru</span>
                </div>
                <div className="contact__detail">
                  <span className="contact__detail-icon">📱</span>
                  <span className="contact__detail-text">+7 (999) 123-45-67</span>
                </div>
                <div className="contact__detail">
                  <span className="contact__detail-icon">⏰</span>
                  <span className="contact__detail-text">Пн-Пт: 9:00 - 21:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;