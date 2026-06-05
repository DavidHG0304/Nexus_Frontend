import { motion } from "framer-motion";

export default function Loader() {

    return (

        <div
            className="
                flex
                min-h-[60vh]
                flex-col
                items-center
                justify-center
                gap-6
            "
        >

            <motion.div

                animate={{
                    rotate: 360
                }}

                transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear"
                }}

                className="
                    h-16
                    w-16
                    rounded-full
                    border-4
                    border-cyan-400/20
                    border-t-cyan-400
                "
            />

            <div className="text-center">

                <h3
                    className="
                        text-lg
                        font-semibold
                        text-white
                    "
                >

                    Loading...

                </h3>

                <p
                    className="
                        mt-1
                        text-sm
                        text-slate-500
                    "
                >

                    Retrieving banking information

                </p>

            </div>

        </div>

    );

}