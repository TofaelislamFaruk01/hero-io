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
    </div>
  );
};

export default TrendingApps;