import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  const dynamic = useParams();
  console.log(dynamic.jobID);
  const [job, setJob] = useState({});
  useEffect(() => {
    const findData =  jobs.find((j) => j.id === dynamic.jobID);
    console.log(findData);
    setJob(findData);
  }, []);

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
            <span className="font-bold">Salary: </span>

            <span className="text-[#757575]">{job.salary}</span>
          </p>
          <p>
            <span className="font-bold">Job title: </span>
            <span className="text-[#757575]">{job.job_title}</span>
          </p>
          <h2 className="font-bold text-2xl">Contact information</h2>

          <p>
            <span className="font-bold">Email: </span>
            <span className="text-[#757575]">{job.email}</span>
          </p>
          <p>
            <span className="font-bold ">Phone: </span>
            <span className="text-[#757575]">{job.phone}</span>
          </p>
          <p>
            <span className="font-bold">Job title: </span>
            <span className="text-[#757575]">{job.location}</span>
          </p>
          <button className="btn btn-bg text-white mt-3 btn-wide">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
