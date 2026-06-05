import { useEffect, useState } from "react";

import {
    transfer
} from "../services/transferService";

import {
    confirmTransaction
} from "../../../shared/utils/alerts";
import { errorToast, successToast } from "../../../shared/utils/toast";
import { useLocation } from "react-router-dom";

type UseTransfersProps = {

    onTransferSuccess?:
    () => Promise<void> | void;

};

export function useTransactions({
    onTransferSuccess
}: UseTransfersProps) {

    const location =
        useLocation();

    const account =
        location.state?.account;

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


    useEffect(() => {

        if (account) {

            setToAccount(account);

        }

    }, [account]);


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
            !amount.trim() ||
            !description.trim()
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

                `Transfer $${amount} MXN to account ${toAccount}?`

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

            successToast(
                response.message
            );


            setToAccount("");
            setAmount("");
            setDescription("");

            await onTransferSuccess?.();

        } catch {

            errorToast(
                "Transfer failed"
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