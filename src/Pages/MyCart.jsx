import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const findCartProducts = useLoaderData();
  const [items, setItems] = useState(findCartProducts);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-coffee-alpha.vercel.app/cartProduct/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remain = items.filter((datas) => datas._id !== id);
            console.log(remain);
            if (data.acknowledged) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setItems(remain);
            }
          });
      }
    });
  };
  console.log(items);
  if (items.length > 0) {
    return (
      <div>
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center my-10 underline">Your Selected Products </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2  p-4 md:w-1/2 lg:w-7/12  md:mx-auto">
          {items.map((shoes) => (
            <div key={shoes._id}>
              <div
                className="card shadow-xl md:w-96 bg-[#FFF9ED]  mb-10"
                data-aos="flip-left"
              >
                <figure>
                  <img className="h-56" src={shoes.photo} alt="Shoes" />
                </figure>
                <div className="card-body ">
                  <h2 className="card-title justify-center">
                    {shoes.name.toUpperCase()}
                    <div className="badge border-0 bg-[#FFA800] text-white">
                      NEW
                    </div>
                  </h2>
                  <div className="flex justify-center gap-5 my-5 items-center">
                    <h2 className="card-title">
                      {shoes.brand_name.toUpperCase()}
                    </h2>
                    <h2 className="card-title">{shoes.type.toUpperCase()}</h2>
                  </div>
                  <div className="flex gap-x-2 justify-center items-center mb-5">
                  {Array(Math.floor(shoes.rating))
                        .fill("")
                        .map((rate) => <svg key={rate.id}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.47966 1.49897C9.52196 1.3958 9.59398 1.30755 9.68658 1.24543C9.77918 1.18331 9.88816 1.15015 9.99966 1.15015C10.1112 1.15015 10.2201 1.18331 10.3127 1.24543C10.4053 1.30755 10.4774 1.3958 10.5197 1.49897L12.6447 6.60997C12.6844 6.70561 12.7498 6.78841 12.8336 6.84928C12.9174 6.91015 13.0164 6.94672 13.1197 6.95497L18.6377 7.39697C19.1367 7.43697 19.3387 8.05997 18.9587 8.38497L14.7547 11.987C14.6761 12.0542 14.6176 12.1417 14.5855 12.2399C14.5534 12.3382 14.5489 12.4434 14.5727 12.544L15.8577 17.929C15.8835 18.037 15.8767 18.1503 15.8382 18.2545C15.7997 18.3587 15.7312 18.4491 15.6413 18.5144C15.5514 18.5797 15.4442 18.6168 15.3332 18.6212C15.2222 18.6256 15.1124 18.597 15.0177 18.539L10.2927 15.654C10.2044 15.6002 10.103 15.5717 9.99966 15.5717C9.8963 15.5717 9.79493 15.6002 9.70666 15.654L4.98166 18.54C4.88692 18.598 4.77712 18.6266 4.66612 18.6222C4.55512 18.6178 4.44791 18.5807 4.35803 18.5154C4.26815 18.4501 4.19962 18.3597 4.16111 18.2555C4.1226 18.1513 4.11584 18.038 4.14166 17.93L5.42666 12.544C5.45049 12.4434 5.44611 12.3381 5.414 12.2399C5.38189 12.1416 5.3233 12.0541 5.24466 11.987L1.04066 8.38497C0.956476 8.31258 0.895573 8.21692 0.865612 8.11001C0.835651 8.00309 0.83797 7.88971 0.872278 7.78412C0.906586 7.67852 0.971351 7.58543 1.05843 7.51654C1.1455 7.44766 1.25101 7.40605 1.36166 7.39697L6.87966 6.95497C6.98291 6.94672 7.08188 6.91015 7.16569 6.84928C7.2495 6.78841 7.31488 6.70561 7.35466 6.60997L9.47966 1.49897Z"
                          fill="#FFC107"
                          stroke="#FFC107"
                        />
                      </svg>)
                        }
                  </div>

                  <div className="card-actions justify-between">
                    <button className="btn  border-0 bg-[#FFA800] text-white font-bold btn-sm">
                      {shoes.price}
                    </button>
                    <button
                      onClick={() => handleDelete(shoes._id)}
                      className="btn bg-[#FFA800] border-0 text-white font-bold btn-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center p-10">
          Nothing At Cart <br /> Or <br /> You Deleted All Items. (Please Add To
          Show)
        </h1>
      </div>
    );
  }
};

export default MyCart;