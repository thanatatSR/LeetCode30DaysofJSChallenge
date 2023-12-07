var filter = function(arr, fn) {
  const temp = []
  arr.forEach((element, index) => fn(element, index) !== false && fn(element, index) !== 0 && temp.push(element))
  return temp
}
