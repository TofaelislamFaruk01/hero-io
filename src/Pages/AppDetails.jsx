
import AppDetailsCard from "../components/AppDetailsCard";
import AppReviewChart from "../components/AppReviewChart";
import apps from "../data/apps.json";
import { useParams } from "react-router";


const AppDetails = () => {
    const { id } = useParams();


  const app = apps.find((item) => item.id === parseInt(id));

  if (!app) {
    return <p className="text-center mt-10">App not found</p>;
  }
    return (
        <div className="min-h-screen max-w-7xl mx-auto py-10">
            
            <AppDetailsCard key={app.id} app={app} />
            <div className="border-b border-gray-300 my-4"></div>
            <div>
                <h2 className="text-black font-bold text-2xl">Ratings</h2>
                <AppReviewChart ratings={app.ratings} />
            </div>
            <div className="border-b border-gray-300 my-4"></div>
            <div>
                <h2 className="text-black font-bold text-2xl">Description</h2>
                <p className="text-gray-500 mt-2">{app.description}</p>
            </div>
            
        </div>
    );
};

export default AppDetails;