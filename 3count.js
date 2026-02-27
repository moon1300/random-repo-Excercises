// Excersise 3: count unquine items

// Write a function that returns the number 
// of unique items (countUnique) in an array.

function countUnique(arr) {
    let uniqueItems = new Set(arr);
    return uniqueItems.size;
}

// in repl:
// countUnique([1,2,3,4,5])
// returns 5
// countUnique([1,2,3,4,5,1,2,3])
// returns 5