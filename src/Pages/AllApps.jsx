import React, { useState } from "react";
import apps from "../data/apps.json";
import AppCard from "../components/AppCard";

const AllApps = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter apps based on search term
  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-5xl text-center text-black font-bold my-5">Our All Applications</h1>
        <p className="text-gray-600 text-center border-b border-gray-300 pb-8">
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
      </div>

      {/* Search and count */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <p className="text-black font-medium">({filteredApps.length}) Apps found</p>
        <input
          type="text"
          placeholder="Search apps..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 text-black rounded-md px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Apps grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default AllApps;