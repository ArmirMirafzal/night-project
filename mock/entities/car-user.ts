import { CAR_TYPE } from "./type";

export class Car {
  id: number;

  constructor(public name: string, public speed: number, public model: CAR_TYPE, public price: string) {}

  
  setId(newID: number) {
    this.id = newID;
  }
  getId() {
    return this.id;
  }
}












//   setModel(newModel: string) {
//     if(this.name == "BMW"){
//         this.model == BMW
//     }
//   }

//   getModel() {
//     return this.model;
//   }