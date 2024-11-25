import { NextFunction, Request } from "express";
import prisma from "../lib/prisma";

export default class AuthServices {
    static async findUserByEmail(email: string) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: email,
                },
            });

            return user;
        } catch (err) {
            throw(err);
        };
    };

    static async register(req: Request, next: NextFunction) {
        try {
            const { first_name, last_name, email, password } = req.body;

            const isEmail = await this.findUserByEmail(email);
            if (isEmail) {
                throw new Error("Duplicate email");
            };

            const user = await prisma.user.create({
                data: {
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    password: password,
                },
            });

            return user;
        } catch (err) {
            next(err);
        };
    };
};