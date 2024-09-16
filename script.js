function firstWord(s) {
  // Handle empty string directly
  if (s.length === 0) {
    return '';
  }
  
  // Find the index of the first space
  let firstSpaceIndex = s.indexOf(' ');
  
  // If there is no space, return the entire string
  if (firstSpaceIndex === -1) {
    return s;
  }
  
  // Otherwise, return the substring from the start up to the first space
  return s.slice(0, firstSpaceIndex);
}

Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
