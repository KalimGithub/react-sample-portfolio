import React from "react";

// import "./style.css"
import Header from "./Components/Header"
import About from "./Components/About"
import Footer from "./Components/footer"
import Section from "./Components/Section"
import sectionData from "./Data/sectionData"
 const App = () => {

     return (
         <div>
             <Header />
             <br/>
             <About />
             {
                 sectionData.map(value => (
                     <Section
                         x={value.title}
                         y={value.des}
                         
                     />
                 )
                 )
             }
             
<br/>
             <Footer />

         </div>
     )
 }

 export default App