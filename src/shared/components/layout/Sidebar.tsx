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
import { confirmLogout } from "../../utils/confirm";

type SidebarProps = {
    isOpen: boolean;
    onClose: () => void;
};

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

function Sidebar({
    isOpen,
    onClose
}: SidebarProps) {

    const { logout } = useAuth();

    const navigate = useNavigate();

    const location = useLocation();

    const handleNavigate = (
        path: string
    ) => {

        navigate(path);

        onClose();

    };
    
    const handleLogout = async () => {

        const result =
            await confirmLogout();

        if (!result.isConfirmed) {
            return;
        }

        logout();

    };

    const content = (
        <>
            <div className="mb-10 flex items-center gap-3">

                <div
                    className="
                        grid
                        h-11
                        w-11
                        shrink-0
                        place-items-center
                        rounded-2xl
                        bg-cyan-400/15
                        text-cyan-300
                        ring-1
                        ring-cyan-400/20
                    "
                >

                    <ShieldCheck className="h-5 w-5" />

                </div>

                <div className="min-w-0">

                    <h1
                        className="
                            truncate
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
                            truncate
                            text-xs
                            text-slate-500
                        "
                    >
                        Digital Banking
                    </p>

                </div>

            </div>

            <nav className="space-y-2">

                {menuItems.map((item) => {

                    const Icon = item.icon;

                    const active =
                        location.pathname === item.path;

                    return (

                        <button
                            key={item.path}
                            onClick={() =>
                                handleNavigate(item.path)
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

                            <Icon className="h-4 w-4 shrink-0" />

                            <span className="truncate">
                                {item.label}
                            </span>

                        </button>

                    );

                })}

            </nav>

            <div className="mt-auto">
                
                <button
                    onClick={handleLogout}
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

                    <LogOut className="h-4 w-4 shrink-0" />

                    <span className="truncate">
                        Logout
                    </span>

                </button>

            </div>
        </>
    );

    return (
        <>
            <div
                onClick={onClose}
                className={`
                    fixed
                    inset-0
                    z-90
                    bg-black/60
                    transition-opacity
                    lg:hidden
                    ${isOpen
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                    }
                `}
            />

            <aside style={{ zIndex: 100 }}
                className={`
                    fixed
                    left-0
                    top-0
                    z-50
                    flex
                    h-screen
                    w-72
                    flex-col
                    border-r
                    border-white/5
                    bg-[#0b1524]
                    px-5
                    py-6
                    transition-transform
                    duration-300
                    lg:hidden

                    ${isOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }
                `}
            >
                {content}
            </aside>

            <aside
                className="
                    fixed
                    top-0     
                    hidden               
                    h-screen
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
                {content}
            </aside>
        </>
    );

}

export default Sidebar;