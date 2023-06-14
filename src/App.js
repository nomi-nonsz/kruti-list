import React, { useState } from "react";
import ToDo from "./assets/components/todo";

import AuthorImg from "./assets/images/author.svg";
import AuthorBlinkImg from "./assets/images/author_blink.svg";

import './assets/icons/bootstrap/bootstrap-icon.css';
import './assets/components/fonts/google-fonts.css';
import './assets/css/dist/output.css';
import './assets/css/utilities.css';

function App() {
  const [blink, setBlink] = useState(false);

  const autblink = () => {
    setBlink(!blink);
  }

  return <>
    <main className="bg-indigo-100 bg-opacity-80 pt-24 pb-5 px-20 h-screen overflow-scroll">
      <div className="absolute top-3 left-3">
        <img
          className="w-14"
          src={blink ? AuthorBlinkImg : AuthorImg}
          onMouseEnter={autblink}
          onMouseLeave={autblink}
          alt="author"
          title="that's is my character"
        />
      </div>
      <header className="text-center">
        <h1 className="text-3xl font-poppins font-bold text-blue-600">Kruti List</h1>
        <p className="mt-1 mx-auto font-roboto w-3/4">Kruti list is a <b className="">free</b> and <b className="">simple</b> to-do list app that can do something even better...</p>
      </header>
      <section className="mt-10 font-roboto">
        <ToDo list={[]} />
      </section>
      <footer className="mt-20 text-center text-sm font-roboto">
        <p>This is a React App was made<br/>by Norman Andrians</p>
      </footer>
    </main>
  </>
}

export default App;
