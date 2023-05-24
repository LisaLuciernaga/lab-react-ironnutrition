export default function AddFoodForm({nameHandler, imageHandler, caloriesHandler, servingsHandler, createFood}){

    
    // let name ='';
    // let image = '';
    // let calories = 0;
    // let servings = 1;
    return <form>
            <h3>Create new food</h3>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={setName} onChange={nameHandler}/>

            <label htmlFor="image">Image</label>
            <input type="text" id="image" value={image} onChange={imageHandler}/>

            <label htmlFor="calories">Calories</label>
            <input type="number" id="calories" value={calories} onChange={caloriesHandler}/>

            <label htmlFor="servings">Servings</label>
            <input type="number" id="servings" value={servings} onChange={servingsHandler}/>

            <button onClick={createFood}>create food</button>
        </form>
}