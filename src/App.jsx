import React, { useState } from 'react';

const App = () => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputValue1.trim() !== '' || inputValue2.trim() !== '' || inputValue3.trim() !== '') {
      setItems([...items, { text: `${inputValue1} ${inputValue2} ${inputValue3}` }]);
      setInputValue1('');
      setInputValue2('');
      setInputValue3('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue1} 
        onChange={(e) => setInputValue1(e.target.value)} 
        placeholder="Введите первое значение" 
      />
      <input 
        type="text" 
        value={inputValue2} 
        onChange={(e) => setInputValue2(e.target.value)} 
        placeholder="Введите второе значение" 
      />
      <input 
        type="text" 
        value={inputValue3} 
        onChange={(e) => setInputValue3(e.target.value)} 
        placeholder="Введите третье значение" 
      />
      <button onClick={addItem}>Добавить</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;


