import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";

import AccountsPage from "../features/accounts/pages/AccountPage";
import TransactionsPage from "../features/transactions/pages/TransactionsPage";
import ProfilePage from "../features/profile/pages/ProfilePage";
import BeneficiariesPage from "../features/beneficiaries/pages/BeneficiariesPage";
import HistoryPage from "../features/history/pages/HistoryPage";

import ProtectedRoute from "./ProtectedRoute";
import AppLayout from "./AppLayout";

export default function Router() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={
                        <Navigate
                            to="/login"
                            replace
                        />
                    }
                />

                <Route
                    path="/login"
                    element={<LoginPage />}
                />

                <Route
                    path="/register"
                    element={<RegisterPage />}
                />

                <Route
                    element={
                        <ProtectedRoute>

                            <AppLayout />

                        </ProtectedRoute>
                    }
                >

                    <Route
                        path="/dashboard"
                        element={<AccountsPage />}
                    />

                    <Route
                        path="/transfers"
                        element={<TransactionsPage />}
                    />

                    <Route
                        path="/profile"
                        element={<ProfilePage />}
                    />

                    <Route
                        path="/beneficiaries"
                        element={
                            <BeneficiariesPage />
                        }
                    />

                    <Route
                        path="/history"
                        element={<HistoryPage />}
                    />

                </Route>

                <Route
                    path="*"
                    element={
                        <Navigate
                            to="/dashboard"
                            replace
                        />
                    }
                />

            </Routes>

        </BrowserRouter>

    );

}