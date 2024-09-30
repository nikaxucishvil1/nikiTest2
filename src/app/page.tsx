"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Home = () => {
  const [hovere, setHovere] = useState(false);

  return (
    <div className="p-5 bg-blue-900">
      <div className="box flex flex-col items-center justify-center w-full h-screen">
        <div
          onMouseEnter={() => setHovere(true)}
          onMouseLeave={() => setHovere(false)}
          className={`wrapper w-full h-full flex flex-col items-center justify-center bg-black relative overflow-hidden transition-colors duration-1000 ${
            hovere ? "text-black" : "text-white"
          }`}
        >
          <div className="w-full flex items-center justify-center z-20">
            xaxaaxxa nikiiii
          </div>
          <motion.div
            animate={{
              y: hovere ? "0vh" : "-55vh",
              scale: hovere ? 2.2 : 1,
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="clip bg-white w-full h-screen absolute z-10 hidden xl:block"
          />
        </div>
        <div className="w-full flex items-center justify-center h-full bg-black text-white relative z-20">
          2
        </div>
        <div className="w-full flex items-center justify-center h-full bg-black text-white relative z-20">
          3
        </div>
      </div>
      <div className="w-full flex items-center justify-center h-full bg-black text-white relative z-20">
        3test
      </div>
      <div className="w-full flex items-center justify-center h-full bg-black text-white relative z-20">
        3test
      </div>
      <div className="w-full flex items-center justify-center h-full bg-black text-white relative z-20">
        3test
      </div>
      <div className="w-full flex items-center justify-center h-full bg-black text-white relative z-20">
        3test
      </div>
      <div className="w-full flex items-center justify-center h-[700px] bg-black text-white relative z-20">
        test
      </div>
    </div>
  );
};

export default Home;
