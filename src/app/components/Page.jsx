// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   Facebook,
//   Twitter,
//   Youtube,
//   Linkedin,
//   Instagram,
//   ArrowRight,
//   Phone,
//   Mail,
//   ArrowLeft,
//   Play,
// } from "lucide-react";

// export default function Page() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Top Bar */}
//       <div className="bg-[#c13b50] text-white py-2 px-4 md:px-20 flex justify-between items-center text-sm">
//         <div className="flex items-center">
//           <a href="mailto:contact@classroom.com" className="flex items-center">
//             <span className="mr-1">✉</span> contact@classroom.com
//           </a>
//           <a href="tel:(414) 850 - 0417" className="ml-6 flex items-center">
//             <span className="mr-1">☎</span> (414) 850 - 0417
//           </a>
//         </div>
//         <div className="flex space-x-3">
//           <Link href="#" aria-label="Facebook">
//             <Facebook size={16} />
//           </Link>
//           <Link href="#" aria-label="Twitter">
//             <Twitter size={16} />
//           </Link>
//           <Link href="#" aria-label="Youtube">
//             <Youtube size={16} />
//           </Link>
//           <Link href="#" aria-label="LinkedIn">
//             <Linkedin size={16} />
//           </Link>
//           <Link href="#" aria-label="Instagram">
//             <Instagram size={16} />
//           </Link>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="bg-[#1a3a54] text-white py-4 px-4 md:px-20 flex justify-between items-center">
//         <div className="flex items-center space-x-8">
//           <Link href="/" className="text-white hover:text-gray-200">
//             Home
//           </Link>
//           <Link href="/about" className="text-white hover:text-gray-200">
//             About
//           </Link>
//           <Link href="/academics" className="text-white hover:text-gray-200">
//             Academics
//           </Link>
//         </div>
//         <div className="flex items-center">
//           <Link href="/" className="flex items-center">
//             <span className="text-xl font-bold">NITTEDU</span>
//           </Link>
//         </div>
//         <div className="flex items-center space-x-8">
//           <Link href="/enrollment" className="text-white hover:text-gray-200">
//             Enrollment
//           </Link>

//           <Link
//             href="/pages"
//             className="text-white hover:text-gray-200 flex items-center"
//           >
//             Contact
//           </Link>

//           {/* <Link href="/cart" className="text-white hover:text-gray-200">
//             Cart (0)
//           </Link> */}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="relative h-[600px] flex items-center justify-center text-white">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/images/1.jpg"
//             alt="University building with ivy"
//             fill
//             className="object-cover brightness-50"
//             priority
//           />
//         </div>
//         <div className="relative z-10 text-center max-w-4xl px-4">
//           <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
//           <h1 className="text-5xl md:text-7xl font-light mb-6">
//             Welcome to the next-gen education
//           </h1>
//           <p className="text-lg mb-10 max-w-2xl mx-auto">
//             Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit
//             phasellus mollis sit aliquam sit nullam neque ultrices.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <button className="bg-[#c13b50] hover:bg-[#a6334a] text-white py-3 px-8 transition-colors">
//               ENROLL NOW
//             </button>
//             <button className="border border-white hover:bg-white/10 text-white py-3 px-8 transition-colors">
//               VIEW ACADEMICS
//             </button>
//           </div>
//         </div>
//         {/* Features Section */}
//         <div className="bg-white py-16 px-4 absolute -bottom-40 shadow-2xl">
//           <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="flex items-start space-x-4 p-6">
//               <div className="bg-[#1a3a54] p-4 rounded-sm">
//                 <svg
//                   className="w-6 h-6 text-white"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M21 10L12 5L3 10L12 15L21 10Z"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M19 12V18C19 18.5304 18.7893 19.0391 18.4142 19.4142C18.0391 19.7893 17.5304 20 17 20H7C6.46957 20 5.96086 19.7893 5.58579 19.4142C5.21071 19.0391 5 18.5304 5 18V12"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-lg font-medium mb-2 text-black">
//                   Explore academics →
//                 </h3>
//                 <p className="text-gray-600">
//                   Lorem ipsum dolor sit ame consectetur adipisci.
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start space-x-4 p-6">
//               <div className="bg-[#1a3a54] p-4 rounded-sm">
//                 <svg
//                   className="w-6 h-6 text-white"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M7 7H17"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M7 12H17"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M7 17H13"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-lg font-medium mb-2 text-black">
//                   Browse resources →
//                 </h3>
//                 <p className="text-gray-600">
//                   Mi eget mauris pharetra et ultrices eu tincidunt.
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start space-x-4 p-6">
//               <div className="bg-[#1a3a54] p-4 rounded-sm">
//                 <svg
//                   className="w-6 h-6 text-white"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M16 2V6"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M8 2V6"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M3 10H21"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-lg font-medium mb-2 text-black">
//                   Explore events →
//                 </h3>
//                 <p className="text-gray-600">
//                   Lorem ipsum dolor sit ame consectetur adipisci.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mission Section */}
//       <div className="py-20 px-4 bg-gray-50 pt-52">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
//           <div className="md:col-span-6">
//             <div className="relative h-[600px]">
//               <Image
//                 src="/images/m1.jpg"
//                 alt="Student studying"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//           <div className="md:col-span-6 grid grid-cols-1 gap-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="relative h-[290px]">
//                 <Image
//                   src="/images/m2.jpg"
//                   alt="Student smiling"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="relative h-[290px]">
//                 <Image
//                   src="/images/m3.jpg"
//                   alt="Students studying together"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//             <div className="pt-8">
//               <div className="w-16 h-1 bg-[#c13b50] mb-8"></div>
//               <h3 className="text-4xl md:text-5xl font-light mb-6">
//                 Our mission is to prepare you for the future
//               </h3>
//               <p className="text-gray-600 mb-8">
//                 "Lorem ipsum dolor sit amet consectetur adipiscing elit sed
//                 pulvinar dui non imperdiet tortor dui id nisl quisque laoreet
//                 tincidunt neque aliquet porttitor vitae sed in donec dictum nisi
//                 odio purus leo sed ut luctus non."
//               </p>
//               <div className="flex items-center space-x-4">
//                 <div className="relative w-16 h-16 rounded-full overflow-hidden">
//                   <Image
//                     src="/images/p1.jpg"
//                     alt="John Carter"
//                     width={64}
//                     height={64}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-medium">JOHN CARTER</h4>
//                   <p className="text-gray-600">PRESIDENT OF CLASSROOM</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Why Us Section */}
//       <div className="">
//         <div className="grid grid-cols-1 md:grid-cols-2 ">
//           <div className="relative h-[800px] w-full">
//             <Image
//               src="/images/m1.jpg"
//               alt="Students studying together"
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="flex flex-col justify-center py-20 px-10">
//             <h2 className="text-[#c13b50] font-medium mb-4">WHY US</h2>
//             <h3 className="text-4xl md:text-5xl font-light mb-6">
//               We help every student to stand out from the rest
//             </h3>
//             <p className="text-gray-600 mb-8">
//               Suspendisse faucibus interdum posuere lorem euismod nisi porta
//               lorem mollis aliquam sem fringilla ut morbi tincidunt augue platea
//               dictumst vestibulum rhoncus est pellentesque elit ullamcorper
//               dignissim cras.
//             </p>
//             <div>
//               <button className="border border-gray-300 hover:bg-gray-50 py-3 px-8 transition-colors">
//                 OUR APPROACH
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* About Us Section */}
//       <div className=" bg-gray-50">
//         <div className="grid grid-cols-1 md:grid-cols-2 ">
//           <div className="flex flex-col justify-center py-20 px-10">
//             <h2 className="text-[#c13b50] font-medium mb-4">ABOUT US</h2>
//             <h3 className="text-4xl md:text-5xl font-light mb-6">
//               We have over 40 years of educational experience
//             </h3>
//             <p className="text-gray-600 mb-8">
//               Sit amet massa vitae tortor condimentum lacinia quis enim praesent
//               elementum facilisis leo vel fringilla orci ac auctor augue mauris
//               yempus imperdiet nulla malesuada pellentesque elit eget gravida
//               consectur.
//             </p>
//             <div>
//               <button className="border border-gray-300 hover:bg-gray-50 py-3 px-8 transition-colors">
//                 READ OUR STORY
//               </button>
//             </div>
//           </div>
//           <div className="relative h-[800px] w-full">
//             <Image
//               src="/images/m2.jpg"
//               alt="Students studying together"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Academics Section */}
//       <div className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-[#c13b50] font-medium mb-4">ACADEMICS</h2>
//             <h3 className="text-4xl md:text-5xl font-light">
//               We have the best-in-class
//               <br />
//               programs for you
//             </h3>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Undergraduate Card */}
//             <div className="border border-gray-200">
//               <div className="relative h-64">
//                 <Image
//                   src="/images/m2.jpg"
//                   alt="Undergraduate student"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-8">
//                 <h4 className="text-2xl font-medium mb-4">Undergraduate</h4>
//                 <p className="text-gray-600 mb-8">
//                   Cursus elit feugiat aliquet mauris justo urna nislolm id lorem
//                   ac proin lectus lacus nec facilisi lectus faucibu.
//                 </p>
//                 <div className="flex justify-between items-center border-t pt-6">
//                   <div>
//                     <span className="text-3xl text-[#c13b50] font-medium">
//                       96+
//                     </span>
//                     <p className="text-sm text-gray-600">COURSES</p>
//                   </div>
//                   <div>
//                     <span className="text-3xl text-[#c13b50] font-medium">
//                       24+
//                     </span>
//                     <p className="text-sm text-gray-600">PROGRAMS</p>
//                   </div>
//                   <button className="bg-[#c13b50] p-3 text-white">
//                     <ArrowRight size={24} />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Graduate Card */}
//             <div className="border border-gray-200">
//               <div className="relative h-64">
//                 <Image
//                   src="/images/m2.jpg"
//                   alt="Graduate students"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-8">
//                 <h4 className="text-2xl font-medium mb-4">
//                   Graduate & Professional
//                 </h4>
//                 <p className="text-gray-600 mb-8">
//                   Cursus elit feugiat aliquet mauris justo urna nislolm id lorem
//                   ac proin lectus lacus nec facilisi lectus faucibu.
//                 </p>
//                 <div className="flex justify-between items-center border-t pt-6">
//                   <div>
//                     <span className="text-3xl text-[#c13b50] font-medium">
//                       64+
//                     </span>
//                     <p className="text-sm text-gray-600">COURSES</p>
//                   </div>
//                   <div>
//                     <span className="text-3xl text-[#c13b50] font-medium">
//                       16+
//                     </span>
//                     <p className="text-sm text-gray-600">PROGRAMS</p>
//                   </div>
//                   <button className="bg-[#c13b50] p-3 text-white">
//                     <ArrowRight size={24} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="text-center mt-12">
//             <button className="border border-gray-300 hover:bg-gray-50 py-3 px-8 transition-colors">
//               BROWSE ALL PROGRAMS
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Video Section */}
//       <section className="relative h-[600px]">
//         <img
//           src="https://images.unsplash.com/photo-1562774053-701939374585"
//           alt=""
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center">
//           <h2 className="text-4xl mb-4">
//             Watch what's a day in Classroom like
//           </h2>
//           <p className="max-w-2xl mb-8">
//             Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
//             phasellus mollis sit aliquam sit nullam neque ultrices.
//           </p>
//           <button className="bg-[#C1344E] text-white px-8 py-3 hover:bg-[#a12941] transition flex items-center gap-2">
//             <Play className="w-5 h-5" />
//             WATCH VIDEO
//           </button>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 px-8 lg:px-20">
//         <h2 className="text-4xl text-center mb-12">What makes us different</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {[
//             {
//               image:
//                 "https://images.unsplash.com/photo-1544717305-2782549b5136",
//               title: "World-Class Teachers",
//               description:
//                 "Lorem ipsum dolor sit amet consectetur coolor sit adipiscin elit sed pulvinar dui non imper.",
//             },
//             {
//               image:
//                 "https://images.unsplash.com/photo-1568667256549-094345857637",
//               title: "Well-Equipped Facilities",
//               description:
//                 "Lorem ipsum dolor sit amet consectetur coolor sit adipiscin elit sed pulvinar dui non imper.",
//             },
//             {
//               image:
//                 "https://images.unsplash.com/photo-1623461487986-9400110de28e",
//               title: "Excellent Academics",
//               description:
//                 "Lorem ipsum dolor sit amet consectetur coolor sit adipiscin elit sed pulvinar dui non imper.",
//             },
//             {
//               image:
//                 "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
//               title: "Clubs & Activities",
//               description:
//                 "Lorem ipsum dolor sit amet consectetur coolor sit adipiscin elit sed pulvinar dui non imper.",
//             },
//           ].map((feature, index) => (
//             <div key={index} className="relative group">
//               <img
//                 src={feature.image}
//                 alt=""
//                 className="w-full h-64 object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end text-white">
//                 <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
//                 <p className="text-sm text-gray-200">{feature.description}</p>
//                 <div className="w-12 h-1 bg-[#C1344E] mt-4"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-12">
//           <button className="bg-[#C1344E] text-white px-8 py-3 hover:bg-[#a12941] transition">
//             ENROLL NOW
//           </button>
//         </div>
//       </section>

