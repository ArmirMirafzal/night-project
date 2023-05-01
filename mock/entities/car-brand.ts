export class Brand {
  id: number;

  constructor(public name: string, public country: string, public registretedCar: string, public data: string) {}

  setId(newID: number) {
    this.id = newID;
  }
  getId() {
    return this.id;
  }
}

 