let meals = [];
let currentMealFoods = [];

const mealForm = document.getElementById('mealForm');
const mealList = document.getElementById('mealList');
const foodForm = document.getElementById('foodForm');
const foodList = document.getElementById('foodList');

mealForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const mealName = document.getElementById('mealName').value;
    const mealDescription = document.getElementById('mealDescription').value;

    if (mealName && mealDescription && currentMealFoods.length > 0) {
        const meal = {
            id: Date.now(),
            name: mealName,
            description: mealDescription,
            foods: currentMealFoods.slice() // Copia os alimentos atuais para a refeição
        };

        meals.push(meal);
        renderMeals();
        resetMealForm();
    } else {
        alert('Preencha todos os campos e adicione pelo menos um alimento.');
    }
});

function addFood() {
    const foodName = document.getElementById('foodName').value;
    const foodDescription = document.getElementById('foodDescription').value;

    if (foodName && foodDescription) {
        const food = {
            id: Date.now(),
            name: foodName,
            description: foodDescription
        };

        currentMealFoods.push(food);
        renderFoods();
        foodForm.reset();
    }
}

function renderFoods() {
    foodList.innerHTML = '';
    currentMealFoods.forEach(function(food) {
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');
        foodItem.innerHTML = `
            <h4>${food.name}</h4>
            <p>${food.description}</p>
            <button onclick="deleteFood(${food.id})">Excluir</button>
        `;
        foodList.appendChild(foodItem);
    });
}

function deleteFood(id) {
    currentMealFoods = currentMealFoods.filter(function(food) {
        return food.id !== id;
    });
    renderFoods();
}

function renderMeals() {
    mealList.innerHTML = '';
    meals.forEach(function(meal) {
        const mealItem = document.createElement('div');
        mealItem.classList.add('meal-item');
        mealItem.innerHTML = `
            <h2>${meal.name}</h2>
            <p>${meal.description}</p>
            <h3>Alimentos:</h3>
            <ul>
                ${meal.foods.map(food => `<li>${food.name}: ${food.description}</li>`).join('')}
            </ul>
            <button onclick="deleteMeal(${meal.id})">Excluir Refeição</button>
        `;
        mealList.appendChild(mealItem);
    });
}

function deleteMeal(id) {
    meals = meals.filter(function(meal) {
        return meal.id !== id;
    });
    renderMeals();
}

function resetMealForm() {
    document.getElementById('mealName').value = '';
    document.getElementById('mealDescription').value = '';
    currentMealFoods = [];
    renderFoods();
}
