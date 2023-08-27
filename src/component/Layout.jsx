import { Outlet } from "react-router-dom";
import ListNavigation from "./ListNavigation";
const navItems = [
  { label: "Program", url: "#" },
  { label: "Bidang Ilmu", url: "#" },
  { label: "Tentang Edspert", url: "#" },
  { label: "Masuk/Daftar", url: "#" },
];

const Layout = () => {
  return (
    <>
      <header className="text-white bg-transparent fixed px-[5%] py-[0.2rem] z-10 top-0 left-0 right-0">
        <div className="flex justify-between  pt-[28px]">
          <h1 className="text-[20px] font-bold text-white-700">LOGO</h1>
          <nav>
            <ListNavigation items={navItems} />
          </nav>
        </div>
      </header>
      <div className=" bg-[#152A46] px-[120px] py-[5rem]  h-[584px] relative">
        <h1>Jadi expert Bersama Edspert.id</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste animi
          ipsum vero perspiciatis, sed quibusdam.
        </p>
        <img className="absolute " src="/src/assets/img/Hero.png" alt="" />
      </div>

      <Outlet />

      <div className="bg-[#152A46] text-white py-[20px] text-center px-[4rem]">
        <div className="flex justify-between">
          <div className="items-center">
            <p>TAGline Edspert disini</p>
            <p>
              Jl waltu gede Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Porro, deserunt?
            </p>
          </div>
          <div>
            <ul>
              <li>
                <a href="">Program</a>
              </li>
              <li>
                <a href="">Online Course</a>
              </li>
              <li>
                <a href="">Mini Bootsrap</a>
              </li>
              <li>
                <a href="">Bootcamp</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="">Bidang Ilmu</a>
              </li>
              <li>
                <a href="">Digital Marketing</a>
              </li>
              <li>
                <a href="">Product Management</a>
              </li>
              <li>
                <a href="">English</a>
              </li>
              <li>
                <a href="">Programing</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="">Tentang Edspert</a>
              </li>
              <li>
                <a href="">Bantuan</a>
              </li>
              <li>
                <a href="">Hubungi Kami</a>
              </li>
              <li>
                <a href="">Media Sosial</a>
              </li>
            </ul>
          </div>
        </div>
        <p>Edspert, Copyright. Lorem ipsum dolor sit amet.</p>
      </div>
    </>
  );
};

export default Layout;
