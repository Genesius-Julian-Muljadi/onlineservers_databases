"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serverbuild_1 = __importDefault(require("./serverbuild"));
function main() {
    const app = new serverbuild_1.default();
    app.start();
}
;
main();
