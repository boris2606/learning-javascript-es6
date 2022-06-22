// Появлення блоків
let block1 = document.querySelector('.first')
let block2 = document.querySelector('.two')
let block3 = document.querySelector('.three')
let block4 = document.querySelector('.four')
let block5 = document.querySelector('.five')
let block6 = document.querySelector('.six')
let block7 = document.querySelector('.seven')
let block8 = document.querySelector('.eight')
let block9 = document.querySelector('.nine')
let block10 = document.querySelector('.ten')
let block11 = document.querySelector('.eleven')
let block12 = document.querySelector('.twelve')
let block13 = document.querySelector('.thirteen')
let block14 = document.querySelector('.forteen')

let arrBlock = [block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14]

function showWithDelay(arrBlock) {
    for (let i = 0; i < arrBlock.length; i++) {
        setTimeout(() => { arrBlock[i].classList.add('fadeIn')}, 1 * i);
    }
}
showWithDelay(arrBlock);
// Завершення коду появи блоків

// class Student {
//     constructor(name,age,lang){
//         this.name = name
//         this.age = age
//         this.lang = lang
//     }
//     greet(){
//         console.log(`Hellow Mr.${this.name}, I'm ${this.age} years old, and i'm from ${this.lang}`);
//     }
// }
// const student = Reflect.construct(Student, ['Boris', 29, 'UA'])
// Reflect.preventExtensions(student)
// console.log(Reflect.isExtensible(student));
// student.greet()