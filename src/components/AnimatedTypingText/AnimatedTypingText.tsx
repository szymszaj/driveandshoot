import React, { useEffect, useRef, useState } from "react";

interface AnimatedTypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  cursor?: boolean;
}

const AnimatedTypingText: React.FC<AnimatedTypingTextProps> = ({
  text,
  className = "",
  speed = 50,
  cursor = true,
}) => {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayed("");
    indexRef.current = 0;
    const interval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayed((prev) => prev + (text.charAt(indexRef.current) ?? ""));
        indexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      {cursor && indexRef.current < text.length && (
        <span className="animate-blink ml-1">|</span>
      )}
    </span>
  );
};

export default AnimatedTypingText;
