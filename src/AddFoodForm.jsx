import { useState } from 'react';

export default function AddFoodForm({createFood}){
    
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);
  
    const buttonHandler = (e) => {
            e.preventDefault()
            
            let newFood = {
                // _id: Math.round(Math.random() * 10000000000000000000000),
                name,
                image,
                calories,
                servings,
              };

        console.log(newFood)
        createFood(newFood);
}

    return (
        <form>
            <h3>Create new food</h3>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e)=>
    setName(e.target.value)}/>

            <label htmlFor="image">Image</label>
            <input type="text" id="image" value={image} onChange={(e)=>
    setImage(e.target.value)}/>

            <label htmlFor="calories">Calories</label>
            <input type="number" id="calories" value={calories} onChange={(e) => {
    setCalories(e.target.value)}}/>

            <label htmlFor="servings">Servings</label>
            <input type="number" id="servings" value={servings} onChange={(e) => {
    setServings(e.target.value)}}/>

            <button onClick={buttonHandler}>create food</button>
        </form>)
}