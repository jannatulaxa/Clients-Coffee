
import imLogo from "../assets/icons/01.png"

const Banner = () => {
  return (
    <div className="banner flex justify-start items-center h-[40rem] -mt-36">
      <div className="text-center  p-[1rem] md:p-[3.5rem] mt-[7rem]">
        <p className="font-serif font-bold lg:text-8xl md:text-5xl text-4xl">COFFEE PALACE</p>
        <div className="flex justify-center  items-center gap-x-4"><div className="w-[2rem] md:w-[10rem] h-[1px] bg-[#CF8613]" />
        <img className="w-[2rem] md:w-[3rem]" src={imLogo} alt="imLogo" />
        <div className="w-[2rem] md:w-[10rem] h-[1px] bg-[#CF8613]" /></div>
        <p className=" md:w-[38rem] mt-8 mb-4 italic text-xl text-justify">
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
