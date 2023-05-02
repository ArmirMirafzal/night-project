import { Brand } from "./mock/entities/car-brand";
import { Car } from "./mock/entities/car-user";
import { CarBrandRepository } from "./mock/repository/car-brand-repository";
import { CarRepository } from "./mock/repository/car-repository-user";

function init() {
  try {
    const carRepo = new CarRepository();
    const brandRepo = new CarBrandRepository();

    const car1 = new Car("BMW", 250, "BMW-X", "300.000$");
    const car2 = new Car("Kia", 150, " CARNIVAL", "100.000$");
    const car3 = new Car("Merc", 270, "C-CLASS", "280.000$");
    carRepo.create(car1, car2, car3);

    const brand1 = new Brand("Germany", "331227", "1927", car1.getId());  // bu yerda getId ni ishlayotganda carRepo.create()ni shu qatordan yuqorida yozish kerak bo'lmasa undefined bo'ladi.....
    const brand2 = new Brand("South Korea", "290649", "1986", car2.getId());
    const brand3 = new Brand("Germany", "341507", "1926", car3.getId());
    brandRepo.create(brand1, brand2, brand3);

    console.log(carRepo);
    console.log(brandRepo);
  } catch (err: any) {
    console.error(`${err.message}`);
  }
}

init();
