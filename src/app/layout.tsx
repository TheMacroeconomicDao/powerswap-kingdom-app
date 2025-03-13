import type { PropsWithChildren } from "react";
import type { Metadata } from "next";

import { Root } from "@/shared/ui/components/Root/ui";

import "../shared/i18n";

import "@telegram-apps/telegram-ui/dist/styles.css";
import "normalize.css";
import "./_assets/globals.css";
import { TelegramScript } from "@/shared/scripts";
import { mainFont, fallbackFont } from "@/shared/ui/fonts";

export const metadata: Metadata = {
  title: "Power Swap",
  description: "Crypto project that wants to build its own ecosystem",
};

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className="h-[100dvh] no-user-drag"
        style={{
          color: "white",
          backgroundColor: "#0e0e0e",
          fontFamily: `${mainFont.style.fontFamily}, ${fallbackFont.style.fontFamily}`,
        }}
      >
        <TelegramScript />
        <Root>{children}</Root>
      </body>
    </html>
  );
}