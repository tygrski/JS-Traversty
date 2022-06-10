// console msgs
// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is a warning');

// variables = var, let, const. var is globalscoped
// let can be reassigned
// const is short for constant, cant be changed
// use const unless you know you will reassign
// let age = 30;
// age = 44;
// console.log(age)

// let score;

// score = 13;

// console.log(score);

// datatypes
// strings, numbers, boolean, null, undefined

// const name = 'John';
// const age= 25;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
//  let z; is same as let z = undefined;
// let z;

// console.log(typeof z);

// const name = 'John';
// const age= 25;

// concatenation
// console.log('My name is ' + name + 'and I am ' + age);
// const hello = (`My name is ${name} and I am ${age}`);
// console.log(hello);

// const s = 'hello world';
// console.log(s.length);
// console.log(s.toLocaleUpperCase());
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(''));

// const s = "technology, computers, it, code";

// console.log(s.split(', '));

// =============================================

// ARRAYS - VARIABLES THAT HOLD MULTIPLE VALUES
// const numbers = new Array(1,2,3,4,5);

// console.log(numbers);
// const fruits = ['apples', 'oranges', 'pears'];

// fruits[3] = 'grapes';
// push adds to end
// fruits.push('mangos')
// unshift to begenning
// fruits.unshift('strawbwrries');
// pop deletes last item 'mangoes'
// fruits.pop();
// check to see if is an array
// console.log(Array.isArray(fruits))
// will be false
// console.log(Array.isArray('fruits'))
// console.log(fruits.indexOf('oranges'));

// console.log(fruits);

// =============================================

// Object Literals - key value pairs
// const person = {
//     fisrtName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// console.log(person.address.city);
// const {fisrtName, lastName, address:{city}} = person;

// console.log(city);

// person.email = 'john@mail.com';

// console.log(person);

// =============================================

// const todos = [
//     {
//         id: 1,
//         text: 'Take out the trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appot',
//         isCompleted: false
//     }
// ];

// console.log(todos[0].text);

// json
// const todos = [
//     {
//         id: 1,
//         text: 'Take out the trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appot',
//         isCompleted: false
//     }
// ];

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// =============================================

// for loops
// const todos = [
//     {
//         id: 1,
//         text: 'Take out the trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appot',
//         isCompleted: false
//     }
// ];

// =============================================

// for(i=0; i < 10; i++){
//     console.log(`for loop number: ${i}`)
// };

// =============================================

// while
// let i = 0;
// while(i < 10) {
//     console.log(`while loop number: ${i}`)
//     i++;
// }

// =============================================

// loop though array
// const todos = [
//   {
//     id: 1,
//     text: "Take out the trash",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Meeting with boss",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "Dentist appot",
//     isCompleted: false,
//   },
// ];

// for (i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// for(let todo of todos){
//     console.log(todo.text)
// }


// for(let todo of todos){
//     console.log(todo.id)
// }

// =============================================

// forEach, map, filter
// todos.forEach(function(anything){
//     console.log(anything.text)
// });

// returns a new array of just text
// const todoText = todos.map(function(todo){
//     return todo.text
// });

// console.log(todoText)

// filter, showing what todos have been comleted(true)
// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// });

// console.log(todoCompleted)

// mapping though the filtered  Completed results seen in function above
// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text
// })

// console.log(todoCompleted)

// =============================================

// Conditionals

// x = 4;

// if(x > 5){
//     console.log('x is ten')
// } else if(x > 10){
//     console.log('x is greater than 10')
// } else {
//     console.log('x less than 10')
// }
// -------------------------------
//  || = or , && and/both
// x = 6;
// y = 11;

// if(x > 5 || y  > 10){
//     console.log('x is more than 5 or y is more than 10')
// } 

// if(x > 5 && y  > 10){
//     console.log('x is more than 5 and y is more than 10')
// } 
// =======================================
// terany operator  ? = then, : = else

// const x = 9;

// const color = x > 10 ? 'red' : 'blue';
// console.log(color);
// === Switch
// const x = 9;

// const color = x > 10 ? 'red' : 'blue';

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not red or blue');
//         break;
// }
// =============================================
//  functions
// function addNums(num1 = 1, num2 =1) {
//     return num1 + num2;
// }

// console.log(addNums(5, 5));
// =Arrow========================
// const  addNums = (num1, num2) =>  num1 + num2;

//  console.log(addNums(5, 5));

// ==== OOP - object oriented programming ==========================
// constructor function
// function Person (fristName, lastName, dob) {
//  this.fristName = fristName;
//  this.lastName = lastName;
//  this.dob = new Date(dob);
//  this.getBirthYear = function() {
//      return this.dob.getFullYear();
//  }
//  this.getFullName = function() {
//      return `${this.fristName} ${this.lastName}`
//  }
// } 

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function () {
//     return `${this.fristName} ${this.lastName}`
// }

// Class

// class Person {
//     constructor(fristName, lastName, dob)  {
//         this.fristName = fristName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.fristName} ${this.lastName}`
//     }
// }

// instantiate object
// const person1 = new Person('John', 'Doe', '4-4-1939');
// const person2 = new Person('Jen', 'Mill', '5-6-1966');

// console.log(person1.dob.getFullYear());


// console.log(person2.getFullName());
// console.log(person1);

// ==== the DOM =================================================

// console.log(window);

// single element selectors 

// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// Multiple element selectors
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// ----------------------------
//  changing things in the DOM
// const ul = document.querySelector('.items');
// remove all items
// ul.remove();

// remove last item
// ul.lastElementChild.remove();

// edit content
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML
// = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

//  EVENTS
// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseout', (e) =>{
//     e.preventDefault();
//  document.querySelector('#my-form').style.background = '#ccc';
//  document.querySelector('body').classList.add('bg-dark');
//  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// });

// DOM to vaiables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msgm = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

   if(nameInput.value === '' || emailInput.value === '') {
       msgm.classList.add('error');
      msgm.innerHTML = 'enter info';


      setTimeout(() => msgm.remove(), 3000)
   }else {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
//   append the li to the UL
    userList.appendChild(li);

    // clear fields
    nameInput.value = '';
    emailInput.value = '';
    }
};
