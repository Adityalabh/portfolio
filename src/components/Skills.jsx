import React from "react";

export default function Skills() {
  const diffStyle = {
    logoStyle:
      "w-30 p-3 cursor-pointer bg-white shadow rounded-lg hover:shadow-2xl transition transform duration-500 ease-in-out hover:-translate-y-1 space-y-2",

    button:
      "bg-black p-1 font-semibold  flex justify-center  rounded-lg text-white text-sm",

    image: "h-15 lg:h-20 mx-auto",
  };

  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-gray-500 text-center font-semibold">Explore My</h1>
      <h2 className="text-3xl font-semibold  mb-7 text-3xl lg:text-5xl text-center text-gray-700">
        Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-8">

        <div>
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-600 my-6 ">
            Programming Languages
          </h3>

          <div className="flex flex-wrap gap-3">
            <div className={diffStyle.logoStyle}>
              <img
                src="./typescript_logo.png"
                alt="logo"
                className={diffStyle.image}
              />
              <h3 className={diffStyle.button}>TypeScript</h3>
            </div>
            <div className={diffStyle.logoStyle}>
              <img src="./js_logo.png" alt="logo" className={diffStyle.image} />
              <h3 className={diffStyle.button}>JavaScript</h3>
            </div>
            <div className={diffStyle.logoStyle}>
              <img
                src="./c++ image.png"
                alt="logo"
                className={diffStyle.image}
              />
              <h3 className={diffStyle.button}>c++</h3>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-600 my-6 text-center">
            Frontend Frameworks & Libraries
          </h3>

          <div className="flex flex-wrap gap-3">
            <div className={diffStyle.logoStyle}>
              <img
                src="./react_image_logo.png"
                alt="logo"
                className={diffStyle.image }
              />
              <h3 className={diffStyle.button}>React</h3>
            </div>

            <div className={diffStyle.logoStyle}>
              <img src="./nextjs_logo.png" alt="logo" className={diffStyle.image} />
              <h3 className={diffStyle.button}>Next.js</h3>
            </div>
            <div className={diffStyle.logoStyle}>
              <img
                src="./redux_logo.png"
                alt="logo"
                className={diffStyle.image}
              />
              <h3 className={diffStyle.button}>Redux </h3>
            </div>
            <div className={diffStyle.logoStyle}>
              <img
                src="./tailwind_logo.png"
                alt="logo"
                className={diffStyle.image}
              />
              <h3 className={diffStyle.button}>Tailwind </h3>
            </div>
            <div className={diffStyle.logoStyle}>
              <img
                src="./Material_UI_Logo.png"
                alt="logo"
                className={diffStyle.image}
              />  
              <h3 className={diffStyle.button}>Material Ui </h3>
            </div>

            <div className={diffStyle.logoStyle}>
              <img
                src="./html_logo.jpeg"
                alt="logo"
                className={diffStyle.image}
              />
              <h3 className={diffStyle.button}>Html </h3>
            </div>

            <div className={diffStyle.logoStyle}>
              <img
                src="./css_logo.png"
                alt="logo"
                className={diffStyle.image}
              />
              <h3 className={diffStyle.button}>Css </h3>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-600 my-6 text-center">
            Backend Tools
          </h3>

          <div className="flex flex-wrap gap-3">
            <div className={diffStyle.logoStyle}>
              <img
                src="./Express_logo.png"
                alt="logo"
                className={diffStyle.image }
              />
              <h3 className={diffStyle.button}>Expressjs</h3>
            </div>

            <div className={diffStyle.logoStyle}>
              <img src="./MongoDB_logo.png" alt="logo" className={diffStyle.image} />
              <h3 className={diffStyle.button}>MongoDB</h3>
            </div>

            <div className={diffStyle.logoStyle}>
              <img
                src="./Mysql_logo.png"
                alt="logo"
                className={diffStyle.image}
              />
              <h3 className={diffStyle.button}>Mysql </h3>
            </div>
            <div className={diffStyle.logoStyle}>
              <img
                src="./nodejs_logo.png"
                alt="logo"
                className={diffStyle.image}
              />
              <h3 className={diffStyle.button}>Nodejs </h3>
            </div>
            
            
          </div>
        </div>
        
        <div>
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-600 my-6 text-center">
            Other Tools
          </h3>

          <div className="flex flex-wrap gap-3">
            <div className={diffStyle.logoStyle}>
              <img
                src="./Postman_logo.png"
                alt="logo"
                className={diffStyle.image }
              />
              <h3 className={diffStyle.button}>Postman</h3>
            </div>

            <div className={diffStyle.logoStyle}>
              <img src="./Git_logo.png" alt="logo" className={diffStyle.image} />
              <h3 className={diffStyle.button}>Git</h3>
            </div>

            <div className={diffStyle.logoStyle}>
              <img
                src="./Socket.io_logo.webp"
                alt="logo"
                className={diffStyle.image}
              />
              <h3 className={diffStyle.button}>Socket.io </h3>
            </div>            
            
          </div>
        </div>
      </div>
    </section>
  );
}
