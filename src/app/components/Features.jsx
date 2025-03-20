import React from "react";
// import {
//   AcademicCapIcon,
//   BookOpenIcon,
//   CalendarIcon,
// } from "@heroicons/react/24/outline";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";
function Features() {
  return (
    <div className="bg-white py-20  absolute -bottom-52  shadow-xl border-2 border-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-start space-x-4">
          <GraduationCap className="w-12 h-12 text-navy-800" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Explore academics →</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit ame consectetur adipisci.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <BookOpen className="w-12 h-12 text-navy-800" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Browse resources →</h3>
            <p className="text-gray-600">
              Mi eget mauris pharetra et ultrices eu tincidunt.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Calendar className="w-12 h-12 text-navy-800" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Explore events →</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit ame consectetur adipisci.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
