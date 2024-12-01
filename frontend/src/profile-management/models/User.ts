export type User = {
    handle: string;
    name: string;
    email: string;
    password: string;
}

export type UserRegister = Pick<User, "handle" | "name" | "email" | "password"> & {
    password: string;
    password_confirmation: string;
}