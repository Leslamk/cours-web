// 1. Type Student
type Student = {
  lastName: string;
  firstName: string;
  age: number;
  scores: number[];
};

// 2. Moyenne d'un étudiant (avec reduce)
function averageScore(student: Student): number {
  if (student.scores.length === 0) return 0;
  const total = student.scores.reduce((acc, score) => acc + score, 0);
  return total / student.scores.length;
}

// 3. Étudiant avec la note la plus haute
function bestStudent(students: Student[]): Student | undefined {
  let best: Student | undefined = undefined;
  let bestScore = -Infinity;
  for (const student of students) {
    const top = Math.max(...student.scores);
    if (top > bestScore) {
      bestScore = top;
      best = student;
    }
  }
  return best;
}

// 4. Type Grade (note + coefficient) et moyenne pondérée
type Grade = {
  score: number;
  coefficient: number;
};

type GradedStudent = Omit<Student, "scores"> & { scores: Grade[] };

function weightedAverage(student: GradedStudent): number {
  const totalCoef = student.scores.reduce((acc, g) => acc + g.coefficient, 0);
  if (totalCoef === 0) return 0;
  const total = student.scores.reduce((acc, g) => acc + g.score * g.coefficient, 0);
  return total / totalCoef;
}

const students: Student[] = [
  { lastName: "Martin", firstName: "Léa", age: 21, scores: [12, 15, 14] },
  { lastName: "Durand", firstName: "Tom", age: 22, scores: [9, 18, 11] },
];
console.log("moyenne Léa :", averageScore(students[0]));
console.log("meilleur étudiant :", bestStudent(students)?.firstName);

const graded: GradedStudent = {
  lastName: "Martin",
  firstName: "Léa",
  age: 21,
  scores: [
    { score: 12, coefficient: 2 },
    { score: 15, coefficient: 1 },
    { score: 14, coefficient: 3 },
  ],
};
console.log("moyenne pondérée Léa :", weightedAverage(graded));