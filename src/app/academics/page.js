"use client";

import React from "react";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <>
      <section className="w-full py-16 md:py-36 bg-[#1B2B4A] text-white text-center">
        <div className="container px-4 md:px-6  ">
          <div className="flex flex-col justify-center items-center">
            <div className="mb-8 md:mb-0">
              <div className="w-40 h-1 bg-white mb-6 mx-auto" />
              <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-4">
                Academics
              </h2>
              <p className="text-white/80 max-w-xl">
                Felis est ante dignissim orci quam nisi justo nibh lorem
                venenatis ipsum pulvinar nunc eu lectus amet aliquet leo lacinia
                ipsum enim nulla massa pellentesque.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 md:px-8">
        {/* <h1 className="mb-8 text-3xl font-bold text-primary">
        Academic Programs
      </h1> */}

        <div className="flex flex-col gap-8 md:flex-row">
          {/* Left sidebar navigation */}
          <StickyNav />

          {/* Main content */}
          <div className="flex-1">
            <section id="academics" className="mb-16">
              <div className="mb-4 h-1 w-24 bg-primary/60"></div>
              <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                Learn about our academics
              </h2>
              <p className="mb-4 text-gray-600">
                At risus viverra adipiscing at in tellus integer feugiat nisl
                pretium fusce id velit ut tortor sagittis orci a scelerisque
                purus semper eget at lectus urna duis convallis porta nibh
                venenatis cras sed felis eget neque laoreet suspendisse interdum
                consectetur libero id faucibus nisl donec pretium vulputate
                sapien nec sagittis aliquam nunc lobortis mattis aliquam
                faucibus purus in.
              </p>
              <p className="mb-8 text-gray-600">
                Orci mattis sit nunc sollicitudin enim vel eu felis malesuada
                tortor aliquet amet donec vulputate ullamcorper sapien bibendum
                adipiscing nisl gravida massa senectus sit mauris massa
                tincidunt placerat volutpat nec orci suscipit nulla ac pharetra
                diam vitae ac elementum vestibulum massa vehicula et quis lorem
                massa morbi mauris.
              </p>

              <div className="grid gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center">
                  <h3 className="text-3xl font-bold text-primary">1,600</h3>
                  <p className="text-sm uppercase tracking-wider text-gray-500">
                    COURSES
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-3xl font-bold text-primary">2,800</h3>
                  <p className="text-sm uppercase tracking-wider text-gray-500">
                    FACULTY MEMBERS
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-3xl font-bold text-primary">8:1</h3>
                  <p className="text-sm uppercase tracking-wider text-gray-500">
                    FACULTY MEMBERS
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center">
                  <h3 className="text-3xl font-bold text-primary">106k+</h3>
                  <p className="text-sm uppercase tracking-wider text-gray-500">
                    STUDENTS GRADUATED
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-3xl font-bold text-primary">80+</h3>
                  <p className="text-sm uppercase tracking-wider text-gray-500">
                    UNDERGRADUATE PROGRAM
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-3xl font-bold text-primary">40+</h3>
                  <p className="text-sm uppercase tracking-wider text-gray-500">
                    GRADUATE PROGRAMS
                  </p>
                </div>
              </div>
            </section>

            <section id="undergraduate" className="mb-16">
              <div className="mb-4 h-1 w-24 bg-primary/60"></div>
              <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                Undergraduate Education
              </h2>
              <p className="mb-4 text-gray-600">
                Ipsum nibh dictum faucibus justo imperdiet interdum diam aliquet
                eget at eu sit lectus tortor malesuada auctor pharetra eu ut sit
                mauris neque tempus pellentesque tincidunt urna eu integer
                vulputate eu faucibus quis et integer lacus aliquam elit et
                ultrices proin commodo dictum odio tempus vitae tempus lacus
                aliquam effcitur.
              </p>

              <div className="mb-6 mt-8 overflow-hidden rounded-lg">
                <img
                  src="/images/1.jpg"
                  alt="Students studying in a library"
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="rounded bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90"
                >
                  APPLY NOW
                </a>
                <a
                  href="#"
                  className="rounded border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-50"
                >
                  LEARN MORE
                </a>
              </div>
            </section>

            <section id="graduate" className="mb-16">
              <div className="mb-4 h-1 w-24 bg-primary/60"></div>
              <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                Graduate & Professional Education
              </h2>
              <p className="mb-4 text-gray-600">
                Ipsum nibh dictum faucibus justo imperdiet interdum diam aliquet
                eget at eu sit lectus tortor malesuada auctor pharetra eu ut sit
                mauris neque tempus pellentesque tincidunt urna eu integer
                vulputate eu faucibus quis et integer lacus aliquam elit et
                ultrices proin commodo dictum odio tempus vitae tempus lacus
                aliquam effcitur.
              </p>

              <div className="mb-6 mt-8 overflow-hidden rounded-lg">
                <img
                  src="/images/2.jpg"
                  alt="Graduate students collaborating"
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="rounded bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90"
                >
                  APPLY NOW
                </a>
                <a
                  href="#"
                  className="rounded border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-50"
                >
                  LEARN MORE
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

function StickyNav() {
  const [activeSection, setActiveSection] = useState("academics");
  const navRef = useRef(null);

  // Track scroll position to determine active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Get all sections and their positions
      const sections = ["academics", "undergraduate", "graduate"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;

        // Check if we're in this section
        if (
          scrollPosition >= sectionTop - 100 &&
          scrollPosition < sectionBottom - 100
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative md:w-64">
      <div
        ref={navRef}
        className="sticky top-32 flex flex-col space-y-1 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
      >
        <h3 className="mb-3 border-b border-gray-200 pb-2 text-sm font-semibold uppercase tracking-wider text-primary">
          Academic Programs
        </h3>

        <NavLink href="#academics" isActive={activeSection === "academics"}>
          Overview
        </NavLink>

        <NavLink
          href="#undergraduate"
          isActive={activeSection === "undergraduate"}
        >
          Undergraduate
        </NavLink>

        <NavLink href="#graduate" isActive={activeSection === "graduate"}>
          Graduate & Professional
        </NavLink>
      </div>
    </div>
  );
}

function NavLink({ href, children, isActive }) {
  return (
    <Link
      href={href}
      className={cn(
        "block rounded-md px-3 py-2 text-sm transition-colors",
        isActive
          ? "bg-primary/10 font-medium text-primary"
          : "text-gray-600 hover:bg-gray-100"
      )}
    >
      {children}
    </Link>
  );
}
