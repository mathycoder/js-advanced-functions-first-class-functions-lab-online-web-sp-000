// const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(drivers) {
  const myFunc = function (drivers) {
    return drivers.slice(0, 2)
  }
  return myFunc(drivers)
}

function returnLastTwoDrivers(drivers) {
  const myFunc = function (drivers) {
    return drivers.slice(-2)
  }
  return myFunc(drivers)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
//selectingDrivers[0](drivers)
//= ["Sally", "Bob"]

function createFareMultiplier(int) {
  return function (fare) {
    return fare * int
  }
}
//createFareMultiplier(4)
//= returns the nested function (uninvoked) with a local variable of int = 4
// createFareMultiplier(4)(10)
//= 40

function fareDoubler(fare) {
  const myFunc = createFareMultiplier(2)
  return myFunc(fare)
}

function fareTripler(fare) {
  const myFunc = createFareMultiplier(3)
  return myFunc(fare)
}

function selectDifferentDrivers(drivers, func) {
  return func(drivers)
}
