import { useState } from "react";

import Sidebar from "../shared/components/layout/Sidebar";
import Header from "../shared/components/layout/Header";

import AccountsPage from "../features/accounts/pages/AccountPage";
import TransactionsPage from "../features/transactions/pages/TransactionsPage";

import ProfilePage from "../features/profile/pages/ProfilePage";
import BeneficiariesPage from "../features/beneficiaries/pages/BeneficiariesPage";
import HistoryPage from "../features/history/pages/HistoryPage";

import {
    AnimatePresence,
    motion
} from "framer-motion";

import {
    PrivacyProvider
} from "../shared/context/PrivacyContext";

export default function AppLayout() {

    const [tab, setTab] =
        useState("dashboard");

    return (
        <PrivacyProvider>

            <div className="flex min-h-screen bg-[#07111f] text-slate-100">

                <Sidebar
                    tab={tab}
                    setTab={setTab}
                />

                <main className="flex-1 px-4 py-4 sm:px-6 lg:px-8">

                    <Header
                        tab={tab}
                        setTab={setTab}
                    />

                    <AnimatePresence mode="wait">

                        <motion.div
                            key={tab}
                            initial={{
                                opacity: 0,
                                y: 10
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            exit={{
                                opacity: 0,
                                y: -10
                            }}
                        >

                            {tab === "dashboard" && (

                                <AccountsPage />

                            )}

                            {tab === "transfers" && (

                                <TransactionsPage />

                            )}

                            {tab === "profile" && (

                                <ProfilePage />

                            )}

                            {tab === "beneficiaries" && (

                                <BeneficiariesPage />

                            )}

                            {tab === "history" && (

                                <HistoryPage />

                            )}

                        </motion.div>

                    </AnimatePresence>

                </main>

            </div>

        </PrivacyProvider>

    );

}