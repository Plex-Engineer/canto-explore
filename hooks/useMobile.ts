import { useState, useEffect } from "react";

const MOBILE_SCREEN_WIDTH_MAX = 768;

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < MOBILE_SCREEN_WIDTH_MAX);

    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_SCREEN_WIDTH_MAX);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useMobile;
