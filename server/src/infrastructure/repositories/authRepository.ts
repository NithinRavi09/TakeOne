import UserModel from "../database/models/userModel";
import bcrypt, { compare } from 'bcryptjs'

export const authRepository = {
    async findByEmail(email: string){
        return await UserModel.findOne({email});
    },

    async createUser(userData: {name: string; email: string; password: string; role: string}){
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = new UserModel({...userData, password: hashedPassword});
        return await user.save();
    },

    async comparePassword(plain: string, hashed: string){
        return await bcrypt.compare(plain, hashed)
    },
};