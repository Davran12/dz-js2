// 1. for – Простой перебор массива
// Условие:
// Дан массив чисел. Найти сумму всех элементов массива.

function firstTask(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
}

console.log(firstTask([1, 2, 3, 4, 5])) // => 15

// 2. for – Поиск максимального элемента
// Условие:
// Дан массив чисел. Найти максимальное значение в массиве.

function secondTask(array) {
  let max = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  return max
}

console.log(secondTask([1, 2, 3, 4, 5])) // => 5

// 3. while – Подсчет цифр в числе
// Условие:
// Дано число. Посчитать количество цифр в этом числе.

function thirdTask(number) {
  let count = 0
  number = Math.abs(number)
  while (number >= 1) {
    count++
    number = Math.floor(number / 10)
  }
  return count
}

console.log(thirdTask(12345)) // => 5

// 4. while – Поиск первого четного числа
// Условие:
// Дан массив чисел. Найти первое четное число и вывести его.

function fourthTask(array) {
  let i = 0
  while (i < array.length) {
    if (array[i] % 2 === 0) {
      return array[i]
    }
    i++
  }
  return null
}

console.log(fourthTask([1, 3, 5, 8, 9, 10])) // => 8

// 5. for...in – Подсчет свойств объекта
// Условие:
// Дан объект. Посчитать количество его свойств у которых значение string.

function fifthTask(object) {
  let count = 0
  for (let key in object) {
    if (typeof object[key] === "string") {
      count++
    }
  }
  return count
}

console.log(
  fifthTask({
    name: "Alice",
    age: 25,
    city: "Berlin",
    isAdmin: false,
  })
)

// 6. for...in – Поиск свойства с определенным значением
// Условие:
// Дан объект. Найти ключ, значение которого равно true.

function sixthTask(object) {
  for (let key in object) {
    if (object[key] === true) {
      return key
    }
  }
  return null
}

console.log(
  sixthTask({
    darkMode: false,
    notifications: true,
    sound: false,
  })
)

// 7. for...of – Подсчет гласных в строке
// Условие:
// Дана строка. Посчитать количество гласных букв (a, e, i, o, u).

function seventhTask(word) {
  let vowels = "aeiou"
  let count = 0
  for (let char of word) {
    if (vowels.includes(char)) {
      count++
    }
  }
  return count
}

console.log(seventhTask("Hello, world!")) // => 3

// 8. for...of – Фильтрация массива по условию
// Условие:
// Дан массив чисел. Создать новый массив только из четных чисел.

function eightTask(array) {
  let result = []
  for (let num of array) {
    if (num % 2 === 0) {
      result.push(num)
    }
  }
  return result
}

console.log(eightTask([1, 2, 3, 4, 5, 6])) // => [2, 4, 6]
