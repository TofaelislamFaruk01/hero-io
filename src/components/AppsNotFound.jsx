import { Link } from "react-router";
import appError from "../assets/App-Error.png";

const AppsNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-7xl mx-auto gap-6 py-15">
      <img src={appError} alt="Error" />
      <h1 className="text-4xl font-bold text-black uppercase">
        Oops!!! app not found!
      </h1>
      <p className="text-md text-gray-500">
        The App you are requesting is not found on our system. Please try
        another apps.
      </p>
      {/* <button className="mt-2 block mx-auto text-white bg-gradient-to-r from-purple-500 to-indigo-500 px-10 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-600 transition-colors">
        <Link to="/apps" className="text-white no-underline">
          Go Back!
        </Link>
      </button> */}
    </div>
  );
};

export default AppsNotFound;
