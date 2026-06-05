import api from "../../../shared/services/api";

import type {

    LoginResponse,
    RegisterResponse

} from "../types/auth";

export const login = async (

    email: string,
    password: string

): Promise<LoginResponse> => {

    const { data } = await api.post(

        "/auth/login",

        {
            email,
            password
        }

    );

    return data;

};

export const register = async (

    payload: {

        name: string;
        curp: string;
        email: string;
        password: string;
        phone: string;
        address: string;

    }

): Promise<RegisterResponse> => {

    const { data } = await api.post(

        "/auth/register",

        payload

    );

    return data;

};

export const me = async () => {

    const { data } = await api.get(

        "/auth/me"

    );

    return data;

};