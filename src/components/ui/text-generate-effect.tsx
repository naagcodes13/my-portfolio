"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  textColor = "", // New prop for text color
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  textColor?: string; // TypeScript type for the new prop
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              // Use custom text color if provided, otherwise use default theme colors
              className={cn("opacity-0", textColor || "dark:text-white text-black")}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className={cn("text-2xl leading-snug tracking-wide", 
          // Apply custom text color to the container if specified
          textColor || "dark:text-white text-black"
        )}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};