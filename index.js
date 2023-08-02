//this one finds matching names for the drivers with the findMatching function.
//It also uses the toLowerCase method to make sure it's case insensitive.
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

//Since I only want starting with letters here, that's what I am using && the startsWith method takes care of that.
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

//This takes the driver name and checks that it truly matches the name.
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}

