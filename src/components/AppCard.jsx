import { Link } from "react-router-dom";
const AppCard = ({ app }) => {
  return (
   <>
   
   <Link to={`/app-details/${app.id}`}>
    <div className="bg-white rounded-md shadow p-4 flex flex-col">
      {/* App Image */}
      <div className="bg-gray-100 rounded-md mb-2 w-full aspect-square overflow-hidden">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* App Title */}
      <p className="text-sm font-semibold text-gray-900 mb-2">{app.title}</p>

      {/* App Stats */}
      <div className="flex justify-between text-xs text-gray-600 mt-auto">
        {/* Downloads */}
        <span className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded">
          <svg
            className="w-3 h-3 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M13 10V3H7v7H3l7 7 7-7h-4z" />
          </svg>
          {app.downloads > 999999
            ? `${(app.downloads / 1000000).toFixed(1)}M`
            : app.downloads}
        </span>

        {/* Rating */}
        <span className="flex items-center gap-1 bg-orange-100 px-2 py-1 rounded">
          <svg
            className="w-3 h-3 text-orange-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.064 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
          </svg>
          {app.ratingAvg}
        </span>
      </div>
    </div>
    </Link>
   </>
  );
};

export default AppCard;