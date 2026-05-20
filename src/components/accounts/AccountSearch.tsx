import {
    Search
} from "lucide-react";

import {
    primaryButton
} from "../../styles/buttons";

import {
    formCard,
    inputStyle
} from "../../styles/forms";

import {
    cyanLabel,
    mutedText,
    sectionHeading
} from "../../styles/text";

type AccountSearchProps = {

    cuenta: string;

    setCuenta: React.Dispatch<
        React.SetStateAction<string>
    >;

    consultarCuenta: () => void;

};

function AccountSearch({

    cuenta,

    setCuenta,

    consultarCuenta

}: AccountSearchProps) {

    return (

        <section className={formCard}>

            <div className="mb-5">

                <p className={cyanLabel}>

                    Banking Access

                </p>

                <h2 className={sectionHeading}>

                    Search Account

                </h2>

                <p className={`mt-2 ${mutedText}`}>

                    Access account information and financial activity.

                </p>

            </div>

            <div className="flex flex-col gap-3 sm:flex-row">

                <input
                    type="text"
                    placeholder="Enter account number..."
                    value={cuenta}
                    onChange={(e) =>
                        setCuenta(e.target.value)
                    }
                    className={inputStyle}
                />

                <button
                    onClick={consultarCuenta}
                    className={primaryButton}
                >

                    <span className="flex items-center justify-center gap-2">

                        <Search className="h-4 w-4" />

                        Search

                    </span>

                </button>

            </div>

        </section>

    );

}

export default AccountSearch;