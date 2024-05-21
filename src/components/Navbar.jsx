import { useState } from "preact/hooks";
import { logoSmall } from "../assets";
import { contactInfo, navLinks } from "../data";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-white w-full flex py-2 top-0 z-20 justify-between items-center mx-auto px-4 lg:px-16 bg-center text-[#9F5DB1] font-semibold">
      <div className="flex flex-1">
        <a
          href="/"
          className="flex justify-center items-center bg-white rounded-md"
        >
          <img className="w-20 h-20 rounded-lg" src={logoSmall} alt="" />
          <div>
            <span className="ml-2 text-2xl font-bold text-[#9F5DB1]">
              SALUD
            </span>
            <span className="mr-4 text-3xl font-bold text-[#EB4963]">ARTE</span>
          </div>
        </a>
      </div>
      <div className="flex flex-2">
        <ul className="list-none hidden lg:flex lg:flex-row gap-10">
          {navLinks.map((item) => (
            <li className="hover:scale-105 hover:underline underline-offset-8 hover:text-secondary text-lg">
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:flex flex-col flex-1 hidden items-end justify-center">
        <span className="text-lg">
          <span className="mr-2">📞</span>
          {contactInfo.phones[0]}
        </span>
        <span className="text-lg">
          <span className="mr-2">📞</span>
          {contactInfo.phones[1]}
        </span>
      </div>
      {/* Mobile menu */}
      <div className="lg:hidden flex items-center">
        <button
          className="outline-none mobile-menu-button"
          onClick={() => setToggle(true)}
        >
          <svg
            className="w-6 h-6 text-black"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div
          className={`${
            !toggle
              ? "hidden -translate-x-full -z-10"
              : "flex translate-x-0 z-50 transition delay-150 duration-300 ease-in-out"
          } fixed top-0 left-0 w-full h-full bg-[#9F5DB1] flex flex-col`}
        >
          <div className="flex justify-between items-center p-4">
            <a
              href="/"
              className="flex justify-center items-center bg-white rounded-md"
            >
              <img className="w-20 h-20 rounded-lg" src={logoSmall} alt="" />
              <div>
                <span className="ml-2 text-2xl font-bold text-[#9F5DB1]">
                  SALUD
                </span>
                <span className="mr-4 text-3xl font-bold text-[#EB4963]">
                  ARTE
                </span>
              </div>
            </a>
            <span
              className={`${
                toggle ? "flex text-white" : "hidden"
              } p-4 text-2xl font-bold h-fit`}
              onClick={() => setToggle(false)}
            >
              X
            </span>
          </div>

          <ul className="list-none block text-left capitalize px-4 py-6 text-4xl tracking-wide text-white">
            {navLinks.map((item) => (
              <li
                key={item.id}
                className={`font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => setToggle(false)}
              >
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
