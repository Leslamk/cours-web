import _ from "lodash";
import fs from "fs";

const numbers = [10, 2, 33, 2, 5, 10, 1];

// 1. Trier avec lodash
console.log("1. trié        :", _.sortBy(numbers));

// 2. Supprimer les doublons avec lodash
console.log("2. sans doublon:", _.uniq(numbers));

// Bonus : avec findIndex (on garde un élément si sa première position est la sienne)
const uniqueFindIndex = numbers.filter((x, i) => numbers.findIndex((y) => y === x) === i);
console.log("   findIndex   :", uniqueFindIndex);

// Bonus : autre manière, avec un Set
console.log("   Set         :", [...new Set(numbers)]);

// 3a. Fonction asynchrone avec new Promise
function randomPromise() {
  return new Promise((resolve, reject) => {
    const n = Math.random();
    if (n < 0.5) {
      reject(new Error("Nombre trop petit : " + n));
    } else {
      resolve(n);
    }
  });
}

// 3b. Fonction asynchrone avec async + throw
async function randomAsync() {
  const n = Math.random();
  if (n < 0.5) {
    throw new Error("Nombre trop petit : " + n);
  }
  return n;
}

// Appel 1 : avec .then / .catch
randomPromise()
  .then((n) => console.log("3a. succès     :", n))
  .catch((e) => console.log("3a. erreur     :", e.message));

// Appel 2 : avec await et try / catch
try {
  const n = await randomAsync();
  console.log("3b. succès     :", n);
} catch (e) {
  console.log("3b. erreur     :", e.message);
}

// 4. Lire un fichier JSON avec fs
const content = fs.readFileSync("data.json", "utf-8");
const data = JSON.parse(content);
console.log("4. data.json   :", data);