//       {/* Alumni Section */}
//       <section className="py-16 px-8 lg:px-20 bg-gray-50">
//         <div className="text-center mb-12">
//           <h6 className="text-[#C1344E] mb-4">ALUMNI SPOTLIGHT</h6>
//           <h2 className="text-4xl mb-4">What our students say</h2>
//           <p className="text-gray-600 max-w-3xl mx-auto">
//             Sit amet massa vitae tortor condimentum lacinia quis enim praesent
//             elementum facilisis leo vel fringilla orci ac auctor augue mauris
//             vempus imperdiet.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
//           <div className="bg-white p-8 rounded-lg">
//             <div className="flex items-center gap-4 mb-6">
//               <div>
//                 <div className="relative w-16 h-16 rounded-full overflow-hidden">
//                   <Image
//                     src="/images/p1.jpg"
//                     alt="John Carter"
//                     width={64}
//                     height={64}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//               </div>
//               {/* <img
//                 src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
//                 alt=""
//                 className="w-16 h-16 rounded-full object-cover"
//               /> */}
//               <div>
//                 <p className="text-gray-600 mb-4">
//                   "Duis purus, fames dictum amet ut sem neque vitae mattis
//                   penatibus dolor accumsan id aliquet volutpat fermentum diam
//                   ullamcorper lorem urna fermentum bibendum pharetra."
//                 </p>
//                 <div>
//                   <strong className="block">ANDY SMITH</strong>
//                   <span className="text-[#C1344E]">SAN FRANCISCO CAMPUS</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-8 rounded-lg">
//             <div className="flex items-center gap-4 mb-6">
//               <div>
//                 <div className="relative w-16 h-16 rounded-full overflow-hidden">
//                   <Image
//                     src="/images/p1.jpg"
//                     alt="John Carter"
//                     width={64}
//                     height={64}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//               </div>
//               {/* <img
//                 src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
//                 alt=""
//                 className="w-16 h-16 rounded-full object-cover"
//               /> */}
//               <div>
//                 <p className="text-gray-600 mb-4">
//                   "Sollicitudin morbi bibendum sed maecenas morbi et neque a
//                   nisl urnaolm fermentum facilisis a nunc in urna vitaedo
//                   bibendum dolorsi dignissim euismod integer risus mauris ac"
//                 </p>
//                 <div>
//                   <strong className="block">SOPHIE MOORE</strong>
//                   <span className="text-[#C1344E]">NEW YORK CAMPUS</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
//           {[
//             {
//               number: "+100K",
//               title: "STUDENTS GRADUATED",
//               description:
//                 "Sit amet massa vitae tortor condi lacinia quis enim praesent.",
//             },
//             {
//               number: "40+",
//               title: "YEARS OF EXPERIENCE",
//               description:
//                 "Sit amet massa vitae tortor condi lacinia quis enim praesent.",
//             },
//             {
//               number: "12",
//               title: "CAMPUS",
//               description:
//                 "Sit amet massa vitae tortor condi lacinia quis enim praesent.",
//             },
//             {
//               number: "99%",
//               title: "STUDENT SATISFACTION",
//               description:
//                 "Sit amet massa vitae tortor condi lacinia quis enim praesent.",
//             },
//           ].map((stat, index) => (
//             <div key={index}>
//               <h3 className="text-5xl text-[#C1344E] font-light mb-4">
//                 {stat.number}
//               </h3>
//               <h4 className="font-medium mb-2">{stat.title}</h4>
//               <p className="text-gray-600 text-sm">{stat.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* News & Events Section */}
//       <section className="py-16 px-8 lg:px-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           <div>
//             <div className="flex items-center justify-between mb-8">
//               <h2 className="text-3xl">Articles & News</h2>
//               <ArrowRight className="w-6 h-6 text-[#C1344E]" />
//             </div>
//             <div className="space-y-8">
//               {[
//                 {
//                   image:
//                     "https://images.unsplash.com/photo-1455849318743-b2233052fcff",
//                   category: "ARTICLES",
//                   date: "MAR 9, 2023",
//                   title: "How to make your college application stand out",
//                 },
//                 {
//                   image:
//                     "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
//                   category: "EDUCATION",
//                   date: "MAR 9, 2023",
//                   title:
//                     "Basic steps to get involved in research as undergraduate",
//                 },
//                 {
//                   image:
//                     "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
//                   category: "ARTICLES",
//                   date: "MAR 9, 2023",
//                   title: "How to choose the right undergraduate course for you",
//                 },
//               ].map((article, index) => (
//                 <div key={index} className="flex gap-6">
//                   <img
//                     src={article.image}
//                     alt=""
//                     className="w-32 h-32 object-cover"
//                   />
//                   <div>
//                     <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
//                       <span>{article.category}</span>
//                       <span>/</span>
//                       <span>{article.date}</span>
//                     </div>
//                     <h3 className="text-xl font-medium">{article.title}</h3>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <div className="flex items-center justify-between mb-8">
//               <h2 className="text-3xl">Coming Events</h2>
//               <ArrowRight className="w-6 h-6 text-[#C1344E]" />
//             </div>
//             <div className="space-y-8">
//               {[
//                 {
//                   image:
//                     "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5",
//                   date: "NOV 24, 2022",
//                   time: "4:00 PM",
//                   title: "Football Practice Match",
//                   description:
//                     "Mi libero massa nibh tellus elementumolm scelerisque viverra hendrerit molestie.",
//                 },
//                 {
//                   image:
//                     "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
//                   date: "DEC 12, 2022",
//                   time: "12:00 PM",
//                   title: "Business Master Class",
//                   description:
//                     "Mi libero massa nibh tellus elementumolm scelerisque viverra hendrerit molestie.",
//                 },
//                 {
//                   image:
//                     "https://images.unsplash.com/photo-1546519638-68e109498ffc",
//                   date: "JAN 8, 2023",
//                   time: "8:00 PM",
//                   title: "National Basketball Match",
//                   description:
//                     "Mi libero massa nibh tellus elementumolm scelerisque viverra hendrerit molestie.",
//                 },
//               ].map((event, index) => (
//                 <div key={index} className="flex gap-6">
//                   <img
//                     src={event.image}
//                     alt=""
//                     className="w-32 h-32 object-cover"
//                   />
//                   <div>
//                     <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
//                       <span>{event.date}</span>
//                       <span>/</span>
//                       <span>{event.time}</span>
//                     </div>
//                     <h3 className="text-xl font-medium mb-2">{event.title}</h3>
//                     <p className="text-gray-600 text-sm">{event.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="grid grid-cols-1 lg:grid-cols-2">
//         <div className="bg-[#1e2a47] text-white p-12 lg:p-20">
//           <h6 className="text-sm tracking-wider mb-4">REQUEST A TOUR</h6>
//           <h2 className="text-4xl font-light mb-4">Visit our campus today</h2>
//           <p className="text-gray-300 mb-8">
//             Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit
//             phasellus mollis sit aliquam sit nullam neque ultrices.
//           </p>

