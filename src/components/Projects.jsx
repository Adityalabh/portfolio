import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const diffStyles = {
    container:
      "p-6 bg-white my-20 shadow-xl rounded-lg hover:shadow-2xl transition duration-500 ease-initial transform hover:-translate-y-4 ",
    containerGithub:
      "flex bg-gray-200 font-semibold hover:bg-gray-300 transition duration-500 items-center w-fit p-2 rounded-lg gap-2 ",
    containerLive:
      "w-fit p-2 bg-gray-200 hover:bg-gray-300 rounded-lg cursor-pointer",
    containerTechs: "bg-black text-white m-1 w-fit p-2 font-bold rounded-lg",
  };

  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-4xl text-center text-gray-700 font-semibold mb-19">
        Projects
      </h2>

      <div className="">
        {/*  project 1*/}
        <motion.div
          className={`${diffStyles.container} gap-3  w-full my-4 `}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="lg:flex">
            {/* image */}
            <div className="space-y-4 lg:w-[50%] text-center font-semibold p-4">
              <h1>Home Page</h1>
              <img
                src="./SocialMedia.png"
                alt="photo"
                className=" h-[55%] border-2 rounded-lg border-gray-600"
              />
            </div>
            {/* details */}
            <div className=" lg:w-[50%] p-3">
              <h1 className="font-bold text-2xl">Ai Based Chat Application</h1>
              <p className="  py-3 font-medium text-gray-500 text-justify">
                Developed a JobPortal platform enabling users to create, like,
                comment, and save posts, with a follow/unfollow system and
                real-time notifications for activities like new followers,
                unfollowing, and posts interactions. Built a secure
                authentication system with registration, login,logout,ai
                integration, and profile management for updating profiles,
                uploading pictures, and managing posts. Added media uploads for
                post and profile images to ensure a rich user experience.
                Enhanced interactivity with a modern UI, shadcn styling, and
                dynamic Toast Messages for real-time feedback (e.g., login
                success, new comments, likes, or errors).
              </p>
            </div>
          </div>

          <div className="w-full mt-4 lg:flex items-center">
            <div className="lg:w-[50%] flex my-6">
              <div className="flex gap-4">
                <div>
                  <a
                    href="https://github.com/Adityalabh/Ai_based_chat_app"
                    className={diffStyles.containerGithub}
                  >
                    <FaGithub size={20} /> Github
                  </a>
                </div>
                <a
                  href="https://ai-based-chat-app.onrender.com"
                  className={diffStyles.containerLive}
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="lg:w-[50%] ">
              <h1 className="font-bold text-xl mb-">TechStack Used</h1>
              <div className="flex flex-wrap ">
                <div className={diffStyles.containerTechs}>Redux</div>
                <div className={diffStyles.containerTechs}>React </div>
                <div className={diffStyles.containerTechs}>MongoDB</div>
                <div className={diffStyles.containerTechs}>Expressjs</div>
                <div className={diffStyles.containerTechs}>Google</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className={`${diffStyles.container} gap-3  w-full my-4 `}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="lg:flex">
            {/* image */}
            <div className="space-y-4 lg:w-[50%] text-center font-semibold p-4">
              <h1>Home Page</h1>
              <img
                src="./JobPortal.png"
                alt="photo"
                className=" h-[55%] border-2 rounded-lg border-gray-600"
              />
            </div>
            {/* details */}
            <div className=" lg:w-[50%] p-3">
              <h1 className="font-bold text-2xl">Job Portal</h1>

              <p className="  py-3 font-medium text-gray-500 text-justify">
                I developed a dynamic job portal that streamlines the hiring
                process by enabling job seekers to easily manage their profiles
                and apply for jobs, while providing admins with tools to
                efficiently post and manage job listings. The platform features
                advanced job search capabilities and real-time applied job
                tracking, enhancing usability and functionality. By focusing on
                intuitive UI/UX design, the project achieved a 15% increase in
                user engagement. The application was built using JavaScript,
                React, Node.js, and MongoDB.
              </p>
            </div>
          </div>

          <div className="w-full mt-4 lg:flex items-center">
            {/* links */}
            <div className="lg:w-[50%] flex my-6 ">
              <div className="flex gap-4">
                <div>
                  <a
                    href="https://github.com/Adityalabh/jobPort"
                    className={diffStyles.containerGithub}
                  >
                    <FaGithub size={20} /> Github
                  </a>
                </div>
                <a
                  href="https://jobport-1-neds.onrender.com"
                  className={diffStyles.containerLive}
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className=" lg:w-[50%]">
              <h1 className="font-bold text-xl mb-">TechStack Used</h1>
              <div className="flex flex-wrap ">
                <div className={diffStyles.containerTechs}>Redux</div>
                <div className={diffStyles.containerTechs}>React </div>
                <div className={diffStyles.containerTechs}>MongoDB</div>
                <div className={diffStyles.containerTechs}>Expressjs</div>
                <div className={diffStyles.containerTechs}>JavaScript</div>
                <div className={diffStyles.containerTechs}>etc</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={`${diffStyles.container} gap-3  w-full my-4 `}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="lg:flex">
            {/* image */}
            <div className="space-y-4 lg:w-[50%] text-center font-semibold p-4">
              <h1>Home Page</h1>
              <img
                src="./hotel.png"
                alt="photo"
                className=" h-[55%] border-2 rounded-lg border-gray-600"
              />
            </div>
            {/* details */}
            <div className=" lg:w-[50%] p-3">
              <h1 className="font-bold text-2xl">
                Hotel room booking and managing{" "}
              </h1>

              <p className="  py-3 font-medium text-gray-500 text-justify">
                I built a hotel booking application using JavaScript, HTML5, and
                CSS3, designed to simplify the reservation process with an
                intuitive and responsive user interface. The platform allows
                users to search for rooms, manage bookings, and navigate
                seamlessly through the system. By optimizing the UI and core
                functionalities, the application improved reservation efficiency
                by 20%, providing a smoother experience for both customers and
                hotel administrators.
              </p>
            </div>
          </div>

          <div className="w-full mt-4 lg:flex items-center">
            <div className="lg:w-[50%] flex my-6">
              <div className="flex gap-4">
                <div>
                  <a
                    href="https://github.com/Adityalabh/hotel_booking"
                    className={diffStyles.containerGithub}
                  >
                    <FaGithub size={20} /> Github
                  </a>
                </div>
                {/* <a
                  href="https://ai-based-chat-app.onrender.com"
                  className={diffStyles.containerLive}
                >
                  Live Demo
                </a> */}
              </div>
            </div>
            <div className="lg:w-[50%] ">
              <h1 className="font-bold text-xl mb-">TechStack Used</h1>
              <div className="flex flex-wrap ">
                <div className={diffStyles.containerTechs}>Html</div>
                <div className={diffStyles.containerTechs}>Css </div>
                <div className={diffStyles.containerTechs}>JavaScript</div>
                <div className={diffStyles.containerTechs}>Expressjs</div>
                <div className={diffStyles.containerTechs}>Mongoose</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
