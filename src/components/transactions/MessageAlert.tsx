type MessageAlertProps = {
    mensaje: string;
    tipoMensaje: string;
};

function MessageAlert({
    mensaje,
    tipoMensaje
}: MessageAlertProps) {

    if (!mensaje) {
        return null;
    }

    return (

        <div className={`rounded-2xl border px-4 py-4 text-sm font-medium ${tipoMensaje === "success"
                ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                : "border-rose-400/20 bg-rose-400/10 text-rose-300"
            }`}>

            {mensaje}

        </div>

    );

}

export default MessageAlert;