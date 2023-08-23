let obj = {
  a: 1,
  b: 2,
  c: 3,
};

Object.customKeys = function (obj) {
  let res = [];
  for (key in obj) {
    res.push(key);
  }
  return res;
};

Object.customValues = function (obj) {
  let res = [];
  for (key in obj) {
    res.push(obj[key]);
  }
  return res;
};

Object.customEntries = function (obj) {
  let res = [];
  for (key in obj) {
    res.push(key);
    res.push(obj[key]);
  }
  return res;
};

console.log(Object.customKeys(obj));
console.log(Object.customValues(obj));
console.log(Object.customEntries(obj));
