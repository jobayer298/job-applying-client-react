import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { addToDb, getStoredCart } from "../utils/fakeDB";
 import {  toast } from "react-toastify";

const JobDetails = () => {
  const jobs = useLoaderData();
  // console.log(jobs);
  const dynamic = useParams();
  console.log(dynamic.jobID);
  const [job, setJob] = useState({});
  useEffect(() => {
    const findData = jobs.find((j) => j.id === dynamic.jobID);
    console.log(findData);
    setJob(findData);
  }, []);

  const handleCart = (id) =>{
    const savedCart = getStoredCart();
    console.log(savedCart);
    let cart = [];
    for (const id in savedCart) {
      const findData = jobs.find((jb) => jb.id === id);
      if (findData) {
        cart.push(findData);
      }
    }
    console.log(cart);
    const exist = cart.find((ct) => ct.id === dynamic.jobID);
    if(exist){
      toast("You have already applied!");
      return
    }
    console.log(id);
    addToDb(id)
  }
  


  return (
    <div className="my-container">
      <h2 className="my-container text-3xl font-bold text-center my-10">
        Job details
      </h2>
      <div className="grid grid-cols-2 gap-10">
        <div className="job-desc leading-8">
          <p>
            <span className="font-bold">Job description: </span>{" "}
            <span className="text-[#757575]">{job.job_description}</span>
          </p>
          <p>
            <span className="font-bold">Job responsibility: </span>
            {job.job_responsibility}
          </p>
          <p className="font-bold">Educational Requirements: </p>
          <p>{job.educational_requirements}</p>
          <p className="font-bold">Experiences </p>
          <p>{job.experiences}</p>
        </div>
        <div className="job-details bg-[#9873ff21] rounded-xl p-7 leading-8">
          <h2 className="font-bold text-2xl">Job details</h2>
          <p>
            <span className="font-bold">$ Salary:</span>
            <span className="text-[#757575]">{job.salary}</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-bold">
              <ion-icon name="card-outline"></ion-icon>Job title:
            </span>
            <span className="text-[#757575]">{job.job_title}</span>
          </p>
          <h2 className="font-bold text-2xl">Contact information</h2>

          <p>
            <span className="font-bold">
              <ion-icon name="mail-outline"></ion-icon>Email:{" "}
            </span>
            <span className="text-[#757575]">{job.email}</span>
          </p>
          <p>
            <span className="font-bold ">
              <ion-icon name="call-outline"></ion-icon>Phone:{" "}
            </span>
            <span className="text-[#757575]">{job.phone}</span>
          </p>
          <p>
            <span className="font-bold">
              <ion-icon name="location-outline"></ion-icon>Location:{" "}
            </span>
            <span className="text-[#757575]">{job.location}</span>
          </p>

          <button
            onClick={() => handleCart(dynamic.jobID)}
            className="btn btn-bg text-white mt-3 btn-wide"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
