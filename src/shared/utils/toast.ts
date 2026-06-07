import Swal from "sweetalert2";

export const successToast = (
    title: string
) => {

    const isLight =
        document.documentElement.classList.contains("light");

    Swal.fire({

        toast: true,

        position: "top-end",

        icon: "success",

        title,

        timer: 2500,

        showConfirmButton: false,

        background: isLight ? "#ffffff" : "#0b2837",

        color: isLight ? "#0f172a" : "#fff",

        timerProgressBar: true,
        customClass: {

            timerProgressBar: "bg-cyan-400"
        }


    });

};

export const errorToast = (
    title: string
) => {

    const isLight =
        document.documentElement.classList.contains("light");

    Swal.fire({

        toast: true,

        position: "top-end",

        icon: "error",

        title,

        timer: 2500,

        background: isLight ? "#ffffff" : "#0b2837",

        showConfirmButton: false,

        timerProgressBar: true,

        customClass: {

            timerProgressBar: "bg-cyan-400"
        },
        color: isLight ? "#0f172a" : "#fff"

    });

};