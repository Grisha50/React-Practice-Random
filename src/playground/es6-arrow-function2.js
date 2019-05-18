// arguments object = no longer bounds with arrow functions

// const add = (a,b) =>  a + b ;
//  console.log(add(30 , 40));


// this keyword - no longer bound

const user = {
    name: 'Grisha Kamyshnikov',
    cities: ['Moscow', 'Madison', 'New York'],
    printPlacesLived: function () {
       return this.cities.map(city => this.name + 'has lived in ' + city + '!');
    }
}

console.log(user.printPlacesLived());
