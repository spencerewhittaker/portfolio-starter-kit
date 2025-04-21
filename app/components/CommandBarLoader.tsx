"use client";
import { useEffect } from "react";

export default function CommandBarLoader() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.commandbar.com/latest/commandbar.js";
    script.async = true;
    script.onload = () => {
      console.log("[CommandBar] SDK loaded");
      window.CommandBar = window.CommandBar || function () {
        (window.CommandBar.q = window.CommandBar.q || []).push(arguments);
      };
      window.CommandBar('boot', {
        organizationId: 'bf9e3d7e',
        userId: '12345'
      });
      console.log("[CommandBar] boot called");
    };
    document.head.appendChild(script);
  }, []);

  return null;
}
