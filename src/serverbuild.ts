import express, { Application } from "express";
import cors from "cors";
import { PORT } from "./config";
import helmet from "helmet";
import AuthRoutes from "./routes/auth.routes";

export default class Server {
    private app: Application;
    private port: number | string;

    constructor() {
        this.port = PORT || 8000;
        this.app = express();
        this.middlewares();
        this.routes();
    };

    private middlewares() {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(express.json());
    };

    private routes() {
        this.app.use("/auth", new AuthRoutes().getRoute());
    };

    public start() {
        this.app.listen(this.port, () => {
            console.log(`Mom, he's using port ${this.port}!`);
        });
    };
};

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