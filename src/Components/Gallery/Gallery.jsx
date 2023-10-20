import img1 from "../../assets/gallery/1.jpg"
import img2 from "../../assets/gallery/2.jpg"
import img3 from "../../assets/gallery/3.jpg"
import img4 from "../../assets/gallery/4.jpg"
import img5 from "../../assets/gallery/5.jpg"
import img6 from "../../assets/gallery/6.jpg"

const Gallery = ({data}) => {
  return (
    <div className="bg-black pt-20">
      <div className="w-[88%] mx-auto pb-10">
      <div className="md:w-[40rem] mx-auto  pb-10">
        <p className="font-bold text-4xl md:text-6xl text-white text-center py-2">
          GALLERY
        </p>
        <div className="h-1 bg-red-600 w-80 mx-auto"></div>
        <p className="text-center font-thin text-[#868686e4] text-2xl">Where Music Comes to Life</p>
      </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          
            <div  data-aos="flip-left" className="lg:col-span-1 lg:row-span-1">
              <figure>
                <img
                  src={img1}
                  alt="Picture"
                />
              </figure>
            </div>
            <div  data-aos="flip-left" className="lg:col-span-1 lg:row-span-1">
              <figure>
                <img
                  src={img2}
                  alt="Picture"
                />
              </figure>
            </div>
            <div  data-aos="flip-left" className="lg:col-span-1 lg:row-span-1">
              <figure>
                <img
                  src={img3}
                  alt="Picture"
                />
              </figure>
            </div>
            <div  data-aos="flip-left" className="lg:col-span-1 lg:row-span-1">
              <figure>
                <img
                  src={img4}
                  alt="Picture"
                />
              </figure>
            </div>
            <div  data-aos="flip-left" className="lg:col-span-1 lg:row-span-1">
              <figure>
                <img
                  src={img5}
                  alt="Picture"
                />
              </figure>
            </div>
            <div  data-aos="flip-left" className="lg:col-span-1  lg:row-span-1">
              <figure>
                <img
                  src={img6}
                  alt="Picture"
                />
              </figure>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Gallery;
