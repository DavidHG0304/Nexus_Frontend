const API = "http://localhost:3000/api";

export const deposit = async (
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

export const withdraw = async (
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