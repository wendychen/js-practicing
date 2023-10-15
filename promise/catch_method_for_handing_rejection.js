const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error('Promise Rejected Unconditionally.'));
  }, 1000);
})

promise.then((res) => {
  console.log(value);
});

promise.catch((err) => {
  alert(arr);
});
