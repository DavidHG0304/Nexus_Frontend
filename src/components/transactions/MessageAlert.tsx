import {
    motion,
    AnimatePresence
} from "framer-motion";

type MessageAlertProps = {
    mensaje: string;
    tipoMensaje: string;
};

function MessageAlert({
    mensaje,
    tipoMensaje
}: MessageAlertProps) {

    return (

        <AnimatePresence>

            {
                mensaje && (

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 10,
                            scale: 0.98
                        }}

                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1
                        }}

                        exit={{
                            opacity: 0,
                            y: -10,
                            scale: 0.98
                        }}

                        transition={{
                            duration: 0.25,
                            ease: "easeOut"
                        }}

                        className={`rounded-2xl border px-4 py-4 text-sm font-medium backdrop-blur-xl ${tipoMensaje === "success"
                                ? "border-cyan-400/10 bg-cyan-400/10 text-cyan-300"
                                : "border-rose-400/10 bg-rose-400/10 text-rose-300"
                            }`}
                    >

                        {mensaje}

                    </motion.div>

                )
            }

        </AnimatePresence>

    );

}

export default MessageAlert;