"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRepository = void 0;
var CarRepository = /** @class */ (function () {
    function CarRepository() {
        this.list = [];
        this.counter = 0;
    }
    CarRepository.prototype.create = function () {
        var cards = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            cards[_i] = arguments[_i];
        }
        for (var _a = 0, cards_1 = cards; _a < cards_1.length; _a++) {
            var card = cards_1[_a];
            if (this.isExist(card.name)) {
                throw new Error("car(".concat(card.name, ") already exists"));
            }
            card.setId(++this.counter);
            this.list.push(card);
        }
    };
    CarRepository.prototype.isExist = function (carName) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var car = _a[_i];
            if (car.name === carName)
                return true;
        }
        return false;
    };
    CarRepository.prototype.getList = function () {
        return this.list;
    };
    return CarRepository;
}());
exports.CarRepository = CarRepository;
