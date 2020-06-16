'use strict';

require('dotenv').config();

let person;
let counter = process.env.PERSON_COUNTER;

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
    console.log(`Hour ${date.getHours()}`)
    if (date.getHours() === 5) {
        counter++;
        console.log(`Person changing...Counter: ${counter}`);
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