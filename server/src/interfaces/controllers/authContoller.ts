import { Request, Response } from "express";
import { authUseCase } from "../../application/use-cases/authUseCase";
import { register } from "module";

export const authController = {
    async register(req: Request, res: Response){
        try {
            const {name, email, password, role} = req.body;
            const user = await authUseCase.register(name, email, password, role);
            res.status(201).json({success: true, user});
        } catch (err: any) {
            res.status(400).json({ success: false, message: err.message});
        }
    },

    async login(req: Request, res: Response){
        try {
            const { email, password } = req.body;
            const { token, user } = await authUseCase.login(email, password);
            res.status(200).json({success: true, token, user});
        } catch (err: any) {
            res.status(401).json({success: false, message: err.message});
        }
    },
};