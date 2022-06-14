const repeatString = function(userStr, n) {
    let multiStr = '';
    if (n < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < n; i++) {
          multiStr += userStr;
    }
    return multiStr;
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
