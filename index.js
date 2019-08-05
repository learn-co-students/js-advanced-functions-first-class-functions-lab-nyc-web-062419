const returnFirstTwoDrivers = function (array){
    return array.slice(0,2)
}

const returnLastTwoDrivers = function (array){
    return array.slice(-2,array.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiply){
    return function (arg){
        return multiply * arg;
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (arrayOfDrivers, f){
   return f(arrayOfDrivers);
}