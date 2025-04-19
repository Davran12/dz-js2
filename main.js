function filterNumbers(arr) {
  let result = [...arr]

  for (let i = 0; i < result.length; i++) {
    for (let b = 0; b < result.length - 1; b++) {
      if (result[b] > result[b + 1]) {
        ;[result[b], result[b + 1]] = [result[b + 1], result[b]]
      }
    }
  }

  return result
}

console.log(filterNumbers([2, 6, 3, 1, 6, 2, 3]))
