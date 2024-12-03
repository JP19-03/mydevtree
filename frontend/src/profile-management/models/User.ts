export type User = {
    handle: string;
    name: string;
    email: string;
    password: string;
    _id: string;
}

export type UserRegister = Pick<User, "handle" | "name" | "email" | "password"> & {
    password: string;
    password_confirmation: string;
}

export type UserLogin = Pick<User, "email" | "password">;