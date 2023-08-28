import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDetail } from "../../../store/product/action";
import { useEffect } from "react";

const PaymentCheckoutPage = () => {
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
    <div className="bg-[#EFF4FA] top-0">
      <div className="mt-[7rem] ml-[72px]">
        <h1 className="pl-[65px] pt-[45px] mulish font-bold text-[28px]">
          Checkout
        </h1>
        <div className="flex w-100%]">
          <section className="bg-white pl-[65px] pt-[45px] m-[1rem] w-[50%]">
            <h2>pilih metode pembayaran</h2>
          </section>

          <section className="bg-white pl-[65px] pt-[45px] m-[1rem] w-[50%]">
            <h2>Ringkasan pesanan</h2>
            <div className="flex">
              <div className="w-[120px] h-[110px] bg-[#2B3E58] flex justify-center items-center rounded-[10px]">
                <img
                  className="h-[100%] "
                  src={"/assets/img/person.png"}
                  alt=""
                />
              </div>
              <div>
                <p>{entity.title}</p>
                <p>{entity.desc}</p>
                <p>Batch {entity.batch}</p>
                <p>Mentor {entity.mentor}</p>
              </div>
            </div>
            <div className="w-[100%] flex flex-end">
              <button
                onClick={() => navigate("/PaymentInstructionCheckout")}
                className="w-[200px] h-[40px] bg-[#2A61A8] rounded-[20px]"
              >
                Bayar
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default PaymentCheckoutPage;
