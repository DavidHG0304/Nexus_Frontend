import type { ApiResponse } from "../../../shared/types";

const API = "http://localhost:3000/api";

export const getAccountData = async (
    cuenta: string
): Promise<ApiResponse> => {

    const response = await fetch(
        `${API}/accounts/${cuenta}`
    );

    if (!response.ok) {

        throw new Error(
            "Failed to fetch account data"
        );

    }

    return response.json();

};