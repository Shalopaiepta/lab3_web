import React, { useState, useEffect } from 'react';
import axios from 'axios'; // 1. Импортируем axios

function Reviews() {
  // 2. Убираем const reviews = [...] и создаем состояние
  const [reviews, setReviews] = useState([]);

  // 3. Загружаем данные при монтировании
  useEffect(() => {
    axios.get('http://localhost:5001/api/reviews')
      .then(response => {
        setReviews(response.data); // Сохраняем в состояние
      })
      .catch(error => console.error('Ошибка при загрузке отзывов:', error));
  }, []); // [] = выполнить 1 раз

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`review__star ${index < rating ? 'review__star--filled' : ''}`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section className="reviews">
      <div className="reviews__container">
        <h2 className="reviews__title">Отзывы наших учеников</h2>
        <p className="reviews__subtitle">
          Посмотрите, что говорят о нас дети и их родители
        </p>
        
        <div className="reviews__grid">
          {/* 4. Рендерим отзывы из состояния (с бэкенда) */}
          {reviews.length > 0 ? (
            reviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="review-card__header">
                  <div className="review-card__avatar">
                    {review.avatar}
                  </div>
                  <div className="review-card__info">
                    <h4 className="review-card__name">{review.name}</h4>
                    <p className="review-card__course">{review.course}</p>
                  </div>
                  <div className="review-card__rating">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                <p className="review-card__text">
                  "{review.text}"
                </p>
              </div>
            ))
          ) : (
            // 5. Показываем заглушку, пока данные грузятся
            <p>Загрузка отзывов...</p>
          )}
        </div>

        <div className="reviews__stats">
          <div className="review-stat">
            <div className="review-stat__number">500+</div>
            <div className="review-stat__text">Довольных учеников</div>
          </div>
          <div className="review-stat">
            <div className="review-stat__number">4.9</div>
            <div className="review-stat__text">Средняя оценка</div>
          </div>
          <div className="review-stat">
            <div className="review-stat__number">1000+</div>
            <div className="review-stat__text">Созданных игр</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;