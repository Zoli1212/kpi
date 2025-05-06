
import ThemeTogglerTwo from "@/components/common/ThemeTogglerTwo";

import { ThemeProvider } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GridShape = () => (
    <div className="absolute inset-0 -z-1 overflow-hidden">
      <div className="absolute right-0 top-0 w-full max-w-[250px] xl:max-w-[450px] h-full">
        <svg
          className="w-full h-full"
          viewBox="0 0 540 254"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <rect width="540" height="254" fill="none" />
          <path
            d="M0 0H540V254H0V0Z"
            fill="url(#grid-pattern-1)"
          />
          <defs>
            <pattern
              id="grid-pattern-1"
              patternContentUnits="userSpaceOnUse"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 0H0V40"
                stroke="#60A5FA"
                strokeWidth="1.5"
                strokeOpacity="0.3"
              />
            </pattern>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-full max-w-[250px] xl:max-w-[450px] h-full">
        <svg
          className="w-full h-full rotate-180"
          viewBox="0 0 540 254"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <rect width="540" height="254" fill="none" />
          <path
            d="M0 0H540V254H0V0Z"
            fill="url(#grid-pattern-2)"
          />
          <defs>
            <pattern
              id="grid-pattern-2"
              patternContentUnits="userSpaceOnUse"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 0H0V40"
                stroke="#60A5FA"
                strokeWidth="1.5"
                strokeOpacity="0.3"
              />
            </pattern>
          </defs>
        </svg>
      </div>
    </div>
  );

  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <ThemeProvider>
        <div className="relative flex lg:flex-row w-full h-screen justify-center flex-col  dark:bg-gray-900 sm:p-0">
          {children}
          <div className="lg:w-1/2 w-full h-full bg-brand-950 dark:bg-white/5 lg:grid items-center hidden">
            <div className="relative items-center justify-center flex z-1">
              <GridShape />
              <div className="flex flex-col items-center max-w-xs">
  
                <p className="text-center text-gray-400 dark:text-white/60">
                  KPI User and Admin Dashboard
                </p>
              </div>
            </div>
          </div>
          <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
            <ThemeTogglerTwo />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
