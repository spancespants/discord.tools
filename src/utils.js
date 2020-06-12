'use strict';


let person;
const people = [
    'Adam',
    'Sam',
    'Jimmy',
    'Jordan',
    'Mcfroob',
    'Brandon',
    'Tim',
    'Ross',
    'Seth',
    'Spencer',
    'Derek',
    'Mikkel'
];

function determinePerson() {
    console.log('ping');
}


function getPerson() {
    return person;
}

module.exports = {
    determinePerson,
    getPerson
}