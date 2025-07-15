function firstWord(s) {
   s = s.trim();
	
	if ((s.startsWith('"') && s.endsWith('"')) ||
      (s.startsWith("'") && s.endsWith("'"))) {
    s = s.substring(1, s.length - 1);
  }
	s = s.trim();

	let spaceIndex = s.indexOf(' ');

	if (spaceIndex === -1) {
    return '"' + s + '"';
  }
  
	let first = s.substring(0, spaceIndex);
  return "'" + first + "'";
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

