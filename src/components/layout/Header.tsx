import {
    Bell,
    Search,
    Settings,
    UserCircle2
} from "lucide-react";

type HeaderProps = {
    tab: string;
};

function Header({
    tab
}: HeaderProps) {

    return (

        <header className="mb-6 flex flex-col gap-4 rounded-[28px] border border-white/5 bg-[#0b1524]/80 px-5 py-4 shadow-2xl shadow-black/20 backdrop-blur xl:flex-row xl:items-center xl:justify-between">

            <div>

                <p className="text-sm text-cyan-300/80">
                    Banco Nexus
                </p>

                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl capitalize">
                    {tab}
                </h2>

            </div>

            <div className="flex items-center gap-3">

                <div className="hidden items-center gap-2 rounded-full border border-white/5 bg-black/20 px-4 py-2 text-sm text-slate-500 md:flex">

                    <Search className="h-4 w-4" />

                    Search accounts...

                </div>

                <button className="grid h-11 w-11 place-items-center rounded-full bg-white/5 text-slate-300 hover:bg-white/10">

                    <Bell className="h-4 w-4" />

                </button>

                <button className="grid h-11 w-11 place-items-center rounded-full bg-white/5 text-slate-300 hover:bg-white/10">

                    <Settings className="h-4 w-4" />

                </button>

                <div className="grid h-11 w-11 place-items-center rounded-full bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-400/20">

                    <UserCircle2 className="h-5 w-5" />

                </div>

            </div>

        </header>

    );

}

export default Header;