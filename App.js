/// Callbacks, Promises & Async/Await

// Synchronous code --> line by line execution
// if one line takes time, everything waits for it to finish
// then execute the next line  --> Also Known Singal Threaded JS
// function main() {
//   console.log("1. Start");
//   console.log("2. Start");
//   console.log("3. Start");
//   console.log("4. Start");
// }
// main();

// code Example -->

// function checkInventory() {
//   console.log("Checking Inventory --->");
// }

// function createOrder() {
//   console.log("Creating Order --->");
// }

// function chargePayment() {
//   console.log("Charging Payment--->");
// }

// function sendInvoice() {
//   console.log("Sending Invoice --->");
// }

// function main() {
//   checkInventory();
//   createOrder();
//   chargePayment();
//   sendInvoice();
// }
// main();
///
///
///
////
// Asynchronous code -->

// function checkInventory() {
//   setTimeout(() => {
//     console.log("Checking Inventory --->");
//   }, 1000);
// }

// function createOrder() {
//   setTimeout(() => {
//     console.log("Creating Order --->");
//   }, 2000);
// }

// function chargePayment() {
//   setTimeout(() => {
//     console.log("Charging Payment--->");
//   }, 3000);
// }

// function sendInvoice() {
//   setTimeout(() => {
//     console.log("Sending Invoice --->");
//   }, 4000);
// }

// function main() {
//   checkInventory();
//   createOrder();
//   chargePayment();
//   sendInvoice();
//   console.log("Order request processing--->");
// }
// main();

// in async code the lines do not wait for each other
// they get executed as and when they are ready
// so the last line gets executed first
// and the other lines get executed after their respective timeouts
// this is called non-blocking code execution
// this is also called multi-threaded JS
//
///
///
//
// Callbacks -->

// function checkInventory(callback) {
//   setTimeout(() => {
//     console.log("Checking Inventory --->");
//     callback();
//   }, 1000);
// }

// function createOrder(callback) {
//   setTimeout(() => {
//     console.log("Creating Order --->");
//     callback();
//   }, 3000);
// }

// function chargePayment(callback) {
//   setTimeout(() => {
//     console.log("Charging Payment--->");
//     callback();
//   }, 5000);
// }

// function sendInvoice(callback) {
//   setTimeout(() => {
//     console.log("Sending Invoice --->");
//     callback();
//   }, 2000);
// }

// function main() {
//   checkInventory(() => {
//     createOrder(() => {
//       chargePayment(() => {
//         sendInvoice(() => {
//           console.log("Order request completed--->");
//         });
//       });
//     });
//   });
//   // createOrder();
//   // chargePayment();
//   // sendInvoice();
//   console.log("other request processing...");
// }
// main();

// here we are passing functions as arguments to other functions
// its helps to maintain the order of execution
// this is called callback functions
// but this approach leads to callback hell
// which is hard to read and maintain
//
/////
////
/////
////
///

/// callback hell -->
// callback hell is a situation where we have multiple nested callbacks
// which makes the code hard to read and maintain
// it looks like a pyramid of doom
// to avoid callback hell we can use promises and async/await
//
///
///
///
///
// function checkInventory(callback) {
//   setTimeout(() => {
//     console.log("Checking Inventory --->");
//     callback();
//   }, 1000);
// }

// function createOrder(callback) {
//   setTimeout(() => {
//     console.log("Creating Order --->");
//     // error handling
//     // simulate an error
//     // and return because of the error appears here
//     const error = new Error("Order creation failed");
//     callback(error);
//   }, 3000);
// }

// function chargePayment(callback) {
//   setTimeout(() => {
//     console.log("Charging Payment--->");
//     let error = null;
//     const chargedAmount = 100;
//     callback(error, chargedAmount);
//   }, 5000);
// }

// function sendInvoice(callback) {
//   setTimeout(() => {
//     console.log("Sending Invoice --->");
//     callback();
//   }, 2000);
// }

// function main() {
//   // callback hell -- callbacks inside callbacks --> solution Promises
//   checkInventory(() => {
//     createOrder((error) => {
//       if (error) {
//         console.log(error);
//       }
//       chargePayment((err, chargedAmount) => {
//         if (err) {
//           console.log("handling payment error--->");
//           return;
//         }

//         console.log("charged:", chargedAmount);
//         sendInvoice(() => {
//           console.log("ALL DONE!");
//         });
//       });
//     });
//   });
//   console.log("other request processing...");
// }
// main();
//
///
///
///
///
////
///
// Promises --> is a feature/class in JS that helps to avoid callback hell
//it used in cases when we dont know in advance when the response will come
// it represents a value that may be available now, or in the future, or never
// in promise we have two functions resolve and reject
// promise have 3 state --> pending, resolve/fullfiled=execution ok, reject=error, .catch=for error handling
// function checkInventory(callback) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Checking Inventory...");
//       // callback();
//       // resolve(); // --> when everything goes well and we get the response
//       reject(new Error("Inventory check failed!")); // --> when error popsup and we dont get the response
//     }, 4000);
//   });
//   return promise;
// }

// function createOrder(callback) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Creating Order...");
//       // error handling
//       // simulate an error
//       // and return because of the error appears here
//       //const error = new Error("Order creation failed");
//       // callback(error);
//       // resolve();
//       reject(new Error("Order creation failed!"));
//     }, 3000);
//   });
// }

// function chargePayment(callback) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Charging Payment...");
//       //let error = null;
//       //const chargedAmount = 100;
//       //callback(error, chargedAmount);
//       resolve();
//     }, 5000);
//   });
// }

// function sendInvoice(callback) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Sending Invoice...");
//       //callback();
//       resolve();
//     }, 2000);
//   });
// }

// function main() {
//   // callback hell -- callbacks inside callbacks --> solution Promises
//   // checkInventory(() => {
//   //   createOrder((error) => {
//   //     if (error) {
//   //       console.log(error);
//   //     }
//   //     chargePayment((err, chargedAmount) => {
//   //       if (err) {
//   //         console.log("handling payment error--->");
//   //         return;
//   //       }

//   //       console.log("charged:", chargedAmount);
//   //       sendInvoice(() => {
//   //         console.log("ALL DONE!");
//   //       });
//   //     });
//   //   });
//   // });
//   //
//   // promise chaining / .catch chaing --> solution use async await
//   checkInventory()
//     .catch((err) => {
//       console.log("err", err);
//     })
//     .then(createOrder)
//     .catch((err) => {
//       console.log("err", err);
//     })
//     .then(chargePayment)
//     .catch((err) => {
//       console.log("err", err);
//     })
//     .then(sendInvoice)
//     .catch((err) => {
//       console.log("err", err);
//     });

//   console.log("other request processing...");
// }
// main();

//
//
//
//
///
//
// // Async/Await -->

function checkInventory(callback) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Checking Inventory...");
      //reject(new Error("Inventory check failed!"));
      resolve();
    }, 2000);
  });
  return promise;
}

function createOrder(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Creating Order...");
      resolve();
      // reject(new Error("Order creation failed!"));
    }, 5000);
  });
}

function chargePayment(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Charging Payment...");
      resolve();
    }, 5000);
  });
}

function sendInvoice(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Sending Invoice...");
      resolve();
    }, 3000);
  });
}

async function main() {
  setTimeout(() => {
    console.log("other request processing...");
  }, 3000);
  await checkInventory();
  await createOrder();
  await chargePayment();
  await sendInvoice();
}
main();

// logic behind async await is function looks like sync code but works as async code
// main benefit of async await is main thread is not blocked
// so other code/function/process can execude freely because thread is free
// await makes the function pause/wait until the promise is resolved
