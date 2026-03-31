import React from "react";
import { Link } from "react-router";

const InstalledAppCard = ({ app }) => {
  return (
    <Link
      to={`/app-details/${app.id}`}
      className="block bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center justify-between p-2">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* App Image */}
          <div className="w-14 h-14 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
            <img
              src={app.image}
              alt={app.title}
              className="w-10 h-10 object-contain"
            />
          </div>

          {/* Info */}
          <div>
            <h2 className="font-semibold text-black text-md">{app.title}</h2>

            <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
              {/* Downloads */}
              <span className="flex items-center gap-1 text-green-500">
                <i className="fa-solid fa-download"></i>
                {(app.downloads / 1000000).toFixed(0)}M
              </span>

              {/* Rating */}
              <span className="flex items-center gap-1 text-orange-400">
                <i className="fa-solid fa-star"></i>
                {app.ratingAvg}
              </span>

              {/* Size */}
              <span>{app.size} MB</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <button className="btn btn-sm bg-green-400 hover:bg-green-500 text-white border-none">
          Uninstall
        </button>
      </div>
    </Link>
  );
};

export default InstalledAppCard;
