// Exercitiul 1:

let car = {
    marca: 'BMW',
    model: 'M3',
    an: 2005,
    pret: '2000 $',
    km: '350 000 km',
}

console.log(car);

console.log('---');

car.km = '150 000 km';

console.log(car);

console.log('---');

car.description = 'Nu bate, nu troncane, nu merge';

console.log(car);

console.log('---');

delete car.description;

console.log(car);

console.log('---');
console.log('---');
console.log('---');



// Exercitiul 2:

var car2 = {
    marca: 'Porsche',
    model: 'Taycan 4S',
    an: 2022,
    pret: 100000,
    km: 23000,
}

function tuneCar(car2) {
    var car2Copy = Object.assign({}, car2);
    car2Copy.km = car2Copy.km / 2;
    car2Copy.pret = car2Copy.pret * 1.5;

    return car2Copy;
}

var tuneCar = tuneCar(car2);

console.log(car2);

console.log('---');

console.log(tuneCar);

// Exercitiul 3

var date = new Date;
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

if(hours < 10) {
    hours = '0' + hours;
}
if(minutes < 10) {
    minutes = '0' + minutes;
}
if(seconds < 10) {
    seconds = '0' + seconds;
}

var finalDate = hours + ':' + minutes + ':' + seconds;

console.log('---');

console.log(finalDate);