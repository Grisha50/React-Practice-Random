function square (x) {
    return x * x;
}

console.log(square(2));

const squareArrow = (x) => x * x ;

console.log(squareArrow(10));

const grisha = 'Grisha Kamyshnikov'

const getFirstName = (name) => name.split(' ')[0];

console.log(getFirstName(grisha));