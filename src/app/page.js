"use client";
import Image from "next/image";
import profileImage from "../assets/images/avatr.jpg";
import {
  ArrowDown,
  Award,
  BookOpen,
  Briefcase,
  Building,
  CircleCheck,
  Code,
  Database,
  Facebook,
  FileUser,
  GraduationCap,
  Headset,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Mouse,
  Phone,
  Server,
  StickyNote,
  Wrench,
} from "lucide-react";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export default function HeroSection() {
  const aboutRef = useRef(null);

  const handleScroll = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Remove "once: true"
  }, []);
  return (
    <>
      <div className="py-8 lg:py-0 min-h-[calc(100vh-64px)] bg-gray-100 overflow-hidden">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center flex-wrap min-h-[calc(100vh-64px)] px-4">
          {/* Left Side */}
          <div
            className="w-full lg:w-[50%] flex flex-col items-center lg:items-start"
            data-aos="fade-right"
          >
            <h1 className="text-2xl font-bold text-black">
              Muhammad Danish ✋
            </h1>
            <h2
              className="text-3xl my-2 text-black typewriter"
              data-aos="fade-up"
            >
              MERN Stack Developer
            </h2>
            <p className="text-gray-600 text-center lg:text-start">
              I'm a MERN Stack Developer with over 3 years of experience in
              building full-stack web and mobile applications.
            </p>
            <button
              className="bg-gray-200 flex items-center p-2 rounded-md cursor-pointer mt-4"
              data-aos="zoom-in"
              onClick={handleScroll}
            >
              <Mouse />
              <span className="mx-2">Scroll down</span>
              <ArrowDown size={20} />
            </button>
          </div>

          {/* Right Side - Profile Image */}
          <div
            className="w-full lg:w-[50%] flex items-center justify-center lg:justify-end mb-8 lg:mb-0"
            data-aos="fade-left"
          >
            <Image
              src={profileImage}
              alt="Profile Image"
              width={250}
              height={250}
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <div
          id="about"
          className="py-8 lg:py-0 min-h-[calc(100vh-64px)] bg-gray-100"
          ref={aboutRef}
        >
          <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
            {/* Section Title */}
            <div className="text-center" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-black">About Me</h2>
              <p className="text-gray-600 text-sm">Get to Know More About Me</p>
            </div>

            {/* Main Content */}
            <div className="flex justify-center items-center flex-wrap w-full mt-8">
              {/* Profile Image */}
              <div
                className="w-full lg:w-[50%] flex justify-center lg:justify-start mb-8 lg:mb-0"
                data-aos="fade-right"
              >
                <Image
                  src={profileImage}
                  alt="Profile Image"
                  width={300}
                  height={300}
                  className="rounded-xl object-cover"
                />
              </div>

              {/* Details Section */}
              <div className="w-full lg:w-[50%]">
                {/* Experience, Completed Projects, Support */}
                <div className="flex justify-between flex-wrap">
                  <div
                    className="bg-white w-full md:w-[32%] mb-4 md:mb-0 rounded-md flex flex-col items-center p-4 shadow-md"
                    data-aos="zoom-in"
                  >
                    <Award />
                    <h3 className="text-md text-black my-1 font-semibold">
                      Experience
                    </h3>
                    <p className="text-sm text-gray-600">3+ Years</p>
                  </div>

                  <div
                    className="bg-white w-full md:w-[32%] mb-4 md:mb-0 rounded-md flex flex-col items-center p-4 shadow-md"
                    data-aos="zoom-in"
                  >
                    <CircleCheck />
                    <h3 className="text-md text-black my-1 font-semibold">
                      Completed
                    </h3>
                    <p className="text-sm text-gray-600">20+ Projects</p>
                  </div>

                  <div
                    className="bg-white w-full md:w-[32%] rounded-md flex flex-col items-center p-4 shadow-md"
                    data-aos="zoom-in"
                  >
                    <Headset />
                    <h3 className="text-md text-black my-1 font-semibold">
                      Support
                    </h3>
                    <p className="text-sm text-gray-600">24/7 Availability</p>
                  </div>
                </div>

                {/* Description & CV Button */}
                <div className="mt-6 flex flex-col items-center lg:items-start">
                  <p
                    className="text-gray-700 text-md text-center lg:text-start"
                    data-aos="fade-up"
                  >
                    I am a passionate MERN Stack Developer with a strong
                    background in building efficient and scalable web and mobile
                    applications. With over 3 years of experience, I specialize
                    in crafting high-performance solutions that meet business
                    needs.
                  </p>

                  {/* Download CV Button */}
                  <div className="mt-4" data-aos="fade-up">
                    <button className="flex items-center bg-black text-white px-6 py-2 rounded-md font-semibold shadow-md hover:bg-gray-800 text-sm cursor-pointer">
                      Download Resume
                      <FileUser size={20} className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="skills"
          className="py-8 lg:py-0 min-h-[calc(100vh-64px)] bg-gray-100"
        >
          <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center">
            {/* Section Title */}
            <div data-aos="fade-up">
              <h2 className="text-3xl font-bold text-black">Skills</h2>
              <p className="text-gray-600 text-sm">
                Technologies & Tools I Work With
              </p>
            </div>

            {/* Skills Cards */}
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <div
                className="bg-white p-4 rounded-md shadow-md w-80"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Code size={32} className="text-blue-500 mx-auto" />
                <h3 className="text-md font-semibold mt-2">Frontend</h3>
                <p className="text-sm text-gray-600">
                  HTML5, CSS3, JavaScript (ES6+), TypeScript, React Native,
                  React.js, Next.js, Tailwind CSS, Redux
                </p>
              </div>

              <div
                className="bg-white p-4 rounded-md shadow-md w-80"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Database size={32} className="text-green-500 mx-auto" />
                <h3 className="text-md font-semibold mt-2">Backend</h3>
                <p className="text-sm text-gray-600">
                  Node.js, Express.js, MongoDB, MySQL, Firebase, Supabase,
                  Strapi
                </p>
              </div>

              <div
                className="bg-white p-4 rounded-md shadow-md w-80"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Wrench size={32} className="text-yellow-500 mx-auto" />
                <h3 className="text-md font-semibold mt-2">Tools & DevOps</h3>
                <p className="text-sm text-gray-600">
                  Git, GitHub, Postman, VS Code, Vercel
                </p>
              </div>

              <div
                className="bg-white p-4 rounded-md shadow-md w-80"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Code size={32} className="text-red-500 mx-auto" />
                <h3 className="text-md font-semibold mt-2">Other Skills</h3>
                <p className="text-sm text-gray-600">
                  REST APIs, GraphQL, Authentication
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="resume"
          className="py-8 lg:py-0 min-h-[calc(100vh-64px)] bg-gray-100"
        >
          <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
            {/* Section Title */}
            <div className="text-center" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-black">Resume</h2>
              <p className="text-gray-600 text-sm">My Education & Experience</p>
            </div>

            {/* Download Resume Button */}
            <div className="my-4" data-aos="fade-up" data-aos-delay="200">
              <button className="flex items-center bg-black text-white px-6 py-2 rounded-md font-semibold shadow-md hover:bg-gray-800 text-sm cursor-pointer">
                Download Resume
                <FileUser size={20} className="ml-2" />
              </button>
            </div>

            {/* Education & Work Experience Section */}
            <div className="flex flex-wrap justify-center w-full">
              {/* Education Section */}
              <div
                className="w-full lg:w-[50%] p-4 flex flex-col"
                data-aos="fade-right"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <GraduationCap className="mr-2" />
                  Education
                </h3>
                <div className="bg-white p-6 rounded-md shadow-md flex-1">
                  <ul className="list-none space-y-4">
                    <li className="flex items-start">
                      <BookOpen className="mr-3 mt-1 text-blue-500" size={20} />
                      <div>
                        <h4 className="text-md font-semibold">
                          BS in Software Engineering
                        </h4>
                        <p className="text-sm text-gray-600">
                          Karachi University
                        </p>
                        <p className="text-xs text-gray-500">2016 - 2020</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <BookOpen
                        className="mr-3 mt-1 text-green-500"
                        size={20}
                      />
                      <div>
                        <h4 className="text-md font-semibold">
                          Intermediate in Computer Science
                        </h4>
                        <p className="text-sm text-gray-600">
                          Adamjee Government Science College
                        </p>
                        <p className="text-xs text-gray-500">2014 - 2016</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <BookOpen
                        className="mr-3 mt-1 text-yellow-500"
                        size={20}
                      />
                      <div>
                        <h4 className="text-md font-semibold">
                          Matriculation in Science
                        </h4>
                        <p className="text-sm text-gray-600">
                          High Start Public Secondary School
                        </p>
                        <p className="text-xs text-gray-500">2008 - 2014</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Work Experience Section */}
              <div
                className="w-full lg:w-[50%] p-4 flex flex-col"
                data-aos="fade-left"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Briefcase className="mr-2" />
                  Work Experience
                </h3>
                <div className="bg-white p-6 rounded-md shadow-md flex-1">
                  <ul className="list-none space-y-4">
                    <li className="flex items-start">
                      <Building className="mr-3 mt-1 text-red-500" size={20} />
                      <div>
                        <h4 className="text-md font-semibold">
                          Embroidery Digitizer
                        </h4>
                        <p className="text-sm text-gray-600">Digit EMB</p>
                        <p className="text-xs text-gray-500">2019</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Code className="mr-3 mt-1 text-purple-500" size={20} />
                      <div>
                        <h4 className="text-md font-semibold">
                          Jr. MERN Stack Developer
                        </h4>
                        <p className="text-sm text-gray-600">Concept Recall</p>
                        <p className="text-xs text-gray-500">2020 - 2021</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Server className="mr-3 mt-1 text-blue-500" size={20} />
                      <div>
                        <h4 className="text-md font-semibold">
                          MERN Stack Developer
                        </h4>
                        <p className="text-sm text-gray-600">Inapp Solutions</p>
                        <p className="text-xs text-gray-500">2021 - Present</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="contact"
          className="py-8 lg:py-0 min-h-[calc(100vh-64px)] bg-gray-100"
        >
          <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center">
            <h2 className="text-4xl font-bold text-black" data-aos="fade-up">
              Let's Connect!
            </h2>
            <p
              className="text-gray-600 text-lg max-w-lg mt-2"
              data-aos="fade-up"
            >
              Whether you have a project in mind, need advice, or just want to
              say hello, I'm always open to a conversation.
            </p>

            {/* Contact Details */}
            <div
              className="mt-8 flex flex-wrap justify-center gap-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center space-x-3 text-gray-700">
                <Phone size={24} />
                <span className="text-lg">+92 316 2689089</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Mail size={24} />
                <span className="text-lg">danishsiddiqui6789@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <MapPin size={24} />
                <span className="text-lg">Karachi, Pakistan</span>
              </div>
            </div>

            {/* Social Links */}
            <div
              className="flex space-x-6 mt-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <a
                href="https://www.linkedin.com/in/muhammad-danish-95815722b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="https://www.facebook.com/share/197JSA5LdK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <Facebook size={32} />
              </a>
              <a
                href="https://www.instagram.com/danishsiddiqui6789/?igsh=NjgwcTN1MnZiNGox"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700"
              >
                <Instagram size={32} />
              </a>
            </div>

            {/* Call to Action */}
            <p
              className="text-gray-700 text-lg mt-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Feel free to drop me an email or connect on social media. Looking
              forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
