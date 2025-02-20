import React from "react";

const Button = ({text}) => {
  return (
      <button className="relative overflow-hidden outline-none   bg-gradient-to-b hover:bg-white hover:text-red-600   bg-red-600 text-white text-lg font-bold     uppercase px-7 py-1.5 rounded-[20px] shadow-lg transition-transform duration-300 hover:scale-105 font-ox">
          {/* <div className="trape absolute top-0 left-1/2 -translate-x-1/2"></div> */}
      {text}
      {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-[#C83C35]"></span> */}
      </button>
//       
//   <!-- START Box -->
//   <div class="animated-border-box-glow"></div>
//   <div class="animated-border-box">
//     <!-- Inside the Box -->
//   </div>
//   <!-- END -->
// 
  );
};

export default Button;