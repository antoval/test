var starWarNames = require('./starwars-names.json');
var uniqueRandomArray = require('unique-random-array');
var getRandomItem = uniqueRandomArray(starWarNames);
module.exports = {
    all: starWarNames,
    random: random
};
function random(number){
    if (number === undefined){
        return getRandomItem();
    } else{
        var result = [];
        for (var i = 0; i < 3; i++) {
            result.push(getRandomItem());
        }
        return result;
    }
}