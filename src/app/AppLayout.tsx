import Sidebar from "../shared/components/layout/Sidebar";
import Header from "../shared/components/layout/Header";

import {
    AnimatePresence,
    motion
} from "framer-motion";

import {
    PrivacyProvider
} from "../shared/context/PrivacyContext";

import {
    Outlet,
    useLocation
} from "react-router-dom";

export default function AppLayout() {

    const location =
        useLocation();

    return (

        <PrivacyProvider>

            <div className="flex min-h-screen bg-[#07111f] text-slate-100">

                <Sidebar />

                <main className="flex-1 px-4 py-4 sm:px-6 lg:px-8">

                    <Header />

                    <AnimatePresence mode="wait">

                        <motion.div

                            key={
                                location.pathname
                            }

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

                            transition={{
                                duration: 0.2
                            }}
                        >

                            <Outlet />

                        </motion.div>

                    </AnimatePresence>

                </main>

            </div>

        </PrivacyProvider>

    );

}