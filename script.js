function firstWord(s) {
  // your code here
	let arr = s.split(" ");
	if(arr.length == 0){
		return " " ;
	}else{
		return arr[0];
	}
}

Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
