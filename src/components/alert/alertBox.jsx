import React from "react";

const Alert = ({ display, message, type, onClose }) => {
  if (!display) return null; // Don't render the alert if display is false

  // Determine the border color based on the type
  let borderColor = "";
  switch (type) {
    case "success":
      borderColor = "border-green-500";
      break;
    case "error":
      borderColor = "border-red-500";
      break;
    case "warning":
      borderColor = "border-yellow-500";
      break;
    default:
      borderColor = "border-navyBlue";
      break;
  }

  return (
    <div className="fixed inset-0 px-2 flex items-center justify-center bg-offWhite bg-opacity-50 z-50">
      <div
        className={`bg-white py-10 px-6 rounded-lg border-4 ${borderColor} shadow-lg max-w-lg mx-auto relative`}
      >
        {/* Close button */}
        <button
          className="absolute text-3xl top-1 right-2 text-navyBlue hover:text-royalBlue"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Alert message */}
        <p className="px-2 text-lg font-semibold text-gray-800">{message}</p>
      </div>
    </div>
  );
};

export default Alert;
