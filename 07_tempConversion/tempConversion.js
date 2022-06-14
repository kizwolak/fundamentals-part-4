const ftoc = function(temp) {
  newTemp = (temp - 32) * (5/9)
  roundTemp = Math.round(newTemp * 10) / 10;
  return roundTemp;
};

const ctof = function(temp) {
  newTemp = (temp * (9/5) + 32)
  roundTemp = Math.round(newTemp * 10) / 10;
  return roundTemp;
};

console.log(ftoc(-40));

console.log(ctof(-40));


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

