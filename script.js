function firstWord(s) {
  // your code here
	   s = s.split(" ")[0];
        return s;
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

