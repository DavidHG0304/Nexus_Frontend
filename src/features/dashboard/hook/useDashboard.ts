import {
    useEffect,
    useState
} from "react";

import {
    getDashboard
} from "../services/dashboardService";

import type {
    DashboardResponse
} from "../types/dashboard.types";

let cachedData: DashboardResponse | null = null;
let cachedError = "";
let fetchPromise: Promise<DashboardResponse> | null = null;

export function useDashboard() {

    const [data, setData] =
        useState<DashboardResponse | null>(cachedData);

    const [loading, setLoading] =
        useState(!cachedData);

    const [error, setError] =
        useState(cachedError);

    const fetchDashboard =
        async () => {

            if (fetchPromise) {
                try {
                    const response = await fetchPromise;
                    await new Promise((resolve) => setTimeout(resolve, 800));
                    setData(response);
                    setLoading(false);
                } catch (err) {
                    // Handled by the original promise
                }
                return;
            }

            try {
                if (!cachedData) {
                    setLoading(true);
                }

                fetchPromise = getDashboard();
                const response = await fetchPromise;

                await new Promise((resolve) => setTimeout(resolve, 800));

                cachedData = response;
                setData(response);
                setError("");
                cachedError = "";

            } catch (err) {

                const message =
                    err instanceof Error
                        ? err.message
                        : "Dashboard error";

                setError(message);
                cachedError = message;

            } finally {

                setLoading(false);
                fetchPromise = null;

            }

        };

    useEffect(() => {

        fetchDashboard();

    }, []);

    return {

        data,

        loading,

        error,

        fetchDashboard

    };

}