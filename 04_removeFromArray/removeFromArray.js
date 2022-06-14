const removeFromArray = function(array, ...theArgs) {
    for (let i = 0; i < theArgs.length; i++) {
    		let spliceIndex = array.indexOf(theArgs[i]);
        if (array.includes(theArgs[i])) {
            array.splice(spliceIndex, 1);
        }
    }
    return array;
};
removeFromArray([1, 2, 3], 1);

// Do not edit below this line
module.exports = removeFromArray;
