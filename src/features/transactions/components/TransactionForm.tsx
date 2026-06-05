import {
    ArrowRight,
    Landmark
} from "lucide-react";

import MessageAlert from "./MessageAlert";

import {
    primaryButton
} from "../../../styles/shared/buttons";

import {
    formCard,
    inputStyle,
    quickAmountButton
} from "../../../styles/shared/forms";

import {
    cyanLabel,
    mutedText,
    sectionHeading
} from "../../../styles/shared/text";

import type {
    Beneficiary
} from "../../beneficiaries/types/beneficiary.types";

type TransactionFormProps = {

    beneficiaries:
    Beneficiary[];

    toAccount: string;

    setToAccount: React.Dispatch<
        React.SetStateAction<string>
    >;

    amount: string;

    setAmount: React.Dispatch<
        React.SetStateAction<string>
    >;

    description: string;

    setDescription: React.Dispatch<
        React.SetStateAction<string>
    >;

    transferir: () => void;

    message: string;

    messageType: string;

};

function TransactionForm({
    beneficiaries,

    toAccount,

    setToAccount,

    amount,

    setAmount,

    description,

    setDescription,

    transferir,

    message,

    messageType

}: TransactionFormProps) {

    const quickAmounts = [
        500,
        1000,
        2500,
        5000
    ];

    return (



        <section className={formCard}>

            <div className="mb-6 flex items-start justify-between">

                <div>

                    <p className={cyanLabel}>

                        Banking Operations

                    </p>

                    <h2 className={sectionHeading}>

                        Bank Transfer

                    </h2>

                    <p className={`mt-2 ${mutedText}`}>

                        Send funds securely to another account.

                    </p>

                </div>


                <div
                    className="
                        grid
                        h-14
                        w-14
                        place-items-center
                        rounded-2xl
                        bg-cyan-400/10
                        text-cyan-300
                    "
                >

                    <Landmark
                        className="
                            h-6
                            w-6
                        "
                    />

                </div>

            </div>

            <div className="space-y-5">

                <div>

                    <label
                        className="
                            mb-2
                            block
                            text-sm
                            font-medium
                            text-slate-300
                        "
                    >

                        Destination Account

                    </label>

                    <input
                        type="text"
                        placeholder="1800000021"
                        value={toAccount}
                        onChange={(e) =>
                            setToAccount(
                                e.target.value
                            )
                        }
                        className={inputStyle}
                    />

                </div>

                <div>

                    <div
                        className="
            mb-3
            flex
            items-center
            justify-between
        "
                    >

                        <label
                            className="
                text-sm
                font-medium
                text-slate-300
            "
                        >

                            Quick Beneficiaries

                        </label>

                        <span
                            className="
                text-xs
                text-slate-500
            "
                        >

                            Tap to autofill

                        </span>

                    </div>

                    <div
                        className="
            flex
            gap-3
            overflow-x-auto
            pb-2
        "
                    >

                        {

                            beneficiaries.map(
                                (
                                    beneficiary
                                ) => (

                                    <button

                                        key={
                                            beneficiary._id
                                        }

                                        type="button"

                                        onClick={() =>
                                            setToAccount(
                                                beneficiary.accountNumber
                                            )
                                        }

                                        className={`
                            min-w-[150px]
                            rounded-2xl
                            border
                            p-4
                            text-left
                            transition

                            ${toAccount ===
                                                beneficiary.accountNumber

                                                ? "border-cyan-400/40 bg-cyan-400/10"

                                                : "border-white/10 bg-white/[0.03] hover:border-cyan-400/20"
                                            }
                        `}
                                    >

                                        <p
                                            className="
                                font-medium
                                text-white
                            "
                                        >

                                            {
                                                beneficiary.alias
                                            }

                                        </p>

                                        <p
                                            className="
                                mt-1
                                text-xs
                                text-slate-500
                            "
                                        >

                                            {
                                                beneficiary.accountNumber
                                            }

                                        </p>

                                    </button>

                                )
                            )

                        }

                    </div>

                </div>

                <div>

                    <div
                        className="
                            mb-2
                            flex
                            items-center
                            justify-between
                        "
                    >

                        <label
                            className="
                                text-sm
                                font-medium
                                text-slate-300
                            "
                        >

                            Amount

                        </label>

                        <span
                            className="
                                text-xs
                                text-slate-500
                            "
                        >

                            MXN Currency

                        </span>

                    </div>

                    <input
                        type="number"
                        placeholder="Enter amount..."
                        value={amount}
                        onChange={(e) =>
                            setAmount(
                                e.target.value
                            )
                        }
                        className={inputStyle}
                    />

                </div>

                <div className="flex flex-wrap gap-2">

                    {
                        quickAmounts.map(
                            (quickAmount) => (

                                <button
                                    key={quickAmount}
                                    onClick={() =>
                                        setAmount(
                                            String(
                                                quickAmount
                                            )
                                        )
                                    }
                                    className={
                                        quickAmountButton
                                    }
                                >

                                    $
                                    {
                                        quickAmount
                                            .toLocaleString(
                                                "es-MX"
                                            )
                                    }

                                </button>

                            )
                        )
                    }

                </div>

                <div>

                    <label
                        className="
                            mb-2
                            block
                            text-sm
                            font-medium
                            text-slate-300
                        "
                    >

                        Transfer Concept

                    </label>

                    <textarea
                        rows={4}
                        value={description}
                        onChange={(e) =>
                            setDescription(
                                e.target.value
                            )
                        }
                        placeholder="Payment, rent, services..."
                        className={inputStyle}
                    />

                </div>

                {
                    message && (

                        <MessageAlert
                            mensaje={message}
                            tipoMensaje={messageType}
                        />

                    )
                }

                <div className="pt-2">

                    <button
                        onClick={transferir}
                        className={primaryButton}
                    >

                        <span
                            className="
                                flex
                                items-center
                                justify-center
                                gap-2
                            "
                        >

                            Transfer Funds

                            <ArrowRight
                                className="
                                    h-4
                                    w-4
                                "
                            />

                        </span>

                    </button>

                </div>

            </div>

        </section>

    );

}

export default TransactionForm;