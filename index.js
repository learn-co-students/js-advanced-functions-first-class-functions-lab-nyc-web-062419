// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
  return arr.slice(0, 2);
}
function returnLastTwoDrivers(arr) {
  return arr.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function() {
    return num * 5;
  };
}

function fareDoubler(fare) {
  return fare * 2;
}

function fareTripler(fare) {
  return fareDoubler(fare) * 1.5;
}

function selectDifferentDrivers(arrayOfDrivers, firstOrLast) {
  return firstOrLast(arrayOfDrivers);
}
