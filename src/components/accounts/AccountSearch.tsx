type AccountSearchProps = {
    cuenta: string;
    setCuenta: React.Dispatch<React.SetStateAction<string>>;
    consultarCuenta: () => void;
    loading: boolean;
    error: string;
};

function AccountSearch({
    cuenta,
    setCuenta,
    consultarCuenta,
    loading,
    error
}: AccountSearchProps) {

    return (

        <div className="rounded-[28px] border border-white/5 bg-[#0b1524] p-5 shadow-2xl shadow-black/20">

            <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">

                Número de cuenta

            </label>

            <div className="flex flex-col gap-3 sm:flex-row">

                <input
                    type="text"
                    value={cuenta}
                    onChange={(e) => setCuenta(e.target.value)}
                    placeholder="Ej. 001"
                    className="h-14 flex-1 rounded-2xl border border-white/5 bg-[#07111f] px-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/40"
                />

                <button
                    onClick={consultarCuenta}
                    disabled={loading}
                    className="h-14 rounded-2xl bg-cyan-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >

                    {loading ? "Consultando..." : "Consultar"}

                </button>

            </div>

            {
                error && (

                    <p className="mt-3 text-sm text-red-300">
                        {error}
                    </p>

                )
            }

        </div>

    );

}

export default AccountSearch;