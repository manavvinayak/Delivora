import React from "react";

const Title = () => (
   <a href="/">
    <img className="logo" src="https://plus.unsplash.com/premium_photo-1666739031639-667fc6292c63?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="food-logo"/>

   </a>
)
  

const Header = () => {
  return (
    <div className="Header">
      <Title/>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Offer</li>
          <li>About Us </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const CardsInfo = [
  {
  name: "Ghar Cravings",
  image: " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/23/24fe520c-82ae-42b9-9454-d57df1d7df2b_03e11229-1dc1-4c4a-af89-3d62f57d9ef4.jpeg",
  cuisines: ["North Indian, Home Food"],
  place: " Rajendra Place",
  rating: "4.3"
},
  {
  name: "Ghar Cravings",
  image: " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/23/24fe520c-82ae-42b9-9454-d57df1d7df2b_03e11229-1dc1-4c4a-af89-3d62f57d9ef4.jpeg",
  cuisines: ["North Indian, Home Food"],
  place: " Rajendra Place",
  rating: "4.3"
},
  {
  name: "Ghar Cravings",
  image: " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/23/24fe520c-82ae-42b9-9454-d57df1d7df2b_03e11229-1dc1-4c4a-af89-3d62f57d9ef4.jpeg",
  cuisines: ["North Indian, Home Food"],
  place: " Rajendra Place",
  rating: "4.3"
},

]

const RestaurentCards = () => {
  return (
     <div className="card">
        <img src={Ghar.image}/>
        <h2>{Ghar.name}</h2>
        <h4> {Ghar.rating} </h4>
        <h3> {Ghar.cuisines.join(",")}</h3>
        <h4> {Ghar.place} </h4>
     </div>
  )
}

const Footer = () => {
  return (
    <p>footer</p>
  )
}
function App() {
  return (
    <>
    <Header/>
    <div className="restaurent-lists">
    <RestaurentCards/>
    <RestaurentCards/>
    <RestaurentCards/>
    <RestaurentCards/>
    <RestaurentCards/>
    <RestaurentCards/>
    <RestaurentCards/>
    <RestaurentCards/>
    <RestaurentCards/>
    
    </div>
    <Footer/>
    
    
    </>
   
  );
};

export default App;