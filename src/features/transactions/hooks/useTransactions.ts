import { useState } from "react";

import {
    transfer
} from "../services/transferService";

import {
    confirmTransaction
} from "../../../shared/utils/alerts";

type UseTransfersProps = {

    onTransferSuccess?:
    () => Promise<void> | void;

};

export function useTransactions({
    onTransferSuccess
}: UseTransfersProps) {

    const [toAccount, setToAccount] =
        useState("");

    const [amount, setAmount] =
        useState("");

    const [description, setDescription] =
        useState("");

    const [message, setMessage] =
        useState("");

    const [messageType, setMessageType] =
        useState("");

    const showMessage = (
        text: string,
        type: string
    ) => {

        setMessage(text);

        setMessageType(type);

        setTimeout(() => {

            setMessage("");

            setMessageType("");

        }, 3000);

    };

    const transferir = async () => {

        if (
            !toAccount.trim() ||
            !amount.trim()
        ) {

            showMessage(
                "Complete all fields",
                "error"
            );

            return;

        }

        const result =
            await confirmTransaction(
                "Confirm Transfer",
                `Transfer $${amount}?`
            );

        if (!result.isConfirmed)
            return;

        try {

            const response =
                await transfer({

                    toAccount,

                    amount:
                        Number(amount),

                    description,

                    branch:
                        "La Paz"

                });

            showMessage(
                response.message,
                "success"
            );

            setToAccount("");
            setAmount("");
            setDescription("");

            await onTransferSuccess?.();

        } catch {

            showMessage(
                "Transfer failed",
                "error"
            );

        }

    };

    return {

        toAccount,
        setToAccount,

        amount,
        setAmount,

        description,
        setDescription,

        message,
        messageType,

        transferir

    };

}