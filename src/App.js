// src/App.js
import './App.css';
import foods from "./foods.json";
import { useState } from 'react';

console.log(foods[0].image)


function App () {
  const [food, setFood] = useState(foods);
  return <div className="App">
    <ul>
     {food.map(item => <div><p>{item.name}</p><img src={item.image} width={100}/></div> )}
    </ul>
  </div>;
}
export default App;