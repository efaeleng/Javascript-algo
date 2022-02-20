//Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'


const toSwap = (words) => {
  let swap = '';
  words.split('').map(letter => {
      if (letter == letter.toUpperCase()){
          swap += letter.toLowerCase();
      } else {
          swap += letter.toUpperCase()
      }
  })
  return swap
}

console.log(toSwap('The Quick Brown Fox'))