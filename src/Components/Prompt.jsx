import React, { Component } from 'react';
//question 1
const input = prompt("enter numbers separated by commas: ");
const Numbers = input.split(",");
let Sum = 0;//initial state

//loop iteration
for (let i = 0; i < Numbers.length; i++) {
  Sum += parseInt(Numbers[i]);
}

console.log("sum of the numbers is: " + Sum);


export default Sum;
