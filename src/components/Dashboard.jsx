import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-secondary font-poppins sta ">
      <div className="p-9 flex flex-col gap-1 items-center">
        <h1 className="text-white mt-5 font-semibold text-4xl">
          LRP DOCUMENTATION GUIDE
        </h1>
        <p className="text-[#B8B7C6] text-lg">
          Explore our guides and examples to use the Lagos Revenue Portal (LRP).
        </p>
        <div className="mt-4 flex flex-row gap-2 text-white">
          <button className="p-2 px-6 rounded-2xl bg-[#413F50] ">Home</button>
          <button className="p-2 px-6  bg-[#0FA968] rounded-2xl">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
