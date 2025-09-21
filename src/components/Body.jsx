import {RestaurentCards} from "./RestaurentCards";
import { RestaurentLists } from '../../Data/restaurentInfo.js';
import { useState } from "react";

const Body = () => {
    // let searchTxt = "KFC";
      const [searchText, setSearchText] = useState("KFC"); // to create state variables
    return (
        <>
       
        <div className="search-container">
          <input 
          type="text" 
          className="search-input" 
          placeholder="Search items" 
          value={searchText}
             onChange={(e) => {
                setSearchText(e.target.value); // load inputs
             }

             }
          />
          <h1> {searchText}</h1>
          <button className="search-btn"> Search - {searchText}</button>
        </div>
     <div className="restaurent-lists">
    <RestaurentCards restaurent={RestaurentLists[0]}/>
    <RestaurentCards restaurent={RestaurentLists[1]}/>
    <RestaurentCards restaurent={RestaurentLists[2]}/>
    <RestaurentCards restaurent={RestaurentLists[3]}/>
   
   
    </div>
     </>
    );
};

export default Body;
