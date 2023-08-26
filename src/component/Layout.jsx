import { Outlet } from "react-router-dom";
import footer from "./footer";
import Header from "./Header";
import Hero from "./Hero";
const Layout = () => {
  return (
    <>
      <header className="text-white bg-[#152A46] px-[120px]  h-[584px]">
        {Header}
        {Hero}
      </header>

      <Outlet />
      <>{footer}</>
    </>
  );
};

export default Layout;
