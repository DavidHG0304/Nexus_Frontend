import {
    ArrowUpRight,
    ArrowRightLeft,
    Search,
    Filter
} from "lucide-react";
import { useHistory } from "../hooks/useHistory";
import { useDashboard } from "../../dashboard/hook/useDashboard";

function HistoryPage() {

    const {
        data: dashboard
    } = useDashboard();

    const myAccount =
        dashboard?.account.accountNumber;

    const {
        transactions
    } = useHistory();

    const totalIncome =
        transactions

            .filter(

                transaction =>

                    transaction.toAccount ===
                    myAccount

            )

            .reduce(

                (sum, transaction) =>

                    sum +
                    transaction.amount,

                0

            );

    const totalExpenses =
        transactions

            .filter(

                transaction =>

                    transaction.fromAccount ===
                    myAccount

            )

            .reduce(

                (sum, transaction) =>

                    sum +
                    transaction.amount,

                0

            );


    const totalTransfers =
        transactions.length;





    return (

        <div className="space-y-6">

            {/* HEADER */}

            <div
                className="
                    rounded-[32px]
                    border
                    border-white/5
                    bg-[#081423]
                    p-6
                "
            >

                <h1
                    className="
                        text-3xl
                        font-bold
                        text-white
                    "
                >

                    Transaction History

                </h1>

                <p
                    className="
                        mt-2
                        text-slate-400
                    "
                >

                    Monitor and audit all account activity.

                </p>

            </div>

            {/* STATS */}

            <div
                className="
                    grid
                    gap-5
                    md:grid-cols-3
                "
            >

                <StatCard
                    title="Monthly Income"
                    value={`$${totalIncome.toLocaleString("es-MX")}`}
                    color="text-green-400"
                />

                <StatCard
                    title="Monthly Expenses"
                    value={`$${totalExpenses.toLocaleString("es-MX")}`}
                    color="text-red-400"
                />

                <StatCard
                    title="Transfers"
                    value={totalTransfers.toString()}
                    color="text-cyan-400"
                />

            </div>

            {/* FILTERS */}

            <div
                className="
                    rounded-[32px]
                    border
                    border-white/5
                    bg-[#081423]
                    p-6
                "
            >

                <div
                    className="
                        flex
                        flex-col
                        gap-4
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            gap-3
                            rounded-full
                            border
                            border-white/10
                            bg-[#05101d]
                            px-5
                            py-3
                        "
                    >

                        <Search
                            size={18}
                            className="
                                text-slate-500
                            "
                        />

                        <input
                            placeholder="Search transactions..."
                            className="
                                bg-transparent
                                text-white
                                outline-none
                            "
                        />

                    </div>

                    <div className="flex gap-3">

                        <button
                            className="
                                rounded-full
                                border
                                border-white/10
                                px-5
                                py-3
                                text-slate-300
                            "
                        >

                            <span
                                className="
                                    flex
                                    items-center
                                    gap-2
                                "
                            >

                                <Filter size={16} />

                                All Types

                            </span>

                        </button>

                        <button
                            className="
                                rounded-full
                                border
                                border-white/10
                                px-5
                                py-3
                                text-slate-300
                            "
                        >

                            Last 30 Days

                        </button>

                    </div>

                </div>

            </div>

            {/* TABLE */}

            <div
                className="
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/5
                    bg-[#081423]
                "
            >

                <table className="w-full">

                    <thead>

                        <tr
                            className="
                                border-b
                                border-white/5
                                text-left
                            "
                        >

                            <th className="p-5 text-slate-500">
                                Type
                            </th>

                            <th className="p-5 text-slate-500">
                                Date
                            </th>

                            <th className="p-5 text-slate-500">
                                Origin
                            </th>

                            <th className="p-5 text-slate-500">
                                Destination
                            </th>

                            <th className="p-5 text-slate-500">
                                Amount
                            </th>

                            <th className="p-5 text-slate-500">
                                Status
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            transactions.map(
                                (transaction) => (

                                    <TransactionRow

                                        key={
                                            transaction._id
                                        }

                                        type={
                                            transaction.type
                                        }

                                        date={
                                            new Date(
                                                transaction.date
                                            ).toLocaleDateString(
                                                "es-MX"
                                            )
                                        }

                                        origin={
                                            transaction.fromAccount
                                        }

                                        destination={
                                            transaction.toAccount
                                        }

                                        amount={
                                            transaction.amount.toFixed(2) as unknown as number
                                        }

                                        status={
                                            transaction.status
                                        }

                                    />

                                )
                            )
                        }
                    </tbody>

                </table>

            </div>

        </div>

    );

}

function StatCard({
    title,
    value,
    color
}: {
    title: string;
    value: string;
    color: string;
}) {

    return (

        <div
            className="
                rounded-[28px]
                border
                border-white/5
                bg-[#081423]
                p-6
            "
        >

            <p className="text-slate-500">

                {title}

            </p>

            <h3
                className={`
                    mt-3
                    text-3xl
                    font-bold
                    ${color}
                `}
            >

                {value}

            </h3>

        </div>

    );

}

function TransactionRow({

    type,

    date,

    origin,

    destination,

    amount,

    status

}: {

    type: string;

    date: string;

    origin: string;

    destination: string;

    amount: number;

    status: string;

}) {

    const isTransfer =
        type
            .toLowerCase()
            .includes(
                "transfer"
            );



    return (

        <tr
            className="
                border-b
                border-white/5
            "
        >

            <td className="p-5">

                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >

                    <div
                        className="
                            rounded-full
                            bg-white/5
                            p-2
                            text-cyan-400
                        "
                    >

                        {
                            isTransfer

                                ? (
                                    <ArrowRightLeft
                                        size={18}
                                    />
                                )

                                : (
                                    <ArrowUpRight
                                        size={18}
                                    />
                                )
                        }

                    </div>

                    <span className="text-white">

                        {type}

                    </span>

                </div>

            </td>

            <td className="p-5 text-slate-300">
                {date}
            </td>

            <td className="p-5 text-slate-300">
                {origin}
            </td>

            <td className="p-5 text-slate-300">
                {destination}
            </td>

            <td
                className="
        p-5
        font-semibold
        text-cyan-400
    "
            >

                $

                {
                    amount.toLocaleString(
                        "es-MX"
                    )
                }

            </td>

            <td className="p-5">

                <span
                    className="
                        rounded-full
                        bg-green-500/10
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        text-green-400
                    "
                >

                    {status}

                </span>

            </td>

        </tr>

    );

}

export default HistoryPage;