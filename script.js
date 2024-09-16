function firstWord(s) {
  // your code here
	s = s.trim();
	let arr = s.split(" ");
	
		return arr[0];
}

Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
