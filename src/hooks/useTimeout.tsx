import { useEffect, useState } from "react";

export function useTimeout(ms: number = 5000) {
  const [isOver, setIsOver] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOver(true);
    }, ms);

    return () => clearTimeout(timeout);
  }, []);

  return { isOver };
}
