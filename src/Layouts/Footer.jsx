import logo from "../assets/icons/01.png";
import { FaFacebookF } from "react-icons/Fa";
import { AiFillYoutube } from "react-icons/Ai";
import { BsLinkedin, BsTwitter } from "react-icons/Bs";

const Footer = () => {
  return (
    <div className="bg-[#3B1E00]">
      <div className="w-[80%] mx-auto">
        <footer className="footer md:grid-rows-4 md:grid-cols-3 lg:grid-cols-3 lg:grid-rows-1 py-10 lg:pl-28 text-[#CF8613]">
          <nav className="text-lg">
            <header className=" font-bold text-white">YOUR ACCOUNT</header>
            <a className="link link-hover">Running Shoes</a>
            <a className="link link-hover">Football Shoes</a>
            <a className="link link-hover">Basketball Shoes</a>
            <a className="link link-hover">Volleyball Shoes</a>
            <a className="link link-hover">Trainee Shoes</a>
          </nav>
          <nav className="text-lg">
            <header className="font-bold text-white">INFORMATION</header>
            <a className="link link-hover">Returns</a>
            <a className="link link-hover">F.A.Q</a>
            <a className="link link-hover">Shipping Policy</a>
            <a className="link link-hover">Search Terms</a>
            <a className="link link-hover">Contact Us</a>
          </nav>
          <nav className="text-lg">
            <header className="font-bold text-white">HAPPY HOURS</header>
            <a className="link link-hover">Monday - Friday</a>
            <a className="link link-hover">8a.m - 10 p.m</a>
            <a className="link link-hover">Saturday & Sunday</a>
            <a className="link link-hover">10a.m - 8 p.m</a>
          </nav>
          <form className="place-items-end w-[20rem] lg:w-[27rem]">
            <div className="flex justify-end gap-x-[2rem] md:gap-x-[8rem] items-center">
            <div className="flex   gap-6 mt-8 flex-wrap">
              <FaFacebookF className="bg-[#CF8613CC] text-white p-1 text-3xl rounded-full"></FaFacebookF>
              <AiFillYoutube className="bg-[#CF8613CC] text-white p-1 text-3xl rounded-full"></AiFillYoutube>
              <BsLinkedin className="bg-[#CF8613CC] text-white p-1 text-3xl rounded-lg"></BsLinkedin>
              <BsTwitter className="bg-[#CF8613CC] text-white p-1 text-3xl rounded-full"></BsTwitter>
            </div>
              <img src={logo} alt="Logo" className="w-[15%]" />
            </div>
            
            <fieldset className="form-control mt-10 w-[18rem]  md:w-[24rem] ">
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input border-t-0 border-l-0  border-b-2 border-[#CF8613CC] w-full pr-16 bg-[#3B1E00]"
                />
                <button className="btn bg-[#CF8613CC] text-white font-bold border-0 absolute top-0 right-0 rounded-l-none">
                  Send
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
