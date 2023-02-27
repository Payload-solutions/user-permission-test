import { Request, Response } from "express";
import { User } from "../entity/user.entity";
import { IUser } from "../models/IUser";
import { hashPassword, checkPasswords } from "../lib/encryption";


export const getUsers = async (req: Request, res: Response) => {


    const users = await User.find();

    //res.json({"message":"hello dickers"})
    return res.status(200).json(users);
};


export const saveUser = async (req: Request<unknown,
    unknown, IUser>, res: Response) => {

    try {
        const userBody = req.body;

        // checking if the email is already saved
        const checkEmail = await User.findOneBy({ email: userBody.email });
        if (checkEmail) return res.status(400).json({ 'message': "user is already saved" })
        userBody.password = await hashPassword(userBody.password);

        // ssaving user
        const userSaved = await User.save(userBody);
        res.status(200).json({"message":"ok", "user": userSaved})
    } catch (err) {
        if (err instanceof Error) {
            return res.status(500);
        }
    }
};
