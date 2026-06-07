import Swal from "sweetalert2";

export const confirmTransaction = async (
  title: string,
  text: string
) => {

  const isLight =
    document.documentElement.classList.contains("light");

  return Swal.fire({

    title,

    text,

    icon: "question",

    iconColor: "#22d3ee",

    showCancelButton: true,

    confirmButtonText: "Confirmar",

    cancelButtonText: "Cancelar",

    background: isLight ? "#ffffff" : "#091423",

    color: isLight ? "#0f172a" : "#f8fafc",

    customClass: {

      popup:
        "rounded-[28px] border border-cyan-400/10",

      title:
        "text-2xl font-bold",

      htmlContainer:
        "text-slate-400",

      confirmButton:
        "!bg-cyan-400 !text-slate-950 !rounded-full !px-6 !py-3 !font-semibold",

      cancelButton:
        "!bg-white/10 !text-white !rounded-full !px-6 !py-3 !font-semibold"

    },

    buttonsStyling: false

  });

};