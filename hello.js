'use strict'; // Used for protection against double declarations, etc..

// variables
let sum = 0

for (let i = 0; i < 9; i++) {
  sum += 1
}

if (sum % 2 === 0) console.log('sum is even')
else console.log('sum is odd')

// Scripted functions

const a = 5
const b = 5

console.log(`Ten is ${a + b} and not ${a * b}.`)

let s = 'Hellos';
// Weak typing
console.log(`a = ${s}, "s" is ${typeof s}`)

s = 5
s += 2

console.log(`s = ${s}, "s" is ${typeof s}`)

s = true

console.log(`s = ${s}, "s" is a ${typeof s}`)

// Functions
const add = function (a, b) {
  return a + b
};

const result = add(2, 3)
console.log(result)

const anotherAdd = add
console.log(anotherAdd(12, 4))

// Exercise 4

const farToCel = function (faren) {
  return (faren - 32) * (5 / 9)
};

const conv = farToCel(0)
console.log(conv)

// Objects

// creating an object with properties
const student = {
  name: 'Zwavhu',
  Age: 22,
  studentNumber: 1110574
}

console.log(student)

console.log(
  `"Student name is: " ${student.name} "and age is: " ${student.Age}`
)

// adding a property to the class

const addHobby = function (theStudent, hobby) {
  theStudent.hobby = hobby
};

addHobby(student, 'Photography')

console.log(student)

// EXERCISE 4

const course = {
  courseCode: 'ELEN4010'
}

const course2 = {
  courseCode: 'ELEN3009'
}

const YearOffer = function (course, course2) {
  if (course.courseCode.includes('40')) course.yearOffered = 4
  else if (course2.courseCode.includes('30')) course2.yearOffered = 3
  else console.log('Course not available for that year')
};

const courseSummary = function (course) {
  console.log(`Year offered for ${course.courseCode} is ${course.yearOffered}`)
  console.log(
    `Year offered for ${course2.courseCode} is ${course2.yearOffered}`
  )
};

YearOffer(course, course2)
courseSummary(course)
console.log(course2)

// EXERCISE 6

// Creating an account object

let account = {
  name: 'Miss Zwavhudi',
  number: 1234567,
  depositAmount: 200,
  withdrawalAmount: 300,

  deposit: function () {
    return this.depositAmount
  },

  withdraw: function () {
    return this.withdrawalAmount
  },

  balance: function () {
    this.balance += this.depositAmount - this.withdrawalAmount
    return this.balance
  },

  transactionSummary: function () {
    console.log(`This account has a balance of ${this.depositAmount} `)
  }
}

// Arrays

let numbers = [76, 55.7, 89, 37.5, 61]
numbers.push(19)
numbers.unshift(61)
numbers[1] = 12
console.log(numbers)
numbers.splice(3, 1, 99)
console.log(numbers[7])

// higher-order functions and callbacks

// EXERCISE 8

// const arr = [5, 10, 15, 20]

// arr.forEach(square)

// function square (word) {
//   const newArr = []
//   newArr.push(word * word)
//   console.log(`The new array is ${newArr} `)
// }

const map = function (functionToApply, array) {
  array.forEach(functionToApply)
};

const functionToApply = function (num) {
  const newArr = []
  newArr.push(num * num)
  console.log(`The new array is ${newArr}`)
};

const array = [5, 10, 15, 20]

map(functionToApply, array)

// Object Equality

const electives = [
  {
    name: 'Helen',
    courseCode: 'ELEN4010',
    yearOffered: 4
  },
  {
    name: 'Jane',
    courseCode: 'ELEN4010',
    yearOffered: 4
  },
  {
    name: 'Joe',
    courseCode: 'ELEN4000',
    yearOffered: 3
  },
  {
    name: 'Thendo',
    courseCode: 'ELEN4000',
    yearOffered: 2
  }
]

// EXERCISE 9
console.log('Exercise 9: ')

// const deleteStudent = function (studentToErase, studentsArray) {
//   const indexOfStudent = studentsArray.findIndex(function (element) {
//     return (
//       element.name === studentToErase.name && element.age === studentToErase.age
//     )
//   })

// using arrow functions
const deleteStudent = function (studentToErase, studentsArray) {
  const indexOfStudent = studentsArray.findIndex(
    element =>
      element.name === studentToErase.name && element.age === studentToErase.age
  )

  if (indexOfStudent === -1) {
    return studentsArray
  } else {
    // delete studentsArray[indexOfStudent] ==>this returns an array with a "empty text" at position of deleted element
    studentsArray.splice(indexOfStudent, 1)

    return studentsArray
  }
}

let students1 = [
  {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4
  },
  {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 3
  },
  {
    name: 'Jade',
    studentNumber: 678343,
    yearOfStudy: 4
  },
  {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4
  }
]

const modifiedArray = deleteStudent(
  {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4
  },
  students1
)
console.log(modifiedArray)

// Arrow functions

const squareFunc = num => num * num
// console.log(squareFunc(2))

// first declare a new var and assain the array to it
const totalElect = electives
  .filter(year => year.yearOffered === 4)
  .filter(year => year.courseCode === 'ELEN4010')

// console.log(totalElect)

// EXERCISE 10

const electiveOne = {
  courseCode: 'ELEN4010',
  yearOffered: 4
}
const electiveTwo = {
  courseCode: 'ELEN4001',
  yearOffered: 4
}
const electiveThree = {
  courseCode: 'ELEN4020',
  yearOffered: 4
}
const electiveFour = {
  courseCode: 'ELEN4017',
  yearOffered: 4
}
let students = [
  {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4,
    electives: [electiveOne, electiveTwo, electiveThree]
  },
  {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 3,
    electives: [electiveOne, electiveTwo, electiveFour]
  },
  {
    name: 'Jade',
    studentNumber: 678345,
    yearOfStudy: 4,
    electives: [electiveTwo, electiveThree, electiveFour]
  },
  {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4,
    electives: [electiveOne, electiveTwo, electiveThree]
  }
]

const totalStudents = students.filter(YOS => YOS.yearOfStudy === 4)
//   .filter(elective => elective.courseCode === 'ELEN4010')
//   .map(
//     el =>
//       (el.electives = el.electives.filter(
//         elect => elect.electives === electiveOne
//       ))
//   )

// console.log(totalStudents)
