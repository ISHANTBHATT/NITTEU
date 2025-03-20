import React from "react";

function Mission() {
  return (
    <div className="py-20 pt-40">
      <div className="max-w-7xl mx-auto px-4 flex gap-8">
        {/* <div className="md:col-span-6">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Student studying"
            className="w-full h-96 object-cover rounded-lg"
          />
        </div> */}
        <div className="grid grid-cols-4 grid-rows-6 gap-4">
          <div className="col-span-2 row-span-6">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Student studying"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-2 row-span-3 col-start-3">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Students collaborating"
              className="w-72 h-80 object-cover rounded-lg"
            />
          </div>
          <div className="col-span-2 row-span-3 col-start-3 row-start-4">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Campus life"
              className="w-72 h-80 object-cover rounded-lg"
            />
          </div>
        </div>
        <div className=" flex flex-col justify-center">
          {/* <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
            alt="Students collaborating"
            className="w-full h-44 object-cover rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Campus life"
            className="w-full h-44 object-cover rounded-lg"
          /> */}
          <div className="col-span-2">
            <div className="border-l-4 border-rose-600 pl-6">
              <h2 className="text-4xl font-light mb-6">
                Our mission is to prepare you for the future
              </h2>
              <p className="text-gray-600 mb-6">
                "Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                pulvinar dui non imperdiet tortor dui id nisl quisque laoreet
                tincidunt neque aliquet porttitor vitae sed in donec dictum nisi
                odio purus leo sed ut luctus non."
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="John Carter"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">JOHN CARTER</div>
                  <div className="text-gray-600 text-sm">
                    PRESIDENT OF CLASSROOM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
