// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)

const duplicates = [1,2,2,5,5,6, 'hello','hello']
console.log([...new Set(duplicates)])