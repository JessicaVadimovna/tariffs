import React, { useState } from 'react';
import './App.css';
import Tariff from './components/Tariff';

const tariffs = [
  { id: 1, name: 'Безлимитный 300', price: 300, speed: 10 },
  { id: 2, name: 'Безлимитный 450', price: 450, speed: 50 },
  { id: 3, name: 'Безлимитный 550', price: 550, speed: 100 },
  { id: 4, name: 'Безлимитный 1000', price: 1000, speed: 200 },
];

const App = () => {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const handleSelectTariff = (id) => {
    setSelectedTariff(id);
  };

  return (
    <div className="App">
      <div className="tariffs">
        {tariffs.map((tariff) => (
          <Tariff
            key={tariff.id}
            name={tariff.name}
            price={tariff.price}
            speed={tariff.speed}
            isSelected={selectedTariff === tariff.id}
            onSelect={() => handleSelectTariff(tariff.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;






