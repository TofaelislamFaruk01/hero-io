import { Link } from "react-router";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0c1b33] text-gray-300">
      {/* Upper Div: Hero.IO Footer Horizontal Style */}
      <div className="footer sm:footer-horizontal max-w-7xl mx-auto px-6 py-10">
        
        {/* Logo / Company */}
        <aside className="flex flex-col sm:items-center justify-center">
          <Link to="/" className="flex flex-col justify-center items-center gap-2 mb-2">
            <img className="h-10 w-10" src={logo} alt="HERO.IO Logo" />
            <span className="font-bold text-white text-lg">HERO.IO</span>
          </Link>
          <p className="text-gray-400">
            Providing reliable tech since 2023
          </p>
        </aside>

        {/* Services */}
        <nav>
          <h6 className="footer-title text-white">Services</h6>
          <Link className="link link-hover">App Development</Link>
          <Link className="link link-hover">Web Design</Link>
          <Link className="link link-hover">UI/UX Design</Link>
          <Link className="link link-hover">Marketing</Link>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title text-white">Company</h6>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Careers</Link>
          <Link className="link link-hover">Blog</Link>
        </nav>

        {/* Legal */}
        <nav>
          <h6 className="footer-title text-white">Legal</h6>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </nav>

      </div>

      {/* Divider */}
      <hr className="border-t border-gray-600 w-[95%] sm:max-w-7xl mx-auto" />

      {/* Lower Div: Social Links + Copyright */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-gray-400 text-sm select-none gap-4">
        <p>© {new Date().getFullYear()} HERO.IO. All rights reserved.</p>
        <div className="flex gap-3">
          <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
            <i className="fa-brands fa-twitter text-lg"></i>
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-red-500 transition-colors">
            <i className="fa-brands fa-youtube text-lg"></i>
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition-colors">
            <i className="fa-brands fa-facebook text-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;