const square = (x) =>  x * x;
const add = (a, b) =>  a + b;

const subtract = (a, b) => a - b;
//export default () => console.log('test')
 export { square, add, subtract as default }