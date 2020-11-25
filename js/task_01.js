const allLiRef = document.querySelectorAll('.item').length;

console.log(`В списке ${allLiRef} категории`);

// const ulRef = document.querySelector('#categories');
// console.log(ulRef.children.length);

const сategories = document.querySelectorAll('h2').forEach(element =>
    console.log(`Категория: ${element.textContent}\n Количество эл-тов: ${element.nextElementSibling.children.length}`)
)


