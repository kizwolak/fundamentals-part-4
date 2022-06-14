const sumAll = function(startNum, endNum) {
   
    let endSum = 0;
    
    if (startNum < 0 || endNum < 0) {
        return "ERROR";
    }
    
    if (typeof(startNum) !== "number" || typeof(endNum) !== "number") {
        return "ERROR";
    }
   
    if (startNum > endNum) {
        let x = endNum;
        endNum = startNum;
        startNum = x;
    }
    
    for (let i = startNum; i <= endNum; i++) {
        endSum += i;
    }
    return endSum;
};

sumAll(1, 5);

// Do not edit below this line
module.exports = sumAll;

