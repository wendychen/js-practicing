## States of a JavaScript Promise
## Source: https://www.codecademy.com/learn/asynchronous-javascript/modules/javascript-promises/cheatsheet
const promise = new Promise(
  const res = true;
  // An asynchronous operation.
  if (res) {
    resolve('Resolved!');
  } else {
    reject(Error('Error'));
  }
);

promise.then((res) => console.log(res), (err) => alert(err));
