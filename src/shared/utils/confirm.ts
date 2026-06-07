import Swal from "sweetalert2";

export const confirmDelete =
    async (
        item = "item"
    ) => {

        const isLight =
            document.documentElement.classList.contains("light");

        return Swal.fire({

            title: "Are you sure?",

            text:
                `Delete this ${item}?`,

            icon: "warning",

            showCancelButton: true,

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

            confirmButtonText:
                "Delete",

            cancelButtonText:
                "Cancel",

            background:
                isLight ? "#ffffff" : "#091423",

            color:
                isLight ? "#0f172a" : "#fff",


        });

    };

export const confirmLogout = async () => {

    const isLight =
        document.documentElement.classList.contains("light");

    return Swal.fire({

        title: "Close session?",

        text:
            "You will need to sign in again to access your account.",

        icon: "question",

        showCancelButton: true,

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

        confirmButtonText:
            "Logout",

        cancelButtonText:
            "Stay",

        background:
            isLight ? "#ffffff" : "#091423",

        color:
            isLight ? "#0f172a" : "#fff"

    });

};