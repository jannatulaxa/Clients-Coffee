import "./banner.css";
import imLogo from "../assets/icons/01.png"

const Banner = () => {
  return (
    <div className="banner flex justify-start items-center h-[40rem] -mt-36">
      <div className="text-center p-[2rem] md:p-[5.5rem] mt-10">
        <p className="font-bold lg:text-8xl text-5xl">COFFEE PALACE</p>
        <div className="flex justify-center  items-center gap-x-4"><div className="w-[10rem] h-[1px] bg-[#CF8613]" />
        <img className="w-[3rem]" src={imLogo} alt="imLogo" />
        <div className="w-[10rem] h-[1px] bg-[#CF8613]" /></div>
        <p className=" max-w-[32rem] mt-8 mb-4 italic text-2xl text-justify">
          You know the various flavor profiles of said beans, you know the
          different ways to brew a cup, and you know all the specialty coffee
          drinks that exist.
        </p>
      <p className="text-start text-xl italic text-[#CF8613]">There’s a little love in every cup.....</p>
      </div>
    </div>
  );
};

export default Banner;
