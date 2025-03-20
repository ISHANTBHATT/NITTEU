import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Users,
  Trophy,
  Menu,
  Search,
} from "lucide-react";

function Page2() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-[#8B0000] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop"
              alt="University Logo"
              className="h-10 w-10 rounded"
            />
            <div className="text-sm">
              <div className="font-bold">Andorra la Vella</div>
              <div>University</div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-yellow-300">
              Home
            </a>
            <a href="#" className="hover:text-yellow-300">
              Admissions
            </a>
            <a href="#" className="hover:text-yellow-300">
              Examination
            </a>
            <a href="#" className="hover:text-yellow-300">
              Students
            </a>
            <a href="#" className="hover:text-yellow-300">
              Academics
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-3 pr-10 py-1 rounded-full text-black text-sm focus:outline-none"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <Menu className="md:hidden h-6 w-6" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1600&h=900&fit=crop"
          alt="University Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">
                The Best Place to Chase Your Dreams
              </h1>
              <p className="text-lg mb-8">
                Andorra la Vella University is one of three state universities
                in the city of Andorra. The campus is located in the Andorra la
                Vella sub-district. It's a conservation university. So there are
                many green trees that adorn the lecture buildings.
              </p>
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
                Explore
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="absolute bottom-8 right-8 flex space-x-4">
          <div className="bg-white/90 backdrop-blur p-6 rounded-lg w-48">
            <div className="flex items-center space-x-2 mb-2">
              <GraduationCap className="text-yellow-400" />
              <span className="text-sm text-gray-600">Graduation</span>
            </div>
            <div className="text-3xl font-bold">405,240</div>
          </div>
          <div className="bg-white/90 backdrop-blur p-6 rounded-lg w-48">
            <div className="flex items-center space-x-2 mb-2">
              <Users className="text-yellow-400" />
              <span className="text-sm text-gray-600">Company Relation</span>
            </div>
            <div className="text-3xl font-bold">7,400</div>
          </div>
          <div className="bg-white/90 backdrop-blur p-6 rounded-lg w-48">
            <div className="flex items-center space-x-2 mb-2">
              <Trophy className="text-yellow-400" />
              <span className="text-sm text-gray-600">Achievement</span>
            </div>
            <div className="text-3xl font-bold">29,085</div>
          </div>
        </div>
      </div>

      {/* Library Section */}
      <div className="bg-[#8B0000] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1600&h=600&fit=crop"
              alt="Library"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
              <div className="text-center max-w-3xl px-6">
                <h2 className="text-4xl font-bold mb-6">
                  The Library is The Only Destination for Students During The
                  Pandemic
                </h2>
                <p className="text-lg">
                  During the pandemic, the teaching and learning process was
                  carried out online, all buildings on campus were closed; only
                  one building remained open, namely the library building.
                </p>
              </div>
            </div>
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 p-2 rounded-full">
              <ChevronLeft className="h-6 w-6 text-black" />
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 p-2 rounded-full">
              <ChevronRight className="h-6 w-6 text-black" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#8B0000] text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-300">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-300">
                    Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-300">
                    Vision
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Academics</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-300">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-300">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-300">
                    Library
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Av. de Roma Centre, 42, AD500</li>
                <li>Phone: +376 875 699</li>
                <li>Email: info@andorrauniv.ad</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-yellow-300">
                  Facebook
                </a>
                <a href="#" className="hover:text-yellow-300">
                  Twitter
                </a>
                <a href="#" className="hover:text-yellow-300">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p>&copy; 2025 Andorra la Vella University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Page2;
