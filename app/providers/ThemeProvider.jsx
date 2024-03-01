"use client";

import React, { useEffect, useState } from "react";
//import { ThemeProvider, useTheme } from "next-themes";

const { ThemeProvider, useTheme } = dynamic(() => import("next-themes"), {
  ssr: false
});

export default function Providers({ children }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
