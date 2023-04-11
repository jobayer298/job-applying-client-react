import React from 'react';
import { getStoredCart } from '../utils/fakeDB';
import { Link, useLoaderData } from 'react-router-dom';

const Applied_jobs = () => {
    const jobData = useLoaderData()
    console.log(jobData);
    const savedCart = getStoredCart()
    console.log(savedCart);
    let cart = []
    for(const id in savedCart){
        const findData = jobData.find(jb => jb.id === id)
        if(findData){
            findData.quantity = savedCart[id]
            cart.push(findData)
        }
    }
    console.log(cart);
    return (
      <div className="my-container">
        <h2 className="text-5xl font-bold mb-4 text-center my-5">
          Applied Jobs
        </h2>
        <div className="mt-28">
          {cart.map((c) => (
            <div
              className="mt-7 border-gray-200 border-2 p-7 rounded-xl"
              key={c.id}
            >
              <div className="flex items-center gap-10">
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