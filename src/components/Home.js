import React from "react";

function Home() {
  return (
    <div>
      <div
        className="bg-[#bef9ff] h-[350px] w-[1520px] ml-2 mt-7 rounded-t-3xl
       rounded-br-[60px]"
      >
        <div>
          <h1 className="text-5xl py-10 ml-10 font-poppins font-[600]">
            Own Your Data
          </h1>
          <p className="ml-10 text-3xl font-poppins font-[500]">
            See your entire health history <br />
            at a glance. Contribute to
            <br /> medical research <br />
            —anonymously and securely.
          </p>

          <button className="bg-[#40C3FD] ml-28 py-2 px-5 mt-5 rounded-tl-2xl rounded-br-3xl font-poppins font-[500]">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
