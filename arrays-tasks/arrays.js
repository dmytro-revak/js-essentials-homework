/**
 The function returns the last element of accepted array.
 */


function getLastElement(array) {
    return array[array.length - 1];
}

var goods = ['meat', 'milk', 'apple', 'tomato'];
console.log(getLastElement(goods));
goods.push('potato');
console.log(getLastElement(goods));

