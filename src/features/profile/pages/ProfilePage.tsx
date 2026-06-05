import {
    User,
    Mail,
    Phone,
    MapPin,
    CreditCard,
    Save
} from "lucide-react";

import {
    useProfile
} from "../hooks/useProfile";

function ProfilePage() {

    const {

        profile,

        setProfile,

        loading,

        saveProfile

    } = useProfile();

    if (loading) {

        return (

            <div
                className="
                    flex
                    h-[70vh]
                    items-center
                    justify-center
                    text-slate-400
                "
            >

                Loading profile...

            </div>

        );

    }

    if (!profile) {

        return (

            <div
                className="
                    flex
                    h-[70vh]
                    items-center
                    justify-center
                    text-red-400
                "
            >

                Failed to load profile

            </div>

        );

    }

    return (

        <div className="grid gap-5 xl:grid-cols-[1fr_0.45fr]">

            <section
                className="
                    rounded-[28px]
                    border
                    border-white/5
                    bg-[#0b1524]
                    p-6
                "
            >

                <div className="mb-8">

                    <p
                        className="
                            text-xs
                            uppercase
                            tracking-[0.25em]
                            text-cyan-300
                        "
                    >

                        Personal Information

                    </p>

                    <h2
                        className="
                            mt-2
                            text-3xl
                            font-bold
                            text-white
                        "
                    >

                        My Profile

                    </h2>

                </div>

                <div className="space-y-5">

                    <InputField
                        icon={<User size={18} />}
                        label="Full Name"
                        value={profile.name}
                        onChange={(value) =>
                            setProfile({

                                ...profile,

                                name: value

                            })
                        }
                    />

                    <InputField
                        icon={<Mail size={18} />}
                        label="Email"
                        value={profile.email}
                        disabled
                    />

                    <InputField
                        icon={<CreditCard size={18} />}
                        label="CURP"
                        value={profile.curp}
                        disabled
                    />

                    <InputField
                        icon={<Phone size={18} />}
                        label="Phone"
                        value={profile.phone}
                        onChange={(value) =>
                            setProfile({

                                ...profile,

                                phone: value

                            })
                        }
                    />

                    <InputField
                        icon={<MapPin size={18} />}
                        label="Address"
                        value={profile.address}
                        onChange={(value) =>
                            setProfile({

                                ...profile,

                                address: value

                            })
                        }
                    />

                    <button

                        onClick={saveProfile}

                        className="
                            mt-4
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            bg-cyan-400
                            py-4
                            font-semibold
                            text-slate-950
                            transition
                            hover:opacity-90
                        "
                    >

                        <Save size={18} />

                        Save Changes

                    </button>

                </div>

            </section>

            <section
                className="
                    rounded-[28px]
                    border
                    border-white/5
                    bg-[#0b1524]
                    p-6
                "
            >

                <div className="mb-6">

                    <p
                        className="
                            text-xs
                            uppercase
                            tracking-[0.25em]
                            text-cyan-300
                        "
                    >

                        Account Status

                    </p>

                    <h2
                        className="
                            mt-2
                            text-2xl
                            font-bold
                            text-white
                        "
                    >

                        Client Overview

                    </h2>

                </div>

                <div className="space-y-4">

                    <InfoCard
                        title="Client Status"
                        value={
                            profile.status
                                ? "Active"
                                : "Inactive"
                        }
                    />

                    <InfoCard
                        title="Email"
                        value={profile.email}
                    />

                    <InfoCard
                        title="CURP"
                        value={profile.curp}
                    />

                </div>

            </section>

        </div>

    );

}

type InputFieldProps = {

    icon: React.ReactNode;

    label: string;

    value: string;

    disabled?: boolean;

    onChange?: (
        value: string
    ) => void;

};

function InputField({

    icon,

    label,

    value,

    disabled = false,

    onChange

}: InputFieldProps) {

    return (

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

                {label}

            </label>

            <div
                className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-4
                    py-4
                "
            >

                <div className="text-cyan-300">

                    {icon}

                </div>

                <input

                    value={value}

                    disabled={disabled}

                    onChange={(e) =>
                        onChange?.(
                            e.target.value
                        )
                    }

                    className="
                        w-full
                        bg-transparent
                        text-white
                        outline-none
                        disabled:text-slate-500
                    "
                />

            </div>

        </div>

    );

}

function InfoCard({

    title,

    value

}: {

    title: string;

    value: string;

}) {

    return (

        <div
            className="
                rounded-2xl
                bg-white/[0.03]
                p-4
            "
        >

            <p
                className="
                    text-xs
                    uppercase
                    tracking-[0.15em]
                    text-slate-500
                "
            >

                {title}

            </p>

            <p
                className="
                    mt-2
                    text-lg
                    font-semibold
                    text-white
                "
            >

                {value}

            </p>

        </div>

    );

}

export default ProfilePage;