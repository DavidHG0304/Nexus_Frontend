import TransactionForm from "../components/transactions/TransactionForm";

import type { ApiResponse } from "../types";

type TransactionsPageProps = {

    cuenta: string;

    monto: string;

    setMonto: React.Dispatch<
        React.SetStateAction<string>
    >;

    depositar: () => void;

    retirar: () => void;

    mensaje: string;

    tipoMensaje: string;

    data: ApiResponse | null;
};

function TransactionsPage({
    cuenta,
    monto,
    setMonto,
    depositar,
    retirar,
    mensaje,
    tipoMensaje,
    data
}: TransactionsPageProps) {

    return (

        <TransactionForm
            cuenta={cuenta}
            monto={monto}
            setMonto={setMonto}
            depositar={depositar}
            retirar={retirar}
            mensaje={mensaje}
            tipoMensaje={tipoMensaje}
        />

    );

}

export default TransactionsPage;