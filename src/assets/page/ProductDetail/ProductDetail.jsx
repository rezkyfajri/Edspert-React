import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDetail } from "../../../store/product/action";
import { useEffect } from "react";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { entity } = useSelector((state) => state.product);
  const fetchDetailProduct = async (productId) => {
    await dispatch(getDetail(productId));
  };
  useEffect(() => {
    fetchDetailProduct(id);
  }, []);
  return (
    <div>
      <div className=" bg-[#152A46] px-[120px] py-[5rem]  h-[584px] relative">
        <h1>{entity.title}</h1>
        <p>{entity.desc}</p>
        <img className="absolute " src="/src/assets/img/Hero.png" alt="" />
      </div>
      <div>
        <div className="flex w-[100%] bg-[#EFF4FA]">
          <div className="w-[30%]">
            <div className="bg-white w-[308px] h-[256px] ml-[74px] mt-[76px] rounded-[15px]">
              <p>materi</p>
              <p>Fasilitas</p>
            </div>
          </div>
          <div>
            <div className="bg-white  ml-[74px] mt-[76px] rounded-[15px]">
              <h1>Materi</h1>
              <p>A</p>
              <p>B</p>
              <p>C</p>
              <p>D</p>
              <p>E</p>
            </div>
            <div className="bg-white  ml-[74px] mt-[76px] rounded-[15px]">
              <h1>Fasilitas</h1>
              <p>A</p>
              <p>B</p>
              <p>C</p>
              <p>D</p>
            </div>
          </div>
        </div>
        <div className="text-center ">
          <p>Anda sudah siap?</p>
          <button
            onClick={() => navigate("/PaymentCheckout")}
            className="p-[10px] bg-yellow-400 rounded-[15px]"
          >
            {" "}
            Daftar Kelas
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailPage;
