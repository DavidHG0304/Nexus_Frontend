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

export function useDashboard() {

    const [data, setData] =
        useState<DashboardResponse | null>(
            null
        );

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    const fetchDashboard =
        async () => {

            try {

                setLoading(true);

                const response =
                    await getDashboard();

                setData(response);

            } catch (err) {

                const message =
                    err instanceof Error
                        ? err.message
                        : "Dashboard error";

                setError(message);

            } finally {

                setLoading(false);

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