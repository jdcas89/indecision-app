

class Person {
  constructor(name = 'default Name', age = 0){
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello my name is ${this.name}.`
  }
  getDescription(){
    return ` ${ this.name } is ${ this.age } years old.`
  }
}

class Student extends Person{
  constructor(name, age, major){
    super(name, age);
    this.major = major;
  }
  getDescription(){
    let description = super.getDescription();

    if(this.hasMajor){
      description += ` I am following the ${ this.major } major.`
    }
    return description 
  }
  hasMajor(){
    return !!this.major;
  }
}

class Traveler extends  Person {
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if(this.homeLocation){
      greeting += ` I am visiting from ${this.homeLocation}`
    }
    return greeting
  }
}

const me = new Person('Chris', 27)
const other = new Person();
const student = new Student('John', 30, 'Computer Science')
const traveler = new Traveler('John', 30, 'California')
console.log(student.getDescription());
console.log(student.hasMajor())
console.log(student)
console.log(traveler.getGreeting())