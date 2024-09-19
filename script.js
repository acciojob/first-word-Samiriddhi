function firstWord(s) {
  // Handle empty string directly
  if (s.length === 0) {
    return '';
  }
  
  s.trim(" ")
	let arr =s.split(" ");
	return arr[0].toString();
  
  // Otherwise, return the substring from the start up to the first space
  return s.slice(0, firstSpaceIndex);
}

Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
