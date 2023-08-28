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
      <div className=" bg-[#152A46] h-[584px] relative">
        <div className="pt-[174px] pl-[120px] z-[1]">
          <h1 className="font-semibold text-[60px] text-white be-vie ">
            {entity.title}
          </h1>
          <p className="be-vie text-white text-[42px] font-normal">
            {entity.desc}
          </p>
          <p className="text-[20px] text-white">Mentor</p>
          <p className="text-[20px] text-white font-">{entity.mentor}</p>
        </div>
        <div className="w-[819px]  right-0 top-[76px] absolute ">
          <img className=" w-[100%]" src="/src/assets/img/Hero.png" alt="" />
        </div>
      </div>
      <div className="relative">
        <div className="flex w-[100%] bg-[#EFF4FA]">
          <div className="w-[30%]">
            <div className="bg-white w-[308px] h-[256px] ml-[74px] mt-[76px] rounded-[15px]  pt-[18px] ">
              <p className="my-[13px] pl-[72px]">materi</p>
              <p className="pl-[72px]">Fasilitas</p>
              <div className="flex w-[100%] p-[1rem] justify-between">
                <p>
                  <s>Rp.{entity.price}</s>
                </p>
                <p className="text-[#ff6a28] font-normal text-[20px]">
                  Rp.{entity.discount}
                </p>
              </div>
              <button
                onClick={() => navigate("/PaymentCheckout")}
                className="m-[30px] rounded-[25px] bg-[#ffcd29] h-[50px] w-[250px] text-white"
              >
                Daftar Kelas
              </button>
            </div>
          </div>
          <div className="w-[900px]">
            <div className="bg-white pl-[61px] pt-[38px]  mt-[76px] rounded-[15px]">
              <h1 className="be-vie text-[30px] font-bold">Materi</h1>
              <ul>
                <li>Nanti ambil dari data dari axios </li>
                <li>Nanti ambil dari data dari axios </li>
                <li>Nanti ambil dari data dari axios </li>
                <li>Nanti ambil dari data dari axios </li>
                <li>Nanti ambil dari data dari axios </li>
              </ul>
            </div>
            <div className="bg-white pl-[61px] pt-[38px]   mt-[76px] rounded-[15px]">
              <h1>Fasilitas</h1>
              <ul>
                <li>E-Sertifikat</li>
                <li>Portfolio</li>
                <li>Job Connector</li>
                <li>Career Development</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center h-[386px] items-center bg-[#283e58]">
          <p className="text-white be-vie text-[42px] font-semibold">
            Anda sudah siap?
          </p>
          <button
            onClick={() => navigate("/PaymentCheckout")}
            className="mt-[20px] h-[50px] w-[250px] bg-yellow-400 rounded-[25px] text-white font-semibold"
          >
            Daftar Kelas
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailPage;
