import Swal from "sweetalert2";

export const successToast = (
    title: string
) => {

    Swal.fire({

        toast: true,

        position: "top-end",

        icon: "success",

        title,

        timer: 2500,

        showConfirmButton: false,

        background: "#0b2837",

        color: "#fff",

        timerProgressBar: true,
        customClass: {

            timerProgressBar: "bg-cyan-400"
        }


    });

};

export const errorToast = (
    title: string
) => {

    Swal.fire({

        toast: true,

        position: "top-end",

        icon: "error",

        title,

        timer: 2500,

        background: "#0b2837",

        showConfirmButton: false,

        timerProgressBar: true,

        customClass: {

            timerProgressBar: "bg-cyan-400"
        },
        color: "#fff"

    });

};