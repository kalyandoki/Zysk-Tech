import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <nav className="hidden md:flex space-x-8 text-gray-800 font-bold justify-between items-center">
          <div className="hidden md:flex space-x-3 text-gray-600 font-bold justify-between items-center">
            <img
              src="https://i.imgur.com/FaKmFsN.jpeg"
              alt="Logo"
              className="w-300 h-10 rounded-md"
            />
          </div>
          <a href="#" className="hover:text-blue-500 transition duration-200">
            Home
          </a>
          <div className="md:flex  font-bold items-center">
            <a href="#" className="hover:text-blue-500 transition duration-200">
              Product
            </a>
            <SlArrowDown className="mt-1 ml-2 text-black md:text-sm" />
          </div>
          <div className="md:flex  font-bold items-center">
            <a href="#" className="hover:text-blue-500 transition duration-200">
              Resources
            </a>
            <SlArrowDown className="mt-1 ml-2 text-black md:text-sm" />
          </div>
          <a href="#" className="hover:text-blue-500 transition duration-200">
            Pricing
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/6c1f/e88a/3b9e8dfddf4a065581b04df49638ca9c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-Rvo9KTT9peDF34ZjXAFsCmViEPt6~ShOTlYZ2aVIlOzuaUQUjatnqmAomM2wTrCV6Q-~9AROnL25BQTq4oBgfpq7lVckGxk1Pmh7Urp3FZ2i9f5HAJ8mbhk~VTC~hj~EQd8pN~9fLaTnjLQWQEUjA0BbC0soI2aP5e0sSquvyVYsdTMdKtCuxYiPT7q3ofDmLNy2t1NpGonxllTQiOvrzTUkidzzbJyYV6Zh6HsgesUl~63jNabEb6sVJK5299p5hbkmo0PRBctmVQrq3cyQLH1HbniWfP55TiraL3KqIYf5P~fnTqF-CPQpdvTcmTdMFDuXXjQqkEScX3HXqHHg__"
              alt="Profile"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <button
          onClick={() => setMobile(!mobile)}
          className="md:hidden text-gray-600 hover:text-blue-500 focus:outline-none"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {mobile && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center py-2 space-y-2 text-gray-600">
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition duration-200"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition duration-200"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition duration-200"
              >
                Pricing
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
