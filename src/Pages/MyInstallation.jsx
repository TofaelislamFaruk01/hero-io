import { useEffect, useState } from "react";
import apps from "../data/apps.json";
import InstalledAppCard from "../components/InstalledAppCard";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const savedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];

    // filter only installed apps
    const filteredApps = apps.filter((app) =>
      savedApps.includes(app.id)
    );

    setInstalledApps(filteredApps);
  }, []);

  const handleUninstall = (id) => {
  const updated = installedApps.filter((app) => app.id !== id);
  setInstalledApps(updated);
};

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl text-black font-bold">
            Your Installed Apps
          </h1>
          <p className="text-gray-500 mt-2">
            Explore All Installed Apps
          </p>
        </div>

        {/* Top Bar */}
        <div className="flex justify-between text-black items-center mb-4">
          <p className="font-medium">
            {installedApps.length} Apps Found
          </p>

          <select className="select select-sm select-bordered bg-white border-amber-200">
            <option>Sort By Size</option>
            <option>Sort By Rating</option>
            <option>Sort By Downloads</option>
          </select>
        </div>

        {/* App List */}
        <div className="space-y-4">
          {installedApps.length > 0 ? (
            installedApps.map((app) => (
              <InstalledAppCard key={app.id} app={app} onUninstall={handleUninstall}/>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-15">
              No apps installed yet. Go to the <strong>Apps</strong> page and install your first app!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyInstallation;