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

function checkInventory(callback) {
  setTimeout(() => {
    console.log("Checking Inventory --->");
    callback();
  }, 1000);
}

function createOrder(callback) {
  setTimeout(() => {
    console.log("Creating Order --->");
    callback();
  }, 3000);
}

function chargePayment(callback) {
  setTimeout(() => {
    console.log("Charging Payment--->");
    callback();
  }, 5000);
}

function sendInvoice(callback) {
  setTimeout(() => {
    console.log("Sending Invoice --->");
    callback();
  }, 2000);
}

function main() {
  checkInventory(() => {
    createOrder(() => {
      chargePayment(() => {
        sendInvoice(() => {
          console.log("Order request completed--->");
        });
      });
    });
  });
  // createOrder();
  // chargePayment();
  // sendInvoice();
  console.log("other request processing...");
}
main();

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
