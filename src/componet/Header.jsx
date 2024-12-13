import { useState } from "react";
import { HiMenu, HiReceiptTax } from "react-icons/hi";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="fixed flex w-[100%] justify-between bg-slate-700 p-5 text-white sm:w-60 md:w-[100%] md:p-[20px] md:text-center">
        <h1 className="flex font-bold md:ml-[20px] md:text-center">
          <HiReceiptTax className="h-[25px] w-[25px]" />
          THOMAS NORTHMAN
        </h1>
        <ul className="hidden cursor-pointer sm:space-x-1 md:flex md:space-x-20">
          <li>About</li>
          <li>Disputes</li>
          <li>International</li>
          <li>Rate & Fees</li>
          <li>Contact</li>
        </ul>

        <button className="mr-9 hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 md:block">
          Consuitation
        </button>
        <HiMenu
          className="text-[25px] font-bold md:hidden"
          onClick={() => setOpenMenu((open) => !open)}
        />
        {openMenu && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={() => setOpenMenu((open) => !open)}
          ></div>
        )}
        <div
          className={`fixed left-0 top-0 h-full w-64 transform bg-slate-700 text-white ${openMenu ? "transform-x-0" : "-translate-x-full"} z-50 transition-transform duration-300`}
        >
          <ul className="mt-10 p-2 text-center text-[20px] leading-[30px]">
            <li className="mb-10 px-2 py-4 hover:bg-slate-500">About</li>
            <li className="mb-10 px-2 py-4 hover:bg-slate-500">Disputes</li>
            <li className="mb-10 px-2 py-4 hover:bg-slate-500">
              International
            </li>
            <li className="mb-10 px-2 py-4 hover:bg-slate-500">Rate & Fees</li>
            <li className="mb-10 px-2 py-4 hover:bg-slate-500">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
