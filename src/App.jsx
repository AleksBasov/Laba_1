// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import './App.css'
function App(){
const [isBanned, setIsBanned] = useState(false);

function handleBan () {
  setIsBanned(true);
};

function handleUnban()  {
  setIsBanned(false);
};

return (
  <div>
    <h1>{isBanned ? 'Пользователь забанен' : 'Пользователь не забанен'}</h1>
    <button onClick={handleBan} disabled={isBanned}>
      Забанить пользователя
    </button>
    <button onClick={handleUnban} disabled={!isBanned}>
      Разбанить пользователя
    </button>
  </div>
)
}

export default App;



