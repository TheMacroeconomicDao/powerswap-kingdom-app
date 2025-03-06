"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useUnit } from "effector-react";
import { LastOpenedPageType, setLastOpenedPage } from "@/entities";

interface AnimatedRoutingButtonProps {
  children: React.ReactNode;
  href: string;
  setLastPageProp: LastOpenedPageType;
  className?: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const AnimatedRoutingButton: React.FC<AnimatedRoutingButtonProps> = ({
  children,
  href,
  className,
  setLastPageProp
}) => {
   const setLastPage = useUnit(setLastOpenedPage);
  const router = useRouter();

  const handleTransition = async () => {
    const body = document.querySelector("body");

    body?.classList.add("page-transition");
    
    await sleep(500);

    router.push(href);
    setLastPage(setLastPageProp);

    body?.classList.remove("page-transition");
  };

  return (
    <button className={className} onClick={handleTransition}>
      {children}
    </button>
  );
};
