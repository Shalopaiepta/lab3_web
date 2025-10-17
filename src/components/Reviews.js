import React from 'react';

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Алексей, 14 лет",
      course: "Основы Roblox Studio",
      rating: 5,
      text: "Супер курс! Теперь я умею создавать свои игры в Roblox. Учителя объясняют очень понятно, а задания интересные. Уже сделал свою первую игру про паркур!",
      avatar: "👦"
    },
    {
      id: 2,
      name: "Мария, 16 лет",
      course: "Программирование на Lua",
      rating: 5,
      text: "Отличная школа! Изучила Lua и теперь могу программировать сложные механики для игр. Особенно понравились уроки про создание квестов и систему инвентаря.",
      avatar: "👧"
    },
    {
      id: 3,
      name: "Дмитрий, 12 лет",
      course: "Основы Roblox Studio",
      rating: 4,
      text: "Мне очень понравилось учиться! Сначала было сложно, но преподаватели помогали. Теперь я могу строить крутые миры и добавлять в них разные предметы.",
      avatar: "🧒"
    },
    {
      id: 4,
      name: "Анна, родитель",
      course: "Отзыв родителя",
      rating: 5,
      text: "Ребенок в восторге от курсов! Видно, как он увлечен и с каждым днем узнает что-то новое. Преподаватели профессиональные, всегда на связи. Рекомендую!",
      avatar: "👩"
    }
  ];

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
          {reviews.map(review => (
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
          ))}
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