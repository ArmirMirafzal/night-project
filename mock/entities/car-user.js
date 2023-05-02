"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(name, speed, model, price) {
        this.name = name;
        this.speed = speed;
        this.model = model;
        this.price = price;
    }
    Car.prototype.setId = function (newID) {
        this.id = newID;
    };
    Car.prototype.getId = function () {
        return this.id;
    };
    return Car;
}());
exports.Car = Car;
// setModel(newModel: string) {
//   if(this.name == "BMW"){
//       this.model == BMW
//   }
// }
// getModel() {
//   return this.model;
// }
