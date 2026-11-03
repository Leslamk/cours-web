// Exercice 1 : échanger deux variables avec une variable temporaire
let a = 1;
let b = 2;
let temp = a;
a = b;
b = temp;
console.log("1. a =", a, "b =", b); // a = 2, b = 1

// Exercice 2 : multiplication avec vérification des types
function multiply(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return "Erreur : les deux entrées doivent être des nombres";
  }
  return x * y;
}
console.log("2.", multiply(3, 4));   // 12
console.log("2.", multiply(3, "4")); // message d'erreur

// Exercice 3 : saluer un utilisateur
const greet = (name) => {
  return "Bonjour " + name + " !";
};
console.log("3.", greet("Leslie"));

// Exercice 4 : parité d'un nombre
function isEven(n) {
  return n % 2 === 0;
}
console.log("4.", isEven(4), isEven(7)); // true false

// Exercice 5 : modifier la propriété age d'un objet
function setAge(person) {
  person.age = 30;
}
const user = { name: "Leslie", age: 22 };
console.log("5. avant :", user); // age: 22
setAge(user);
console.log("5. après :", user); // age: 30