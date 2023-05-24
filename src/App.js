// src/App.js
import AddFoodForm from './AddFoodForm';
import './App.css';
import FoodBox from './FoodBox';
import foods from './foods.json';
import { useState } from 'react';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const imageHandler = (e) => {
    setImage(e.target.value);
  };
  const caloriesHandler = (e) => {
    setCalories(e.target.value);
  };
  const servingsHandler = (e) => {
    setServings(e.target.value);
  };

  const createFood = (e) => {
    e.preventDefault();
    let newFood = {
      _id: Math.round(Math.random() * 10000000000000000000000),
      name: setName,
      image: setImage,
      calories: setCalories,
      servings: setServings,
    };
    setFoodList([...foodList, newFood]);
  };

  return (
    <div className="App">
      <AddFoodForm
        nameHandler={nameHandler}
        imageHandler={imageHandler}
        caloriesHandler={caloriesHandler}
        servingsHandler={servingsHandler}
        createFood={createFood}
      />

      <ul>
        {foodList.map((item) => (
          <FoodBox food={item} key={item.name} />
        ))}
      </ul>
    </div>
  );
}
export default App;
