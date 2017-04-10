// This is included for browser that does not support Object.create function

if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}


// create the Cars object
var genericCars = Object.create(null);

// adding properties and methods to the object

genericCars.name = "Cars";
genericCars.model = "Model";
genericCars.yearOfManufacture = "2017";
genericCars.numOfGears = 0;
genericCars.engineType = "Petrol";

genericCars.description = function () {

	return "Car:" + this.name + "Model:" +this.model+ "Made in the "+ this.yearOfManufacture;
}

genericCars.changeGearPosition = function (position) {
	if(position <= this.numOfGears) {
		position++;
        return position;
	}else {
		position--;
	    return position;
	}
}

genericCars.drive = function() {
	//check if the car has gears
	if(this.numOfGears > 0 && this.engineType == "Petrol") {

      return "Car is the moving";
	}else {
		return "Your Car does not have requirement to drive";
	}
}


//Creating a child of Car Object
let honda = Object.create(genericCars);

honda.name = "Honda";
honda.model = "Accord";
honda.yearOfManufacture = "2010";
honda.numOfGears = 4;
// Implementing Overriding Polymorphism
honda.description = function () {
	return "Car description: " +this.name+ this.model+ this.yearOfManufacture;
}


// Creating another child of Car Object
let toyota = Object.create(genericCars);

// implementing the changeGearPosition methond in base class
toyota.numOfGears = 5;
toyota.changeGear = function () {
	let position = 2;
	return "You have change your gear from " + position + " to " + this.changeGearPosition(position);
}
