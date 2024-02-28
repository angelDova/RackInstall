"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const ToggleSwitch = ({
  checked,
  setChecked,
}: {
  checked: boolean;
  setChecked: (checked: boolean) => void;
}) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <form className="flex space-x-4  antialiased items-center">
      <label
        htmlFor="checkbox"
        className={twMerge(
          "h-7  px-1  flex items-center border border-transparent shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] rounded-full w-[60px] relative cursor-pointer transition duration-200",
          checked ? "bg-cyan-500" : "bg-slate-700 border-slate-500"
        )}
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <motion.div
            initial={{
              width: "20px",
              x: checked ? 0 : 32,
            }}
            animate={{
              height: ["20px", "10px", "20px"],
              width: ["20px", "30px", "20px", "20px"],
              x: checked ? 32 : 0,
            }}
            transition={{
              duration: 0.3,
              delay: 0.1,
            }}
            key={String(checked)}
            className={twMerge(
              "h-[20px] block rounded-full bg-white shadow-md z-10"
            )}
          ></motion.div>
        ) : (
          <motion.div
            initial={{
              width: "20px",
              x: checked ? 0 : 32,
            }}
            animate={{
              height: ["20px", "10px", "20px"],
              width: ["20px", "30px", "20px", "20px"],
              x: checked ? 32 : 0,
            }}
            transition={{
              duration: 0.3,
              delay: 0.1,
            }}
            key={String(checked)}
            className={twMerge(
              "h-[20px] block rounded-full bg-white shadow-md z-10"
            )}
          ></motion.div>
        )}
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="hidden"
          id="checkbox"
        />
      </label>
    </form>
  );
};
