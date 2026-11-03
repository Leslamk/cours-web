// 1. Somme d'un tableau (sans reduce, puis avec reduce)
function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  return total;
}
const sumReduce = (numbers) => numbers.reduce((acc, x) => acc + x, 0);

// 2. Plus grand nombre (sans Math.max)
function highest(numbers) {
  if (numbers.length === 0) return undefined;
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] > max) max = numbers[i];
  }
  return max;
}

// 3. Inverser un tableau (boucle de la fin au début, sans reverse)
function reverseArray(items) {
  const result = [];
  for (let i = items.length - 1; i >= 0; i -= 1) {
    result.push(items[i]);
  }
  return result;
}

// 4. Moyenne
function average(numbers) {
  if (numbers.length === 0) return 0;
  return sum(numbers) / numbers.length;
}

// 6. Fibonacci : f(0) = 0, f(1) = 1, f(n) = f(n - 2) + f(n - 1)
function fibRecursive(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibRecursive(n - 2) + fibRecursive(n - 1);
}
function fibLoop(n) {
  if (n === 0) return 0;
  let previous = 0;
  let current = 1;
  for (let i = 2; i <= n; i += 1) {
    const next = previous + current;
    previous = current;
    current = next;
  }
  return current;
}

const data = [4, 8, 15, 16, 23, 42];
console.log("somme        :", sum(data), sumReduce(data)); // 108 108
console.log("plus haut    :", highest(data));              // 42
console.log("inversé      :", reverseArray(data));         // [42, 23, 16, 15, 8, 4]
console.log("moyenne      :", average(data));              // 18
console.log("fib(10)      :", fibRecursive(10), fibLoop(10)); // 55 55

// 5. Tests avec un tableau vide
console.log("vide         :", sum([]), highest([]), reverseArray([]), average([]));
// 0 undefined [] 0