import {
    AlertTriangle,
    CheckCircle2,
    ServerCrash
} from "lucide-react";

import {
    AnimatePresence,
    motion
} from "framer-motion";

import {
    primaryButton
} from "../../../styles/shared/buttons";

import {
    dangerModalIcon,
    modalButtonContainer,
    modalCard,
    modalDescription,
    modalIconContainer,
    modalOverlay,
    modalTitle,
    successModalIcon,
    warningModalIcon
} from "../../../styles/shared/modals";

type ReplicaAlertModalProps = {

    isOpen: boolean;

    title: string;

    description: string;

    type: "error" | "warning" | "success";

    onClose: () => void;

};

function ReplicaAlertModal({

    isOpen,

    title,

    description,

    type,

    onClose

}: ReplicaAlertModalProps) {

    const iconStyles = {

        error: dangerModalIcon,

        warning: warningModalIcon,

        success: successModalIcon

    };

    const icons = {

        error: (
            <ServerCrash className="h-8 w-8" />
        ),

        warning: (
            <AlertTriangle className="h-8 w-8" />
        ),

        success: (
            <CheckCircle2 className="h-8 w-8" />
        )

    };

    return (

        <AnimatePresence>

            {
                isOpen && (

                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        exit={{
                            opacity: 0
                        }}
                        className={modalOverlay}
                    >

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.92,
                                y: 20
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.95,
                                y: 10
                            }}
                            transition={{
                                duration: 0.25
                            }}
                            className={modalCard}
                        >

                            <div
                                className={`
                  ${modalIconContainer}

                  ${iconStyles[type]}
                `}
                            >

                                {
                                    icons[type]
                                }

                            </div>

                            <h2 className={modalTitle}>

                                {title}

                            </h2>

                            <p className={modalDescription}>

                                {description}

                            </p>

                            <div className={modalButtonContainer}>

                                <button
                                    onClick={onClose}
                                    className={primaryButton}
                                >

                                    Continue

                                </button>

                            </div>

                        </motion.div>

                    </motion.div>

                )
            }

        </AnimatePresence>

    );

}

export default ReplicaAlertModal;