import { Brand } from "../entities/car-brand";

export class CarBrandRepository{
    private list: Brand[] = [];
    private counter: number = 0;

    create(...cars: Brand[]) {
		for (const car of cars) {
			if (this.isExist(car.data)) {
				throw new Error(`car(${car.data}) already exists`);
			}
			car.setId(++this.counter);
			this.list.push(car);
		}
	}
    
	isExist(brandYear: string): boolean {
		for (let car of this.list) {
			if (car.name === brandYear) return true;
		}

		return false;
	}
}

