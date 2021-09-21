import { useEffect, useState } from "react";

export const useMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    process.nextTick(() => {
      if (typeof window !== "undefined") {
        setHasMounted(true);
      }
    });
  }, []);

  return { hasMounted };
};
