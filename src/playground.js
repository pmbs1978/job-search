// const fruits = ['orange', 'banana', 'pineaplle'];
// const vegetables = ['tomato', 'radish'];

// // combine 2 arrays

// const mixed = [...fruits, ...vegetables];

// console.log(mixed);

// const developer = {
//   salary: 1000,
//   experience: 4.5,
//   techStack: ['Vue', 'html', 'css'],
//   lookingForWork: true,
//   doubleSalary() {
//     this.salary = this.salary * 2;
//     this.lookingForWork = false;
//   }
// };

// console.log(developer);

// console.log(developer.salary);

// developer.doubleSalary();

// console.log(developer);

// export const evenOrOdd = (number) => {
//   if (number % 2 === 0) {
//     return 'even'
//   } else {
//     return 'odd'
//   }
// }

// export const multiply = (number1, number2) => number1 * number2

// const numbers = [1, 2, 3, 4, 5]

// const squareNumbers = numbers.map(number => number * number)

// console.log(squareNumbers)

// const names = ['PEDRO', 'DUARTE', 'CAROLINA', 'MATILDE']

// const lowNames = names.map((name) => {
//     return name.toLowerCase()
// })

// console.log(lowNames)

const favoriteFood = 'sushi';

const WrongGoodFoods = {
  favoriteFood: true
};

const goodFoods = {
  [favoriteFood]: true
};

console.log(WrongGoodFoods);

console.log(goodFoods);
