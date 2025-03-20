import React from "react";

function Hero() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/10 bg-opacity-50"></div>
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-6xl font-light mb-6">
            Welcome to the next-gen education
          </h1>
          <p className="text-xl mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>
          <div className="flex space-x-4">
            <button className="bg-rose-600 px-8 py-3 rounded hover:bg-rose-700 transition">
              ENROLL NOW
            </button>
            <button className="border-2 border-white px-8 py-3 rounded hover:bg-white hover:text-black transition">
              VIEW ACADEMICS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
