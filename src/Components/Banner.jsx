import React from 'react';
import person from "../assets/All Images/person.png";
const Banner = () => {
    return (
      <>
        <div className="bg-[#9873ff21]">
          <div className="my-container banner py-7 flex items-center justify-between gap-16 ">
            <div className="banner-info">
              <h2 className="text-6xl font-bold leading-[80px] pb-6">
                One Step <br /> Closer To Your{" "}
                <span className="text-[#7183f8]">Dream Job</span>
              </h2>
              <p className="pb-6 leading-7">
                Explore thousands of job opportunities with all the <br />{" "}
                information you need. Its your future. Come find it. Manage all{" "}
                <br /> your job application from start to finish.
              </p>
              <button className="btn btn-bg text-white">Get Started</button>
            </div>
            <div className="img">
              <img className="" src={person} alt="" />
            </div>
          </div>
        </div>
      </>
    );
};

export default Banner;