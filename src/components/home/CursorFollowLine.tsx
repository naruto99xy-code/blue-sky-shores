import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorFollowLine = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024 && !("ontouchstart" in window));
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDesktop, cursorX, cursorY]);

  if (!isDesktop) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg className="w-full h-full">
        <motion.circle
          cx={cursorXSpring}
          cy={cursorYSpring}
          r="120"
          fill="none"
          stroke="hsl(210 79% 51% / 0.08)"
          strokeWidth="1"
        />
        <motion.circle
          cx={cursorXSpring}
          cy={cursorYSpring}
          r="80"
          fill="none"
          stroke="hsl(210 79% 51% / 0.12)"
          strokeWidth="1"
        />
        <motion.circle
          cx={cursorXSpring}
          cy={cursorYSpring}
          r="40"
          fill="hsl(210 79% 51% / 0.05)"
        />
      </svg>
    </div>
  );
};

export default CursorFollowLine;
