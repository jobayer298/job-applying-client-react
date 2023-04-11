import React, { useEffect, useState } from 'react';

const Category = () => {
    const [category, setCategory] = useState([])
    useEffect(()=>{
        fetch("job_category.json")
          .then((res) => res.json())
          .then((data) => setCategory(data));
    },[])
  return (
    <>
      <div className="my-container py-24">
        <div className="title text-center pb-8">
          <h2 className="text-5xl font-bold mb-4">Job Category List</h2>
          <p className="text-[#757575]">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-5  px-5 md:px-0">
          {category.map((c, index) => (
            <div key={index} className="bg-indigo-100 p-7 py-11 rounded-xl">
              <img
                className="mb-3 bg-indigo-200 p-4 rounded-xl"
                src={c.logo}
                alt=""
              />
              <p className="mb-2 text-[19px] font-semibold ">{c.name}</p>
              <p>{c.jobs}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;