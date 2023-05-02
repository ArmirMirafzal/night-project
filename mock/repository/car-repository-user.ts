import { Car } from "../entities/car-user";

export class CarRepository {
  private list: Car[] = [];
  private counter: number = 0;

  create(...cars: Car[]) {
    for (const car of cars) {
      if (this.isExist(car.name)) {
        throw new Error(`car(${car.name}) already exists`);
      }
      car.setId(++this.counter);
      this.list.push(car);
    }
  }

  isExist(carName: string): boolean {
    for (let car of this.list) {
      if (car.name === carName) return true;
    }

    return false;
  }

  getList() {
    return this.list;
  }
}
