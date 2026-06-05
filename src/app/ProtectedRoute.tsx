import {
    Navigate
} from "react-router-dom";

import {
    useAuth
} from "../features/auth/context/AuthContext";
import Loader from "../shared/components/ui/Loader";

export default function ProtectedRoute({
    children
}: {
    children: React.ReactNode;
}) {

    const {
        user,
        loading
    } = useAuth();

    if (loading) {

        return (

            <div
                className="
                    min-h-screen
                    flex
                    items-center
                    justify-center
                    bg-[#07111f]
                    text-white
                "
            >

                <Loader />

            </div>

        );

    }

    if (!user) {

        return (
            <Navigate
                to="/login"
                replace
            />
        );

    }

    return children;

}