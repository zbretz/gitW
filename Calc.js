function Calculator(){

  this.add = function(a, b){
    return a + b
  }

  this.subtract = function(){}

}

var zachCalc = new Calculator()
console.log(zachCalc.add(2,5))