import React from "react";
import apps from "../data/apps.json";
import InstalledAppCard from "../components/InstalledAppCard";

const MyInstallation = () => {
  return (
    <div className=" min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl text-black font-bold">Your Installed Apps</h1>
          <p className="text-gray-500 mt-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Top Bar */}
        <div className="flex justify-between text-black items-center mb-4">
          <p className="font-medium">{apps.length} Apps Found</p>

          <select className="select select-sm select-bordered bg-white border-amber-200">
            <option>Sort By Size</option>
            <option>Sort By Rating</option>
            <option>Sort By Downloads</option>
          </select>
        </div>

        {/* App List */}
        <div className="space-y-4">
          {apps.slice(0, 3).map((app) => (
            <InstalledAppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyInstallation;