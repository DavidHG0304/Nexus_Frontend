import AccountSearch from "../components/accounts/AccountSearch";
import AccountSummary from "../components/accounts/AccountSummary";
import TransactionsList from "../components/accounts/TransactionsList";

import type { ApiResponse } from "../types";

type AccountsPageProps = {
    cuenta: string;

    setCuenta: React.Dispatch<
        React.SetStateAction<string>
    >;

    consultarCuenta: () => void;

    loading: boolean;

    error: string;

    data: ApiResponse | null;
};

function AccountsPage({
    cuenta,
    setCuenta,
    consultarCuenta,
    loading,
    error,
    data
}: AccountsPageProps) {

    return (

        <div className="space-y-5">

            <AccountSearch
                cuenta={cuenta}
                setCuenta={setCuenta}
                consultarCuenta={consultarCuenta}
                loading={loading}
                error={error}
            />

            <AccountSummary
                data={data}
            />

            <TransactionsList
                transactions={data?.transactions || []}
            />

        </div>

    );

}

export default AccountsPage;