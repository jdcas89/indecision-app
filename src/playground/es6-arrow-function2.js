const add = function(a, b){
  console.log(arguments)
  return a + b
}


const addArrow =(a, b) => {
  //no access to arguments
  //console.log(arguments) gives error
  return a + b
}

console.log(add(5,7, 1000))


const user = {
  name: 'John',
  cities: ['New york', 'Cali'],
  printPlacesLived: function() {
    // workaround for anonymous function: const that = this
    console.log(this.name)
    console.log(this.cities)

    this.cities.forEach((city) =>{
      //arrow function bounds this to the context they were created in
      //anonymous function bounds its own this value  
      console.log(this.name + ' has lived in ' + city)
    })
  },
  printPlacesLivedNewSyntax(){
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city)
    })
  },
  changeCitiesArray(){
    return this.cities.map((city) => this.name + ' has lived in ' + this.city)
  }
}


//user.printPlacesLivedNewSyntax()

console.log(user.changeCitiesArray())



const multiplier = {
  numbers: [5,6,2,5],
  multiplyBy: 3,
  multiply(){
    return this.numbers.map((number) => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply())
