// =========вариант 1==============

const btnPlusRef = document.querySelector('[data-action="increment"]')
const btnMinusRef = document.querySelector('[data-action="decrement"]')
const spanRef = document.querySelector('#value')

let count = 0
btnPlusRef.addEventListener('click', () => { count += 1; return spanRef.textContent = count })
btnMinusRef.addEventListener('click', () => { count -= 1; return spanRef.textContent = count })

// =========вариант 2==============

// const btnPlusRef = document.querySelector('[data-action="increment"]')
// const btnMinusRef = document.querySelector('[data-action="decrement"]')
// const spanRef = document.querySelector('#value')

// class Count {
//     constructor() {
//         this.count = 0
//     }
//     addIncrement() {
//         this.count += 1;
//         spanRef.textContent = this.count
//     }
//     addDecrement() {
//         this.count -= 1;
//         spanRef.textContent = this.count
//     }
// }

// const result = new Count()

// btnPlusRef.addEventListener('click', () => result.addIncrement())
// btnMinusRef.addEventListener('click', () => result.addDecrement())