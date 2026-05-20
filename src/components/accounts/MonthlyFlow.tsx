import type {
  Transaction
} from "../../types";

import {
  primaryCard
} from "../../styles/cards";

import {
  cyanLabel,
  sectionHeading,
  smallMutedText
} from "../../styles/text";

type MonthlyFlowProps = {

  transactions: Transaction[];

};

function MonthlyFlow({
  transactions
}: MonthlyFlowProps) {

  const recentTransactions =
    [...transactions]

      .sort((a, b) => {

        const dateA =
          new Date(a.date || "")
            .getTime();

        const dateB =
          new Date(b.date || "")
            .getTime();

        return dateB - dateA;

      })

      .slice(0, 4);

  const generatedChartData =
    recentTransactions.flatMap((transaction) => {

      const base =
        Math.min(
          transaction.amount / 40,
          90
        );

      return [

        Math.max(base - 20, 15),

        base,

        Math.min(base + 15, 100)

      ];

    });

  const chartData =
    generatedChartData.slice(0, 7);

  const total =
    transactions.reduce(
      (acc, transaction) => {

        return acc + transaction.amount;

      },
      0
    );

  return (

    <section
      className={`
        ${primaryCard}
        p-5
      `}
    >

      <div className="mb-5 flex items-center justify-between">

        <div>

          <p className={cyanLabel}>

            Monthly Flow

          </p>

          <h3 className={sectionHeading}>

            Financial Activity

          </h3>

        </div>

        <div className="text-right">

          <p className="text-3xl font-bold text-cyan-300">

            $

            {
              total.toLocaleString("es-MX")
            }

          </p>

          <p className={smallMutedText}>

            Based on transaction activity

          </p>

        </div>

      </div>

      {
        chartData.length ? (

          <div className="flex h-28 items-end gap-3">

            {
              chartData.map((height, index) => (

                <div
                  key={index}
                  className="
                  flex-1
                  rounded-t-2xl
                  bg-gradient-to-t
                  from-cyan-500/20
                  to-cyan-300/80
                  transition-all
                  duration-300
                  hover:scale-y-105
                  "
                  style={{
                    height: `${height}%`
                  }}
                />

              ))
            }

          </div>

        ) : (

          <div
            className="
            grid
            h-28
            place-items-center
            rounded-2xl
            border
            border-dashed
            border-white/10
            bg-white/[0.02]
            "
          >

            <p className={smallMutedText}>

              No activity available.

            </p>

          </div>

        )
      }

    </section>

  );

}

export default MonthlyFlow;