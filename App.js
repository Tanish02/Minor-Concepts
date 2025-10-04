/// Callbacks, Promises & Async/Await

// Synchronous code --> line by line execution
// if one line takes time, everything waits for it to finish
// then execute the next line  --> Also Known Singal Threaded JS
function main() {
  console.log("1. Start");
  console.log("2. Start");
  console.log("3. Start");
  console.log("4. Start");
}
main();

// code Example -->

function checkInventory() {
  console.log("Checking Inventory --->");
}

function createOrder() {
  console.log("Creating Order --->");
}

function chargePayment() {
  console.log("Charging Payment--->");
}

function sendInvoice() {
  console.log("Sending Invoice --->");
}

function main() {
  checkInventory();
  createOrder();
  chargePayment();
  sendInvoice();
}
main();
