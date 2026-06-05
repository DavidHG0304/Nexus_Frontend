import api from "../../../shared/services/api";

import type {
    DashboardResponse
} from "../types/dashboard.types";

export const getDashboard =
    async (): Promise<DashboardResponse> => {

        const { data } =
            await api.get(
                "/dashboard"
            );

        return data;

    };