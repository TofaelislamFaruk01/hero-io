import AppDetailsCard from "../components/AppDetailsCard";
import AppReviewChart from "../components/AppReviewChart";
import apps from "../data/apps.json";
import { useParams } from "react-router";
import AppsNotFound from "./AppsNotFound";

const AppDetails = () => {
  const { id } = useParams();

  const app = apps.find((item) => item.id === parseInt(id));

  if (!app) {
    return <AppsNotFound />;
  }
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-8 py-10">
      <AppDetailsCard key={app.id} app={app} />
      <div className="border-b border-gray-300 my-4"></div>
      <div>
        <h2 className="text-black font-bold text-2xl">Ratings</h2>
        <AppReviewChart ratings={app.ratings} />
      </div>
      <div className="border-b border-gray-300 my-4"></div>
      <div>
        <h2 className="text-black font-bold text-2xl mb-6">Description</h2>
        <div className="space-y-4 text-gray-600 leading-7">
          {app.description.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
