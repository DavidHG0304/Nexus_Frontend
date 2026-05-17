import {
    CreditCard,
    ArrowRightLeft,
    LineChart,
    LifeBuoy,
    ShieldCheck,
    PlusCircle,
    LogOut
} from "lucide-react";

const menuItems = [
    {
        icon: CreditCard,
        label: "accounts"
    },
    {
        icon: ArrowRightLeft,
        label: "transactions"
    },
    {
        icon: LineChart,
        label: "analytics"
    },
    {
        icon: LifeBuoy,
        label: "support"
    }
];

type SidebarProps = {
    tab: string;
    setTab: React.Dispatch<React.SetStateAction<string>>;
};

function Sidebar({
    tab,
    setTab
}: SidebarProps) {

    return (

        <aside className="hidden w-72 border-r border-white/5 bg-[#0b1524] px-5 py-6 lg:flex lg:flex-col">

            <div className="mb-10 flex items-center gap-3">

                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-400/20">
                    <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                    <h1 className="text-lg font-semibold tracking-tight text-cyan-300">
                        Nexus Finance
                    </h1>

                    <p className="text-xs text-slate-500">
                        Institutional
                    </p>
                </div>

            </div>

            <nav className="space-y-2">

                {
                    menuItems.map((item) => {

                        const Icon = item.icon;

                        return (

                            <button
                                key={item.label}
                                onClick={() => setTab(item.label)}
                                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm capitalize transition ${tab === item.label
                                        ? "bg-white/8 text-white ring-1 ring-white/10"
                                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                                    }`}
                            >

                                <Icon className="h-4 w-4" />

                                {item.label}

                            </button>

                        );

                    })
                }

            </nav>

            <div className="mt-auto space-y-3">

                <button
                    onClick={() => setTab("transactions")}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/15 transition hover:bg-cyan-300"
                >

                    <PlusCircle className="h-4 w-4" />

                    New Transaction

                </button>

                <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white">

                    <LogOut className="h-4 w-4" />

                    Logout

                </button>

            </div>

        </aside>

    );

}

export default Sidebar;