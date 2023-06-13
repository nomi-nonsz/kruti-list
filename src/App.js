import React from "react";
import ToDo from "./assets/components/todo";
import './assets/css/dist/output.css';
import './assets/components/fonts/google-fonts.css'

function App() {
  return <>
    <main className="bg-indigo-100 bg-opacity-80 py-24 px-20">
      <header className="text-center">
        <h1 className="text-3xl font-poppins font-bold text-blue-600">Kruti List</h1>
        <p className="mt-1 mx-auto font-roboto w-3/4">Kruti list is a <b className="">free</b> and <b className="">open-source</b> to-do list app that does something</p>
      </header>
      <section className="mt-10">
        <ToDo list={[]} />
      </section>
    </main>
  </>
}

export default App;
