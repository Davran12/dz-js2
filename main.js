//! Задача #1
// let sentence =
//   "The mysterious old man whispered secrets to the curious child under the moonlight."
// let words = sentence.split(" ")

// console.log(words)
// let sentence1 = words.slice(0, 9).join(" ") + "."
// let sentence2 = words.slice(0, 7).join(" ") + " under the moonlight."
// let sentence3 = words.slice(8, 11).join(" ") + " listened to the secrets."
// let sentence4 =
//   words.slice(1, 4).join(" ") + " whispered to the child under the moonlight."

// console.log(sentence1)
// console.log(sentence2)
// console.log(sentence3)
// console.log(sentence4)
// ! Задача #2
let world = ["The", "dog", "chased", "the", "across", "the  "]
let world1 = prompt("Введите слово cat")
let world2 = prompt("Введите слово yard")
world.splice(4, 1, world1)
world.push(world2)
let world4 = world.join(" ")
console.log(world4)
