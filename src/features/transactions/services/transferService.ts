import api from "../../../shared/services/api";

export type TransferPayload = {

    toAccount: string;

    amount: number;

    description: string;

    branch: string;

};

export const transfer = async (
    payload: TransferPayload
) => {

    const { data } =
        await api.post(
            "/transactions/transferencia",
            payload
        );

    return data;

};