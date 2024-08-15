import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="flex flex-row justify-between items-center mb-8 bg-transparent">
      <h1 className="text-3xl font-bold">
        <span className="text-[#ffffff]">Skill</span>{" "}
        <span className="text-[#CB8461]">Shoot</span>
      </h1>
      <nav className="hidden md:flex space-x-4">
        {["Home", "Course", "Subscribe", "About", "Testimonial"].map((page) => (
          <a
            key={page}
            href="#"
            className={page === "Home" ? "text-[#FFFFFF]" : "text-[#b8b4b4]"}
          >
            {page}
          </a>
        ))}
      </nav>
      <div className="hidden md:flex place-items-center">
        <a href="#" className="text-[#FFFFFF]">
          Login
        </a>
        <a
          href="#"
          className="bg-[#CB8461] w-[97px] text-white px-4 py-2 rounded ml-[20px]"
        >
          Register
        </a>
      </div>
      <button
        className="block md:hidden text-white focus:outline-none"
        onClick={toggleDrawer}
      >
        <FontAwesomeIcon
          icon={faBars}
          style={{
            color: "white",
            height: "30px",
            width: "30px",
          }}
        />
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 p-8 transform transition-transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="text-white mb-8 focus:outline-none"
          onClick={toggleDrawer}
        >
          <FontAwesomeIcon
            icon={faX}
            style={{
              color: "white",
              height: "10px",
              width: "10px",
            }}
          />
        </button>
        <nav className="flex flex-col space-y-4">
          {["Home", "Course", "Subscribe", "About", "Testimonial"].map(
            (page) => (
              <a
                key={page}
                href="#"
                className={
                  page === "Home" ? "text-[#FFFFFF]" : "text-[#b8b4b4]"
                }
                onClick={toggleDrawer} // Close drawer on link click
              >
                {page}
              </a>
            )
          )}
        </nav>
        <div className="mt-8">
          <a href="#" className="text-[#FFFFFF]">
            Login
          </a>
          <a
            href="#"
            className="bg-[#CB8461] w-[97px] text-white px-4 py-2 rounded mt-4 block"
          >
            Register
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
