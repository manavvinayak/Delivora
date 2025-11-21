export const RestaurentCards = ({restaurent}) => {
  // Handle both old API structure (restaurent.data) and new API structure (restaurent.info)
  const restaurentData = restaurent?.info || restaurent?.data || {};
  const {
    name = "Restaurant Name", 
    city = "City", 
    cuisines = [], 
    cloudinaryImageId = "", 
    area = "Area"
  } = restaurentData;
  
  // Create proper image URL for cloudinary images
  const imageUrl = cloudinaryImageId 
    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`
    : "https://via.placeholder.com/300x200?text=No+Image";
  
  return (
     <div className="card">
         <img src={imageUrl} alt={name} />
         
        <h2>{name}</h2>
        <h2>{city}</h2>
        <h2>{Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}</h2>
        <h2>{area}</h2>
     
       
     </div>
  );
};