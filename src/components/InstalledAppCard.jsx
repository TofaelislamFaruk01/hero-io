import { Link } from "react-router";
import { toast } from "react-toastify";

const InstalledAppCard = ({ app , onUninstall }) => {

    const handleUninstall = () => {
    const savedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];

    const updatedApps = savedApps.filter((id) => id !== app.id);

    localStorage.setItem("installedApps", JSON.stringify(updatedApps));

    toast.success("App uninstalled successfully");

    onUninstall(app.id); 
  };

  return (
    <div className=" bg-white rounded-lg shadow-sm flex items-center justify-between p-3 sm:p-6">
      {/* Left Section */}
      <div className="flex items-center gap-1 sm:gap-4">
        <Link to={`/app-details/${app.id}`}>
          {/* App Image */}
          <div className="w-14 h-14 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
            <img
              src={app.image}
              alt={app.title}
              className="w-10 h-10 object-contain"
            />
          </div>
        </Link>
        {/* Info */}
        <div>
          <Link to={`/app-details/${app.id}`}>
            <h2 className="font-semibold text-black text-md">{app.title}</h2>
          </Link>

          <div className="flex items-center gap-1 sm:gap-4 text-sm text-gray-500 mt-1">
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
      <button onClick={handleUninstall} className="btn btn-sm bg-green-400 hover:bg-green-500 text-white border-none">
        Uninstall
      </button>
    </div>
  );
};

export default InstalledAppCard;
