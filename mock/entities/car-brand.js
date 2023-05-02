"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brand = void 0;
var Brand = /** @class */ (function () {
    function Brand(country, registretedCar, data, ownerId) {
        this.country = country;
        this.registretedCar = registretedCar;
        this.data = data;
        this.ownerId = ownerId;
    }
    Brand.prototype.setId = function (newID) {
        this.id = newID;
    };
    Brand.prototype.getId = function () {
        return this.id;
    };
    return Brand;
}());
exports.Brand = Brand;
