import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import { useState } from "react"

// https://preview.themeforest.net/item/retro-one-page-resumeportfolio-template/full_screen_preview/26328816?_ga=2.55382059.1854934634.1671097018-24309560.1666957149

export default function Home() {

  const [view , setView] = useState(<Hero />)

  const newPage = (val) => {
    setView(val)
    console.log(val);
  }

  return (
    <div
      className=" bg-black w-screen h-auto"
    >
      <Navbar newPage={newPage} />
      {view}

    </div>
  )
}
