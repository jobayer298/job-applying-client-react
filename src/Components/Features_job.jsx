import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Features_job = () => {
    const jobData = useLoaderData()
    console.log(jobData);
    return (
      <div className="my-container pb-24">
        <div className="title text-center pb-8">
          <h2 className="text-5xl font-bold mb-4">Featured Jobs</h2>
          <p className="text-[#757575]">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          {jobData.map((job) => (
            <div
              key={job.id}
              className="border-gray-200 border-2 p-6 leading-10 rounded-lg"
            >
              <img className="h-10 w-28 mb-3" src={job.company_logo} alt="" />
              <p className="font-bold text-2xl">{job.job_title}</p>
              <p className="text-[#757575]">{job.company_name}</p>
              <div>
                <button className="btn btn-outline btn-primary mr-3">
                  {job.remote_or_onsite}
                </button>
                <button className="btn btn-outline btn-primary">
                  {job.fulltime_or_parttime}
                </button>
              </div>
              <p className="flex gap-4 text-[#757575]">
                <span>{job.location}</span>
                <span>Salary: {job.salary}</span>
              </p>
              <button className="btn btn-bg text-white">View Details</button>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Features_job;