"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car_brand_1 = require("./mock/entities/car-brand");
var car_user_1 = require("./mock/entities/car-user");
var car_brand_repository_1 = require("./mock/repository/car-brand-repository");
var car_repository_user_1 = require("./mock/repository/car-repository-user");
function init() {
    try {
        var carRepo = new car_repository_user_1.CarRepository();
        var brandRepo = new car_brand_repository_1.CarBrandRepository();
        var car1 = new car_user_1.Car("BMW", 250, "BMW-X", "300.000$");
        var car2 = new car_user_1.Car("Kia", 150, " CARNIVAL", "100.000$");
        var car3 = new car_user_1.Car("Merc", 270, "C-CLASS", "280.000$");
        carRepo.create(car1, car2, car3);
        var brand1 = new car_brand_1.Brand("Germany", "331227", "1927", car1.getId()); // bu yerda getId ni ishlayotganda carRepo.create()ni shu qatordan yuqorida yozish kerak bo'lmasa undefined bo'ladi.....
        var brand2 = new car_brand_1.Brand("South Korea", "290649", "1986", car2.getId());
        var brand3 = new car_brand_1.Brand("Germany", "341507", "1926", car3.getId());
        brandRepo.create(brand1, brand2, brand3);
        console.log(carRepo);
        console.log(brandRepo);
    }
    catch (err) {
        console.error("".concat(err.message));
    }
}
init();
