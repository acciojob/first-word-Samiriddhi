function firstWord(s) {
  // Trim any leading/trailing spaces
  s = s.trim();
  
  // Split the string by space and return the first part
  let arr = s.split(" ");
  
  // Return the first word or the entire string
  return arr[0];
}

Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
