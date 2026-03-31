import { Link } from "react-router";
import apps from "../data/apps.json";
import AppCard from "./AppCard";

const TrendingApps = () => {
  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-black text-center mb-2 mt-5">Trending Apps</h2>
      <p className="text-gray-600 mb-10 text-center text-md">
        Explore all trending apps on the market developed by US.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {apps.slice(0, 8).map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
      <button className="mt-8 block mx-auto text-white bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-600 transition-colors">
       <Link to="/apps" className="text-white no-underline">
         Show All
       </Link>
      </button>
    </div>
  );
};

export default TrendingApps;