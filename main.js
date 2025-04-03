const students = [
  {name: "Иван", age: 21, scores: [90, 85, 88]},
  {name: "Мария", age: 23, scores: [78, 82, 80]},
  {name: "Пётр", age: 20, scores: [92, 88, 95]},
]

for (let i = 0; i < students.length; i++) {
  const student = students[i]
  const scores = student.scores

  let total = 0
  for (let j = 0; j < scores.length; j++) {
    total += scores[j]
  }

  const dav1 = total / scores.length
  console.log(dav1)

  if (dav1 > 85) {
      console.log(`${student.name}: ${dav1}`)
  }
}
