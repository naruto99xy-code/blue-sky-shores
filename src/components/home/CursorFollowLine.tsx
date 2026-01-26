import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

const CursorTrailLine = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const pointIdRef = useRef(0);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Elastic spring config for smooth trailing
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
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
      
      // Add new point to trail
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: pointIdRef.current++,
      };
      
      setTrail(prev => {
        const newTrail = [...prev, newPoint];
        // Keep only last 20 points for performance
        return newTrail.slice(-20);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDesktop, cursorX, cursorY]);

  // Cleanup old trail points
  useEffect(() => {
    if (!isDesktop || trail.length === 0) return;
    
    const cleanup = setInterval(() => {
      setTrail(prev => prev.slice(-15));
    }, 50);
    
    return () => clearInterval(cleanup);
  }, [isDesktop, trail.length]);

  if (!isDesktop) return null;

  // Generate smooth path from trail points
  const generatePath = () => {
    if (trail.length < 2) return "";
    
    let path = `M ${trail[0].x} ${trail[0].y}`;
    
    for (let i = 1; i < trail.length; i++) {
      const prev = trail[i - 1];
      const curr = trail[i];
      
      // Use quadratic bezier for smooth curves
      const midX = (prev.x + curr.x) / 2;
      const midY = (prev.y + curr.y) / 2;
      
      path += ` Q ${prev.x} ${prev.y} ${midX} ${midY}`;
    }
    
    // Connect to current cursor position
    if (trail.length > 0) {
      const last = trail[trail.length - 1];
      path += ` L ${last.x} ${last.y}`;
    }
    
    return path;
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <svg className="w-full h-full">
        {/* Main trail line */}
        <motion.path
          d={generatePath()}
          fill="none"
          stroke="hsl(var(--cursor-trail))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          style={{
            filter: "drop-shadow(0 0 2px hsl(var(--cursor-trail) / 0.5))",
          }}
        />
        
        {/* Leading dot at cursor position */}
        <motion.circle
          cx={cursorXSpring}
          cy={cursorYSpring}
          r="4"
          fill="hsl(var(--cursor-trail))"
          style={{
            filter: "drop-shadow(0 0 4px hsl(var(--cursor-trail) / 0.6))",
          }}
        />
        
        {/* Subtle outer glow circle */}
        <motion.circle
          cx={cursorXSpring}
          cy={cursorYSpring}
          r="8"
          fill="none"
          stroke="hsl(var(--cursor-trail) / 0.3)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default CursorTrailLine;
