/* Excersise 5: push multiply and sum 

Write func pushMultiplySum that takes a numeric array and an extra number as input,
extends the array with the extra element, doubles ech element of the extended array, 
and then returns the sum of the elements of the updated array.

Example dataset: arr = [1, 2, 3], extra = 4.
*/

function pushMultiplySum (vec, x){
    //extend array with extra element
    vec.push(x);
    // double each alement of new array
    const doubledVec = vec.map(num => num * 2);
    // return sum of elements
    return doubledVec.reduce((sum, num) => sum + num, 0);
}

/* in repl:
pushMultiplySum([1, 2, 3], 4) // 20
pushMultiplySum([0, 0, 0], 5) // 10
*/