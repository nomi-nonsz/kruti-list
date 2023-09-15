import React, { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  BrowserRouter as Router,
  useLocation
} from "react-router-dom";
import ToDo from "./assets/components/todo";

import AuthorImg from "./assets/images/author.svg";
import AuthorBlinkImg from "./assets/images/author_blink.svg";

import './assets/icons/bootstrap/bootstrap-icon.css';
import './assets/components/fonts/google-fonts.css';
import './assets/css/dist/output.css';
import './assets/css/utilities.css';
import LoginModal from "./assets/components/modal/loginModal";
import Cookies from "js-cookie";

function Body() {
  const navigate = useNavigate();

  const search = useLocation().search;
  const params = new URLSearchParams(search);
  const isLogin = params.get("login");
  const isRegister = params.get("register");

  const [list, setList] = useState([]);
  const [blink, setBlink] = useState(false);

  const autblink = () => {
    setBlink(!blink);
  }

  return <>
    {isRegister === "success" && <LoginModal.RegisterSuccess />}
    {isLogin === "login" ? <LoginModal list={list} /> : (isLogin === "signup" && <LoginModal stat={1} list={list} />)}
    <div className="p-5 flex justify-between w-full">
      <img
        className="w-14"
        src={blink ? AuthorBlinkImg : AuthorImg}
        onMouseEnter={autblink}
        onMouseLeave={autblink}
        alt="author"
        title="that's is my character"
      />
      <div className="flex gap-4 items-center">
        {!Cookies.get("username") ? ( <>
          <Link to="?login=signup">
            <button type="button" className="rounded h-fit transition duration-300 text-blue-600 hover:bg-blue-200 px-5 py-2 border-2 border-blue-600">Sign up</button>
          </Link>
          <Link to="?login=login">
            <button type="button" className="rounded h-fit transition duration-300 text-white bg-blue-600 hover:bg-blue-500 px-6 py-2 border-2 border-blue-600">Login</button>
          </Link>
        </>) : (<>
          <div className="text-4xl">
            <i class="bi bi-person-circle text-blue-900"></i>
          </div>
          <div className="">{Cookies.get("username")}</div>
          <button
            type="button"
            className="rounded h-fit transition duration-300 text-blue-600 hover:bg-blue-200 px-5 py-2 ms-5 border-2 border-blue-600"
            onClick={() => {
              Cookies.remove("token");
              Cookies.remove("username");
              navigate("/");
            }}
            >Logout
          </button>
        </>)}
      </div>
    </div>
    <main className="pt-24 pb-5 px-8 md:px-20 h-screen">
      <header className="text-center">
        <h1 className="text-3xl font-poppins font-bold text-blue-600">Kruti List</h1>
        <p className="mt-1 mx-auto font-roboto w-3/4">Kruti list is a <b className="">free</b> and <b className="">simple</b> to-do list app that can do something even better...</p>
      </header>
      <section className="mt-10 font-roboto">
        <ToDo
          list={list}
          setList={setList}
        />
      </section>
      <footer className="mt-20 text-center text-sm font-roboto">
        <p>This is a MERN App was made<br/>by Norman Andrians</p>
      </footer>
    </main>
  </>
}

function App() {
  return (
    <Router>
      <Body />
    </Router>
  )
}

export default App;
