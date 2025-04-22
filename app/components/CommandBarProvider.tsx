"use client";

declare global {
  interface Window {
    CommandBar?: {
      boot: (userId: string) => Promise<void>;
      shutdown: () => void;
      getUser?: () => any;
    };
  }
}

import { useEffect } from "react";

export default function CommandBarProvider() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://api.commandbar.com/latest/bf9e3d7e";
      script.async = true;
      script.onload = () => {
        const userId = "12345";
        window.CommandBar?.boot(userId);
        console.log("[CommandBar] Booted via script tag");
      };
      document.head.appendChild(script);

      return () => {
        window.CommandBar?.shutdown();
      };
    }
  }, []);

  return null;
}
