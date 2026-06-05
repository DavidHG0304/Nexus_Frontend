import Swal from "sweetalert2";

export const confirmDelete =
    async (
        item = "item"
    ) => {

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
                "#091423",

            color:
                "#fff",


        });

    };