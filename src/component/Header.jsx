import React from "react";
import ListNavigation from "./ListNavigation";
const navItems = [
  { label: "Program", url: "#" },
  { label: "Bidang Ilmu", url: "#" },
  { label: "Tentang Edspert", url: "#" },
  { label: "Masuk/Daftar", url: "#" },
];

const Header = () => {
  return (
    <div className="flex justify-between pt-[28px]">
      <h1 className="text-[20px] font-bold text-white-700">LOGO</h1>
      <nav>
        <ListNavigation items={navItems} />
      </nav>
    </div>
  );
};
export default Header();
