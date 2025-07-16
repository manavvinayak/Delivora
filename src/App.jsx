import React from "react";
import { RestaurentLists} from '../Data/restaurentInfo.js'


const Title = () => (
   <a href="/">
    <img className="logo" src="https://plus.unsplash.com/premium_photo-1666739031639-667fc6292c63?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="food-logo"/>

   </a>
)
  



const RestaurentCards = ({restaurent}) => {
  const {name,city,cuisines,cloudinaryImageId,area} = restaurent.data;
  return (
     <div className="card">
         <img src={cloudinaryImageId}/>
         
        <h2>{name}</h2>
        <h2>{city}</h2>
        <h2>{cuisines}</h2>
        <h2>{area}</h2>
        {/* <h4> {Ghar.rating} </h4> */}
        {/* <h3> {Ghar.cuisines.join(",")}</h3>
        <h4> {Ghar.place} </h4> */}
       
     </div>
  );
};

const Footer = () => {
  return (
    <p>footer</p>
  )
}
function App() {
  return (
    <>
    <Title/>
    <div className="restaurent-lists">
    <RestaurentCards restaurent={RestaurentLists[0]}/>
    <RestaurentCards restaurent={RestaurentLists[1]}/>
    <RestaurentCards restaurent={RestaurentLists[2]}/>
    <RestaurentCards restaurent={RestaurentLists[3]}/>
   
    
    </div>
    <Footer/>
    
    
    </>
   
  );
};

export default App;