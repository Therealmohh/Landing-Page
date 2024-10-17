import React from "react";

const Body = () => {
  return (
    <div className="flex ml-24  mt-28 ml-16">
      <div>
        <div>
          <h1 className="text-[#0FA968] text-2xl font-semibold">Topics</h1>
          <p className="border-b-2 mt-1"></p>
        </div>
        <div className="mt-5 p-2 bg-[#F6F6F6] rounded-xl px-3 text-lg">
          <h3>Personalized Dashboard</h3>
        </div>
        <div className="flex flex-col mt-4 text-primary gap-5">
          <p>Profile page</p>
          <p>Bill management &#8897;</p>
          <p>Tax Payer Service &#8897; </p>
          <p>Quicklinks &#8897;</p>
          <p>Complaints</p>
        </div>
      </div>
      <div className=" ml-36 -mt-7 text-primary flex flex-col gap-3">
        <h1 className="mt-20 text-3xl text-black font- semibold">
          Personalized Dashboard
        </h1>
        <div>
          <p>
            On successful login, users should be redirected to a personalized
            dashboard (landing page). <br />
            This page displays the following information at the center:
          </p>
        </div>
        <ul className="list-disc  pl-3">
          <li>No of Total Bills</li>
          <li>View Bills: redirects to the bill page</li>
          <li>Total Amount Paid</li>
          <li>View Payments: redirects to the Payment History page</li>
          <li>No of Unpaid Bills</li>
          <li>View Bills: redirects to the bills page</li>
          <li>Total Amount Unpaid</li>
          <li>Make Payments: redirects to the Online Payment page</li>
        </ul>
      </div>
    </div>
  );
};

export default Body;
