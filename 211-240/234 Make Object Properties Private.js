var Car = function () {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function (change) {
    speed += change;
  };

  this.decelerate = function () {
    speed -= 5;
  };

  this.getSpeed = function () {
    return speed;
  };
};

var Bike = function () {

  // 只能在这一行下面写代码
  var gear;

  this.getGear = function () {
    return gear;
  };

  this.setGear = function (num) {
    gear = num;
  };
};

var myCar = new Car();

var myBike = new Bike();

