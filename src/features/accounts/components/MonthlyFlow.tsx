import { motion } from "framer-motion";

import {
  usePrivacy
} from "../../../shared/context/PrivacyContext";

import type {
  DashboardTransaction
} from "../../dashboard/types/dashboard.types";

import {
  primaryCard
} from "../../../styles/shared/cards";

import {
  cyanLabel,
  sectionHeading,
  smallMutedText
} from "../../../styles/shared/text";

type MonthlyFlowProps = {

  transactions:
  DashboardTransaction[];

};

function MonthlyFlow({
  transactions
}: MonthlyFlowProps) {

  const {
    showBalance
  } = usePrivacy();

  const recentTransactions =

    [...transactions]

      .sort((a, b) => {

        return (

          new Date(
            b.date
          ).getTime()

          -

          new Date(
            a.date
          ).getTime()

        );

      })

      .slice(0, 4);

  const generatedChartData =

    recentTransactions.flatMap(
      (transaction) => {

        const base =

          Math.min(
            transaction.amount / 40,
            90
          );

        return [

          Math.max(
            base - 20,
            15
          ),

          base,

          Math.min(
            base + 15,
            100
          )

        ];

      }
    );

  const chartData =
    generatedChartData.slice(
      0,
      7
    );

  const total =

    transactions.reduce(
      (
        acc,
        transaction
      ) => {

        return (
          acc +
          transaction.amount
        );

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

          <motion.p
            animate={{
              filter:
                showBalance
                  ? "blur(0px)"
                  : "blur(8px)",

              opacity:
                showBalance
                  ? 1
                  : 0.7
            }}
            transition={{
              duration: 0.25
            }}
            className="
              text-3xl
              font-bold
              text-cyan-300
              select-none
            "
          >

            $

            {
              total.toLocaleString(
                "es-MX"
              )
            }

          </motion.p>

          <p className={smallMutedText}>

            Based on transfer activity

          </p>

        </div>

      </div>

      {

        chartData.length ? (

          <motion.div
            animate={{
              filter:
                showBalance
                  ? "blur(0px)"
                  : "blur(4px)",

              opacity:
                showBalance
                  ? 1
                  : 0.55
            }}
            transition={{
              duration: 0.25
            }}
            className="
              flex
              h-28
              items-end
              gap-3
            "
          >

            {

              chartData.map(
                (
                  height,
                  index
                ) => (

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
                      height:
                        `${height}%`
                    }}
                  />

                )
              )

            }

          </motion.div>

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