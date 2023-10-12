import React from "react";

const Form = () => {
  return (
    <>
      {/* <div className="border border-red-600 p-10 m-10"> */}
      <h1 className="mx-[100px]  text-[36px] font-[600]">
     Submit your application 
      </h1>
        <form action="" className="flex flex-col w-[50vh] m-[40px]">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border-2 border-red-500 p-1 mt-2"
          />{" "}
          <br />
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email id"
            className="border-2 border-red-500 p-1 mt-2"
          />{" "}
          <br />
          <label htmlFor="">Cover Letter</label>
          <input
            type="text"
            placeholder="Write Your Cover Letter"
            className="border-2 border-red-500 p-1 mt-2"
          />{" "}
          <br />
          <label htmlFor="">Upload Resume</label>
          <input
            type="file"
            className="border-2 border-red-500 p-1 mt-2"
          />{" "}
          <br />
          <button
            type="submit"
            className="text-white bg-red-500 p-2  mt-2 rounded w-[100px]"
          >
            Submit
          </button>
        </form>
      {/* </div> */}
    </>
  );
};

export default Form;
