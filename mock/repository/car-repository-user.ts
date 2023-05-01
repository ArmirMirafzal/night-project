import { Car } from "../entities/car-user";

export class CarRepository {
  private list: Car[] = [];
  private counter: number = 0;

  create(...cards: Car[]) {
    for (const card of cards) {
      if (this.isExist(card.name)) {
        throw new Error(`car(${card.name}) already exists`);
      }
      card.setId(++this.counter);
      this.list.push(card);
    }
  }

  isExist(carName: string): boolean {
    for (let car of this.list) {
      if (car.name === carName) return true;
    }

    return false;
  }

  getList(){
	return this.list;
  }
}


