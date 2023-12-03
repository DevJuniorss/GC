const foodForm = document.getElementById('foodForm');
const foodList = document.getElementById('foodList');

let foods = [];

foodForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    if (name && description) {
        const food = {
            id: Date.now(),
            name,
            description
        };

        foods.push(food);
        renderFoods();
        foodForm.reset();
    }
});

function renderFoods() {
    foodList.innerHTML = '';
    foods.forEach(function(food) {
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');
        foodItem.innerHTML = `
            <h3>${food.name}</h3>
            <p>${food.description}</p>
            <button onclick="deleteFood(${food.id})">Excluir</button>
        `;
        foodList.appendChild(foodItem);
    });
}

function deleteFood(id) {
    foods = foods.filter(function(food) {
        return food.id !== id;
    });
    renderFoods();
}
