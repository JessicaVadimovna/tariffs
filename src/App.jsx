import React from 'react';
import './Tariffs.css'; // Создайте этот CSS файл для стилизации

// Компонент Tariff
const Tariff = ({ title, price, speed, highlight }) => {
  return (
    <div className={`tariff ${highlight ? 'highlight' : ''}`}>
      <div className="tariff-title">{title}</div>
      <div className="tariff-price">{price} /мес</div>
      <div className="tariff-speed">до {speed} Мбит/сек</div>
      <div className="tariff-traffic">Объем включенного трафика не ограничен</div>
    </div>
  );
};

// Компонент списка тарифов
const Tariffs = () => {
  const tariffs = [
    { title: 'Безлимитный 300', price: 300, speed: 10 },
    { title: 'Безлимитный 450', price: 450, speed: 50 },
    { title: 'Безлимитный 550', price: 550, speed: 100, highlight: true },
    { title: 'Безлимитный 1000', price: 1000, speed: 200 },
  ];

  return (
    <div className="tariffs">
      {tariffs.map((tariff, index) => (
        <Tariff
          key={index}
          title={tariff.title}
          price={`руб ${tariff.price}`}
          speed={tariff.speed}
          highlight={tariff.highlight}
        />
      ))}
    </div>
  );
};

export default Tariffs;



