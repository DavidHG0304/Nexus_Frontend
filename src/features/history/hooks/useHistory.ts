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

let cachedTransactions: HistoryTransaction[] = [];
let fetchPromise: Promise<HistoryTransaction[]> | null = null;
let hasLoadedOnce = false;

export function useHistory() {

    const [transactions,
        setTransactions] =
        useState<HistoryTransaction[]>(cachedTransactions);

    const [loading,
        setLoading] =
        useState(!hasLoadedOnce);

    const fetchHistory =
        async () => {

            if (fetchPromise) {
                try {
                    const data = await fetchPromise;
                    await new Promise((resolve) => setTimeout(resolve, 800));
                    setTransactions(data);
                    setLoading(false);
                } catch (err) {
                    // Handled by original promise
                }
                return;
            }

            try {
                if (!hasLoadedOnce) {
                    setLoading(true);
                }

                fetchPromise = getHistory();
                const data = await fetchPromise;

                await new Promise((resolve) => setTimeout(resolve, 800));

                cachedTransactions = data;
                setTransactions(data);
                hasLoadedOnce = true;

            } finally {

                setLoading(false);
                fetchPromise = null;

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