'use strict';


let person;
let counter = 0;

const people = [
    'Jimmy',
    'Jordan',
    'Mcfroob',
    'Brandon',
    'Tim',
    'Ross',
    'Seth',
    'Spencer',
    'Derek',
    'Mikkel',
    'Adam',
    'Sam',
];

function determinePerson() {
    let date = new Date();
    if (date.getHours() === 0) {
        counter++;
    }
    if (counter > 11) {
        counter = 0;
    }
    console.log(`Person ${people[counter]}`);    
}


function getPerson() {
    return people[counter];
}

module.exports = {
    determinePerson,
    getPerson
}