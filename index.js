//working_10JAN2022
function allEvens(arr) {
    return arr.every(function(num) {
        return num % 2 === 0;
    });
}

///

function allEvens(arr) {
    let newArray = arr.every(num => num % 2 === 0);
    return newArray;
}

// Using arrow function
const allEvens = arr => {
    let newArray = arr.every(num => num % 2 === 0);
    return newArray;
}

// Using implicit return
const allEvens = arr => arr.every(num => num % 2 === 0);
