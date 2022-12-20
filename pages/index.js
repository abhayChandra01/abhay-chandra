import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import { useState } from "react"
import Head from "next/head"


export default function Home() {

  const [view, setView] = useState(<Hero />)

  const newPage = (val) => {
    setView(val)
    // console.log(val);
  }

  return (
    <div
      className=" bg-black w-screen h-auto"
    >
      <Head>
        <title>Abhay Chandra</title>
        <link rel="logo" href="../public/favicon.ico" />
      </Head>
      <Navbar newPage={newPage} />
      {view}

    </div>
  )
}
