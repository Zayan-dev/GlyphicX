import React from 'react'
import { cn } from '../../lib/utils';
// TODO: When all custom buttons are changed remove the unnecessary buttons
const CustomButton = ({ className, text, disabled = false, ...props }) => {
  return (
    <button
      className={cn(
        "relative h-11 sm:h-[50px] w-full min-w-28 sm:min-w-32 items-center justify-center overflow-hidden bg-peanut font-medium text-offWhite shadow-md transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-offWhite before:duration-100 before:ease-linear hover:bg-offWhite hover:text-navyBlue hover:border-navyBlue hover:border-[1px] hover:before:border-[25px]",
        className,
        {
          "bg-gray-400": disabled,
        }
      )}
      {...props}
    >
      <span className="relative subHeading text-base sm:text-lg lg:text-xl">
        {text}
      </span>
    </button>
  );
}

export default CustomButton


// const CustomButton = ({ text, onClick, type = "button" }) => {
//   return (
//     <button type={type} className="relative h-11 sm:h-[50px] w-full min-w-28 sm:min-w-32 items-center justify-center rounded overflow-hidden bg-royalBlue font-medium text-offWhite shadow-md transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-offWhite before:duration-100 before:ease-linear hover:bg-offWhite hover:text-royalBlue hover:border-royalBlue hover:border-[1px] hover:before:border-[25px]">
//       <span className="relative subHeading text-base sm:text-lg lg:text-xl">
//         {text}
//       </span>
//     </button>
//   );
// }

// export default CustomButton


export const CustomButton2 = ({ text, onClick }) => {
  return (
    <button className="relative h-11 sm:h-[50px] w-full min-w-28 sm:min-w-32 items-center justify-center rounded overflow-hidden bg-offWhite font-medium text-navyBlue border border-navyBlue shadow-md transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-navyBlue before:duration-100 before:ease-linear hover:bg-navyBlue hover:text-offWhite hover:border-navyBlue hover:border-[1px] hover:before:border-[25px]">
      <span className="relative subHeading text-base sm:text-lg lg:text-xl">
        {text}
      </span>
    </button>
  );
}
export const CustomButton4 = ({ text, onClick }) => {
  return (
    <button className="relative h-11 sm:h-[50px] w-full min-w-28 sm:min-w-32 items-center justify-center rounded overflow-hidden bg-offWhite font-medium text-navyBlue border border-navyBlue shadow-md transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-navyBlue before:duration-100 before:ease-linear hover:bg-navyBlue hover:text-offWhite hover:border-offWhite hover:border-[1px] hover:before:border-[25px]">
      <span className="relative subHeading text-base sm:text-lg lg:text-xl">
        {text}
      </span>
    </button>
  );
}

export const CustomButton5 = ({ text, onClick, type = "button" }) => {
  return (
    <button type={type} className="relative h-11 sm:h-[50px] w-full min-w-28 sm:min-w-32 items-center justify-center rounded overflow-hidden bg-navyBlue font-medium text-offWhite shadow-md transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-offWhite before:duration-100 before:ease-linear hover:bg-offWhite hover:text-navyBlue hover:border-navyBlue hover:border-[1px] hover:before:border-[25px]">
      <span className="relative subHeading text-base sm:text-lg lg:text-xl">
        {text}
      </span>
    </button>
  );
}
export const CustomButton6 = ({ text, onClick }) => {
  return (
    <button className="relative h-11 sm:h-[50px] w-full min-w-28 sm:min-w-32 items-center justify-center rounded overflow-hidden bg-offWhite font-medium text-navyBlue border border-navyBlue shadow-md transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-peanut before:duration-100 before:ease-linear hover:bg-peanut hover:text-offWhite hover:border-peanut hover:border-[1px] hover:before:border-[25px]">
      <span className="relative subHeading text-base sm:text-lg lg:text-xl">
        {text}
      </span>
    </button>
  );
}

export const CustomButton3 = ({ text, onClick }) => {
  return (
    <button className="relative h-11 sm:h-[50px] w-full min-w-28 sm:min-w-32 items-center justify-center rounded overflow-hidden bg-transparent font-medium text-offWhite border border-offWhite shadow-md transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-offWhite before:duration-100 before:ease-linear hover:bg-offWhite hover:text-navyBlue hover:border-navyBlue hover:border-[1px] hover:before:border-[25px]">
      <span className="relative subHeading text-base sm:text-lg lg:text-xl">
        {text}
      </span>
    </button>
  );
};

