import {
    useEffect,
    useState
} from "react";

import axios from "axios";

import {
    getBeneficiaries,
    createBeneficiary,
    deleteBeneficiary
} from "../services/beneficiariesService";

import type {
    Beneficiary
} from "../types/beneficiary.types";

import {
    errorToast,
    successToast
} from "../../../shared/utils/toast";

import {
    confirmDelete
} from "../../../shared/utils/confirm";

let cachedBeneficiaries: Beneficiary[] = [];
let cachedError = "";
let fetchPromise: Promise<Beneficiary[]> | null = null;
let hasLoadedOnce = false;

export function useBeneficiaries() {

    const [beneficiaries, setBeneficiaries] =
        useState<Beneficiary[]>(cachedBeneficiaries);

    const [error, setError] =
        useState(cachedError);

    const [loading, setLoading] =
        useState(!hasLoadedOnce);

    const [alias, setAlias] =
        useState("");

    const [accountNumber, setAccountNumber] =
        useState("");

    useEffect(() => {

        if (!error) return;

        const timer = setTimeout(() => {

            setError("");

        }, 3000);

        return () => clearTimeout(timer);

    }, [error]);

    const loadBeneficiaries =
        async () => {

            if (fetchPromise) {
                try {
                    const data = await fetchPromise;
                    await new Promise((resolve) => setTimeout(resolve, 800));
                    setBeneficiaries(data);
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

                fetchPromise = getBeneficiaries();
                const data = await fetchPromise;

                await new Promise((resolve) => setTimeout(resolve, 800));

                cachedBeneficiaries = data;
                setBeneficiaries(data);
                setError("");
                cachedError = "";
                hasLoadedOnce = true;

            } catch (err) {
                const message = err instanceof Error ? err.message : "Failed to load beneficiaries";
                setError(message);
                cachedError = message;
            } finally {

                setLoading(false);
                fetchPromise = null;

            }

        };

    useEffect(() => {

        loadBeneficiaries();

    }, []);

    const addBeneficiary =
        async () => {

            if (
                !alias.trim() ||
                !accountNumber.trim()
            ) {

                setError(
                    "Complete all fields"
                );

                return;

            }

            setError("");

            try {

                await createBeneficiary({

                    alias,
                    accountNumber

                });

                successToast(
                    "Beneficiary added"
                );

                setAlias("");

                setAccountNumber("");

                await loadBeneficiaries();

            } catch (error) {

                let message =
                    "Failed to add beneficiary";

                if (
                    axios.isAxiosError(error)
                ) {

                    message =
                        error.response?.data?.message ??
                        message;

                }

                setError(message);

                errorToast(message);

            }

        };

    const removeBeneficiary =
        async (
            id: string
        ) => {

            const result =
                await confirmDelete(
                    "beneficiary"
                );

            if (
                !result.isConfirmed
            ) {
                return;
            }

            try {

                await deleteBeneficiary(
                    id
                );

                successToast(
                    "Beneficiary removed"
                );

                await loadBeneficiaries();

            } catch (error) {

                let message =
                    "Failed to delete beneficiary";

                if (
                    axios.isAxiosError(error)
                ) {

                    message =
                        error.response?.data?.message ??
                        message;

                }

                errorToast(message);

            }

        };

    return {

        beneficiaries,

        loading,

        alias,
        setAlias,

        accountNumber,
        setAccountNumber,

        error,

        addBeneficiary,

        removeBeneficiary

    };

}