export const RestaurentCards = ({restaurent}) => {
  const {name,city,cuisines,cloudinaryImageId,area} = restaurent.data;
  return (
     <div className="card">
         <img src={cloudinaryImageId}/>
         
        <h2>{name}</h2>
        <h2>{city}</h2>
        <h2>{cuisines.join(",")}</h2>
        <h2>{area}</h2>
     
       
     </div>
  );
};