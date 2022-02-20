// Write a JavaScript program to find the most frequent item of an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )



const freq = (arr) =>{
  let freq = 0;
  let result = 0;
 
  for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = 0; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
              count++;
          }
      }
      
      if (count > freq) {
          freq = count;
          result = arr[i];
      }
   
  }

  return (`${result}(${freq} times)`);
}

console.log(freq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))