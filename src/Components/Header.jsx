import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const link = [
    { name: "Home", href: "/" },
    { name: "Statistics", href: "/statistics" },
    { name: "Applied Jobs", href: "/applied_jobs" },
    { name: " Blogs", href: "/blogs" },
  ];
  return (
    <div className="bg-[#9873ff21]">
      <nav className=" max-w-6xl mx-auto lg:flex justify-between md:items-center py-5">
        <div className="logo">
          <h1 className="font-bold text-4xl ">HomeIT</h1>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute md:hidden text-3xl right-6 top-6"
        >
          {open === false ? (
            <ion-icon name="menu"></ion-icon>
          ) : (
            <ion-icon name="close"></ion-icon>
          )}
        </div>
        <ul
          className={`lg:flex gap-9 font-semibold lg:items-center absolute  lg:static md:z-auto z-[1] left-0 pl-9 md:pl-0 w-full md:w-auto  ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {link.map((l, index) => (
            <Link key={index} to={l.href}>
              <li className="my-3 md:my-0">{l.name}</li>
            </Link>
          ))}
        </ul>
        <button className="btn btn-bg text-white">Start Applying</button>
      </nav>
    </div>
  );
};

export default Header;
