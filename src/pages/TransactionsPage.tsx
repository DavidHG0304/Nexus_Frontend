import TransactionForm from "../components/transactions/TransactionForm";

import TransactionSidePanel from "../components/transactions/TransactionSidePanel";

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

    <div className="grid gap-5 xl:grid-cols-[1.15fr_0.55fr]">

      <TransactionForm
        cuenta={cuenta}
        monto={monto}
        setMonto={setMonto}
        depositar={depositar}
        retirar={retirar}
        mensaje={mensaje}
        tipoMensaje={tipoMensaje}
      />

      <TransactionSidePanel
        data={data}
      />

    </div>

  );

}

export default TransactionsPage;