// Named Parameters
// write a function that takes two named parameters:
function myFunction(firstparam, secondparam) {
// print each named parameter,
console.log(firstparam);
console.log(secondparam);

// then return the parameters added together
return firstparam + secondparam;
}
// invoke the function and pass in two numbers
myFunction(2, 4);
// invoke the function and pass in more than two numbers
myFunction(2,3,4);
// invoke the function and pass in only one number
myFunction(6);
// change the function to set default values for the parameters
function myFunctionTwo(firstparam = 2, secondparam = 5) {
// again, invoke the function and pass in only one number
console.log(firstparam, secondparam);
return firstparam, secondparam;
}
myFunctionTwo(10);



// Rest Operator
// add a rest operator to the function's parameters
function myFunction(param1, ...myRestParam) {
  console.log(myRestParam);
// add a line to the function's body to print the value of the rest operator
console.log(myRestParam);
}
myFunction()
// again, invoke the function and pass in more than two numbers
myFunction(4,5,6,7,8);

