"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeat = void 0;
var is_function_1 = __importDefault(require("is-function"));
function repeat(action, times, delay) {
    if (delay === void 0) { delay = 1; }
    if ((0, is_function_1.default)(action)) {
        for (var i = 0; i < times; i++) {
            setTimeout(action, i * delay);
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
exports.repeat = repeat;
//# sourceMappingURL=index.js.map