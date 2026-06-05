import { useState } from "react";

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

    const location = useLocation();

    const [
        sidebarOpen,
        setSidebarOpen
    ] = useState(false);

    return (

        <PrivacyProvider>

            <div className="flex min-h-screen overflow-x-hidden bg-[#07111f] text-slate-100">

                <Sidebar
                    isOpen={sidebarOpen}
                    onClose={() =>
                        setSidebarOpen(false)
                    }
                />

                <main
                    className="
                        flex-1
                        min-w-0
                        px-3
                        py-3
                        sm:px-4
                        sm:py-4
                        md:px-6
                        lg:px-8
                        lg:ml-72
                    "
                >

                    <Header
                        onMenuClick={() =>
                            setSidebarOpen(prev => !prev)
                        }
                    />

                    <AnimatePresence mode="wait">

                        <motion.div
                            key={location.pathname}
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
                            className="w-full"
                        >

                            <Outlet />

                        </motion.div>

                    </AnimatePresence>

                </main>

            </div>

        </PrivacyProvider>

    );

}