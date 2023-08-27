const PaymentCheckoutPage = () => {
  return <div>
    <h1>Checkout</h1>
    <div className="flex">
      <div>
        <h2>pilih metode pembayaran</h2>

      </div>
      <div>
        <h2>Ringkasan pesanan</h2>
        <div className="flex">
          < img className="w-[119px]" src="/src/assets/img/person.png" alt="" />
          <div><p>Programming LaRAVEL</p>
          <p>Getting Starter with Laravel 9</p>

          </div>
        </div>
      </div>
    </div>
  </div>;
};
export default PaymentCheckoutPage;
