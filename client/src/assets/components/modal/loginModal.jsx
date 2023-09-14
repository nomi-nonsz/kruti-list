import React, { useState } from "react";
import axios from "axios";
import FormItem from "../form/formItem";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Login ({ handle }) {
    return <>
        <header className="text-center mb-5">
            <h2 className="text-2xl font-bold mb-2">Login</h2>
            <p className="">To save your lists, you need to login first</p>
        </header>
        <form action="" onSubmit={handle} method="get" className="">
            <FormItem
                className="mb-5"
                label="Email"
                placeholder="yoru@email.com"
                required={true}
                name="email"
                type="email"
            />
            <FormItem
                className="mb-5"
                label="Password"
                required={true}
                name="password"
                type="password"
            />
            <button type="submit" className="w-full p-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded transition">
                Login
            </button>
        </form>
    </>
}

function SignUp ({ handle }) {
    return <>
        <header className="text-center mb-5">
            <h2 className="text-2xl font-bold mb-2">Sign up</h2>
            <p className="">Create your account</p>
        </header>
        <form action="" onSubmit={handle} method="get" className="">
            <FormItem
                className="mb-5"
                label="Your Name"
                placeholder="deez nuts"
                required={true}
                name="username"
                type="text"
            />
            <FormItem
                className="mb-5"
                label="Email"
                placeholder="yoru@email.com"
                required={true}
                name="email"
                type="email"
            />
            <FormItem
                className="mb-5"
                label="Password"
                required={true}
                name="password"
                type="password"
            />
            <button type="submit" className="w-full p-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded transition">
                Create Account
            </button>
        </form>
    </>
}

function LoginModal ({ stat }) {
    const [state, setState] = useState(stat || 0);
    const navigate = useNavigate();

    const toggleSwitch = () => {
        setState(state == 0 ? 1 : 0);
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        if (!email || !password) {
            alert("email and password required");
            return;
        }

        try {
            const body = { email, password };
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/login`, body, {
                withCredentials: true
            })

            if (res.status < 200 && res.status >= 300) {
                alert("login failed");
                navigate("/");
                return;
            }

            const data = await res.data;
            Cookies.set("username", data.username, {
                sameSite: "Lax",
                expires: new Date(Date.now() + (7 * (3600000 * 24)))
            })

            navigate("/");
        }
        catch (error) {
            console.error(error);
            alert(error);
        }
    }

    const handleSignUp = async (e) => {
        e.preventDefault();

        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        if (!username || !email || !password) {
            alert("username, email and password required");
            return;
        }

        try {
            const body = { username, email, password };

            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/register`, body, {
                withCredentials: true
            });

            navigate("/");
        }
        catch (error) {
            console.error(error);
            alert(error);
        }
    }

    return (
        <div className="w-screen h-screen absolute z-10 left-0 top-0 bg-black bg-opacity-20">
            <div className="bg-white p-10 absolute inset-0 m-auto w-[480px] h-fit rounded-md shadow-xl">
                <section className="flex mb-8 justify-between">
                    <button className="py-2 px-6 rounded border border-black border-opacity-50 hover:bg-black hover:bg-opacity-10" onClick={toggleSwitch}>
                        {state == 0 ? "Sign up" : "Login"}
                    </button>
                    <Link to="/">
                        <i class="text-4xl text-slate-600 bi bi-x"></i>
                    </Link>
                </section>
                {state == 0 ? <Login handle={handleLogin} /> : <SignUp handle={handleSignUp} />}
            </div>
        </div>
    )
}

export default LoginModal;