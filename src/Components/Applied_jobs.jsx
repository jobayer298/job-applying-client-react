import React, { useState } from "react";
import { getStoredCart } from "../utils/fakeDB";
import { Link, useLoaderData } from "react-router-dom";

const Applied_jobs = () => {
  const jobData = useLoaderData();
  console.log(jobData);
  const savedCart = getStoredCart();
  console.log(savedCart);
  let cart = [];
  for (const id in savedCart) {
    const findData = jobData.find((jb) => jb.id === id);
    if (findData) {
      findData.quantity = savedCart[id];
      cart.push(findData);
    }
  }
  console.log(cart);
  const [carts, setCarts] = useState(cart);
  const handleRemote = () => {
    const remote = carts.filter((c) => c.remote_or_onsite === "Remote");
     console.log(remote);
     setCarts(remote)
  };
  const handleOnsite = () =>{
    const onsite = carts.filter((c) => c.remote_or_onsite === "Onsite");
    setCarts(onsite);
  }

 
  return (
    <div className="my-container">
      <h2 className="text-5xl font-bold mb-4 text-center my-5">Applied Jobs</h2>
      <div className="flex gap-2 justify-end">
        <div className="dropdown dropdown-bottom">
          <label tabIndex={0} className="btn m-1 px-4">
            Filter by<ion-icon name="chevron-down-outline"></ion-icon>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                className="hover:border-b-4  hover:border-b-indigo-500 "
                onClick={handleRemote}
              >
                Remote
              </a>
            </li>
            <li>
              <a
                className="hover:border-b-4  hover:border-b-indigo-500 "
                onClick={handleOnsite}
              >
                Onsite
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12">
        {carts.map((c) => (
          <div
            className="mt-7 border-gray-200 border-2 p-7 rounded-xl"
            key={c.id}
          >
            <div className="md:flex items-center gap-10">
              <img className="w-44 h-12" src={c.company_logo} alt="" />
              <div className="leading-7  grow">
                <h2>{c.job_title}</h2>
                <p>{c.company_name}</p>
                <div className="my-3">
                  <button className="btn btn-outline btn-primary mr-3">
                    {c.remote_or_onsite}
                  </button>
                  <button className="btn btn-outline btn-primary">
                    {c.fulltime_or_parttime}
                  </button>
                </div>
                <p className="flex gap-4 text-[#757575]">
                  <span>
                    {" "}
                    <ion-icon name="location-outline"></ion-icon>
                    {c.location}
                  </span>
                  <span>$ Salary: {c.salary}</span>
                </p>
              </div>
              <Link to={`/job/${c.id}`}>
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applied_jobs;
