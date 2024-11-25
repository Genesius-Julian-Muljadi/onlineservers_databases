import { NextFunction, Request, Response } from "express";
import AuthServices from "../services/auth.services";

export default class AuthControllers {
    public async registerUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await AuthServices.register(req, next);

            res.status(200).send({
                message: "OK",
                data: user,
            });
        } catch (err) {
            res.status(500).send({
                message: "NoK",
            });
            next(err);
        };
    };
};