"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_function_1 = __importDefault(require("is-function"));

function repeat(callback, times, delay = 1) {
    if (!(0, is_function_1.default)(callback)) {
        throw new TypeError("Expected a function but got " + typeof callback + " instead.");
    }

    for (var i = 0; i < times; i++) {
        setTimeout(function () {
            callback(i);
        }, i * delay);
    }
}

exports.default = repeat;

//# sourceMappingURL=index.js.map
