import Image from "next/image";

export default function StaffSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <div className="w-16 h-1 bg-red-600 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Meet our talented staff
            </h2>
          </div>
          <p className="text-gray-600 max-w-md mt-4 md:mt-0">
            Suspendisse faucibus interdum posuere lorem euismod nisi porta lorem
            mollis aliquam sem fringilla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <Image
              src="/images/s1.jpg"
              alt="John Carter"
              width={400}
              height={500}
              className="w-full h-full object-cover mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              John Carter <div className="w-12 h-1 bg-red-600 ml-4" />
            </h3>
            <p className="text-gray-600 uppercase text-sm">
              President of Classroom
            </p>
          </div>

          <div className="flex flex-col">
            <Image
              src="/images/s2.jpg"
              alt="Sophie Moore"
              width={400}
              height={500}
              className="w-full h-full object-cover mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              Sophie Moore <div className="w-12 h-1 bg-red-600 ml-4" />
            </h3>
            <p className="text-gray-600 uppercase text-sm">
              Provost of Classroom
            </p>
          </div>

          <div className="flex flex-col">
            <Image
              src="/images/p1.jpg"
              alt="Lily Woods"
              width={400}
              height={500}
              className="w-full h-full object-cover mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              Lily Woods <div className="w-12 h-1 bg-red-600 ml-4" />
            </h3>
            <p className="text-gray-600 uppercase text-sm">Dean of Classroom</p>
          </div>
        </div>
      </div>
    </section>
  );
}
