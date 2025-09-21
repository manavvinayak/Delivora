import React from "react";
import { RestaurentLists} from '../Data/restaurentInfo.js'
import ReactDOM from "react-dom/client"
// Named import, have to use curly parenthesis
import {Title, Header } from "./components/Header";
import {Footer} from "./components/Footer";
import {RestaurentCards} from "./components/RestaurentCards";
import Body from "./components/Body";


  

function App() {
  return (
    <>
    <div className="Header">
      <Header/>
     <Title/>
    </div>
   <Body/>
    
    <div className="footer"> <Footer/> </div>
    
    
    </>
   
  );
};

export default App;