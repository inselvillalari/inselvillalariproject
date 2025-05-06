import { useEffect, useRef } from "react";
import "splitting/dist/splitting.css";

const SplitComponent = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    const run = async () => {
      if (typeof window !== "undefined") {
        const Splitting = (await import("splitting")).default;
        Splitting({ target: ref.current });
      }
    };
    run();
  }, [children]);

  return <div ref={ref}>{children}</div>;
};

export default SplitComponent;
