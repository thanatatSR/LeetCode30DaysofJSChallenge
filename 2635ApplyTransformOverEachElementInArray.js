var map = function(arr, fn) {
    const temp = []
    arr.forEach((element, index) => temp.push(fn(element, index)))
    return temp
};
