import {
    useEffect,
    useState
} from "react";

import {

    getBeneficiaries,

    createBeneficiary,

    deleteBeneficiary

} from "../services/beneficiariesService";

import type {
    Beneficiary
} from "../types/beneficiary.types";
import { errorToast, successToast } from "../../../shared/utils/toast";
import { confirmDelete } from "../../../shared/utils/confirm";

export function useBeneficiaries() {

    const [beneficiaries, setBeneficiaries] =
        useState<Beneficiary[]>([]);

    const [error, setError] =
        useState("");

    const [loading, setLoading] =
        useState(true);

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

            try {

                const data =
                    await getBeneficiaries();

                setBeneficiaries(data);

            } finally {

                setLoading(false);

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

            } catch {

                errorToast(
                    "Failed to add beneficiary"
                );

                return;

            }

            setAlias("");

            setAccountNumber("");

            await loadBeneficiaries();

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

            } catch {

                errorToast(
                    "Failed to delete beneficiary"
                );

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