import {
    /*  UserPlus, */
    Trash2,
    Star,
    CreditCard,

} from "lucide-react";

import Loader from "../../../shared/components/ui/Loader";

import {
    useBeneficiaries
} from "../hooks/useBeneficiaries";
import { AnimatePresence, motion } from "framer-motion";

import {
    useNavigate
} from "react-router-dom";




function BeneficiariesPage() {

    const { beneficiaries, alias, setAlias, accountNumber, setAccountNumber, addBeneficiary, removeBeneficiary, error, loading } = useBeneficiaries();
    const navigate =
        useNavigate();

    if (loading) {

        return <Loader />;

    }
    return (

        <div className="space-y-6">

            {/* HEADER */}

            <div
                className="
                    rounded-[32px]
                    border
                    border-white/5
                    bg-[#081423]
                    p-6
                "
            >

                <div
                    className="
                        flex
                        flex-col
                        gap-4
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                    "
                >

                    <div>

                        <h1
                            className="
                                text-3xl
                                font-bold
                                text-white
                            "
                        >

                            Beneficiaries

                        </h1>

                        <p
                            className="
                                mt-2
                                text-slate-400
                            "
                        >

                            Manage trusted transfer destinations.

                        </p>

                    </div>

                    {/* <button
                        className="
                            rounded-full
                            bg-cyan-400
                            px-6
                            py-3
                            font-semibold
                            text-slate-950
                            shadow-[0_0_25px_rgba(6,182,212,.4)]
                        "
                    >

                        <span
                            className="
                                flex
                                items-center
                                gap-2
                            "
                        >

                            <UserPlus size={18} />

                            Add Beneficiary

                        </span>

                    </button> */}

                </div>

            </div>

            <div
                className="
                    grid
                    gap-6
                    xl:grid-cols-[0.9fr_1.2fr]
                    items-start
                "
            >

                {/* LEFT PANEL */}

                <div
                    className="
                        rounded-[32px]
                        border
                        border-white/5
                        bg-[#081423]
                        p-6
                    "
                >

                    <h2
                        className="
                            mb-6
                            text-xl
                            font-semibold
                            text-white
                        "
                    >

                        Register Beneficiary

                    </h2>

                    <div className="space-y-4">

                        <Input
                            icon={<Star size={18} />}
                            placeholder="Alias"
                            value={alias}
                            onChange={setAlias}
                        />

                        <Input
                            icon={<CreditCard size={18} />}
                            placeholder="Account Number"
                            value={accountNumber}
                            onChange={setAccountNumber}
                        />

                        <AnimatePresence>

                            {error && (

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: -10
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -10
                                    }}
                                    transition={{
                                        duration: 0.2
                                    }}
                                    className="
                mb-4
                rounded-2xl
                border
                border-red-500/20
                bg-[#2b1d2a]
                px-4
                py-4
            "
                                >

                                    <p
                                        className="
                    text-sm
                    font-semibold
                    text-red-100
                "
                                    >

                                        {error}

                                    </p>

                                </motion.div>

                            )}

                        </AnimatePresence>


                        <button
                            onClick={addBeneficiary}
                            className="
        mt-4
        w-full
        rounded-full
        bg-cyan-400
        py-4
        font-semibold
        text-slate-950
    "
                        >

                            Save Beneficiary

                        </button>

                    </div>

                </div>

                {/* RIGHT PANEL */}

                <div
                    className="
                        rounded-[32px]
                        border
                        border-white/5
                        bg-[#081423]
                        p-6
                    "
                >

                    <div
                        className="
                            mb-6
                            flex
                            flex-col
                            gap-4
                            lg:flex-row
                            lg:items-center
                            lg:justify-between
                        "
                    >

                        <h2
                            className="
                                text-xl
                                font-semibold
                                text-white
                            "
                        >

                            Saved Beneficiaries

                        </h2>



                    </div>

                    <div className="space-y-4">

                        {
                            beneficiaries.map(
                                (beneficiary) => (

                                    <BeneficiaryCard

                                        key={beneficiary._id}

                                        id={beneficiary._id}

                                        alias={beneficiary.alias}

                                        account={beneficiary.accountNumber}

                                        onDelete={removeBeneficiary}

                                        onTransfer={() => {



                                            navigate(
                                                "/transfers",
                                                {
                                                    state: {
                                                        account:
                                                            beneficiary.accountNumber
                                                    }
                                                }
                                            );

                                        }}
                                    />

                                )
                            )
                        }


                    </div>

                </div>

            </div>

        </div>

    );

}

function Input({

    icon,

    placeholder,

    value,

    onChange

}: {

    icon: React.ReactNode;

    placeholder: string;

    value: string;

    onChange: (
        value: string
    ) => void;

}) {



    return (

        <div
            className="
                flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-[#05101d]
                px-5
                py-4
            "
        >

            <span
                className="
                    text-slate-500
                "
            >

                {icon}

            </span>

            <input

                value={value}

                onChange={(e) =>
                    onChange(
                        e.target.value
                    )
                }

                placeholder={placeholder}

                className="
        w-full
        bg-transparent
        text-white
        outline-none
    "
            />

        </div>

    );

}

function BeneficiaryCard({

    id,

    alias,

    account,

    onDelete,

    onTransfer

}: {

    id: string;

    alias: string;

    account: string;

    onDelete: (
        id: string
    ) => void;

    onTransfer: () => void;

}) {

    return (

        <div
            className="
                rounded-[24px]
                border
                border-white/5
                bg-white/5
                p-5
            "
        >

            <div
                className="
                    flex
                    items-center
                    justify-between
                "
            >

                <div>

                    <h3
                        className="
                            text-lg
                            font-semibold
                            text-white
                        "
                    >

                        {alias}

                    </h3>

                    <p
                        className="
                            mt-1
                            text-sm
                            text-slate-500
                        "
                    >


                    </p>

                </div>

                <div className="flex items-center gap-2">

                    <button

                        onClick={onTransfer}

                        className="
        rounded-full
        bg-cyan-500/10
        px-4
        py-2
        text-sm
        font-medium
        text-cyan-300
        transition
        hover:bg-cyan-500/20
    "
                    >

                        Transfer

                    </button>

                    <button
                        onClick={() =>
                            onDelete(id)
                        }

                        className="
        rounded-full
        bg-red-500/10
        p-3
        text-red-400
    "
                    >

                        <Trash2 size={16} />

                    </button>

                </div>
            </div>

            <div
                className="
                    mt-4
                    rounded-2xl
                    bg-[#05101d]
                    p-4
                "
            >

                <p
                    className="
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-slate-500
                    "
                >

                    Account Number

                </p>

                <p
                    className="
                        mt-2
                        text-white
                        font-medium
                    "
                >

                    {account}

                </p>

            </div>

        </div>

    );

}

export default BeneficiariesPage;