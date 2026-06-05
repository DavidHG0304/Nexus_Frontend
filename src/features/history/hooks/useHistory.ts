import {
    useEffect,
    useState
} from "react";

import {
    getHistory
} from "../services/historyService";

import type {
    HistoryTransaction
} from "../types/history.types";

export function useHistory() {

    const [transactions,
        setTransactions] =
        useState<HistoryTransaction[]>(
            []
        );

    const [loading,
        setLoading] =
        useState(true);

    const fetchHistory =
        async () => {

            try {

                const data =
                    await getHistory();

                setTransactions(data);

            } finally {

                setLoading(false);

            }

        };

    useEffect(() => {

        fetchHistory();

    }, []);

    return {

        transactions,

        loading,

        fetchHistory

    };

}