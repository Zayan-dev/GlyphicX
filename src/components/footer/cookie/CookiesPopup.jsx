import React, { useState, useEffect } from 'react';

const CookiesPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setIsVisible(true); // Show the popup if cookies are not yet accepted
    }
  }, []);

  const handleAcceptCookies = () => {
    // Set the cookiesAccepted flag in localStorage
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false); // Hide the popup
  };

  return (
    isVisible && (
      <div className="fixed bottom-4 left-4 mr-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg z-50 flex flex-col sm:flex-row items-center">
        <p className="text-sm mb-2 sm:mb-0 sm:mr-4">
          Our website uses cookies to improve your browsing experience. By continuing to use this site, you consent to our use of cookies.
        </p>
        <button
          onClick={handleAcceptCookies}
          className="bg-blue-600 hover:bg-blue-500 text-white py-1 px-3 rounded transition"
        >
          Accept Cookies
        </button>
      </div>
    )
  );
};

export default CookiesPopup;
