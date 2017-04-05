function Vehicle(name,wheels,passengers,speed){
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  this.distance_travelled  = 0;
  this.vinNum = Math.floor(Math.random() * 90000000000000000) + 1;
}
Vehicle.prototype.makeNoise = function(){
  console.log("")};
Vehicle.prototype.updateDistanceTravelled = function(){
  this.distance_travelled += this.speed;
};
Vehicle.prototype.checkMiles = function(){
  console.log("Distance Travelled:",this.distance_travelled)};
Vehicle.prototype.move = function(){
  this.updateDistanceTravelled();
  this.makeNoise();
  this.checkMiles();
  return this;};
Vehicle.prototype.getVin = function(){
  console.log("VIN:",this.vinNum);
  return this;};

var Bike = new Vehicle('Bike',2,0,30);
Bike.makeNoise = function(){
  console.log("ring ring")};
Bike.getVin().move().move().move();

var Sedan = new Vehicle('Sedan',4,4,100);
Sedan.makeNoise = function(){
  console.log("Honk Honk")};
Sedan.getVin().move().move().move();

var Bus = new Vehicle('Bus',6,0,85);
Bus.pickUpPassenger = function(){
  this.passengers++;
  console.log(''+this.passengers+' passengers');
  return this;};
Bus.getVin().pickUpPassenger().pickUpPassenger().move().move().move();