//           <div className="space-y-4 mb-8">
//             <div className="flex items-center gap-3">
//               <Phone className="w-5 h-5" />
//               <span>(647) 514 - 5698</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <Mail className="w-5 h-5" />
//               <span>tours@classroom.com</span>
//             </div>
//           </div>

//           <button className="border border-white px-6 py-2 hover:bg-white hover:text-[#1e2a47] transition">
//             BROWSE PROGRAMS
//           </button>
//         </div>

//         <div className="bg-white p-8">
//           <form className="max-w-md mx-auto space-y-6">
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   FULL NAME
//                 </label>
//                 <input
//                   type="text"
//                   className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   EMAIL
//                 </label>
//                 <input
//                   type="email"
//                   className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   PHONE NUMBER
//                 </label>
//                 <input
//                   type="tel"
//                   className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   NUMBER OF ATTENDEES
//                 </label>
//                 <input
//                   type="number"
//                   className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   CAMPUS OF INTEREST
//                 </label>
//                 <select className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm">
//                   <option>Los Angeles</option>
//                   <option>New York</option>
//                   <option>San Francisco</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   LEVEL OF STUDY
//                 </label>
//                 <select className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm">
//                   <option>Undergraduate</option>
//                   <option>Graduate</option>
//                   <option>PhD</option>
//                 </select>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   DAY OF VISIT
//                 </label>
//                 <input
//                   type="date"
//                   className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   TIME OF VISIT
//                 </label>
//                 <select className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm">
//                   <option>8:00 AM - 5:00 PM</option>
//                   <option>9:00 AM - 6:00 PM</option>
//                   <option>10:00 AM - 7:00 PM</option>
//                 </select>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 HAVE YOU ALREADY APPLIED?
//               </label>
//               <div className="mt-2 space-x-4">
//                 <label className="inline-flex items-center">
//                   <input
//                     type="radio"
//                     name="applied"
//                     value="yes"
//                     className="form-radio"
//                   />
//                   <span className="ml-2">Yes</span>
//                 </label>
//                 <label className="inline-flex items-center">
//                   <input
//                     type="radio"
//                     name="applied"
//                     value="no"
//                     className="form-radio"
//                   />
//                   <span className="ml-2">No</span>
//                 </label>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 LEAVE US A MESSAGE
//               </label>
//               <textarea
//                 rows={4}
//                 className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm"
//               ></textarea>
//             </div>

