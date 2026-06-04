import {
    createContext,
    useContext,
    useState
} from "react";

type PrivacyContextType = {
    showBalance: boolean;
    toggleBalanceVisibility: () => void;
};

const PrivacyContext =
    createContext<
        PrivacyContextType | undefined
    >(undefined);

export function PrivacyProvider({
    children
}: {
    children: React.ReactNode;
}) {

    const [
        showBalance,
        setShowBalance
    ] = useState(true);

    const toggleBalanceVisibility =
        () => {
            setShowBalance(
                prev => !prev
            );
        };

    return (

        <PrivacyContext.Provider
            value={{
                showBalance,
                toggleBalanceVisibility
            }}
        >

            {children}

        </PrivacyContext.Provider>

    );

}

export function usePrivacy() {

    const context =
        useContext(
            PrivacyContext
        );

    if (!context) {

        throw new Error(
            "usePrivacy must be used within a PrivacyProvider"
        );

    }

    return context;

}