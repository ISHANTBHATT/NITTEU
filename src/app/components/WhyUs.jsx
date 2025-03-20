import React from "react";

function WhyUs() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Students studying"
          className="rounded-lg"
        />
        <div>
          <span className="text-rose-600 font-medium">WHY US</span>
          <h2 className="text-4xl font-light mt-2 mb-6">
            We help every student to stand out from the rest
          </h2>
          <p className="text-gray-600 mb-8">
            Suspendisse faucibus interdum posuere lorem euismod nisi porta lorem
            mollis aliquam sem fringilla ut morbi tincidunt augue platea
            dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras.
          </p>
          <button className="border-2 border-gray-800 px-8 py-3 rounded hover:bg-gray-800 hover:text-white transition">
            OUR APPROACH
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
