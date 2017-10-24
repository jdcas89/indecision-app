

const squareFunction = function(x) {
  console.log(this);
  return x * x;
}
const square = (x) => {
  console.log(this);
  return x * x;
}

const shortArrowSquare = (x) =>  x * x
console.log(shortArrowSquare(8))

const getFirstName =  (fullName) =>{
  return fullName.split(' ')[0]
} 
const shortGetFirstName =  (fullName) => fullName.split(' ')[0]

console.log(getFirstName('John Nope'))