import api from "../../../shared/services/api";

export const getBeneficiaries = async () => {

    const { data } =
        await api.get(
            "/beneficiaries"
        );

    return data;

};

export const createBeneficiary = async (

    payload: {

        alias: string;

        accountNumber: string;

    }

) => {

    const { data } =
        await api.post(

            "/beneficiaries",

            payload

        );

    return data;

};

export const deleteBeneficiary = async (
    id: string
) => {

    const { data } =
        await api.delete(
            `/beneficiaries/${id}`
        );

    return data;

};