import Banner from "./components/Banner/banner";
import Navbarpage from "./components/Navbar/navbarpage"
import Topsellingproducts from "./components/Topproducts/topsellingproducts";
import Hero from "./components/heropage/hero"
import Topselling from "./components/product/topselling"
import AOS from 'aos';
import "aos/dist/aos.css";
import React from "react";



function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

 
  return (
    <>
   
  <Navbarpage/>
  <Hero/>
  <Topselling/>
  <Topsellingproducts/>
  <Banner/>
  
       
    </>
  )
}

export default App
