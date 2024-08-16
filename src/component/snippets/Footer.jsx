import React from "react";

function Footer() {
  const navItems = ["Home", "Course", "Subscribe", "About", "Testimoni"];

  return (
    <footer className="flex flex-wrap gap-5 justify-between self-stretch mt-10 w-full sm:mt-36 sm:max-w-full">
      <h2 className="text-2xl font-bold text-red-400">
        <span className="text-white">Skill </span>Shoot
      </h2>
      <nav className="flex gap-8 my-auto text-lg whitespace-nowrap text-white text-opacity-60 sm:max-w-full">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={index === 0 ? "grow text-white" : ""}
            aria-current={index === 0 ? "page" : undefined}
          >
            {item}
          </a>
        ))}
      </nav>
    </footer>
  );
}

export default Footer;
