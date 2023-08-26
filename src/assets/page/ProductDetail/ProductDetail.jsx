import { useNavigate } from "react-router-dom";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  return (
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
  );
};
export default ProductDetailPage;
