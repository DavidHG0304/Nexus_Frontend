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

        background: "#081423",

        color: "#fff"

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

        showConfirmButton: false,

        background: "#081423",

        color: "#fff"

    });

};