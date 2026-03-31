import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";

const AppDetailsCard = ( { app } ) => {

  return (
    <div className="p-6 rounded-lg">
      <div className="flex gap-6 items-start">
        
        {/* Left - Big App Image */}
        <div className="w-70 h-70 bg-white rounded-md flex items-center justify-center overflow-hidden">
          <img
            src={app.image}
            alt={app.title}
            className="w-50 h-50 object-contain"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1">
          
          {/* Title */}
          <h1 className="text-3xl text-black font-bold">{app.title}</h1>

          {/* Developer */}
          <p className="text-gray-500 mt-1">
            Developed by{" "}
            <span className="text-primary font-medium">
              {app.companyName}
            </span>
          </p>

          {/* Divider */}
          <div className="border-b border-gray-300 my-4"></div>

          {/* Stats Row */}
          <div className="flex items-center gap-10">
            
            {/* Downloads */}
            <div className="flex flex-col items-start gap-3">
              <img src={download} alt="downloads" className="w-10 h-10 mt-1" />
                <p className="text-sm text-gray-500">Downloads</p>
                <p className="text-2xl text-black font-bold">
                  {(app.downloads / 1000000).toFixed(0)}M
                </p>
              
            </div>

            {/* Ratings */}
            <div className="flex flex-col items-start gap-3">
              <img src={rating} alt="rating" className="w-10 h-10 mt-1" />
              
                <p className="text-sm text-gray-500">Average Ratings</p>
                <p className="text-2xl text-black font-bold">{app.ratingAvg}</p>
              
            </div>

            {/* Reviews */}
            <div className="flex flex-col items-start gap-3">
              <img src={review} alt="reviews" className="w-10 h-10 mt-1" />
              
                <p className="text-sm text-gray-500">Total Reviews</p>
                <p className="text-2xl text-black font-bold">
                  {(app.reviews / 1000).toFixed(0)}K
                </p>
              
            </div>
          </div>

          {/* Install Button */}
          <button className="btn bg-green-400 hover:bg-green-500 text-white border-none mt-6">
            Install Now ({app.size} MB)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsCard;