import React from "react";

const Education = () => {
  const diffStyle = {
    educationContainer:
      "relative flex mx-auto w-[70%] z-10 m-4 py-4 bg-white shadow-md hover:shadow-2xl transition duration-700 ease-in-out hover:translate-x-1 border-l-3 border-blue-700 rounded-lg ",
  };
  return (
    <div>
      <div className="flex px-4 items-center  gap-3 w-full justify-center text-center">
        <h1 className="font-bold  text-4xl text-gray-600  ">
          Education Journey
        </h1>
        <i className="fa-solid fa-graduation-cap text-4xl text-gray-600"></i>
      </div>

      <div className="my-9 relative">

        <div className="h-52 absolute left-[9rem] lg:left-[200px] z-0 w-0.5 bg-blue-500 mx-4 "></div>

    
          {/* College */}
          <div className={diffStyle.educationContainer}>
            {/* icon */}
            <div className="text-3xl my-4 mx-7 bg-blue-300 rounded-[1rem]">
              🎓
            </div>
            <div className=" ">
              <h1 className="text-xl font-semibold">
                Dr Apj Abdul Kalam University
              </h1>
              <h1 className="font-semibold text-gray-500">
                B.Tech Computer Science
              </h1>
              <div className="flex gap-2 items-center text-gray-500">
                <i className="fa-solid fa-calendar mr-2 text-md"></i>
                <p>2021-2025</p>
              </div>
            </div>
          </div>

          {/* School */}
          <div className={diffStyle.educationContainer}>
            {/* icon */}
            <div className="text-3xl my-4 mx-7 bg-blue-300 rounded-[1rem]">
              🏫
            </div>
            <div className=" ">
              <h1 className="text-xl font-semibold">
                <div></div>
                <div>V.C.S.G Public School</div>
              </h1>
              <h1 className="font-semibold text-gray-500">
                Higher Secondary School
              </h1>
              <div className="flex gap-2 items-center text-gray-500">
                <i className="fa-solid fa-calendar mr-2 text-md"></i>
                <p>2019-2021</p>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Education;
