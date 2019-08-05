function returnFirstTwoDrivers(arr) {
  return arr.slice(0,2);
}

function returnLastTwoDrivers(arr) {
  return arr.slice(-2);
}


var selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]




function fareDoubler(val) {
  return val * 2;  
}

function fareTripler(val) {
  return val * 3  
}

function createFareMultiplier(mult){
function multiplier(fare) { 
  return fare * mult; 
} 
return  multiplier;
}

function selectDifferentDrivers(arrayOfDrivers, functionarg) {
  return functionarg(arrayOfDrivers)  
}