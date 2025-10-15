import { mongoCollection } from "./common";

export interface loginUserReq {
    email: string,
    password: string
}

export interface registerUserReq {
    username: string,
    email: string,
    password: string
}

export interface loginUserRes extends mongoCollection{
    token: string
}
export interface registerUserRes extends mongoCollection,  Omit<registerUserReq, 'password'>{}