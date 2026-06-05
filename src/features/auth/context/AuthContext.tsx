import {

    createContext,
    useContext,
    useState,
    useEffect

} from "react";

import { me } from "../services/authService";
import type { Client } from "../types/auth";

type AuthContextType = {

    user: Client;

    loading: boolean;

    loginUser: (

        token: string,
        user: any

    ) => void;

    logout: () => void;

};

const AuthContext =
    createContext<AuthContextType | null>(
        null
    );

export function AuthProvider({

    children

}: {
    children: React.ReactNode;
}) {

    const [user, setUser] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const token =
            localStorage.getItem(
                "token"
            );

        if (!token) {

            setLoading(false);

            return;

        }

        me()

            .then((data) => {

                setUser(data);

            })

            .finally(() => {

                setLoading(false);

            });

    }, []);

    const loginUser = (

        token: string,
        user: any

    ) => {

        localStorage.setItem(
            "token",
            token
        );

        setUser(user);

    };

    const logout = () => {

        localStorage.removeItem(
            "token"
        );

        setUser(null);

    };

    return (

        <AuthContext.Provider

            value={{

                user,

                loading,

                loginUser,

                logout

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}

export const useAuth = () => {

    const context =
        useContext(AuthContext);

    if (!context) {

        throw new Error(
            "useAuth must be used inside AuthProvider"
        );

    }

    return context;

};