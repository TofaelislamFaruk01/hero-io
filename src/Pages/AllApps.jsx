import React, { useState } from "react";
import apps from "../data/apps.json";
import AppCard from "../components/AppCard";

const AllApps = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter apps based on search term
  const filteredApps = apps.filter((app) => app.title.includes(searchTerm));

  return (
    <div className="max-w-7xl mx-auto px-6 py-3 sm:py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-5xl text-center text-black font-bold my-5">
          Our All Applications
        </h1>
        <p className="text-gray-600 text-center border-b border-gray-300 pb-8">
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
      </div>

      {/* Search and count */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <p className="text-black font-medium">
          ({filteredApps.length}) Apps found
        </p>
        <div className="relative w-full md:w-1/3">
          {/* Search Icon */}
          <i className="fa-solid fa-magnifying-glass absolute inset-y-0 left-1 top-3.5 flex items-center pl-3 text-gray-400"></i>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Search apps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 text-black rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Apps grid */}
      {filteredApps.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No apps found matching "{searchTerm}"
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;
