export class Brand {
  private id: number;

  constructor(public country: string, public registretedCar: string, public data: string, public ownerId: number) {}

  setId(newID: number) {
    this.id = newID;
  }
  getId() {
    return this.id;
  }
}

 