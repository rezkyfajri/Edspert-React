import React from "react";
import ShowPrice from "./ShowPrice";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();
  return (
    <section
      onClick={() => navigate("/ProductDetail/123")}
      key={props.title}
      className="ml-[72px] mb-[72px] w-[352px] font-mulish cursor-pointer"
    >
      <div className="flex rounded-t-[20px] bg-[#152A46]">
        <img
          className="ml-[28px] mt-[16px] w-[75px]"
          src="./src/assets/img/person.png
          "
          alt=""
        />
        <div className="pl-[17px] mt-[17px] ">
          <h2 className="text-[#ffcd29] font-extrabold text-[16px]">
            {props.type}
          </h2>
          <p className="font-extrabold text-[20px] text-white capitalize">
            {props.title}
          </p>
          <p className="font-normal text-[12px] text-white">({props.desc})</p>
        </div>
      </div>
      <div className="rounded-b-[20px] bg-white pl-[24px] pt-[9px]">
        <h2 className="font-extrabold text-[20px] text-black capitalize">
          {props.title}
        </h2>
        <p className="text-[17px] font-extrabold ">{props.desc}</p>
        <p className="text-[12px] font-semibold pt-[7px]">
          <span className="opacity-50 pr-[16px]">Batch</span>
          {props.batch}
        </p>
        <p className="text-[12px] font-semibold ">
          <span className="opacity-50 pr-[9px]">Mentor</span>
          {props.mentor}
        </p>
        <ShowPrice products={props} />
      </div>
    </section>
  );
};

export default ProductCard;
