import type { ApiResponse } from "../types";

const API = "http://localhost:3000/api";

export const consultarCuenta = async (
    cuenta: string
): Promise<ApiResponse> => {

    const response = await fetch(
        `${API}/accounts/${cuenta}`
    );

    if (!response.ok) {
        throw new Error("No se pudo consultar la cuenta");
    }

    return response.json();
};

export const depositar = async (
    cuenta: string,
    monto: number
) => {

    const response = await fetch(
        `${API}/transactions/deposito`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                accountNumber: cuenta,
                amount: monto,
                branch: "CDMX"
            })
        }
    );

    return response.json();
};

export const retirar = async (
    cuenta: string,
    monto: number
) => {

    const response = await fetch(
        `${API}/transactions/retiro`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                accountNumber: cuenta,
                amount: monto,
                branch: "CDMX"
            })
        }
    );

    return response.json();
};