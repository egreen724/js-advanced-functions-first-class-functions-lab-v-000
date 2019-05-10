// Code your solution in this file

const returnFirstTwoDrivers = function(driver){
  return driver.slice(0,2)
}

const returnLastTwoDrivers = function(driver){
  return driver.slice(-2)
}

const selectingDrivers = [
  returnFirstTwoDrivers(), 
  returnLastTwoDrivers()
]
