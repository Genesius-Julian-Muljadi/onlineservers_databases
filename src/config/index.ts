import { config } from "dotenv";

config({
    path: ".env",
});

export const {
    PORT,
    DATABASE_URL,
    DIRECT_URL,
    SECRET_KEY,
    SECRET_KEY2,
    NODEMAILER_EMAIL,
    NODEMAILER_PASSWORD,
    ADMIN_EMAIL,
    BASE_WEB_URL,
} = process.env;