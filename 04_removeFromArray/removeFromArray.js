const removeFromArray = function(array, inputVar1, inputVar2) {
    for(let i = 0; i < array.length;i++) {
        if(array[i] === inputVar1) {
            array.splice(i,1)
        }
        if(array[i] === inputVar2) {
            array.splice(i,1)
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
