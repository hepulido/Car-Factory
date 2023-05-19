class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDescription(){
        return `make:${this.make}, model:${model}, year:${year}`
    }
}

class ElectricCar extends Car {
    constructor(make, model, year, range){
        super(make, model, year)
        this.range = range;
    }
    getDescription(){
        return `make:${this.make}, model:${this.model}, year:${this.year}, range:${this.range}`
    }
}

const tesla = new ElectricCar ("tesla", "Model s", 2019, 300)
console.log(tesla.getDescription())
console.log(tesla.make)