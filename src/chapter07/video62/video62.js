console.log("video 62");

// console.log("1");

// //async
// setTimeout(() => {
//   console.log("2");
// }, 5000);

// console.log("3");

const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2 with promise");
      //return
      resolve("hoidanit");
    }, 2000);
  });
};

const test = myPromise();

console.log("test", test);

console.log("================ with promise below:");
console.log("1");

myPromise().then((data) => {
  console.log("data: ", data);
  console.log("3");
});
