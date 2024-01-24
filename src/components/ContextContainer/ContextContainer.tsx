"use client";
import { lightTheme } from "@/lib";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { FC, ReactNode } from "react";

interface ContextContainerProps {
  children: ReactNode;
}

export const ContextContainer: FC<ContextContainerProps> = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
