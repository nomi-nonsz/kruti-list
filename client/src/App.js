import React, { useEffect, useState } from "react";
import {
  Link,
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

function Body() {
  const search = useLocation().search;
  const params = new URLSearchParams(search);
  const isLogin = params.get("login");

  const [blink, setBlink] = useState(false);

  const autblink = () => {
    setBlink(!blink);
  }

  return <>
    {isLogin === "login" ? <LoginModal /> : (isLogin === "signup" && <LoginModal stat={1} />)}
    <main className="bg-indigo-100 bg-opacity-80 pt-24 pb-5 px-20 h-screen overflow-scroll">
      <div className="absolute top-3 px-8 py-4 left-0 flex justify-between w-full">
        <img
          className="w-14"
          src={blink ? AuthorBlinkImg : AuthorImg}
          onMouseEnter={autblink}
          onMouseLeave={autblink}
          alt="author"
          title="that's is my character"
        />
        <div className="flex gap-4">
          <Link to="?login=signup">
            <button type="button" className="rounded h-fit transition duration-300 text-blue-600 hover:bg-blue-100 px-6 py-3 border-2 border-blue-600">Sign up</button>
          </Link>
          <Link to="?login=login">
            <button type="button" className="rounded h-fit transition duration-300 text-white bg-blue-600 hover:bg-blue-500 px-8 py-3">Login</button>
          </Link>
        </div>
      </div>
      <header className="text-center">
        <h1 className="text-3xl font-poppins font-bold text-blue-600">Kruti List</h1>
        <p className="mt-1 mx-auto font-roboto w-3/4">Kruti list is a <b className="">free</b> and <b className="">simple</b> to-do list app that can do something even better...</p>
      </header>
      <section className="mt-10 font-roboto">
        <ToDo
          list={[]}
        />
      </section>
      <footer className="mt-20 text-center text-sm font-roboto">
        <p>This is a React App was made<br/>by Norman Andrians</p>
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
