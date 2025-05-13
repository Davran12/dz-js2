class Student {
  constructor(name, grades) {
    this.name = name
    this.grades = grades
  }

  getAverageGrade() {
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0)
    return sum / this.grades.length
  }
}

const student = new Student("Bob", [5, 4, 3, 5])
console.log("Задача 8:", student.getAverageGrade())
