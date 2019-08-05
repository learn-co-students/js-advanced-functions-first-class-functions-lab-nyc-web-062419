// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(drivers.length - 2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let createFareMultiplier = function(multiplier) {
  return function(value) {
    return multiplier * value;
  };
};

let fareDoubler = createFareMultiplier(2);

let fareTripler = createFareMultiplier(3);

let selectDifferentDrivers = function(arr, callback) {
  return callback(arr);
};
