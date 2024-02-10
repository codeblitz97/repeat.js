"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_function_1 = __importDefault(require("is-function"));
function repeat(action, times, delay) {
    if (delay === void 0) { delay = 1; }
    if ((0, is_function_1.default)(action)) {
        var _loop_1 = function (i) {
            setTimeout(function () {
                action(i);
            }, i * delay);
        };
        for (var i = 0; i < times; i++) {
            _loop_1(i);
        }
    }
    else {
        if ('string' !== typeof action)
            throw new TypeError("Expected a \"string\" but got ".concat(typeof action, " instead."));
        for (var i = 0; i < times; i++) {
            setTimeout(function () { return eval(action); }, i * delay);
        }
    }
}
exports.default = repeat;
//# sourceMappingURL=index.js.map