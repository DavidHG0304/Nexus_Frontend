import {
    LayoutDashboard,
    ArrowRightLeft,
    User,
    ShieldCheck,
    LogOut,
    HistoryIcon
} from "lucide-react";

import { useAuth } from "../../../features/auth/context/AuthContext";

const menuItems = [

    {
        icon: LayoutDashboard,
        label: "dashboard"
    },

    {
        icon: ArrowRightLeft,
        label: "transfers"
    },

    {
        icon: User,
        label: "profile"
    },

    {
        icon: ShieldCheck,
        label: "beneficiaries"
    },

    {
        icon: HistoryIcon,
        label: "history"
    }

];

type SidebarProps = {

    tab: string;

    setTab: React.Dispatch<
        React.SetStateAction<string>
    >;

};

function Sidebar({

    tab,

    setTab

}: SidebarProps) {

    const {
        logout
    } = useAuth();

    return (

        <aside
            className="
                hidden
                w-72
                border-r
                border-white/5
                bg-[#0b1524]
                px-5
                py-6
                lg:flex
                lg:flex-col
            "
        >

            <div className="mb-10 flex items-center gap-3">

                <div
                    className="
                        grid
                        h-11
                        w-11
                        place-items-center
                        rounded-2xl
                        bg-cyan-400/15
                        text-cyan-300
                        ring-1
                        ring-cyan-400/20
                    "
                >

                    <ShieldCheck
                        className="
                            h-5
                            w-5
                        "
                    />

                </div>

                <div>

                    <h1
                        className="
                            text-lg
                            font-semibold
                            tracking-tight
                            text-cyan-300
                        "
                    >

                        Nexus Bank

                    </h1>

                    <p
                        className="
                            text-xs
                            text-slate-500
                        "
                    >

                        Digital Banking

                    </p>

                </div>

            </div>

            <nav className="space-y-2">

                {

                    menuItems.map(
                        (item) => {

                            const Icon =
                                item.icon;

                            return (

                                <button
                                    key={
                                        item.label
                                    }
                                    onClick={() =>
                                        setTab(
                                            item.label
                                        )
                                    }
                                    className={`
                                        flex
                                        w-full
                                        items-center
                                        gap-3
                                        rounded-2xl
                                        px-4
                                        py-3
                                        text-left
                                        text-sm
                                        capitalize
                                        transition

                                        ${tab ===
                                            item.label

                                            ? "bg-white/8 text-white ring-1 ring-white/10"

                                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                                        }
                                    `}
                                >

                                    <Icon
                                        className="
                                            h-4
                                            w-4
                                        "
                                    />

                                    {
                                        item.label
                                    }

                                </button>

                            );

                        }
                    )

                }

            </nav>

            <div className="mt-auto">

                <button
                    onClick={logout}
                    className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-2xl
                        px-4
                        py-3
                        text-sm
                        text-slate-400
                        transition
                        hover:bg-white/5
                        hover:text-white
                    "
                >

                    <LogOut
                        className="
                            h-4
                            w-4
                        "
                    />

                    Logout

                </button>

            </div>

        </aside>

    );

}

export default Sidebar;