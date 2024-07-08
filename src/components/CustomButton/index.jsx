import React from 'react'

const CustomButton = ({text, onClick}) => {
  return (
    <button className="relative h-[50px] w-32 items-center justify-center rounded overflow-hidden bg-royalBlue font-medium text-offWhite shadow-md transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-offWhite before:duration-100 before:ease-linear hover:bg-offWhite hover:text-royalBlue hover:border-royalBlue hover:border-[1px] hover:before:border-[25px]">
      <span className="relative">{text}</span>
    </button>
  );
}

export default CustomButton


export const CustomButton2 = ({text, onClick}) => {
  return (
    <button className="relative h-[50px] w-32 items-center justify-center rounded overflow-hidden bg-offWhite font-medium text-royalBlue border border-royalBlue shadow-md transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-royalBlue before:duration-100 before:ease-linear hover:bg-royalBlue hover:text-offWhite hover:border-offWhite hover:border-[1px] hover:before:border-[25px]">
      <span className="relative">{text}</span>
    </button>
  );
}


