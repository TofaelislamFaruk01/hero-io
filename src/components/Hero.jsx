import { Link } from "react-router";
import hero from "../assets/hero.png";
const Hero = () => {
  return (
    <div className="hero mt-5 sm:mt-10 ">
      <div className="flex-col text-center">
        {/* Upper Div */}
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            We Build <br />
            <span className="text-purple-500">Productive</span> Apps
          </h1>

          <p className="py-6 text-gray-500">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>

          {/* Store Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="https://play.google.com/store/" target="_blank">
              <button className="flex items-center text-black gap-2 font-bold px-4 py-2 border rounded-lg bg-white shadow hover:shadow-md">
                {/* Google Play Icon */}
                <i className="fa-brands fa-google-play text-green-500"></i>
                Google Play
              </button>
            </Link>

            <Link to="https://apps.apple.com/us/app" target="_blank">
              <button className="flex items-center text-black font-bold gap-2 px-4 py-2 border rounded-lg bg-white shadow hover:shadow-md">
                {/* Apple Icon */}
                <i className="fa-brands fa-apple text-gray-500"></i>
                App Store
              </button>
            </Link>
          </div>
        </div>

        {/* Lower Div (Image) */}
        <div className="mt-5 sm:mt-10 flex justify-center">
          <img
            src={hero}
            alt="App Preview"
            className=" w-80 sm:w-100 md:w-120 lg:w-150 drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
