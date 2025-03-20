"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start w-full mx-auto">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4">
                About Classroom X
              </h1>
            </div>
            <div>
              <p className="text-lg text-gray-600 max-w-xl">
                Lectus nulla et volutpat diam ut venenatis tellus in potenti
                nullam ac tortor vitae feugiat in fermentum posuere.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-0 w-24 h-full bg-primary" />
            <div className="ml-0 md:ml-24">
              <Image
                src="/images/2.jpg"
                alt="Classroom X Building"
                width={1200}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-5xl font-bold text-gray-900">+100K</h2>
              <p className="text-primary uppercase font-medium mt-2 mb-4">
                Students Graduated
              </p>
              <p className="text-gray-600 text-sm">
                Sit amet massa vitae tortor condi lacinia quis enim praesent.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <h2 className="text-5xl font-bold text-gray-900">40+</h2>
              <p className="text-primary uppercase font-medium mt-2 mb-4">
                Years of Experience
              </p>
              <p className="text-gray-600 text-sm">
                Sit amet massa vitae tortor condi lacinia quis enim praesent.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <h2 className="text-5xl font-bold text-gray-900">12</h2>
              <p className="text-primary uppercase font-medium mt-2 mb-4">
                Campus
              </p>
              <p className="text-gray-600 text-sm">
                Sit amet massa vitae tortor condi lacinia quis enim praesent.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <h2 className="text-5xl font-bold text-gray-900">99%</h2>
              <p className="text-primary uppercase font-medium mt-2 mb-4">
                Student Satisfaction
              </p>
              <p className="text-gray-600 text-sm">
                Sit amet massa vitae tortor condi lacinia quis enim praesent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
