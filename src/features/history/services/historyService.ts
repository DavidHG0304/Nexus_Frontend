import api from "../../../shared/services/api";

export const getHistory = async () => {

    const { data } = await api.get(
        "/transactions/mi-historial"
    );

    return data;

};