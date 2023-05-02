"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarBrandRepository = void 0;
var CarBrandRepository = /** @class */ (function () {
    function CarBrandRepository() {
        this.list = [];
        this.counter = 0;
    }
    CarBrandRepository.prototype.create = function () {
        var cars = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            cars[_i] = arguments[_i];
        }
        for (var _a = 0, cars_1 = cars; _a < cars_1.length; _a++) {
            var car = cars_1[_a];
            if (this.isExist(car.data)) {
                throw new Error("A car(".concat(car.data, ") of such a year already exists"));
            }
            car.setId(++this.counter);
            this.list.push(car);
        }
    };
    CarBrandRepository.prototype.isExist = function (brandYear) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var car = _a[_i];
            if (car.data === brandYear)
                return true;
        }
        return false;
    };
    CarBrandRepository.prototype.getList = function () {
        return this.list;
    };
    return CarBrandRepository;
}());
exports.CarBrandRepository = CarBrandRepository;
