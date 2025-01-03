"use client";
import {ThemeProvider as NextThemesProvider, ThemeProviderProps} from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>; // Render children without ThemeProvider during SSR
  }
  
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}