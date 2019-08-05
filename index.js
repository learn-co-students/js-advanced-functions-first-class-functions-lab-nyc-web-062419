// Code your solution in this file!
const returnFirstTwoDrivers = drivers => [drivers[0], drivers[1]];

const returnLastTwoDrivers = drivers => [
  drivers[drivers.length - 2],
  drivers[drivers.length - 1]
];

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const selectDifferentDrivers = (drivers, funct) => funct(drivers);

const createFareMultiplier = value => fare => value * fare;

const fareDoubler = createFareMultiplier => createFareMultiplier * 2;
const fareTripler = createFareMultiplier => createFareMultiplier * 3;
