import React from "react";

function About() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-rose-600 font-medium">ABOUT US</span>
          <h2 className="text-4xl font-light mt-2 mb-6">
            We have over 40 years of educational experience
          </h2>
          <p className="text-gray-600 mb-8">
            Sit amet massa vitae tortor condimentum lacinia quis enim praesent
            elementum facilisis leo vel fringilla orci ac auctor augue mauris
            yempus imperdiet nulla malesuada pellentesque elit eget gravida
            consectur.
          </p>
          <button className="border-2 border-gray-800 px-8 py-3 rounded hover:bg-gray-800 hover:text-white transition">
            READ OUR STORY
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          alt="Students in classroom"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default About;
