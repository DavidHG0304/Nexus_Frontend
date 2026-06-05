import {
    User,
    Mail,
    Lock,
    Phone,
    MapPin,
    ArrowRight,
    Shield,
    CreditCard
} from "lucide-react";

function RegisterPage() {

    return (

        <div
            className="
                min-h-screen
                bg-[#020d19]
                flex
                items-center
                justify-center
                px-6
                py-10
                overflow-hidden
            "
        >

            <div
                className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_70%)]
                "
            />

            <div
                className="
                    relative
                    w-full
                    max-w-7xl
                    overflow-hidden
                    rounded-[36px]
                    border
                    border-white/5
                    bg-[#081423]/95
                    backdrop-blur-xl
                    shadow-[0_0_100px_rgba(6,182,212,.08)]
                "
            >

                <div className="grid lg:grid-cols-2">

                    {/* LEFT PANEL */}

                    <div
                        className="
                            relative
                            border-r
                            border-white/5
                            p-10
                            lg:p-14
                        "
                    >

                        <div>

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                "
                            >

                                <Shield
                                    className="
                                        h-6
                                        w-6
                                        text-cyan-400
                                    "
                                />

                                <span
                                    className="
                                        text-xl
                                        font-semibold
                                        text-cyan-400
                                    "
                                >

                                    Nexus Finance

                                </span>

                            </div>

                            <div className="mt-14">

                                <h1
                                    className="
                                        text-5xl
                                        font-bold
                                        leading-tight
                                        text-white
                                    "
                                >

                                    Secure Your

                                    <br />

                                    <span
                                        className="
                                            text-cyan-400
                                        "
                                    >

                                        Financial Legacy

                                    </span>

                                </h1>

                                <p
                                    className="
                                        mt-6
                                        max-w-md
                                        text-lg
                                        text-slate-400
                                    "
                                >

                                    Join the next generation of
                                    institutional-grade banking.
                                    Precision engineered for the
                                    digital frontier.

                                </p>

                            </div>

                            <div
                                className="
                                    mt-16
                                    space-y-4
                                "
                            >

                                <div
                                    className="
                                        rounded-2xl
                                        border
                                        border-white/5
                                        bg-white/5
                                        p-5
                                    "
                                >

                                    <p
                                        className="
                                            text-sm
                                            font-semibold
                                            text-white
                                        "
                                    >

                                        End-to-End Encryption

                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-xs
                                            text-slate-500
                                        "
                                    >

                                        AES-256 standard security

                                    </p>

                                </div>

                                <div
                                    className="
                                        rounded-2xl
                                        border
                                        border-white/5
                                        bg-white/5
                                        p-5
                                    "
                                >

                                    <p
                                        className="
                                            text-sm
                                            font-semibold
                                            text-white
                                        "
                                    >

                                        Real-Time Analytics

                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-xs
                                            text-slate-500
                                        "
                                    >

                                        Live market execution

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT PANEL */}

                    <div
                        className="
                            p-10
                            lg:p-14
                        "
                    >

                        <h2
                            className="
                                text-4xl
                                font-bold
                                text-white
                            "
                        >

                            Create Account

                        </h2>

                        <p
                            className="
                                mt-2
                                text-slate-400
                            "
                        >

                            Enter your details to begin your journey.

                        </p>

                        <div
                            className="
                                mt-10
                                space-y-5
                            "
                        >

                            <Input
                                icon={<User size={18} />}
                                placeholder="Full Name"
                            />

                            <Input
                                icon={<CreditCard size={18} />}
                                placeholder="CURP"
                            />

                            <Input
                                icon={<Mail size={18} />}
                                placeholder="Email Address"
                            />

                            <div
                                className="
                                    grid
                                    gap-5
                                    md:grid-cols-2
                                "
                            >

                                <Input
                                    icon={<Lock size={18} />}
                                    placeholder="Password"
                                    type="password"
                                />

                                <Input
                                    icon={<Lock size={18} />}
                                    placeholder="Confirm Password"
                                    type="password"
                                />

                            </div>

                            <Input
                                icon={<Phone size={18} />}
                                placeholder="Phone Number"
                            />

                            <Input
                                icon={<MapPin size={18} />}
                                placeholder="Address"
                            />

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    text-sm
                                    text-slate-400
                                "
                            >

                                <input
                                    type="checkbox"
                                    className="
                                        h-4
                                        w-4
                                        accent-cyan-400
                                    "
                                />

                                I agree to the Terms of Service and Privacy Policy

                            </div>

                            <button
                                className="
                                    mt-4
                                    w-full
                                    rounded-full
                                    bg-cyan-400
                                    py-4
                                    text-lg
                                    font-semibold
                                    text-slate-950
                                    shadow-[0_0_30px_rgba(6,182,212,.4)]
                                    transition
                                    hover:scale-[1.02]
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

                                    Register Account

                                    <ArrowRight
                                        className="
                                            h-5
                                            w-5
                                        "
                                    />

                                </span>

                            </button>

                            <div
                                className="
                                    pt-4
                                    text-center
                                    text-sm
                                    text-slate-500
                                "
                            >

                                Already have an account?

                                <button
                                    className="
                                        ml-2
                                        font-semibold
                                        text-cyan-400
                                    "
                                >

                                    Log In

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

type InputProps = {

    icon: React.ReactNode;

    placeholder: string;

    type?: string;

};

function Input({
    icon,
    placeholder,
    type = "text"
}: InputProps) {

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
                type={type}
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

export default RegisterPage;