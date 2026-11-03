// --- Record : un objet dont les clés et les valeurs sont typées ---
type Color = "red" | "green" | "blue";

// Ensemble fini de clés : chaque couleur doit avoir une valeur
const stock: Record<Color, number> = { red: 3, green: 0, blue: 5 };

// Ensemble ouvert de clés : on peut ne pas tout renseigner
const ages: Record<string, number> = { Leslie: 22, Tom: 24 };
console.log(stock.red, ages["Leslie"]);

// --- Promise<T> : typer ce que contient une promesse ---
async function fetchUserName(id: number): Promise<string> {
  return "user-" + id;
}

async function randomNumber(): Promise<number> {
  const n = Math.random();
  if (n < 0.5) throw new Error("trop petit");
  return n;
}

const name = await fetchUserName(7);
console.log(name);
try {
  console.log("nombre :", await randomNumber());
} catch (e) {
  console.log("erreur :", (e as Error).message);
}

// --- any, unknown et as ---
const value: unknown = "bonjour";
// value.toUpperCase();  // ne compile pas : unknown oblige à vérifier avant
if (typeof value === "string") {
  console.log(value.toUpperCase()); // ici TypeScript sait que c'est une string
}

const forced = "red" as Color; // cast : on affirme que la valeur est une Color
console.log(forced);

// --- Classes ---
class Person {
  private _age: number;

  constructor(
    public name: string,
    age: number,
  ) {
    this._age = age;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) throw new Error("âge négatif");
    this._age = value;
  }

  greet(): string {
    return "Bonjour, je suis " + this.name + " (" + this._age + " ans)";
  }
}

const p = new Person("Leslie", 22);
p.age = 23;
console.log(p.greet());
// p._age = 5;  // ne compile pas : _age est private

// Version courte : les propriétés déclarées directement dans le constructeur
class Cat {
  constructor(
    public readonly name: string,
    private lives: number = 9,
  ) {}

  remainingLives(): number {
    return this.lives;
  }
}
console.log(new Cat("Moustache").remainingLives());