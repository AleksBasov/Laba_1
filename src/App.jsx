// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import './App.css'
const App = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
    const handleChange = (index, value) => {
      const newNumbers = [...numbers];
      newNumbers[index] = Number(value);
      setNumbers(newNumbers);
    };
  
    const calculateAverage = () => {
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      return (sum / numbers.length).toFixed(2); 
    };
  
    return (
      <div>
        {numbers.map((num, index) => (
          <div key={index}>
            <input
              value={num}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </div>
        ))}
        <h2>Среднее арифметическое: {calculateAverage()}</h2>
      </div>
    );
  };

export default App;



