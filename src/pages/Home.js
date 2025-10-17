import React from 'react';
import { Link } from 'react-router-dom';
import Reviews from '../components/Reviews';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <h1 className="hero__title">
              Изучайте программирование в Roblox
            </h1>
            <p className="hero__subtitle">
              Создавайте собственные игры и миры в популярной платформе Roblox. 
              Онлайн обучение для детей и взрослых с нуля до профессионального уровня.
            </p>
            <div className="hero__buttons">
              <Link to="/services" className="btn btn--primary">
                Наши курсы
              </Link>
              <Link to="/contact" className="btn btn--secondary">
                Записаться
              </Link>
            </div>
          </div>
          <div className="hero__image">
            <div className="hero__placeholder">
              🎮 ROBLOX STUDIO
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features__container">
          <h2 className="features__title">Почему выбирают нас?</h2>
          <div className="features__grid">
            <div className="feature-card">
              <div className="feature-card__icon">👨‍💻</div>
              <h3 className="feature-card__title">Опытные преподаватели</h3>
              <p className="feature-card__description">
                Наши учителя - практикующие разработчики игр в Roblox
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">🎯</div>
              <h3 className="feature-card__title">Практический подход</h3>
              <p className="feature-card__description">
                Создавайте реальные проекты с первого урока
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">⏰</div>
              <h3 className="feature-card__title">Гибкий график</h3>
              <p className="feature-card__description">
                Обучайтесь в удобное время в онлайн формате
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />
    </div>
  );
}

export default Home;