import {
    ArrowLeft,
    ArrowRight,
    Landmark
} from "lucide-react";

import MessageAlert from "./MessageAlert";

import {
    primaryButton,
    secondaryButton
} from "../../styles/buttons";

import {
    formCard,
    inputStyle,
    quickAmountButton
} from "../../styles/forms";

import {
    cyanLabel,
    mutedText,
    sectionHeading
} from "../../styles/text";

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

    const quickAmounts = [
        500,
        1000,
        2500,
        5000
    ];

    return (

        <section className={formCard}>

            <div className="mb-6 flex items-start justify-between">

                <div>

                    <p className={cyanLabel}>

                        Banking Operations

                    </p>

                    <h2 className={sectionHeading}>

                        New Transaction

                    </h2>

                    <p className={`mt-2 ${mutedText}`}>

                        Make deposits and withdrawals securely.

                    </p>

                </div>

                <div
                    className="
          grid
          h-14
          w-14
          place-items-center
          rounded-2xl
          bg-cyan-400/10
          text-cyan-300
          "
                >

                    <Landmark className="h-6 w-6" />

                </div>

            </div>

            <div className="space-y-5">

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

                        Account Number

                    </label>

                    <input
                        type="text"
                        value={cuenta}
                        disabled
                        className={`
              ${inputStyle}
              opacity-60
              cursor-not-allowed
            `}
                    />

                </div>

                <div>

                    <div className="mb-2 flex items-center justify-between">

                        <label
                            className="
              text-sm
              font-medium
              text-slate-300
              "
                        >

                            Amount

                        </label>

                        <span className="text-xs text-slate-500">

                            MXN Currency

                        </span>

                    </div>

                    <input
                        type="number"
                        placeholder="Enter amount..."
                        value={monto}
                        onChange={(e) =>
                            setMonto(e.target.value)
                        }
                        className={inputStyle}
                    />

                </div>

                <div className="flex flex-wrap gap-2">

                    {
                        quickAmounts.map((amount) => (

                            <button
                                key={amount}
                                onClick={() =>
                                    setMonto(String(amount))
                                }
                                className={quickAmountButton}
                            >

                                ${amount.toLocaleString("es-MX")}

                            </button>

                        ))
                    }

                </div>

                {
                    mensaje && (

                        <MessageAlert
                            mensaje={mensaje}
                            tipoMensaje={tipoMensaje}
                        />

                    )
                }

                <div className="grid gap-3 pt-2 sm:grid-cols-2">

                    <button
                        onClick={retirar}
                        className={secondaryButton}
                    >

                        <span className="flex items-center justify-center gap-2">

                            <ArrowLeft className="h-4 w-4" />

                            Withdraw

                        </span>

                    </button>

                    <button
                        onClick={depositar}
                        className={primaryButton}
                    >

                        <span className="flex items-center justify-center gap-2">

                            Deposit

                            <ArrowRight className="h-4 w-4" />

                        </span>

                    </button>

                </div>

            </div>

        </section>

    );

}

export default TransactionForm;