import api from "../../../shared/services/api";

export const getProfile = async () => {

    const { data } = await api.get(
        "/profile"
    );

    return data;

};

export const updateProfile = async (

    payload: {

        name: string;

        phone: string;

        address: string;

    }

) => {

    const { data } = await api.patch(

        "/profile",

        payload

    );

    return data;

};