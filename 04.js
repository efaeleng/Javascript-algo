// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)

let duplicates = ['A', 'B', 'A', 'C', 'B' , 5 , 7, 40, 'A'];
let unique = [...new Set(duplicates)];

console.log(unique);