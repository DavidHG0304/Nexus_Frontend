import {
    ArrowUpRight,
    /*  Search,
     Filter, */
    ArrowDownLeft,
    Search
} from "lucide-react";
import { useHistory } from "../hooks/useHistory";
import { useDashboard } from "../../dashboard/hook/useDashboard";
import Loader from "../../../shared/components/ui/Loader";
import { useEffect, useState } from "react";

function HistoryPage() {

    const {
        data: dashboard,
        loading: dashboardLoading
    } = useDashboard();


    const myAccount =
        dashboard?.account.accountNumber;

    const {
        transactions,
        loading: loadingTransactions
    } = useHistory();

    const [search, setSearch] =
        useState("");

    const [typeFilter, setTypeFilter] =
        useState("all");

    const [currentPage, setCurrentPage] =
        useState(1);

    const itemsPerPage = 10;

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

    const filteredTransactions =

        transactions.filter(
            (transaction) => {

                const matchesSearch =

                    transaction.description
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )

                    ||

                    transaction.fromAccount
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )

                    ||

                    transaction.toAccount
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        );

                const isIncome =

                    transaction.toAccount ===
                    myAccount;

                const matchesType =

                    typeFilter === "all"

                    ||

                    (
                        typeFilter === "income" &&
                        isIncome
                    )

                    ||

                    (
                        typeFilter === "expense" &&
                        !isIncome
                    );

                return (
                    matchesSearch &&
                    matchesType
                );

            }
        );

    const totalPages =

        Math.ceil(

            filteredTransactions.length /

            itemsPerPage

        );

    const startIndex =

        (currentPage - 1) *

        itemsPerPage;

    const paginatedTransactions =

        filteredTransactions.slice(

            startIndex,

            startIndex +

            itemsPerPage

        );


    useEffect(() => {

        setCurrentPage(1);

    }, [
        search,
        typeFilter
    ]);

    if (dashboardLoading || loadingTransactions) {

        return <Loader />;

    }



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

                    Transactions History

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
                            className="text-slate-500"
                        />

                        <input

                            value={search}

                            onChange={(e) =>
                                setSearch(
                                    e.target.value
                                )
                            }

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

                            onClick={() =>
                                setTypeFilter(
                                    "all"
                                )
                            }

                            className={`
                    rounded-full
                    border
                    px-5
                    py-3

                    ${typeFilter === "all"

                                    ? "border-cyan-400 text-cyan-300"

                                    : "border-white/10 text-slate-300"
                                }
                `}
                        >

                            All

                        </button>

                        <button

                            onClick={() =>
                                setTypeFilter(
                                    "income"
                                )
                            }

                            className={`
                    rounded-full
                    border
                    px-5
                    py-3

                    ${typeFilter === "income"

                                    ? "border-green-400 text-green-300"

                                    : "border-white/10 text-slate-300"
                                }
                `}
                        >

                            Income

                        </button>

                        <button

                            onClick={() =>
                                setTypeFilter(
                                    "expense"
                                )
                            }

                            className={`
                    rounded-full
                    border
                    px-5
                    py-3

                    ${typeFilter === "expense"

                                    ? "border-red-400 text-red-300"

                                    : "border-white/10 text-slate-300"
                                }
                `}
                        >

                            Expenses

                        </button>

                    </div>

                </div>

            </div>
            {/* TABLE */}

            <div
                className="
                    rounded-[32px]
                    border
                    border-white/5
                    bg-[#081423]
                    overflow-hidden
                "
            >

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[1000px]">

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
                                    Date / Time
                                </th>

                                <th className="p-5 text-slate-500">
                                    Concept
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
                                paginatedTransactions.map(
                                    (transaction) => (

                                        <TransactionRow

                                            key={
                                                transaction._id
                                            }

                                            type={
                                                transaction.type
                                            }

                                            description={
                                                transaction.description
                                            }

                                            date={
                                                new Date(
                                                    transaction.date
                                                ).toLocaleString(
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
                                                Number(
                                                    transaction.amount.toFixed(2)
                                                )
                                            }

                                            status={
                                                transaction.status
                                            }

                                            myAccount={
                                                myAccount || ""
                                            }

                                        />

                                    )
                                )
                            }

                        </tbody>

                    </table>

                    <div
                        className="
        flex
        items-center
        justify-between
        border-t
        border-white/5
        px-6
        py-4
    "
                    >

                        <p
                            className="
            text-sm
            text-slate-500
        "
                        >

                            Showing

                            {" "}

                            {paginatedTransactions.length}

                            {" "}

                            of

                            {" "}

                            {filteredTransactions.length}

                            results

                        </p>

                        <div className="flex gap-2">

                            {

                                Array.from(

                                    {
                                        length:
                                            totalPages
                                    },

                                    (_, index) => (

                                        <button

                                            key={index}

                                            onClick={() =>
                                                setCurrentPage(
                                                    index + 1
                                                )
                                            }

                                            className={`
                            h-10
                            w-10
                            rounded-xl
                            border

                            ${currentPage ===
                                                    index + 1

                                                    ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"

                                                    : "border-white/10 text-white"
                                                }
                        `}
                                        >

                                            {index + 1}

                                        </button>

                                    )

                                )

                            }

                        </div>

                    </div>

                </div>

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

    status,

    myAccount,

    description


}: {

    type: string;

    date: string;

    origin: string;

    destination: string;

    amount: number;

    status: string;

    myAccount: string;

    description: string;

}) {

    const isIncome =

        destination ===
        myAccount;



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
                        className={`
    rounded-full
    p-2

    ${isIncome

                                ? "bg-green-500/10 text-green-400"

                                : "bg-red-500/10 text-red-400"
                            }
`}
                    >

                        {
                            isIncome

                                ? (

                                    <ArrowDownLeft
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

                <div>

                    <p>
                        {date}
                    </p>

                </div>

            </td>

            <td className="p-5 text-slate-300">

                {description}

            </td>

            <td className="p-5 text-slate-300">
                {origin}
            </td>

            <td className="p-5 text-slate-300">
                {destination}
            </td>

            <td
                className={`
    p-5
    font-semibold

    ${isIncome

                        ? "text-green-400"

                        : "text-red-400"
                    }
`}
            >

                {

                    isIncome
                        ? "+"
                        : "-"

                }

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