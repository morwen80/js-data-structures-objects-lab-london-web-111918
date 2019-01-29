const driver = {name: "Sam"}

let updateDriverWithKeyAndValue = (driver, key, value) => {
  return Object.assign({}, driver, {[key]: value});
}
//
let destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
  return Object.assign(driver, {[key]: value})
}

// const deleteFromDriverByKey = (driver, key) => {
//   let newDriver = Object.assign({}, driver);
//   delete newDriver.key
//   return newDriver
// }

const deleteFromDriverByKey = (driver, key) => {
  const newDriver = Object.assign({}, driver, key);
  return delete newDriver.key;
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
  return delete driver[key];
}
