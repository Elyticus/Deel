// "use strict";

// 1) names only contain letters, numbers, symbol $ _
// 2) first character must not be a number

// message = "Hello";

// console.log(typeof message);

// const arr = ["hello", "world"];

// for (const element of arr) {
//   console.log(element);
// }

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   console.log(element);
// }

function oddNumbers(arr) {
  return arr.filter((num) => num % 2 === 1);
}

console.log(oddNumbers([1, 3, 2, 5, 4, 8]));

function calculateDiscountedPrice(totalPrice, discountPercentage) {
  // Check if discount percentage is valid
  if (discountPercentage < 0 || discountPercentage > 100) {
    return "Invalid discount percentage";
  }

  // Calculate discount amount
  const discountAmount = (totalPrice * discountPercentage) / 100;

  // Calculate discounted price
  const discountedPrice = totalPrice - discountAmount;

  return discountedPrice;
}

// Example usage:
const totalPrice = 20; // Total price before discount
const discountPercentage = 10; // Discount percentage
const discountedPrice = calculateDiscountedPrice(
  totalPrice,
  discountPercentage
);
console.log("Discounted Price:", discountedPrice);

function foo1() {
  return {
    bar: "hello",
  };
}

function foo2() {
  return;
  {
    bar: "hello";
  }
}

var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};

girl();

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
