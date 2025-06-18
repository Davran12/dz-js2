const regex = /^\+\d{1,3}[- ]?\d{6,12}$/

console.log(regex.test("+1 1234567890"))
console.log(regex.test("+380-987654321"))
console.log(regex.test("+44 12345678"))
console.log(regex.test("+1234 567890"))
console.log(regex.test("+12_34567890"))
//--------------------------------------------------
const text =
  "Today is #sunny! I love #Summer2024 and #coding. #123 is cool, but ##notvalid"

console.log(text.match(/(?<=\s|^)(#[a-zA-Z0-9]+)\b/g))
