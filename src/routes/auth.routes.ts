import { Router } from "express";
import AuthControllers from "../controllers/auth.controllers";

export default class AuthRoutes {
    private router;
    private controllers = new AuthControllers();

    constructor() {
        this.router = Router();
        this.routes();
    };

    private routes() {
        this.router.get("/register", this.controllers.registerUser);
    };

    public getRoute() {
        return this.router;
    };
};