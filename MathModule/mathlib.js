module.exports = function (){
  return {
    add: function(num1, num2) {
         // add two numbers (e.g. math.add(2,3) should return 5)
         console.log('add:',num1+num2);
       },
    multiply: function(num1, num2) {
         //multiply two numbers (e.g. math.multiply(3,5) should return 15)
         console.log('multiply:',num1*num2);
       },
    square: function(num) {
         // square a number (e.g. math.square(5) should return 25)
         console.log('square:',num*num);
       },
    random: function(num1,num2) {
        // returns a random number between the two numbers (e.g. math.random(1,35) should return a random number between 1 and 35)
        var random = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
        console.log('random:',random);

      }
  }
};
