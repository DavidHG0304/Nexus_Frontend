import {
    AnimatePresence,
    motion
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
                            y: 15,
                            scale: 0.96
                        }}

                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1
                        }}

                        exit={{
                            opacity: 0,
                            y: -10,
                            scale: 0.96,
                            filter: "blur(4px)"
                        }}

                        transition={{
                            duration: 0.28
                        }}

                        className={`
              rounded-2xl
              border
              px-4
              py-3
              text-sm
              font-medium
              shadow-lg
              backdrop-blur-sm

              ${tipoMensaje === "success"
                                ? `
                    border-cyan-400/20
                    bg-cyan-400/10
                    text-cyan-200
                  `
                                : `
                    border-rose-400/20
                    bg-rose-400/10
                    text-rose-200
                  `
                            }
            `}
                    >

                        {mensaje}

                    </motion.div>

                )
            }

        </AnimatePresence>

    );

}

export default MessageAlert;