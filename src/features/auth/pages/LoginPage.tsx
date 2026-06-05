import {
    Mail,
    Lock,
    ArrowRight
} from "lucide-react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { login } from "../services/authService";

import { useAuth } from "../context/AuthContext";

function LoginPage() {
    const navigate = useNavigate();

    const { loginUser } = useAuth();

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const handleLogin = async () => {

        try {

            setLoading(true);

            const response =
                await login(
                    email,
                    password
                );

            loginUser(
                response.token,
                response.client
            );

            navigate("/dashboard");

        } catch (error) {

            console.error(error);

            alert(
                "Invalid credentials"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div
            className="
                min-h-screen
                bg-[#020d19]
                flex
                items-center
                justify-center
                px-6
                relative
                overflow-hidden
            "
        >

            <div
                className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),transparent_70%)]
                "
            />

            <div
                className="
                    relative
                    w-full
                    max-w-md
                "
            >

                <div className="text-center mb-10">

                    <h1
                        className="
                            text-4xl
                            font-bold
                            text-cyan-400
                        "
                    >

                        Nexus Finance

                    </h1>

                    <p
                        className="
                            mt-2
                            text-xs
                            uppercase
                            tracking-[0.4em]
                            text-slate-500
                        "
                    >

                        Institutional Grade Banking

                    </p>

                </div>

                <div
                    className="
                        rounded-[32px]
                        border
                        border-white/5
                        bg-[#081423]/90
                        backdrop-blur-xl
                        p-8
                        shadow-[0_0_80px_rgba(6,182,212,.08)]
                    "
                >

                    <div className="space-y-6">

                        <div>

                            <label
                                className="
                                    mb-2
                                    block
                                    text-xs
                                    uppercase
                                    tracking-[0.2em]
                                    text-slate-500
                                "
                            >

                                Email Address

                            </label>

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-[#05101d]
                                    px-5
                                    py-4
                                "
                            >

                                <Mail
                                    className="
                                        h-4
                                        w-4
                                        text-slate-500
                                    "
                                />

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    placeholder="name@nexus.io"
                                    className="
                                                w-full
                                                bg-transparent
                                                text-white
                                                outline-none
                                            "
                                />

                            </div>

                        </div>

                        <div>

                            <div
                                className="
                                    mb-2
                                    flex
                                    items-center
                                    justify-between
                                "
                            >

                                <label
                                    className="
                                        text-xs
                                        uppercase
                                        tracking-[0.2em]
                                        text-slate-500
                                    "
                                >

                                    Security Key

                                </label>

                                <button
                                    className="
                                        text-[10px]
                                        uppercase
                                        tracking-[0.2em]
                                        text-cyan-400
                                    "
                                >

                                    Forgot Password?

                                </button>

                            </div>

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-[#05101d]
                                    px-5
                                    py-4
                                "
                            >

                                <Lock
                                    className="
                                        h-4
                                        w-4
                                        text-slate-500
                                    "
                                />

                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="••••••••••••"
                                    className="w-full
                                            bg-transparent
                                            text-white
                                            outline-none
                                        "
                                />

                            </div>

                        </div>

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                text-sm
                                text-slate-400
                            "
                        >

                            <input
                                type="checkbox"
                                className="
                                    h-4
                                    w-4
                                    accent-cyan-400
                                "
                            />

                            Keep me logged in

                        </div>

                        <button
                            onClick={handleLogin}
                            disabled={loading}
                            className="
        w-full
        rounded-full
        bg-cyan-400
        py-4
        text-lg
        font-semibold
        text-slate-950
        transition
        hover:scale-[1.02]
        shadow-[0_0_30px_rgba(6,182,212,.4)]
        disabled:opacity-50
    "
                        >

                            <span
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                "
                            >

                                {
                                    loading
                                        ? "Signing In..."
                                        : "Authorize Session"
                                }

                                <ArrowRight
                                    className="
                                        h-5
                                        w-5
                                    "
                                />

                            </span>

                        </button>

                    </div>

                    <div
                        className="
                            mt-8
                            text-center
                            text-sm
                            text-slate-500
                        "
                    >

                        Don't have an institutional account?

                        <button
                            onClick={() =>
                                navigate("/register")
                            }
                            className="
                                ml-2
                                font-semibold
                                text-cyan-400
                            "
                        >

                            Apply for Access

                        </button>

                    </div>

                </div>

                <div
                    className="
                        mt-8
                        flex
                        justify-center
                        gap-6
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-slate-600
                    "
                >

                    <span>

                        ● Systems Operational

                    </span>

                    <span>

                        AES-256 Encrypted

                    </span>

                </div>

            </div>

        </div>

    );

}

export default LoginPage;