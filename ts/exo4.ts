import fs from "fs";

// 1. Type Human
type Human = {
  id: number;
  firstName: string;
  lastName: string;
};

// 2. Type Cat (ownerId optionnel)
type Cat = {
  id: number;
  name: string;
  ownerId?: number;
};

// 3. Lire cat-data.json pour remplir les tableaux humans et cats
type CatData = {
  humans: Human[];
  cats: Cat[];
};

const content = fs.readFileSync("cat-data.json", "utf-8");
const data = JSON.parse(content) as CatData;
const humans: Human[] = data.humans;
const cats: Cat[] = data.cats;

// 4. Propriétaire d'un chat
function getOwner(cat: Cat, allHumans: Human[]): Human | undefined {
  return allHumans.find((human) => human.id === cat.ownerId);
}

// 5. Chats sans propriétaire
function catsWithoutOwner(allCats: Cat[]): Cat[] {
  return allCats.filter((cat) => cat.ownerId === undefined);
}

// 6. Nombre de chats par propriétaire
function countCats(human: Human, allCats: Cat[]): number {
  return allCats.filter((cat) => cat.ownerId === human.id).length;
}

const owner = getOwner(cats[0], humans);
console.log("propriétaire de", cats[0].name, ":", owner?.firstName);
console.log("sans propriétaire :", catsWithoutOwner(cats).map((c) => c.name));
for (const human of humans) {
  console.log(human.firstName, human.lastName, "possède", countCats(human, cats), "chat(s)");
}