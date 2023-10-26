/* eslint-disable react/prop-types */
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
  // console.log(service);
  const { _id, img, price, title } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions text-[#FF3811] font-bold items-center ">
          <p className="text-xl">Price: {price}</p>
          <Link to={`/checkout/${_id}`}>
            <button className="">
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
