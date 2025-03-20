import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function LeadershipSection() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-screen  mb-40">
          <div className="relative w-full h-full">
            <div className="absolute top-1/4 right-36 w-1/2 h-[500px] bg-blue-900 z-0" />
            <div className="absolute z-10 h-[500px] w-[400px] left-10">
              <Image
                src="/images/a1.jpg"
                alt="Students in library"
                width={500}
                height={500}
                className="col-span-2 w-full h-full object-cover"
              />
            </div>
            <div className=" absolute right-0 bottom-0 z-10 h-[500px] w-[400px]">
              <Image
                src="/images/a1.jpg"
                alt="Students in library"
                width={500}
                height={500}
                className="col-span-2 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="w-16 h-1 bg-red-600 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              We are preparing the leaders of tomorrow
            </h2>
            <p className="text-gray-600 mb-8">
              Nam libero justo laoreet sit amet cursus sit amet quis commodo
              odio aenean sed adipiscing diam eu sem integer vitae justo eget mi
              in nulla posuere sollicitudin aliquam ultricies sagittis orci
              nulla facilisi cras fermentum odio eu feugiat pretium nibh sit
              amet commodo nulla facilisi nullam vehicula ipsum.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white w-fit">
              ENROLL NOW
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
          <div className="flex flex-col">
            <div className="w-16 h-1 bg-red-600 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Our vision and mission
            </h2>
            <p className="text-gray-600 mb-8">
              Nam libero justo laoreet sit amet cursus sit amet quis commodo
              odio aenean sed adipiscing diam eu sem integer vitae justo eget mi
              in nulla posuere sollicitudin aliquam ultricies sagittis orci
              nulla facilisi cras fermentum odio eu feugiat pretium nibh sit
              amet commodo nulla facilisi nullam vehicula ipsum.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white w-fit">
              ENROLL NOW
            </Button>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white p-8 shadow-lg z-20">
              <div className="w-16 h-1 bg-red-600 mb-4" />
              <p className="text-gray-900 italic mb-4">
                "Lorem ipsum dolor sit ametol consectetur adipiscing elitolmen
                commodo egestas mi."
              </p>
              <p className="text-gray-900 font-bold">JOHN CARTER</p>
              <p className="text-gray-600 text-sm">PRESIDENT OF CLASSROOM</p>
            </div>
            <Image
              src="/images/a2.jpg"
              alt="John Carter"
              width={600}
              height={800}
              className="object-cover relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
