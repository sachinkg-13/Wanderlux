"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  showSpinner: false,
  speed: 400,
  minimum: 0.2,
  trickleSpeed: 200,
});

const Loader = () => {
  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    handleStart(); // Start progress bar when route changes

    const timer = setTimeout(() => {
      handleStop(); // Stop only when the page is ready
    }, 100); // Small delay to ensure smooth transition

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default Loader;
