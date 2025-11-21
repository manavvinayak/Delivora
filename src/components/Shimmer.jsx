const Shimmer = () => {
   return (
      <div className="restaurent-lists">
       {Array(20).fill("").map((_,index) => (
       <div key={index} className="card shimmer-card">
         <div className="shimmer shimmer-img">  </div>
         <div className="shimmer shimmer-line">  </div>
         <div className="shimmer shimmer-line">  </div>
         <div className="shimmer shimmer-line">  </div>
         <div className="shimmer shimmer-line">  </div>

         </div>
       ))}

      </div>

      
   )
}

export default Shimmer;