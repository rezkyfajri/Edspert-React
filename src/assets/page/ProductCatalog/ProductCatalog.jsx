import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../../component/ProductCard";
import { useEffect } from "react";
import { getAll } from "../../../store/product/action";
import { useNavigate } from "react-router-dom";

const ProductCatalogPage = (props) => {
  const { entities } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const fetchProducts = () => {
    dispatch(getAll());
  };
  const navigate = useNavigate();
  const goToProductDetail = (productId) => {
    navigate(`/ProductDetail/${productId}`);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("entites", entities);
  return (
    <div className="mulish">
      <div className=" bg-[#152A46] h-[584px] relative">
        <div className="pt-[174px] pl-[120px]">
          <h1 className=" tetx">Jadi expert Bersama Edspert.id</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste animi
            ipsum vero perspiciatis, sed quibusdam.
          </p>
        </div>
        <div className=" w-[819px] absolute right-0 top-[76px] z-[1]">
          <img className="w-[100%]" src="/src/assets/img/Hero.png" alt="" />
        </div>
      </div>
      <div className="px-[72px] py-[89px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#EFF4FA]">
        {entities.map((product) => {
          return (
            <section
              onClick={() => goToProductDetail(product.id)}
              key={product.title}
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
                    {product.type}
                  </h2>
                  <p className="font-extrabold text-[20px] text-white capitalize">
                    {product.title}
                  </p>
                  <p className="font-normal text-[12px] text-white">
                    ({props.desc})
                  </p>
                </div>
              </div>
              <div className="rounded-b-[20px] bg-white pl-[24px] pt-[9px]">
                <h2 className="font-extrabold text-[20px] text-black capitalize">
                  {product.title}
                </h2>
                <p className="text-[17px] font-extrabold ">{props.desc}</p>
                <p className="text-[12px] font-semibold pt-[7px]">
                  <span className="opacity-50 pr-[16px]">Batch</span>
                  {product.batch}
                </p>
                <p className="text-[12px] font-semibold ">
                  <span className="opacity-50 pr-[9px]">Mentor</span>
                  {product.mentor}
                </p>
                {/* <ShowPrice products={props} /> */}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
export default ProductCatalogPage;
