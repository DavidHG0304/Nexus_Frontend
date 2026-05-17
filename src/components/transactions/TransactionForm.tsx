import MessageAlert from "./MessageAlert";
import {
    primaryButton,
    secondaryButton
} from "../../styles/buttons";

type TransactionFormProps = {
    cuenta: string;

    monto: string;

    setMonto: React.Dispatch<
        React.SetStateAction<string>
    >;

    depositar: () => void;

    retirar: () => void;

    mensaje: string;

    tipoMensaje: string;
};

function TransactionForm({
    cuenta,
    monto,
    setMonto,
    depositar,
    retirar,
    mensaje,
    tipoMensaje
}: TransactionFormProps) {

    return (

        <div className="rounded-[28px] border border-white/5 bg-[#0b1524] p-5 shadow-2xl shadow-black/20">

            <div className="mb-5">

                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Operaciones bancarias
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-white">
                    Depósitos y retiros
                </h3>

            </div>

            <div className="space-y-5">

                <div>

                    <label className="mb-3 block text-sm text-slate-400">
                        Número de cuenta
                    </label>

                    <input
                        type="text"
                        value={cuenta}
                        disabled
                        className="h-14 w-full rounded-2xl border border-white/5 bg-[#07111f] px-4 text-white opacity-70 outline-none"
                    />

                </div>

                <div>

                    <label className="mb-3 block text-sm text-slate-400">
                        Monto
                    </label>

                    <input
                        type="number"
                        value={monto}
                        onChange={(e) => setMonto(e.target.value)}
                        placeholder="Ej. 500"
                        className="h-14 w-full rounded-2xl border border-white/5 bg-[#07111f] px-4 text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/40"
                    />

                </div>

                <div className="grid gap-3 pt-2 sm:grid-cols-2">

                    <button
                        onClick={depositar}
                        className={primaryButton}>

                        Depositar

                    </button>

                    <button
                        onClick={retirar}
                        className={secondaryButton}>

                        Retirar

                    </button>

                </div>

                <MessageAlert
                    mensaje={mensaje}
                    tipoMensaje={tipoMensaje}
                />

            </div>

        </div>

    );

}

export default TransactionForm;