function firstWord(s) {
  // your code here
	    if(s.includes(' ') ){
            return s.split(" ")[0];
        }
        else{
            return s;
        }
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