//             <button className="w-full bg-[#C1344E] text-white py-3 hover:bg-[#a12941] transition">
//               BOOK A TOUR
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* footer */}
//       <footer className="py-16 px-8 lg:px-20 border-t">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//           <div>
//             <h3 className="text-lg font-medium mb-6">PAGES</h3>
//             <ul className="space-y-3">
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-[#C1344E]">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-[#C1344E]">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-[#C1344E]">
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-[#C1344E]">
//                   Blog post
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-[#C1344E]">
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-[#C1344E]">
//                   Events
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-medium mb-6">FOLLOW PAGES</h3>
//             <ul className="space-x-3 flex">
//               <Link
//                 href="#"
//                 aria-label="Facebook"
//                 className="text-gray-600 hover:text-[#C1344E]"
//               >
//                 <Facebook size={30} />
//               </Link>
//               <Link
//                 href="#"
//                 aria-label="Twitter"
//                 className="text-gray-600 hover:text-[#C1344E]"
//               >
//                 <Twitter size={30} />
//               </Link>
//               <Link
//                 href="#"
//                 aria-label="LinkedIn"
//                 className="text-gray-600 hover:text-[#C1344E]"
//               >
//                 <Linkedin size={30} />
//               </Link>
//               <Link
//                 href="#"
//                 aria-label="Instagram"
//                 className="text-gray-600 hover:text-[#C1344E]"
//               >
//                 <Instagram size={30} />
//               </Link>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-medium mb-6">EVENTS</h3>
//             <div className="space-y-6">
//               <div className="flex gap-4">
//                 <img
//                   src="https://images.unsplash.com/photo-1455849318743-b2233052fcff"
//                   alt=""
//                   className="w-20 h-20 object-cover"
//                 />
//                 <div>
//                   <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
//                     <span>AUG 25, 2022</span>
//                     <span>/</span>
//                     <span>ARTICLES</span>
//                   </div>
//                   <h4 className="font-medium">
//                     How to make your college application stand out
//                   </h4>
//                 </div>
//               </div>
//               <div className="flex gap-4">
//                 <img
//                   src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
//                   alt=""
//                   className="w-20 h-20 object-cover"
//                 />
//                 <div>
//                   <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
//                     <span>AUG 24, 2022</span>
//                     <span>/</span>
//                     <span>EDUCATION</span>
//                   </div>
//                   <h4 className="font-medium">
//                     Basic steps to get involved in research as undergraduate
//                   </h4>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-medium mb-6">CONTACT</h3>
//             <div className="space-y-4">
//               <p className="flex items-center gap-2 text-gray-600">
//                 <Phone className="w-5 h-5 text-[#C1344E]" />
//                 (487) 514 - 3698
//               </p>
//               <p className="flex items-center gap-2 text-gray-600">
//                 <Mail className="w-5 h-5 text-[#C1344E]" />
//                 contact@classroom.com
//               </p>
//               <p className="flex items-center gap-2 text-gray-600">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5 text-[#C1344E]"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//                   <circle cx="12" cy="10" r="3"></circle>
//                 </svg>
//                 2819 Gordon Street, Los Angeles CA, 90017
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row items-center justify-between pt-8 border-t">
//           <div className="flex items-center gap-2 mb-4 lg:mb-0">
//             <div className="w-8 h-8 bg-[#C1344E] flex items-center justify-center text-white font-bold">
//               X
//             </div>
//             <span className="font-medium">Nitteu</span>
//           </div>
//           <div className="text-sm text-gray-600">
//             © Copyright - Nitteu | Designed by{" "}
//             <a href="#" className="text-[#C1344E]">
//               Apace Digital Cargo
//             </a>{" "}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

//testing
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Facebook,
//   Twitter,
//   Youtube,
//   Linkedin,
//   Instagram,
//   ArrowRight,
//   Phone,
//   Mail,
//   Play,
// } from "lucide-react";

// // Animation configurations
// const fadeIn = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   exit: { opacity: 0 },
// };

// const slideUp = {
//   initial: { y: 100, opacity: 0 },
//   animate: { y: 0, opacity: 1 },
//   transition: { duration: 0.6 },
// };

// const staggerChildren = {
//   animate: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const hoverScale = {
//   whileHover: { scale: 1.05 },
//   whileTap: { scale: 0.95 },
// };
// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Animated Top Bar */}
//       <motion.div
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-[#c13b50] text-white py-2 px-4 md:px-20 flex justify-between items-center text-sm"
//       >
//         <div className="flex items-center">
//           <a
//             href="mailto:contact@classroom.com"
//             className="flex items-center hover:text-gray-200 transition-colors"
//           >
//             <span className="mr-1">✉</span> contact@classroom.com
//           </a>
//           <a
//             href="tel:(414) 850 - 0417"
//             className="ml-6 flex items-center hover:text-gray-200 transition-colors"
//           >
//             <span className="mr-1">☎</span> (414) 850 - 0417
//           </a>
//         </div>
//         <div className="flex space-x-3">
//           {[Facebook, Twitter, Youtube, Linkedin, Instagram].map(
//             (Icon, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Link
//                   href="#"
//                   className="hover:text-[#1a3a54] transition-colors"
//                 >
//                   <Icon size={16} />
//                 </Link>
//               </motion.div>
//             )
//           )}
//         </div>
//       </motion.div>

//       {/* Navigation with Staggered Animation */}
//       <motion.nav
//         initial="initial"
//         animate="animate"
//         variants={staggerChildren}
//         className="bg-[#1a3a54] text-white py-4 px-4 md:px-20 flex justify-between items-center"
//       >
//         <div className="flex items-center space-x-8">
//           {["Home", "About", "Academics"].map((item, idx) => (
//             <motion.div key={idx} variants={fadeIn}>
//               <Link href="/" className="hover:text-gray-200 transition-colors">
//                 {item}
//               </Link>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div variants={fadeIn}>
//           <Link href="/" className="flex items-center">
//             <span className="text-xl font-bold">Classroom X</span>
//           </Link>
//         </motion.div>

//         <div className="flex items-center space-x-8">
//           {["Enrollment", "Pages", "Cart (0)"].map((item, idx) => (
//             <motion.div key={idx} variants={fadeIn}>
//               <Link href="/" className="hover:text-gray-200 transition-colors">
//                 {item}
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </motion.nav>

//       {/* Hero Section with Parallax Effect */}
//       <div className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
//         <motion.div
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.2 }}
//           className="absolute inset-0 z-0"
//         >
//           <Image
//             src="/images/1.jpg"
//             alt="University building"
//             fill
//             className="object-cover brightness-50"
//             priority
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="relative z-10 text-center max-w-4xl px-4"
//         >
//           <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: "80px" }}
//             className="h-1 bg-white mx-auto mb-8"
//           />
//           <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
//             Welcome to the next-gen education
//           </h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-lg mb-10 max-w-2xl mx-auto"
//           >
//             Transforming education through innovation and excellence
//           </motion.p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <motion.button
//               {...hoverScale}
//               className="bg-[#c13b50] hover:bg-[#a6334a] text-white py-3 px-8 transition-colors rounded-sm"
//             >
//               ENROLL NOW
//             </motion.button>
//             <motion.button
//               {...hoverScale}
//               className="border border-white hover:bg-white/10 py-3 px-8 transition-colors rounded-sm"
//             >
//               VIEW ACADEMICS
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Animated Features Section */}
//         <motion.div
//           initial={{ y: 100, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           className="bg-white py-16 px-4 absolute -bottom-40 shadow-2xl w-full max-w-6xl mx-auto"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {features.map((feature, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{ y: -10 }}
//                 className="flex items-start space-x-4 p-6 hover:shadow-lg transition-shadow"
//               >
//                 <div className="bg-[#1a3a54] p-4 rounded-sm flex-shrink-0">
//                   {feature.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
//                   <p className="text-gray-600">{feature.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       {/* Mission Section */}
//       <motion.section
//         initial="initial"
//         whileInView="animate"
//         variants={staggerChildren}
//         viewport={{ once: true }}
//         className="py-20 px-4 bg-gray-50 pt-52"
//       >
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
//           <motion.div variants={slideUp} className="md:col-span-6">
//             <div className="relative h-[600px] rounded-xl overflow-hidden shadow-xl">
//               <Image
//                 src="/images/m1.jpg"
//                 alt="Student studying"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </motion.div>

//           <motion.div
//             variants={slideUp}
//             className="md:col-span-6 grid grid-cols-1 gap-4"
//           >
//             <div className="grid grid-cols-2 gap-4">
//               <div className="relative h-[290px]">
//                 <Image
//                   src="/images/m2.jpg"
//                   alt="Student smiling"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="relative h-[290px]">
//                 <Image
//                   src="/images/m3.jpg"
//                   alt="Students studying together"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//             <div className="pt-8">
//               <div className="w-16 h-1 bg-[#c13b50] mb-8"></div>
//               <h3 className="text-4xl md:text-5xl font-light mb-6">
//                 Our mission is to prepare you for the future
//               </h3>
//               <p className="text-gray-600 mb-8">
//                 "Lorem ipsum dolor sit amet consectetur adipiscing elit sed
//                 pulvinar dui non imperdiet tortor dui id nisl quisque laoreet
//                 tincidunt neque aliquet porttitor vitae sed in donec dictum nisi
//                 odio purus leo sed ut luctus non."
//               </p>
//               <div className="flex items-center space-x-4">
//                 <div className="relative w-16 h-16 rounded-full overflow-hidden">
//                   <Image
//                     src="/images/p1.jpg"
//                     alt="John Carter"
//                     width={64}
//                     height={64}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-medium">JOHN CARTER</h4>
//                   <p className="text-gray-600">PRESIDENT OF CLASSROOM</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Why Us Section */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="grid grid-cols-1 md:grid-cols-2"
//       >
//         <div className="relative h-[800px] w-full">
//           <Image
//             src="/images/m1.jpg"
//             alt="Students studying together"
//             fill
//             className="object-cover"
//           />
//         </div>
//         <div className="flex flex-col justify-center py-20 px-10">
//           <h2 className="text-[#c13b50] font-medium mb-4">WHY US</h2>
//           <h3 className="text-4xl md:text-5xl font-light mb-6">
//             We help every student to stand out from the rest
//           </h3>
//           <p className="text-gray-600 mb-8">
//             Suspendisse faucibus interdum posuere lorem euismod nisi porta lorem
//             mollis aliquam sem fringilla ut morbi tincidunt augue platea
//             dictumst vestibulum rhoncus est pellentesque elit ullamcorper
//             dignissim cras.
//           </p>
//           <div>
//             <button className="border border-gray-300 hover:bg-gray-50 py-3 px-8 transition-colors">
//               OUR APPROACH
//             </button>
//           </div>
//         </div>
//       </motion.section>

//       {/* About Us Section */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//         className="bg-gray-50"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 ">
//           <div className="flex flex-col justify-center py-20 px-10">
//             <motion.h2
//               variants={fadeInUp}
//               className="text-[#c13b50] font-medium mb-4"
//             >
//               ABOUT US
//             </motion.h2>
//             <motion.h3
//               variants={fadeInUp}
//               className="text-4xl md:text-5xl font-light mb-6"
//             >
//               We have over 40 years of educational experience
//             </motion.h3>
//             <motion.p variants={fadeInUp} className="text-gray-600 mb-8">
//               Sit amet massa vitae tortor condimentum lacinia quis enim praesent
//               elementum facilisis leo vel fringilla orci ac auctor augue mauris
//               yempus imperdiet nulla malesuada pellentesque elit eget gravida
//               consectur.
//             </motion.p>
//             <motion.div variants={fadeInUp}>
//               <button className="border border-gray-300 hover:bg-gray-50 py-3 px-8 transition-colors">
//                 READ OUR STORY
//               </button>
//             </motion.div>
//           </div>
//           <div className="relative h-[800px] w-full">
//             <Image
//               src="/images/m2.jpg"
//               alt="Students studying together"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </motion.div>

//       {/* Academics Section */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//         className="py-20 px-4"
//       >
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <motion.h2
//               variants={fadeInUp}
//               className="text-[#c13b50] font-medium mb-4"
//             >
//               ACADEMICS
//             </motion.h2>
//             <motion.h3
//               variants={fadeInUp}
//               className="text-4xl md:text-5xl font-light"
//             >
//               We have the best-in-class
//               <br />
//               programs for you
//             </motion.h3>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Undergraduate Card */}
//             <motion.div variants={fadeInUp} className="border border-gray-200">
//               <div className="relative h-64">
//                 <Image
//                   src="/images/m2.jpg"
//                   alt="Undergraduate student"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-8">
//                 <motion.h4
//                   variants={fadeInUp}
//                   className="text-2xl font-medium mb-4"
//                 >
//                   Undergraduate
//                 </motion.h4>
//                 <motion.p variants={fadeInUp} className="text-gray-600 mb-8">
//                   Cursus elit feugiat aliquet mauris justo urna nislolm id lorem
//                   ac proin lectus lacus nec facilisi lectus faucibu.
//                 </motion.p>
//                 <div className="flex justify-between items-center border-t pt-6">
//                   <div>
//                     <motion.span
//                       variants={fadeInUp}
//                       className="text-3xl text-[#c13b50] font-medium"
//                     >
//                       96+
//                     </motion.span>
//                     <p className="text-sm text-gray-600">COURSES</p>
//                   </div>
//                   <div>
//                     <motion.span
//                       variants={fadeInUp}
//                       className="text-3xl text-[#c13b50] font-medium"
//                     >
//                       24+
//                     </motion.span>
//                     <p className="text-sm text-gray-600">PROGRAMS</p>
//                   </div>
//                   <motion.button
//                     variants={fadeInUp}
//                     className="bg-[#c13b50] p-3 text-white"
//                   >
//                     <ArrowRight size={24} />
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Graduate Card */}
//             <motion.div variants={fadeInUp} className="border border-gray-200">
//               <div className="relative h-64">
//                 <Image
//                   src="/images/m2.jpg"
//                   alt="Graduate students"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-8">
//                 <motion.h4
//                   variants={fadeInUp}
//                   className="text-2xl font-medium mb-4"
//                 >
//                   Graduate & Professional
//                 </motion.h4>
//                 <motion.p variants={fadeInUp} className="text-gray-600 mb-8">
//                   Cursus elit feugiat aliquet mauris justo urna nislolm id lorem
//                   ac proin lectus lacus nec facilisi lectus faucibu.
//                 </motion.p>
//                 <div className="flex justify-between items-center border-t pt-6">
//                   <div>
//                     <motion.span
//                       variants={fadeInUp}
//                       className="text-3xl text-[#c13b50] font-medium"
//                     >
//                       64+
//                     </motion.span>
//                     <p className="text-sm text-gray-600">COURSES</p>
//                   </div>
//                   <div>
//                     <motion.span
//                       variants={fadeInUp}
//                       className="text-3xl text-[#c13b50] font-medium"
//                     >
//                       16+
//                     </motion.span>
//                     <p className="text-sm text-gray-600">PROGRAMS</p>
//                   </div>
//                   <motion.button
//                     variants={fadeInUp}
//                     className="bg-[#c13b50] p-3 text-white"
//                   >
//                     <ArrowRight size={24} />
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           <div className="text-center mt-12">
//             <motion.button
//               variants={fadeInUp}
//               className="border border-gray-300 hover:bg-gray-50 py-3 px-8 transition-colors"
//             >
//               BROWSE ALL PROGRAMS
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>

//       {/* Video Section */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//         className="relative h-[600px]"
//       >
//         <img
//           src="https://images.unsplash.com/photo-1562774053-701939374585"
//           alt=""
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center">
//           <motion.h2 variants={fadeInUp} className="text-4xl mb-4">
//             Watch what's a day in Classroom like
//           </motion.h2>
//           <motion.p variants={fadeInUp} className="max-w-2xl mb-8">
//             Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
//             phasellus mollis sit aliquam sit nullam neque ultrices.
//           </motion.p>
//           <motion.button
//             variants={fadeInUp}
//             className="bg-[#C1344E] text-white px-8 py-3 hover:bg-[#a12941] transition flex items-center gap-2"
//           >
//             <Play className="w-5 h-5" />
//             WATCH VIDEO
//           </motion.button>
//         </div>
//       </motion.section>

//       {/* Features Section */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//         className="py-16 px-8 lg:px-20"
//       >
//         <motion.h2 variants={fadeInUp} className="text-4xl text-center mb-12">
//           What makes us different
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {[
//             {
//               image:
//                 "https://images.unsplash.com/photo-1544717305-2782549b5136",
//               title: "World-Class Teachers",
//               description:
//                 "Lorem ipsum dolor sit amet consectetur coolor sit adipiscin elit sed pulvinar dui non imper.",
//             },
//             {
//               image:
//                 "https://images.unsplash.com/photo-1568667256549-094345857637",
//               title: "Well-Equipped Facilities",
//               description:
//                 "Lorem ipsum dolor sit amet consectetur coolor sit adipiscin elit sed pulvinar dui non imper.",
//             },
//             {
//               image:
//                 "https://images.unsplash.com/photo-1623461487986-9400110de28e",
//               title: "Excellent Academics",
//               description:
//                 "Lorem ipsum dolor sit amet consectetur coolor sit adipiscin elit sed pulvinar dui non imper.",
//             },
//             {
//               image:
//                 "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
//               title: "Clubs & Activities",
//               description:
//                 "Lorem ipsum dolor sit amet consectetur coolor sit adipiscin elit sed pulvinar dui non imper.",
//             },
//           ].map((feature, index) => (
//             <motion.div
//               key={index}
//               variants={fadeInUp}
//               className="relative group"
//             >
//               <img
//                 src={feature.image}
//                 alt=""
//                 className="w-full h-64 object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end text-white">
//                 <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
//                 <p className="text-sm text-gray-200">{feature.description}</p>
//                 <div className="w-12 h-1 bg-[#C1344E] mt-4"></div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//         <div className="text-center mt-12">
//           <motion.button
//             variants={fadeInUp}
//             className="bg-[#C1344E] text-white px-8 py-3 hover:bg-[#a12941] transition"
//           >
//             ENROLL NOW
//           </motion.button>
//         </div>
//       </motion.section>

//       {/* Alumni Section */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//         className="py-16 px-8 lg:px-20 bg-gray-50"
//       >
//         <div className="text-center mb-12">
//           <motion.h6 variants={fadeInUp} className="text-[#C1344E] mb-4">
//             ALUMNI SPOTLIGHT
//           </motion.h6>
//           <motion.h2 variants={fadeInUp} className="text-4xl mb-4">
//             What our students say
//           </motion.h2>
//           <motion.p
//             variants={fadeInUp}
//             className="text-gray-600 max-w-3xl mx-auto"
//           >
//             Sit amet massa vitae tortor condimentum lacinia quis enim praesent
//             elementum facilisis leo vel fringilla orci ac auctor augue mauris
//             vempus imperdiet.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
//           <motion.div variants={fadeInUp} className="bg-white p-8 rounded-lg">
//             <div className="flex items-center gap-4 mb-6">
//               <div>
//                 <div className="relative w-16 h-16 rounded-full overflow-hidden">
//                   <Image
//                     src="/images/p1.jpg"
//                     alt="John Carter"
//                     width={64}
//                     height={64}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <p className="text-gray-600 mb-4">
//                   "Duis purus, fames dictum amet ut sem neque vitae mattis
//                   penatibus dolor accumsan id aliquet volutpat fermentum diam
//                   ullamcorper lorem urna fermentum bibendum pharetra."
//                 </p>
//                 <div>
//                   <strong className="block">ANDY SMITH</strong>
//                   <span className="text-[#C1344E]">SAN FRANCISCO CAMPUS</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div variants={fadeInUp} className="bg-white p-8 rounded-lg">
//             <div className="flex items-center gap-4 mb-6">
//               <div>
//                 <div className="relative w-16 h-16 rounded-full overflow-hidden">
//                   <Image
//                     src="/images/p1.jpg"
//                     alt="John Carter"
//                     width={64}
//                     height={64}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <p className="text-gray-600 mb-4">
//                   "Sollicitudin morbi bibendum sed maecenas morbi et neque a
//                   nisl urnaolm fermentum facilisis a nunc in urna vitaedo
//                   bibendum dolorsi dignissim euismod integer risus mauris ac"
//                 </p>
//                 <div>
//                   <strong className="block">SOPHIE MOORE</strong>
//                   <span className="text-[#C1344E]">NEW YORK CAMPUS</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
//           {[
//             {
//               number: "+100K",
//               title: "STUDENTS GRADUATED",
//               description:
//                 "Sit amet massa vitae tortor condi lacinia quis enim praesent.",
//             },
//             {
//               number: "40+",
//               title: "YEARS OF EXPERIENCE",
//               description:
//                 "Sit amet massa vitae tortor condi lacinia quis enim praesent.",
//             },
//             {
//               number: "12",
//               title: "CAMPUS",
//               description:
//                 "Sit amet massa vitae tortor condi lacinia quis enim praesent.",
//             },
//             {
//               number: "99%",
//               title: "STUDENT SATISFACTION",
//               description:
//                 "Sit amet massa vitae tortor condi lacinia quis enim praesent.",
//             },
//           ].map((stat, index) => (
//             <motion.div key={index} variants={fadeInUp}>
//               <h3 className="text-5xl text-[#C1344E] font-light mb-4">
//                 {stat.number}
//               </h3>
//               <h4 className="font-medium mb-2">{stat.title}</h4>
//               <p className="text-gray-600 text-sm">{stat.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* News & Events Section */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//         className="py-16 px-8 lg:px-20"
//       >
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           <div>
//             <div className="flex items-center justify-between mb-8">
//               <motion.h2 variants={fadeInUp} className="text-3xl">
//                 Articles & News
//               </motion.h2>
//               <ArrowRight className="w-6 h-6 text-[#C1344E]" />
//             </div>
//             <div className="space-y-8">
//               {[
//                 {
//                   image:
//                     "https://images.unsplash.com/photo-1455849318743-b2233052fcff",
//                   category: "ARTICLES",
//                   date: "MAR 9, 2023",
//                   title: "How to make your college application stand out",
//                 },
//                 {
//                   image:
//                     "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
//                   category: "EDUCATION",
//                   date: "MAR 9, 2023",
//                   title:
//                     "Basic steps to get involved in research as undergraduate",
//                 },
//                 {
//                   image:
//                     "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
//                   category: "ARTICLES",
//                   date: "MAR 9, 2023",
//                   title: "How to choose the right undergraduate course for you",
//                 },
//               ].map((article, index) => (
//                 <motion.div
//                   key={index}
//                   variants={fadeInUp}
//                   className="flex gap-6"
//                 >
//                   <img
//                     src={article.image}
//                     alt=""
//                     className="w-32 h-32 object-cover"
//                   />
//                   <div>
//                     <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
//                       <span>{article.category}</span>
//                       <span>/</span>
//                       <span>{article.date}</span>
//                     </div>
//                     <h3 className="text-xl font-medium">{article.title}</h3>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <div className="flex items-center justify-between mb-8">
//               <motion.h2 variants={fadeInUp} className="text-3xl">
//                 Coming Events
//               </motion.h2>
//               <ArrowRight className="w-6 h-6 text-[#C1344E]" />
//             </div>
//             <div className="space-y-8">
//               {[
//                 {
//                   image:
//                     "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5",
//                   date: "NOV 24, 2022",
//                   time: "4:00 PM",
//                   title: "Football Practice Match",
//                   description:
//                     "Mi libero massa nibh tellus elementumolm scelerisque viverra hendrerit molestie.",
//                 },
//                 {
//                   image:
//                     "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
//                   date: "DEC 12, 2022",
//                   time: "12:00 PM",
//                   title: "Business Master Class",
//                   description:
//                     "Mi libero massa nibh tellus elementumolm scelerisque viverra hendrerit molestie.",
//                 },
//                 {
//                   image:
//                     "https://images.unsplash.com/photo-1546519638-68e109498ffc",
//                   date: "JAN 8, 2023",
//                   time: "8:00 PM",
//                   title: "National Basketball Match",
//                   description:
//                     "Mi libero massa nibh tellus elementumolm scelerisque viverra hendrerit molestie.",
//                 },
//               ].map((event, index) => (
//                 <motion.div
//                   key={index}
//                   variants={fadeInUp}
//                   className="flex gap-6"
//                 >
//                   <img
//                     src={event.image}
//                     alt=""
//                     className="w-32 h-32 object-cover"
//                   />
//                   <div>
//                     <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
//                       <span>{event.date}</span>
//                       <span>/</span>
//                       <span>{event.time}</span>
//                     </div>
//                     <h3 className="text-xl font-medium mb-2">{event.title}</h3>
//                     <p className="text-gray-600 text-sm">{event.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Request A Tour & Contact Section */}
//       <section className="grid grid-cols-1 lg:grid-cols-2">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//           className="bg-[#1e2a47] text-white p-12 lg:p-20"
//         >
//           <motion.h6
//             variants={fadeInUp}
//             className="text-sm tracking-wider mb-4"
//           >
//             REQUEST A TOUR
//           </motion.h6>
//           <motion.h2 variants={fadeInUp} className="text-4xl font-light mb-4">
//             Visit our campus today
//           </motion.h2>
//           <motion.p variants={fadeInUp} className="text-gray-300 mb-8">
//             Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit
//             phasellus mollis sit aliquam sit nullam neque ultrices.
//           </motion.p>

//           <motion.div variants={fadeInUp} className="space-y-4 mb-8">
//             <div className="flex items-center gap-3">
//               <Phone className="w-5 h-5" />
//               <span>(647) 514 - 5698</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <Mail className="w-5 h-5" />
//               <span>tours@classroom.com</span>
//             </div>
//           </motion.div>

//           <motion.button
//             variants={fadeInUp}
//             className="border border-white px-6 py-2 hover:bg-white hover:text-[#1e2a47] transition"
//           >
//             BROWSE PROGRAMS
//           </motion.button>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//           className="bg-white p-8"
//         >
//           <form className="max-w-md mx-auto space-y-6">
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   FULL NAME
//                 </label>
//                 <input
//                   type="text"
//                   className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   EMAIL
//                 </label>
//                 <input
//                   type="email"
//                   className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   PHONE NUMBER
//                 </label>
//                 <input
//                   type="tel"
//                   className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   NUMBER OF ATTENDEES
//                 </label>
//                 <input
//                   type="number"
//                   className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   CAMPUS OF INTEREST
//                 </label>
//                 <select className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm">
//                   <option>Los Angeles</option>
//                   <option>New York</option>
//                   <option>San Francisco</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   LEVEL OF STUDY
//                 </label>
//                 <select className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm">
//                   <option>Undergraduate</option>
//                   <option>Graduate</option>
//                   <option>PhD</option>
//                 </select>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   DAY OF VISIT
//                 </label>
//                 <input
//                   type="date"
//                   className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   TIME OF VISIT
//                 </label>
//                 <select className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm">
//                   <option>8:00 AM - 5:00 PM</option>
//                   <option>9:00 AM - 6:00 PM</option>
//                   <option>10:00 AM - 7:00 PM</option>
//                 </select>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 HAVE YOU ALREADY APPLIED?
//               </label>
//               <div className="mt-2 space-x-4">
//                 <label className="inline-flex items-center">
//                   <input
//                     type="radio"
//                     name="applied"
//                     value="yes"
//                     className="form-radio"
//                   />
//                   <span className="ml-2">Yes</span>
//                 </label>
//                 <label className="inline-flex items-center">
//                   <input
//                     type="radio"
//                     name="applied"
//                     value="no"
//                     className="form-radio"
//                   />
//                   <span className="ml-2">No</span>
//                 </label>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 LEAVE US A MESSAGE
//               </label>
//               <textarea
//                 rows={4}
//                 className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm"
//               ></textarea>
//             </div>

//             <motion.button
//               variants={fadeInUp}
//               className="w-full bg-[#C1344E] text-white py-3 hover:bg-[#a12941] transition"
//             >
//               BOOK A TOUR
//             </motion.button>
//           </form>
//         </motion.div>
//       </section>

//       {/* Animated Footer */}
//       <motion.footer
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         className="py-16 px-8 lg:px-20 border-t bg-gray-50"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//           <div>
//             <h3 className="text-lg font-medium mb-6">PAGES</h3>
//             <ul className="space-y-3">
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-[#C1344E]">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-[#C1344E]">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-[#C1344E]">
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-[#C1344E]">
//                   Blog post
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-[#C1344E]">
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-[#C1344E]">
//                   Events
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-medium mb-6">FOLLOW PAGES</h3>
//             <ul className="space-x-3 flex">
//               <Link href="#" aria-label="Facebook">
//                 <Facebook size={30} />
//               </Link>
//               <Link href="#" aria-label="Twitter">
//                 <Twitter size={30} />
//               </Link>
//               <Link href="#" aria-label="LinkedIn">
//                 <Linkedin size={30} />
//               </Link>
//               <Link href="#" aria-label="Instagram">
//                 <Instagram size={30} />
//               </Link>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-medium mb-6">EVENTS</h3>
//             <div className="space-y-6">
//               <div className="flex gap-4">
//                 <img
//                   src="https://images.unsplash.com/photo-1455849318743-b2233052fcff"
//                   alt=""
//                   className="w-20 h-20 object-cover"
//                 />
//                 <div>
//                   <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
//                     <span>AUG 25, 2022</span>
//                     <span>/</span>
//                     <span>ARTICLES</span>
//                   </div>
//                   <h4 className="font-medium">
//                     How to make your college application stand out
//                   </h4>
//                 </div>
//               </div>
//               <div className="flex gap-4">
//                 <img
//                   src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
//                   alt=""
//                   className="w-20 h-20 object-cover"
//                 />
//                 <div>
//                   <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
//                     <span>AUG 24, 2022</span>
//                     <span>/</span>
//                     <span>EDUCATION</span>
//                   </div>
//                   <h4 className="font-medium">
//                     Basic steps to get involved in research as undergraduate
//                   </h4>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-medium mb-6">CONTACT</h3>
//             <div className="space-y-4">
//               <p className="flex items-center gap-2 text-gray-600">
//                 <Phone className="w-5 h-5 text-[#C1344E]" />
//                 (487) 514 - 3698
//               </p>
//               <p className="flex items-center gap-2 text-gray-600">
//                 <Mail className="w-5 h-5 text-[#C1344E]" />
//                 contact@classroom.com
//               </p>
//               <p className="flex items-center gap-2 text-gray-600">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5 text-[#C1344E]"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//                   <circle cx="12" cy="10" r="3"></circle>
//                 </svg>
//                 2819 Gordon Street, Los Angeles CA, 90017
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row items-center justify-between pt-8 border-t">
//           <div className="flex items-center gap-2 mb-4 lg:mb-0">
//             <div className="w-8 h-8 bg-[#C1344E] flex items-center justify-center text-white font-bold">
//               X
//             </div>
//             <span className="font-medium">Classroom X</span>
//           </div>
//           <div className="text-sm text-gray-600">
//             © Copyright - Nitteu | Designed by{" "}
//             <a href="#" className="text-[#C1344E]">
//               Apace Digital Cargo
//             </a>{" "}
//           </div>
//         </div>
//       </motion.footer>
//     </div>
//   );
// }

// const features = [
//   {
//     icon: (
//       <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
//         {/* ... SVG path ... */}
//       </svg>
//     ),
//     title: "Explore academics →",
//     description: "Lorem ipsum dolor sit ame consectetur adipisci.",
//   },

//   // Add other features
// ];

//test
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  ArrowRight,
  Phone,
  Mail,
  Play,
} from "lucide-react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Top Bar - Add subtle animation */}
      {/* <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#c13b50] text-white py-2 px-4 md:px-20 flex justify-between items-center text-sm"
      >
        <div className="flex items-center">
          <a href="mailto:contact@classroom.com" className="flex items-center">
            <span className="mr-1">✉</span> contact@classroom.com
          </a>
          <a href="tel:(414) 850 - 0417" className="ml-6 flex items-center">
            <span className="mr-1">☎</span> (414) 850 - 0417
          </a>
        </div>
        <div className="flex space-x-3">
          <Link href="#" aria-label="Facebook">
            <Facebook size={16} />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter size={16} />
          </Link>
          <Link href="#" aria-label="Youtube">
            <Youtube size={16} />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin size={16} />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram size={16} />
          </Link>
        </div>
      </motion.div> */}

      {/* Navigation - Add slide down animation */}
      {/* <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1a3a54] text-white py-4 px-4 md:px-20 flex justify-between items-center"
      >
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link href="/academics" className="text-white hover:text-gray-200">
            Academics
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">NITTEDU</span>
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <Link href="/enrollment" className="text-white hover:text-gray-200">
            Enrollment
          </Link>

          <Link
            href="/pages"
            className="text-white hover:text-gray-200 flex items-center"
          >
            Contact
          </Link>
        </div>
      </motion.nav> */}

      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/1.jpg"
            alt="University building with ivy"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl px-4"
        >
          <div className="w-20 h-1 bg-white mx-auto mb-8" />
          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-7xl font-light mb-6"
          >
            Welcome to the next-gen education
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-lg mb-10 max-w-2xl mx-auto"
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="bg-[#c13b50] hover:bg-[#a6334a] text-white py-3 px-8 transition-colors">
              ENROLL NOW
            </button>
            <button className="border border-white hover:bg-white/10 text-white py-3 px-8 transition-colors">
              VIEW ACADEMICS
            </button>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="bg-white py-16 px-4 absolute -bottom-40 shadow-2xl"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex items-start space-x-4 p-6"
              >
               <img
                 src={feature.image}
                 alt=""
                 className="w-full h-64 object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end text-white">
                 <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                 <p className="text-sm text-gray-200">{feature.description}</p>
                 <div className="w-12 h-1 bg-[#C1344E] mt-4"></div>
               </div>
             </motion.div>
            ))}
          </div>
        </motion.div> */}
        <div className="bg-white py-16 px-4 absolute -bottom-40 shadow-2xl">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4 p-6">
              <div className="bg-[#1a3a54] p-4 rounded-sm">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10L12 5L3 10L12 15L21 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12V18C19 18.5304 18.7893 19.0391 18.4142 19.4142C18.0391 19.7893 17.5304 20 17 20H7C6.46957 20 5.96086 19.7893 5.58579 19.4142C5.21071 19.0391 5 18.5304 5 18V12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-black">
                  Explore academics →
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit ame consectetur adipisci.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6">
              <div className="bg-[#1a3a54] p-4 rounded-sm">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 7H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 12H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 17H13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-black">
                  Browse resources →
                </h3>
                <p className="text-gray-600">
                  Mi eget mauris pharetra et ultrices eu tincidunt.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6">
              <div className="bg-[#1a3a54] p-4 rounded-sm">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 2V6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 2V6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 10H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-black">
                  Explore events →
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit ame consectetur adipisci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 px-4 bg-gray-50 pt-52">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          <motion.div variants={slideInFromLeft} className="md:col-span-6">
            <div className="relative h-[600px]">
              <Image
                src="/images/m1.jpg"
                alt="Student studying"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            variants={slideInFromRight}
            className="md:col-span-6 grid grid-cols-1 gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[290px]">
                <Image
                  src="/images/m2.jpg"
                  alt="Student smiling"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[290px]">
                <Image
                  src="/images/m3.jpg"
                  alt="Students studying together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="pt-8">
              <div className="w-16 h-1 bg-[#c13b50] mb-8"></div>
              <h3 className="text-4xl md:text-5xl font-light mb-6">
                Our mission is to prepare you for the future
              </h3>
              <p className="text-gray-600 mb-8">
                "Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                pulvinar dui non imperdiet tortor dui id nisl quisque laoreet
                tincidunt neque aliquet porttitor vitae sed in donec dictum nisi
                odio purus leo sed ut luctus non."
              </p>
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="/images/p1.jpg"
                    alt="John Carter"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-medium">JOHN CARTER</h4>
                  <p className="text-gray-600">PRESIDENT OF CLASSROOM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Why Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft}
          className="relative h-[800px] w-full"
        >
          <Image
            src="/images/m1.jpg"
            alt="Students studying together"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromRight}
          className="flex flex-col justify-center py-20 px-10"
        >
          <h2 className="text-[#c13b50] font-medium mb-4">WHY US</h2>
          <h3 className="text-4xl md:text-5xl font-light mb-6">
            We help every student to stand out from the rest
          </h3>
          <p className="text-gray-600 mb-8">
            Suspendisse faucibus interdum posuere lorem euismod nisi porta lorem
            mollis aliquam sem fringilla ut morbi tincidunt augue platea
            dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras.
          </p>
          <div>
            {/* <button className="border border-gray-300 hover:bg-gray-50 py-3 px-8 transition-colors">
              OUR APPROACH
            </button> */}
            <button className="text-red hover:before:bg-redborder-[#c13b50] relative h-[50px] overflow-hidden border border-gray-300 bg-white py-3 px-8  hover:shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#c13b50] before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
              <span className="relative z-10">OUR APPROACH</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* About Us Section */}
      <div className="bg-gray-50 grid grid-cols-1 md:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft}
          className="flex flex-col justify-center py-20 px-10"
        >
          <h2 className="text-[#c13b50] font-medium mb-4">ABOUT US</h2>
          <h3 className="text-4xl md:text-5xl font-light mb-6">
            We have over 40 years of educational experience
          </h3>
          <p className="text-gray-600 mb-8">
            Sit amet massa vitae tortor condimentum lacinia quis enim praesent
            elementum facilisis leo vel fringilla orci ac auctor augue mauris
            yempus imperdiet nulla malesuada pellentesque elit eget gravida
            consectur.
          </p>
          <div>
            {/* <button className="border border-gray-300 hover:bg-gray-50 py-3 px-8 transition-colors">
              READ OUR STORY
            </button> */}
            <button className="text-red hover:before:bg-redborder-[#c13b50] relative h-[50px] overflow-hidden border border-gray-300 bg-white py-3 px-8  hover:shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#c13b50] before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
              <span className="relative z-10">READ OUR STORY</span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromRight}
          className="relative h-[800px] w-full"
        >
          <Image
            src="/images/m2.jpg"
            alt="Students studying together"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Academics Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="text-[#c13b50] font-medium mb-4"
            >
              ACADEMICS
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-light"
            >
              We have the best-in-class
              <br />
              programs for you
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Undergraduate Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="border border-gray-200"
            >
              <div className="relative h-64">
                <Image
                  src="/images/m2.jpg"
                  alt="Undergraduate student"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-medium mb-4">Undergraduate</h4>
                <p className="text-gray-600 mb-8">
                  Cursus elit feugiat aliquet mauris justo urna nislolm id lorem
                  ac proin lectus lacus nec facilisi lectus faucibu.
                </p>
                <div className="flex justify-between items-center border-t pt-6">
                  <div>
                    <span className="text-3xl text-[#c13b50] font-medium">
                      96+
                    </span>
                    <p className="text-sm text-gray-600">COURSES</p>
                  </div>
                  <div>
                    <span className="text-3xl text-[#c13b50] font-medium">
                      24+
                    </span>
                    <p className="text-sm text-gray-600">PROGRAMS</p>
                  </div>
                  <button className="bg-[#c13b50] p-3 text-white">
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Graduate Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="border border-gray-200"
            >
              <div className="relative h-64">
                <Image
                  src="/images/m2.jpg"
                  alt="Graduate students"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-medium mb-4">
                  Graduate & Professional
                </h4>
                <p className="text-gray-600 mb-8">
                  Cursus elit feugiat aliquet mauris justo urna nislolm id lorem
                  ac proin lectus lacus nec facilisi lectus faucibu.
                </p>
                <div className="flex justify-between items-center border-t pt-6">
                  <div>
                    <span className="text-3xl text-[#c13b50] font-medium">
                      64+
                    </span>
                    <p className="text-sm text-gray-600">COURSES</p>
                  </div>
                  <div>
                    <span className="text-3xl text-[#c13b50] font-medium">
                      16+
                    </span>
                    <p className="text-sm text-gray-600">PROGRAMS</p>
                  </div>
                  <button className="bg-[#c13b50] p-3 text-white">
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <button className="border border-gray-300 hover:bg-gray-50 py-3 px-8 transition-colors">
              BROWSE ALL PROGRAMS
            </button>
          </div>
        </div>
      </motion.div>

      {/* Video Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scaleUp}
        className="relative h-[600px]"
      >
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-4xl mb-4">
            Watch what's a day in Classroom like
          </h2>
          <p className="max-w-2xl mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>
          <button className="bg-[#C1344E] text-white px-8 py-3 hover:bg-[#a12941] transition flex items-center gap-2">
            <Play className="w-5 h-5" />
            WATCH VIDEO
          </button>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 px-8 lg:px-20"
      >
        <h2 className="text-4xl text-center mb-12">What makes us different</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              image:
                "https://images.unsplash.com/photo-1544717305-2782549b5136",
              title: "World-Class Teachers",
              description:
                "Lorem ipsum dolor sit amet consectetur coolor sit adipiscin elit sed pulvinar dui non imper.",
            },
            {
              image:
                "https://images.unsplash.com/photo-1568667256549-094345857637",
              title: "Well-Equipped Facilities",
              description:
                "Lorem ipsum dolor sit amet consectetur coolor sit adipiscin elit sed pulvinar dui non imper.",
            },
            {
              image:
                "https://images.unsplash.com/photo-1623461487986-9400110de28e",
              title: "Excellent Academics",
              description:
                "Lorem ipsum dolor sit amet consectetur coolor sit adipiscin elit sed pulvinar dui non imper.",
            },
            {
              image:
                "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
              title: "Clubs & Activities",
              description:
                "Lorem ipsum dolor sit amet consectetur coolor sit adipiscin elit sed pulvinar dui non imper.",
            },
          ].map((feature, index) => (
            <div key={index} className="relative group">
              <img
                src={feature.image}
                alt=""
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-200">{feature.description}</p>
                <div className="w-12 h-1 bg-[#C1344E] mt-4"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-[#C1344E] text-white px-8 py-3 hover:bg-[#a12941] transition">
            ENROLL NOW
          </button>
        </div>
      </motion.section>

      {/* Alumni Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 px-8 lg:px-20 bg-gray-50"
      >
        <div className="text-center mb-12">
          <h6 className="text-[#C1344E] mb-4">ALUMNI SPOTLIGHT</h6>
          <h2 className="text-4xl mb-4">What our students say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Sit amet massa vitae tortor condimentum lacinia quis enim praesent
            elementum facilisis leo vel fringilla orci ac auctor augue mauris
            vempus imperdiet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-6">
              <div>
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="/images/p1.jpg"
                    alt="John Carter"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              {/* <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
                alt=""
                className="w-16 h-16 rounded-full object-cover"
              /> */}
              <div>
                <p className="text-gray-600 mb-4">
                  "Duis purus, fames dictum amet ut sem neque vitae mattis
                  penatibus dolor accumsan id aliquet volutpat fermentum diam
                  ullamcorper lorem urna fermentum bibendum pharetra."
                </p>
                <div>
                  <strong className="block">ANDY SMITH</strong>
                  <span className="text-[#C1344E]">SAN FRANCISCO CAMPUS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-6">
              <div>
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="/images/p1.jpg"
                    alt="John Carter"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              {/* <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt=""
                className="w-16 h-16 rounded-full object-cover"
              /> */}
              <div>
                <p className="text-gray-600 mb-4">
                  "Sollicitudin morbi bibendum sed maecenas morbi et neque a
                  nisl urnaolm fermentum facilisis a nunc in urna vitaedo
                  bibendum dolorsi dignissim euismod integer risus mauris ac"
                </p>
                <div>
                  <strong className="block">SOPHIE MOORE</strong>
                  <span className="text-[#C1344E]">NEW YORK CAMPUS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            {
              number: "+100K",
              title: "STUDENTS GRADUATED",
              description:
                "Sit amet massa vitae tortor condi lacinia quis enim praesent.",
            },
            {
              number: "40+",
              title: "YEARS OF EXPERIENCE",
              description:
                "Sit amet massa vitae tortor condi lacinia quis enim praesent.",
            },
            {
              number: "12",
              title: "CAMPUS",
              description:
                "Sit amet massa vitae tortor condi lacinia quis enim praesent.",
            },
            {
              number: "99%",
              title: "STUDENT SATISFACTION",
              description:
                "Sit amet massa vitae tortor condi lacinia quis enim praesent.",
            },
          ].map((stat, index) => (
            <div key={index}>
              <h3 className="text-5xl text-[#C1344E] font-light mb-4">
                {stat.number}
              </h3>
              <h4 className="font-medium mb-2">{stat.title}</h4>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* News & Events Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 px-8 lg:px-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl">Articles & News</h2>
              <ArrowRight className="w-6 h-6 text-[#C1344E]" />
            </div>
            <div className="space-y-8">
              {[
                {
                  image:
                    "https://images.unsplash.com/photo-1455849318743-b2233052fcff",
                  category: "ARTICLES",
                  date: "MAR 9, 2023",
                  title: "How to make your college application stand out",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
                  category: "EDUCATION",
                  date: "MAR 9, 2023",
                  title:
                    "Basic steps to get involved in research as undergraduate",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
                  category: "ARTICLES",
                  date: "MAR 9, 2023",
                  title: "How to choose the right undergraduate course for you",
                },
              ].map((article, index) => (
                <div key={index} className="flex gap-6">
                  <img
                    src={article.image}
                    alt=""
                    className="w-32 h-32 object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <span>{article.category}</span>
                      <span>/</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl font-medium">{article.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl">Coming Events</h2>
              <ArrowRight className="w-6 h-6 text-[#C1344E]" />
            </div>
            <div className="space-y-8">
              {[
                {
                  image:
                    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5",
                  date: "NOV 24, 2022",
                  time: "4:00 PM",
                  title: "Football Practice Match",
                  description:
                    "Mi libero massa nibh tellus elementumolm scelerisque viverra hendrerit molestie.",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
                  date: "DEC 12, 2022",
                  time: "12:00 PM",
                  title: "Business Master Class",
                  description:
                    "Mi libero massa nibh tellus elementumolm scelerisque viverra hendrerit molestie.",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1546519638-68e109498ffc",
                  date: "JAN 8, 2023",
                  time: "8:00 PM",
                  title: "National Basketball Match",
                  description:
                    "Mi libero massa nibh tellus elementumolm scelerisque viverra hendrerit molestie.",
                },
              ].map((event, index) => (
                <div key={index} className="flex gap-6">
                  <img
                    src={event.image}
                    alt=""
                    className="w-32 h-32 object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <span>{event.date}</span>
                      <span>/</span>
                      <span>{event.time}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        <div className="bg-[#1e2a47] text-white p-12 lg:p-20">
          <h6 className="text-sm tracking-wider mb-4">REQUEST A TOUR</h6>
          <h2 className="text-4xl font-light mb-4">Visit our campus today</h2>
          <p className="text-gray-300 mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>(647) 514 - 5698</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>tours@classroom.com</span>
            </div>
          </div>

          <button className="border border-white px-6 py-2 hover:bg-white hover:text-[#1e2a47] transition">
            BROWSE PROGRAMS
          </button>
        </div>

        <div className="bg-white p-8">
          <form className="max-w-md mx-auto space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  FULL NAME
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm p-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  NUMBER OF ATTENDEES
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm p-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  CAMPUS OF INTEREST
                </label>
                <select className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm p-2">
                  <option>Los Angeles</option>
                  <option>New York</option>
                  <option>San Francisco</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  LEVEL OF STUDY
                </label>
                <select className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm p-2">
                  <option>Undergraduate</option>
                  <option>Graduate</option>
                  <option>PhD</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  DAY OF VISIT
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  TIME OF VISIT
                </label>
                <select className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm p-2">
                  <option>8:00 AM - 5:00 PM</option>
                  <option>9:00 AM - 6:00 PM</option>
                  <option>10:00 AM - 7:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                HAVE YOU ALREADY APPLIED?
              </label>
              <div className="mt-2 space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="applied"
                    value="yes"
                    className="form-radio"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="applied"
                    value="no"
                    className="form-radio"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                LEAVE US A MESSAGE
              </label>
              <textarea
                rows={4}
                className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm"
              ></textarea>
            </div>

            <button className="w-full bg-[#C1344E] text-white py-3 hover:bg-[#a12941] transition">
              BOOK A TOUR
            </button>
          </form>
        </div>
      </motion.div>

      {/* Footer */}
      {/* <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-8 lg:px-20 border-t"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-medium mb-6">PAGES</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#C1344E]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#C1344E]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#C1344E]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#C1344E]">
                  Blog post
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#C1344E]">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#C1344E]">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">FOLLOW PAGES</h3>
            <ul className="space-x-3 flex">
              <Link
                href="#"
                aria-label="Facebook"
                className="text-gray-600 hover:text-[#C1344E]"
              >
                <Facebook size={30} />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="text-gray-600 hover:text-[#C1344E]"
              >
                <Twitter size={30} />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-[#C1344E]"
              >
                <Linkedin size={30} />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="text-gray-600 hover:text-[#C1344E]"
              >
                <Instagram size={30} />
              </Link>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">EVENTS</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1455849318743-b2233052fcff"
                  alt=""
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <span>AUG 25, 2022</span>
                    <span>/</span>
                    <span>ARTICLES</span>
                  </div>
                  <h4 className="font-medium">
                    How to make your college application stand out
                  </h4>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                  alt=""
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <span>AUG 24, 2022</span>
                    <span>/</span>
                    <span>EDUCATION</span>
                  </div>
                  <h4 className="font-medium">
                    Basic steps to get involved in research as undergraduate
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">CONTACT</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2 text-gray-600">
                <Phone className="w-5 h-5 text-[#C1344E]" />
                (487) 514 - 3698
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <Mail className="w-5 h-5 text-[#C1344E]" />
                contact@classroom.com
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#C1344E]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                2819 Gordon Street, Los Angeles CA, 90017
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between pt-8 border-t">
          <div className="flex items-center gap-2 mb-4 lg:mb-0">
            <div className="w-8 h-8 bg-[#C1344E] flex items-center justify-center text-white font-bold">
              X
            </div>
            <span className="font-medium">Nitteu</span>
          </div>
          <div className="text-sm text-gray-600">
            © Copyright - Nitteu | Designed by{" "}
            <a href="#" className="text-[#C1344E]">
              Apace Digital Cargo
            </a>{" "}
          </div>
        </div>
      </motion.footer> */}
    </div>
  );
}
