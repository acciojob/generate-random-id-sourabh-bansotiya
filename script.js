function makeid(l) {
  // write your code here
	let result = '';
	const char = 'QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm0123456789';
	const charLength = char.length;
	for (let i = 0; i < l; i++) {
		const random = Math.floor(Math.random() * charLength); 
		result += char.charAt(random); 
	}
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
