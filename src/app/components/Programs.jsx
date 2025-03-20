import React from "react";

function Programs() {
  return (
    <div className="py-20  bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-rose-600 font-medium">ACADEMICS</span>
          <h2 className="text-4xl font-light mt-2">
            We have the best-in-class programs for you
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Undergraduate"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Undergraduate</h3>
              <p className="text-gray-600 mb-6">
                Cursus elit feugiat aliquet mauris justo urna nislolm id lorem
                ac proin lectus lacus nec facilisi lectus faucibu.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-3xl font-bold text-rose-600">96+</div>
                  <div className="text-sm text-gray-600">COURSES</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-rose-600">24+</div>
                  <div className="text-sm text-gray-600">PROGRAMS</div>
                </div>
                <button className="text-rose-600 hover:text-rose-700">→</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Graduate & Professional"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">
                Graduate & Professional
              </h3>
              <p className="text-gray-600 mb-6">
                Cursus elit feugiat aliquet mauris justo urna nislolm id lorem
                ac proin lectus lacus nec facilisi lectus faucibu.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-3xl font-bold text-rose-600">64+</div>
                  <div className="text-sm text-gray-600">COURSES</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-rose-600">16+</div>
                  <div className="text-sm text-gray-600">PROGRAMS</div>
                </div>
                <button className="text-rose-600 hover:text-rose-700">→</button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-gray-800 px-8 py-3 rounded hover:bg-gray-800 hover:text-white transition">
            BROWSE ALL PROGRAMS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Programs;
