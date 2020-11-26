let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
function alphabetPosition(str) {
  let numbersOfChars = '';
  let charNumber;
  for (let i = 0; i < str.length; i++) {
    if(str.charCodeAt(i) > 'A'.charCodeAt(0) - 1 && str.charCodeAt(i) < 'Z'.charCodeAt(0) + 1) {
      charNumber = str.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
    } else if(str.charCodeAt(i) > 'a'.charCodeAt(0) - 1 && str.charCodeAt(i) < 'z'.charCodeAt(0) + 1) {
      charNumber = str.charCodeAt(i) - 'a'.charCodeAt(0) + 1;
    } else charNumber = '';
    numbersOfChars = numbersOfChars + charNumber + ' ';
  }
  return numbersOfChars;
}
alert(alphabetPosition(str));
alert(alphabetPosition('The sunset sets at twelve o` clock.'));

// alert('a'.charCodeAt(0));
// alert('h'.charCodeAt(0));

 // alert(alphabetPosition('a'));
