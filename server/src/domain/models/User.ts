export interface User {
    _id?: string;
    name: string;
    email: string;
    password: string;
    rols?: 'writer' | 'producer';
    createdAt: Date;
}