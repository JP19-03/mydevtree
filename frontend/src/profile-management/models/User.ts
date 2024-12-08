export type User = {
    handle: string;
    name: string;
    email: string;
    _id: string;
    description: string;
    image: string;
    links: string;
}

export type UserHandle = Pick<User, "description" | "handle" | "image" | "links" | "name">;

export type UserRegister = Pick<User, "handle" | "name" | "email"> & {
    password: string;
    password_confirmation: string;
}

export type UserLogin = Pick<User, "email"> & {
    password: string;
}

export type ProfileForm = Pick<User, "handle" | "description">;