import { useState } from "react";

import { getAccountData }
    from "../api/accountApi";

import type {
    ApiResponse
} from "../../../shared/types";

export function useAccount() {

    const [cuenta, setCuenta] = useState("001");

    const [data, setData] =
        useState<ApiResponse | null>(null);

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    const consultarCuenta = async () => {

        if (!cuenta.trim()) {

            setError(
                "Enter an account number."
            );

            return;
        }

        try {

            setLoading(true);

            setError("");

            const response =
                await getAccountData(cuenta);

            setData(response);

            return response;

        } catch (err) {

            const message =
                err instanceof Error
                    ? err.message
                    : "Unexpected error";

            setError(message);

            throw err;

        } finally {

            setLoading(false);

        }

    };

    return {

        cuenta,
        setCuenta,

        data,

        loading,

        error,

        consultarCuenta

    };

}