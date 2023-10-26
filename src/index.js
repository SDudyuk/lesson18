function sumArrayPromise(array) {

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(array.reduce((acc, item) => acc + item));
    }, 3000)
  });

  return promise;
}

sumArrayPromise([1,2,3,4,5]).then(console.log);