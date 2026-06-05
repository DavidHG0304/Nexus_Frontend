import {
    LayoutDashboard,
    ArrowRightLeft,
    User,
    ShieldCheck,
    LogOut,
    HistoryIcon
} from "lucide-react";

import {
    useLocation,
    useNavigate
} from "react-router-dom";

import {
    useAuth
} from "../../../features/auth/context/AuthContext";

const menuItems = [

    {
        icon: LayoutDashboard,
        label: "Dashboard",
        path: "/dashboard"
    },

    {
        icon: ArrowRightLeft,
        label: "Transfers",
        path: "/transfers"
    },

    {
        icon: ShieldCheck,
        label: "Beneficiaries",
        path: "/beneficiaries"
    },

    {
        icon: HistoryIcon,
        label: "History",
        path: "/history"
    },

    {
        icon: User,
        label: "Profile",
        path: "/profile"
    }

];

function Sidebar() {

    const {
        logout
    } = useAuth();

    const navigate =
        useNavigate();

    const location =
        useLocation();

    return (

        <aside
            className="
                sticky
                top-0
                h-screen
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

                            const active =

                                location.pathname ===
                                item.path;

                            return (

                                <button

                                    key={
                                        item.path
                                    }

                                    onClick={() =>
                                        navigate(
                                            item.path
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
                                        transition

                                        ${active

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

                                    {item.label}

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