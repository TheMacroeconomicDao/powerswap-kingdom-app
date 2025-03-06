"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useUnit } from "effector-react";
import { LastOpenedPageType, setLastOpenedPage } from "@/entities";

interface AnimatedRoutingButtonProps {
  children?: React.ReactNode;
  href: string;
  setLastPageProp: LastOpenedPageType;
  className?: string;
  move: "left" | "right";
}

export const AnimatedRoutingButton: React.FC<AnimatedRoutingButtonProps> = ({
  children,
  href,
  className,
  move,
  setLastPageProp,
}) => {
  const setLastPage = useUnit(setLastOpenedPage);
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransition = async () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    if (typeof document !== "undefined") {
      document.body.classList.add(`page-transition-${move}`);
    }

    await new Promise((resolve) => setTimeout(resolve, 700));
    
    router.push(href);
    setLastPage(setLastPageProp);
    
    await new Promise((resolve) => setTimeout(resolve, 100));
    if (typeof document !== "undefined") {
      document.body.classList.remove(`page-transition-${move}`);
    }

    setIsTransitioning(false);
  };

  return (
    <button className={className} onClick={handleTransition} disabled={isTransitioning}>
      {children}
    </button>
  );
};