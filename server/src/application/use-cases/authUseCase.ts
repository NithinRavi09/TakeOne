
import { authRepository } from "../../infrastructure/repositories/authRepository";
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export const authUseCase = {
    async register(name: string, email: string, password: string, role: string){
        const existingUser = await authRepository.findByEmail(email);
        if(existingUser) throw new Error('User already exists');

        const user = await authRepository.createUser({name, email, password, role});
        return user;
    },

    async login(email: string, password: string){
        const user = await authRepository.findByEmail(email);
        if(!user) throw new Error('User not found');

        const isMatch = await authRepository.comparePassword(password, user.password);
        if(!isMatch) throw new Error('Incorrect password');

        const token = jwt.sign({userId: user._id, role: user.role}, JWT_SECRET,{
            expiresIn: '1d',
        });

        return { token, user };
    },
};