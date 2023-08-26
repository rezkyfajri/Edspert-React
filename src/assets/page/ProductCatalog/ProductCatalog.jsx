import ProductCard from "../../../component/ProductCard";
import React from "react";
const contents = [
  {
    type: "Intensive Bootcamp",
    title: "programing reactJS",
    desc: "Getting Started with ReactJS",
    batch: "September 2022",
    mentor: "Farel Hartono dan William",
    price: 390000,
  },
  {
    type: "Intensive Curse",
    title: "pgraming laravel",
    desc: "Getting Started with Laravel",
    batch: "September 2022",
    mentor: "Farel Hartono dan William",
    price: 390000,
    discountPrice: 299000,
  },
  {
    type: "Intensive Bootcamp",
    title: "programing reactJS",
    desc: "Getting Started with ReactJ",
    batch: "September 2022",
    mentor: "Farel Hartono dan William",
    price: 290000,
    discountPrice: 199000,
  },
  {
    type: "Intensive Bootcamp",
    title: "Ahli Microsoft Word",
    desc: "Getting Starter with Word",
    batch: "September 2022",
    mentor: "Farel Hartono dan William",
    price: 400000,
    discountPrice: 299000,
  },
  {
    type: "Intensive Bootcamp",
    title: "Ahli Microsoft Word",
    desc: "Getting Starter with Word",
    batch: "September 2022",
    mentor: "Farel Hartono dan William",
    price: 400000,
    discountPrice: 299000,
  },
  {
    type: "Intensive Bootcamp",
    title: "Ahli Microsoft Word",
    desc: "Getting Starter with Word",
    batch: "September 2022",
    mentor: "Farel Hartono dan William",
    price: 400000,
    discountPrice: 299000,
  },
];

const ProductCatalogPage = (props) => {
  return (
    <div className="px-[72px] py-[89px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#EFF4FA]">
      {contents.map((item) => (
        <ProductCard
          key={item.title}
          type={item.type}
          title={item.title}
          price={item.price}
          desc={item.desc}
          discountPrice={item.discountPrice}
          batch={item.batch}
          mentor={item.mentor}
        />
      ))}
    </div>
  );
};
export default ProductCatalogPage;
