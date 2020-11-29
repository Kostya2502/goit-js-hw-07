// =========вариант 1==============
// const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

// const ingredientsRef = document.querySelector('#ingridients')
// const potatoRef = document.createElement('li')
// potatoRef.textContent = 'Картошка'
// const mushroomRef = document.createElement('li')
// mushroomRef.textContent = 'Грибы'
// const garlicRef = document.createElement('li')
// garlicRef.textContent = 'Чеснок'
// const tomatoRef = document.createElement('li')
// tomatoRef.textContent = 'Помидоры'
// const greensRef = document.createElement('li')
// greensRef.textContent = 'Зелень'
// const seasoningsRef = document.createElement('li')
// seasoningsRef.textContent = 'Приправы'

// ingredientsRef.append(potatoRef, mushroomRef, garlicRef, tomatoRef, greensRef, seasoningsRef)
// console.log(ingredientsRef);

// =========вариант 2==============
const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const ingredientsRef = document.querySelector('#ingridients')

const makeListItems = (ingredients) => {
    return ingredients.map(ingredient => {
        const listItemEl = document.createElement("li");
        listItemEl.textContent = ingredient;
        return listItemEl;
    });
};

const items = makeListItems(ingredients);
ingredientsRef.append(...items);