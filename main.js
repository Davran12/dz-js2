const candidates = [
  { name: "Алексей Петров", age: 35, health: "отличное", experience: 7, education: ["МГУ", "МАИ"] },
  { name: "Елена Смирнова", age: 28, health: "хорошее", experience: 4, education: ["СПбГУ"] },
  { name: "Иван Козлов", age: 41, health: "удовлетворительное", experience: 15, education: ["МФТИ", "МГТУ"] },
  { name: "Ольга Васнецова", age: 30, health: "отличное", experience: 5, education: ["МГУ"] },
  { name: "Дмитрий Орлов", age: 45, health: "плохое", experience: 20, education: ["МАИ", "МГУ", "Калтех"] },
  { name: "Анна Жукова", age: 33, health: "хорошее", experience: 8, education: ["Бауманка"] }
];

const prestigiousUniversities = ["МГУ", "МФТИ", "Бауманка"];

const filteredCandidates = candidates.filter(candidate => {
  let hasPrestigiousEducation = false;

  for (let i = 0; i < candidate.education.length; i++) {
    for (let j = 0; j < prestigiousUniversities.length; j++) {
      if (candidate.education[i] === prestigiousUniversities[j]) {
        hasPrestigiousEducation = true;
        break;
      }
    }
    if (hasPrestigiousEducation) break;
  }

  return (
    candidate.age >= 25 &&
    candidate.age <= 40 &&
    (candidate.health === "отличное" || candidate.health === "хорошее") &&
    candidate.experience >= 5 &&
    hasPrestigiousEducation
  );
});

const result = filteredCandidates.map(candidate => {
  return `${candidate.name} (${candidate.experience} лет опыта)`;
});

console.log(result);
