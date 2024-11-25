"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const helmet_1 = __importDefault(require("helmet"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
class Server {
    constructor() {
        this.port = config_1.PORT || 8000;
        this.app = (0, express_1.default)();
        this.middlewares();
        this.routes();
    }
    ;
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use(express_1.default.json());
    }
    ;
    routes() {
        this.app.use("/auth", new auth_routes_1.default().getRoute());
    }
    ;
    start() {
        this.app.listen(this.port, () => {
            console.log(`Mom, he's using port ${this.port}!`);
        });
    }
    ;
}
exports.default = Server;
;
// const port = Number(PORT) || 8000;
// const app: Application = express();
// app.use(cors({
//     origin: true,
//     credentials: true,
// }));
// app.use(express.json());
// // app.use(helmet);
// app.use("/auth", authrouter);
// app.use(errorMiddleware);
// app.listen(port, () => {
//     console.log(`Why are you using port ${port}?`);
// });
