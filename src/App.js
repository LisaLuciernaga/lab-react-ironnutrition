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


  const createFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  };

  return (
    <div className="App">
      <AddFoodForm
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
