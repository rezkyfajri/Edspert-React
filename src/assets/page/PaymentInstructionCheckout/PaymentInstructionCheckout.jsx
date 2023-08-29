import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../../store/product/action";
import { useEffect } from "react";

const PaymentInstructionCheckoutPage = () => {
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
    <div className="pt-[200px] px-[4rem] bg-[#EFF4FA]">
      <h1>Instruksi Bayar</h1>
      <section className="bg-white">
        <div className="flex justify-start w-[100%] ">
          <div className="flex right-0 w-[50%] pl-[43px] pt-[55px]">
            <div className="w-[120px] h-[110px] bg-[#2B3E58] flex justify-center items-center rounded-[10px]">
              <img
                className="h-[100%] "
                src={"/assets/img/person.png"}
                alt="person"
              />
            </div>
            <div>
              <p>{entity.title}</p>
              <p>{entity.desc}</p>
              <p>Batch {entity.batch}</p>
              <p>Mentor {entity.mentor}</p>
            </div>
          </div>
          <div className="pl-[43px] pt-[55px]">
            <h2>Instruksi Pembayaran</h2>
          </div>
        </div>
        <div className="bg-[#2B3E58] h-[236px] rounded-b-[10px]"></div>
      </section>
    </div>
  );
};
export default PaymentInstructionCheckoutPage;
