import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">CodeSchool</h3>
            <p className="footer__description">
              Онлайн школа программирования для детей и взрослых. 
              Изучайте Roblox и создавайте собственные игры!
            </p>
          </div>
          <div className="footer__section">
            <h4 className="footer__subtitle">Контакты</h4>
            <p className="footer__info">Email: info@codeschool.ru</p>
            <p className="footer__info">Телефон: +7 (999) 123-45-67</p>
          </div>
          <div className="footer__section">
            <h4 className="footer__subtitle">Курсы</h4>
            <p className="footer__info">Roblox Studio</p>
            <p className="footer__info">Lua программирование</p>
            <p className="footer__info">Создание игр</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2025 CodeSchool. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;