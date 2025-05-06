const purchases = [
  {name: "Книга", price: 500, quantity: 2},
  {name: "Ручка", price: 30, quantity: 5},
  {name: "Наушники", price: 1500, quantity: 1},
]

let total = 0

purchases.forEach((item) => {
  const itemTotal = item.price * item.quantity
  console.log(`${item.name}: ${item.quantity} × ${item.price} = ${itemTotal}`)
  total += itemTotal
})

console.log(`Итоговая сумма: ${total}`)

const numbers = [10, 15, 7, 20, 33, 2]

const result = numbers.reduce(
  (acc, num) => {
    if (num % 2 === 0) {
      acc.evenSum += num
    } else {
      acc.oddSum += num
    }
    return acc
  },
  {evenSum: 0, oddSum: 0}
)

console.log(`Сумма чётных: ${result.evenSum}`)
console.log(`Сумма нечётных: ${result.oddSum}`)
