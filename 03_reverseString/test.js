let str = "hello there";

newStr = str.split("");

console.log(newStr);

console.log(newStr.join(""));

let retStr = ''

for (let i = str.length-1; i >= 0; i--) {
	retStr += str[i];
}

console.log(retStr);