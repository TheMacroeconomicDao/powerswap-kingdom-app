"use client";
import { useEffect } from "react";

export function TelegramScript() {
  useEffect(() => {
    if (!window.Telegram) {
      const script = document.createElement("script");
      script.src = "https://telegram.org/js/telegram-web-app.js";
      script.async = true;
      script.onload = () => {
        console.log("Telegram WebApp SDK загружен", window.Telegram);
      };
      document.head.appendChild(script);
    }
  }, []);

  return null;
}
