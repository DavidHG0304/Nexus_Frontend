import { useState } from "react";

import {
    deposit as depositAPI,
    withdraw as withdrawAPI
} from "../api/transactionsApi";

import {
    confirmTransaction
} from "../../../shared/utils/alerts.ts";

type UseTransactionsProps = {
    cuenta: string;
    onTransactionSuccess?: () => Promise<void> | void;
};

export function useTransactions({
    cuenta,
    onTransactionSuccess
}: UseTransactionsProps) {

    const [monto, setMonto] = useState("");

    const [mensaje, setMensaje] = useState("");

    const [tipoMensaje, setTipoMensaje] = useState("");

    const showMessage = (
        text: string,
        type: string
    ) => {

        setMensaje(text);

        setTipoMensaje(type);

        setTimeout(() => {

            setMensaje("");

            setTipoMensaje("");

        }, 3000);

    };

    const depositar = async () => {

        if (
            !monto.trim() ||
            isNaN(Number(monto)) ||
            Number(monto) <= 0
        ) {

            showMessage(
                "Enter a valid amount.",
                "error"
            );

            return;
        }

        const result =
            await confirmTransaction(
                "Confirm Deposit",
                `Do you want to deposit $${monto}?`
            );

        if (!result.isConfirmed) {
            return;
        }

        try {

            const response =
                await depositAPI(
                    cuenta,
                    Number(monto)
                );

            showMessage(
                response.message ||
                "Deposit completed successfully",
                "success"
            );

            setMonto("");

            await onTransactionSuccess?.();

        } catch (error) {
            console.error(
                "Deposit error:",
                error
            );
            throw error;
        }

    };

    const retirar = async () => {

        if (
            !monto.trim() ||
            isNaN(Number(monto)) ||
            Number(monto) <= 0
        ) {

            showMessage(
                "Enter a valid amount.",
                "error"
            );

            return;
        }

        const result =
            await confirmTransaction(
                "Confirm Withdrawal",
                `Do you want to withdraw $${monto}?`
            );

        if (!result.isConfirmed) {
            return;
        }

        try {

            const response =
                await withdrawAPI(
                    cuenta,
                    Number(monto)
                );

            showMessage(
                response.message ||
                "Withdrawal completed successfully",
                "success"
            );

            setMonto("");

            await onTransactionSuccess?.();

        } catch {

            throw new Error(
                "Withdrawal failed"
            );

        }

    };

    return {

        monto,
        setMonto,

        mensaje,
        tipoMensaje,

        depositar,
        retirar

    };

}