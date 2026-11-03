// 1. Fonction générique : inverser un tableau de n'importe quel type
function reverse<T>(items: T[]): T[] {
  const result: T[] = [];
  for (let i = items.length - 1; i >= 0; i -= 1) {
    result.push(items[i]);
  }
  return result;
}

// 3. Type Book
type Book = {
  title: string;
  publicationYear: number;
};

// 2. Type User (phone optionnel) + 4. un utilisateur possède plusieurs livres
type User = {
  username: string;
  age: number;
  email: string;
  phone?: string;
  books: Book[];
};

const user: User = {
  username: "leslie",
  age: 22,
  email: "leslie@example.com",
  books: [
    { title: "Le Petit Prince", publicationYear: 1943 },
    { title: "Germinal", publicationYear: 1885 },
  ],
};

console.log(reverse([1, 2, 3]));
console.log(reverse(["a", "b", "c"]));
console.log(reverse(user.books).map((b) => b.title));
console.log("téléphone :", user.phone ?? "non renseigné");

// Types utilitaires vus en cours
type UserWithoutBooks = Omit<User, "books">;
type UserContact = Pick<User, "email" | "phone">;
type UserUpdate = Partial<User>;

const contact: UserContact = { email: user.email };
const update: UserUpdate = { age: 23 };
console.log(contact, update);

// Guards : in et is
type Fish = { swim: () => string };
type Bird = { fly: () => string };

function move(animal: Fish | Bird): string {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}

function isFish(animal: Fish | Bird): animal is Fish {
  return "swim" in animal;
}

const nemo: Fish = { swim: () => "je nage" };
console.log(move(nemo), isFish(nemo));

export type { UserWithoutBooks };