// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return array.map(x => x).slice(0, 2)
}

const returnLastTwoDrivers = function(array) {
    return array.map(x => x).slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function(fare) { return num * fare}
}

const fareDoubler = function(fare) {
    let double = createFareMultiplier(2)
    return double(fare)
}

const fareTripler = function(fare) {
    let triple = createFareMultiplier(3)
    return triple(fare)
}


function selectDifferentDrivers(array, name) {
    return name(array)
}
