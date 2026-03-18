let notes = [12, 8, 15, 6, 18, 9, 14]
let sum = 0
for (let i = 0; i < notes.length; i++) {
    sum += notes[i];
}
console.log(sum)

let moyenne = sum / notes.length

let max = notes[0];
let min = notes[0];
let bestNotes = 0;

for (let i = 1; i < notes.length; i++) {
    if (notes[i] > max) {
        max = notes[i];
    }
    if (notes[i] < min) {
        min = notes[i]
    }
    if (notes[i] > 10) {
        bestNotes++
    }
}

console.log(max);
console.log(min);
console.log(bestNotes); 