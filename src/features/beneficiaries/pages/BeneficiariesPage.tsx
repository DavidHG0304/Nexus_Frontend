import {
    UserPlus,
    Search,
    Trash2,
    Star,
    Building2,
    CreditCard,
    ShieldCheck
} from "lucide-react";

function BeneficiariesPage() {

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

                    <button
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

                    </button>

                </div>

            </div>

            <div
                className="
                    grid
                    gap-6
                    xl:grid-cols-[0.9fr_1.2fr]
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
                        />

                        <Input
                            icon={<CreditCard size={18} />}
                            placeholder="Account Number"
                        />

                        <Input
                            icon={<Building2 size={18} />}
                            placeholder="Bank Name"
                        />

                        <Input
                            icon={<ShieldCheck size={18} />}
                            placeholder="Relationship"
                        />

                        <button
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

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                                rounded-full
                                border
                                border-white/10
                                bg-[#05101d]
                                px-4
                                py-2
                            "
                        >

                            <Search
                                size={16}
                                className="
                                    text-slate-500
                                "
                            />

                            <input
                                placeholder="Search..."
                                className="
                                    bg-transparent
                                    text-white
                                    outline-none
                                "
                            />

                        </div>

                    </div>

                    <div className="space-y-4">

                        <BeneficiaryCard
                            alias="Primary Savings"
                            bank="Nexus Bank"
                            account="001-445-998-100"
                        />

                        <BeneficiaryCard
                            alias="Investment Vault"
                            bank="Global Finance"
                            account="775-221-004-511"
                        />

                        <BeneficiaryCard
                            alias="Business Reserve"
                            bank="Corporate Trust"
                            account="881-552-777-911"
                        />

                    </div>

                </div>

            </div>

        </div>

    );

}

function Input({
    icon,
    placeholder
}: {
    icon: React.ReactNode;
    placeholder: string;
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
    alias,
    bank,
    account
}: {
    alias: string;
    bank: string;
    account: string;
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

                        {bank}

                    </p>

                </div>

                <button
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