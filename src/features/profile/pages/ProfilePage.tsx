import {
    User,
    Shield,
    Smartphone,
    Monitor,
    Pencil,
    LogOut
} from "lucide-react";

function ProfilePage() {

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
                    shadow-[0_0_50px_rgba(6,182,212,.05)]
                "
            >

                <div
                    className="
                        flex
                        flex-col
                        gap-6
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                    "
                >

                    <div className="flex items-center gap-5">

                        <div
                            className="
                                h-24
                                w-24
                                rounded-full
                                border-2
                                border-cyan-400
                                bg-gradient-to-br
                                from-slate-700
                                to-slate-900
                            "
                        />

                        <div>

                            <h1
                                className="
                                    text-3xl
                                    font-bold
                                    text-white
                                "
                            >

                                Alexander Sterling

                            </h1>

                            <p
                                className="
                                    mt-1
                                    text-slate-400
                                "
                            >

                                Nexus Institutional ID:
                                {" "}
                                <span className="text-cyan-400">
                                    NXS-8821-X
                                </span>

                            </p>

                            <div
                                className="
                                    mt-4
                                    flex
                                    flex-wrap
                                    gap-2
                                "
                            >

                                <span
                                    className="
                                        rounded-full
                                        bg-cyan-400/10
                                        px-3
                                        py-1
                                        text-xs
                                        font-semibold
                                        text-cyan-400
                                    "
                                >

                                    PREMIUM TIER

                                </span>

                                <span
                                    className="
                                        rounded-full
                                        bg-green-500/10
                                        px-3
                                        py-1
                                        text-xs
                                        font-semibold
                                        text-green-400
                                    "
                                >

                                    KYC VERIFIED

                                </span>

                            </div>

                        </div>

                    </div>

                    <button
                        className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            px-6
                            py-3
                            text-white
                            hover:bg-white/10
                        "
                    >

                        <span
                            className="
                                flex
                                items-center
                                gap-2
                            "
                        >

                            <Pencil size={16} />

                            Edit Profile

                        </span>

                    </button>

                </div>

            </div>

            {/* CONTENT */}

            <div
                className="
                    grid
                    gap-6
                    xl:grid-cols-[1.2fr_0.7fr]
                "
            >

                {/* LEFT */}

                <div className="space-y-6">

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
                                flex
                                items-center
                                gap-2
                                text-xl
                                font-semibold
                                text-white
                            "
                        >

                            <User
                                size={18}
                                className="text-cyan-400"
                            />

                            Personal Information

                        </h2>

                        <div
                            className="
                                grid
                                gap-4
                                md:grid-cols-2
                            "
                        >

                            <InfoCard
                                label="Legal Full Name"
                                value="Alexander Julian Sterling"
                            />

                            <InfoCard
                                label="Email Address"
                                value="a.sterling@nexus-va.com"
                            />

                            <InfoCard
                                label="Phone Number"
                                value="+1 (555) 942-0192"
                            />

                            <InfoCard
                                label="Tax Residency"
                                value="United Kingdom"
                            />

                            <div className="md:col-span-2">

                                <InfoCard
                                    label="Primary Wallet"
                                    value="0x71C7656EC7ab88b098defB751B7401B5f6d..."
                                />

                            </div>

                        </div>

                        <button
                            className="
                                mt-8
                                rounded-full
                                bg-cyan-400
                                px-8
                                py-3
                                font-semibold
                                text-slate-950
                                shadow-[0_0_25px_rgba(6,182,212,.4)]
                            "
                        >

                            Save Changes

                        </button>

                    </div>

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

                            Account Limits

                        </h2>

                        <LimitBar
                            label="Daily Transfer Limit"
                            value="$1,500,000 / $2,000,000"
                        />

                        <LimitBar
                            label="Monthly Withdrawal Limit"
                            value="$4,250,000 / $10,000,000"
                        />

                    </div>

                </div>

                {/* RIGHT */}

                <div className="space-y-6">

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
                                flex
                                items-center
                                gap-2
                                text-xl
                                font-semibold
                                text-white
                            "
                        >

                            <Shield
                                size={18}
                                className="text-cyan-400"
                            />

                            Security Settings

                        </h2>

                        <SecurityCard
                            title="Two-Factor Auth (2FA)"
                            subtitle="Google Authenticator"
                        />

                        <SecurityCard
                            title="Biometric Unlock"
                            subtitle="FaceID or Fingerprint"
                        />

                        <SecurityCard
                            title="Hardware Key"
                            subtitle="Physical protection"
                        />

                    </div>

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

                            Active Sessions

                        </h2>

                        <SessionCard
                            icon={<Monitor size={18} />}
                            device="MacBook Pro 16"
                            location="London, UK"
                        />

                        <SessionCard
                            icon={<Smartphone size={18} />}
                            device="iPhone 15 Pro"
                            location="Paris, FR"
                        />

                        <button
                            className="
                                mt-6
                                w-full
                                rounded-full
                                border
                                border-red-500/20
                                py-3
                                text-red-400
                            "
                        >

                            <span
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                "
                            >

                                <LogOut size={16} />

                                Revoke All Sessions

                            </span>

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

function InfoCard({
    label,
    value
}: {
    label: string;
    value: string;
}) {

    return (

        <div
            className="
                rounded-2xl
                bg-white/5
                p-4
            "
        >

            <p className="text-xs text-slate-500">
                {label}
            </p>

            <p className="mt-2 text-white">
                {value}
            </p>

        </div>

    );

}

function SecurityCard({
    title,
    subtitle
}: {
    title: string;
    subtitle: string;
}) {

    return (

        <div
            className="
                mb-4
                rounded-2xl
                bg-white/5
                p-4
            "
        >

            <p className="font-semibold text-white">
                {title}
            </p>

            <p className="text-sm text-slate-500">
                {subtitle}
            </p>

        </div>

    );

}

function SessionCard({
    icon,
    device,
    location
}: {
    icon: React.ReactNode;
    device: string;
    location: string;
}) {

    return (

        <div
            className="
                mb-4
                flex
                items-center
                gap-3
                rounded-2xl
                bg-white/5
                p-4
            "
        >

            <div className="text-cyan-400">

                {icon}

            </div>

            <div>

                <p className="text-white">
                    {device}
                </p>

                <p className="text-sm text-slate-500">
                    {location}
                </p>

            </div>

        </div>

    );

}

function LimitBar({
    label,
    value
}: {
    label: string;
    value: string;
}) {

    return (

        <div className="mb-6">

            <div
                className="
                    mb-2
                    flex
                    justify-between
                "
            >

                <span className="text-slate-400">
                    {label}
                </span>

                <span className="text-cyan-400">
                    {value}
                </span>

            </div>

            <div
                className="
                    h-2
                    overflow-hidden
                    rounded-full
                    bg-white/10
                "
            >

                <div
                    className="
                        h-full
                        w-3/4
                        rounded-full
                        bg-cyan-400
                    "
                />

            </div>

        </div>

    );

}

export default ProfilePage;