export default function FoodBox(food){

    let {name, calories, image, servings} = food.food;
   let totalCalories = calories*servings

    return <div style={{ width: 230, height: 300, margin: 10 }}>
      <h2>{name}</h2>
      <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {totalCalories} </b> kcal
        </p>
        <button type="primary"> Delete </button>
    </div>
}