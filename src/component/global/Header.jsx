import React from "react";

const Header = () => {
  console.log(location.pathname);

  return (
    <header className="flex flex-row justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">
        <span className="text-[#ffffff]">Skill</span>{" "}
        <span className="text-[#CB8461]">Shoot</span>
      </h1>
      <nav className="space-x-4">
        {["Home", "Course", "Subscribe", "About", "Testimonial"].map((page) => (
          <a
            href="#"
            className={page == "Home" ? "text-[#FFFFFF]" : "text-[#b8b4b4]"}
          >
            {page}
          </a>
        ))}
      </nav>
      <div>
        <a href="#" className="text-[#FFFFFF]">
          Login
        </a>
        <a
          href="#"
          className="bg-[#CB8461] text-white px-4 py-2 rounded ml-[20px]"
        >
          Register
        </a>
      </div>
    </header>
  );
};

export default Header;
