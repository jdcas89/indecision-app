

class Person {
  constructor(name = 'default Name', age = 0){
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello my name is ${this.name}`
  }
  getDescription(){
    return ` ${ this.name } is ${ this.age } years old`
  }
}

const me = new Person('Chris', 27)
const other = new Person();

console.log(me.getDescription());
console.log(other)