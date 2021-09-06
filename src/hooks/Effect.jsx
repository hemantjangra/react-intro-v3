import React, { useEffect, useState } from "react";

export const Effect = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [currentTime]);
  return <p>{currentTime.toLocaleTimeString()}</p>;
};
