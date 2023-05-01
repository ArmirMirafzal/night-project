import { Car } from "./mock/entities/car-user";
import { CarRepository } from "./mock/repository/car-repository-user";

const car1 = new Car("BMW", 250, "BMW-X", "300.000$");
const car2 = new Car("Kia", 150, " CARNIVAL", "100.000$");
const car3 = new Car("Merc", 270, "C-CLASS", "280.000$");

const carRepo = new CarRepository();
carRepo.create(car1);
carRepo.create(car2);
carRepo.create(car3);
console.log(carRepo);