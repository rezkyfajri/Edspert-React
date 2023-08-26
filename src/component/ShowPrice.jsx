function ShowPrice({ products }) {
  if (products.discountPrice) {
    return (
      <p className="pb-[16px] text-[#0ACF83] font-extrabold ">
        <s className="text-black text-[15px] font-medium pb-[22px] pl-[125px]">
          Rp.{products.price}
        </s>
        Rp.
        {products.discountPrice}
      </p>
    );
  }
  return (
    <p className="pb-[16px] text-[#0ACF83] font-extrabold pl-[224px]">
      Rp.
      {products.price}
    </p>
  );
}

export default ShowPrice;
