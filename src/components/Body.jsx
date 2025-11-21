import {RestaurentCards} from "./RestaurentCards";
import { RestaurentLists } from '../../Data/restaurentInfo.js';
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    // let searchTxt = "KFC";

     function filterData(searchText, restaurents) {
        return restaurents.filter((restaurant) => 
          restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
          restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
        );
     }

      const [restaurents, setRestaurent] = useState([]);
      const [searchText, setSearchText] = useState(""); // to create state variables

       console.log("Rerender going on");

       useEffect( () => {
         getRestaurents();
       }, []);

       async function getRestaurents() {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
          const json = await data.json();
          console.log(json);
          // OPTIONAL CHAINING
          const apiRestaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          
          if (apiRestaurants && apiRestaurants.length > 0) {
            setRestaurent(apiRestaurants);
          } else {
            // If API fails or returns empty, use static data
            setRestaurent(RestaurentLists);
          }
       }
       // useEffect is dependent on searchText,it'll be called when dependencies is changed

       // CONDITIONAL RENDERING
       // if restaurnet is empty then shimmer UI will be uploaded
       // if restaurent had data then load actual data UI
      
      return ( restaurents.length === 0) ? <Shimmer/> : (
        <>
       
        <div className="search-container">
          <input 
          type="text" 
          className="search-input" 
          placeholder="Search items" 
          value={searchText}
             onChange={(e) => {
                setSearchText(e.target.value); // load inputs in the search box   
             }
             }

          />
          <h1>{searchText}</h1>
           
          <button className="search-btn" onClick={() => {
           // need to filter the data i.e. restaurentList and then update the state i.e. restaurent
           const data = filterData(searchText, restaurents);
           // update the data
           setRestaurent(data);
          }

          }> Search </button>
        </div>
     <div className="restaurent-lists">
       {restaurents.map((restaurant, index) => (
         <RestaurentCards 
           key={restaurant?.info?.id || restaurant?.data?.id || index} 
           restaurent={restaurant} 
         />
       ))}
     </div>
     </>
    );
};

export default Body;
