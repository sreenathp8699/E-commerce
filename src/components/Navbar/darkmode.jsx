import React from 'react'
import Lightmodebtn from '../../website-button/light-mode-button.png'
import Darkmodebtn from '../../website-button/dark-mode-button.png'

const Darkmode = () => { 
const [theme,settheme]=React.useState(localStorage.getItem("theme")? localStorage.getItem("theme") : "light")

  const element=document.documentElement;
  // console.log(element);
  React.useEffect(()=>{
    if(theme === "dark")
      {
        element.classList.toggle("dark");
        localStorage.setItem("theme","dark")
      }
      else{
        element.classList.remove("dark")
        localStorage.setItem("theme","light")
      }
  },[theme])

  return (
    <div className='relative '>
      <img onClick={()=>settheme(theme === "light" ? "dark" : "light")} className={`w-14 absolute drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`} src={Lightmodebtn} alt="light mode button"></img>
      <img onClick={()=>settheme(theme === "dark" ? "light" : "dark")} className='w-14 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300' src={Darkmodebtn} alt="Darkmode button"></img>
    </div>
  )
}

export default Darkmode
