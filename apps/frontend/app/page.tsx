'use client';

import { useEffect, useState } from "react";
import {AnimatePresence} from "framer-motion";
import Preloader from "@/components/layout/Preloader";


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    void (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();

      timeoutId = setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader/>}
      </AnimatePresence>
    </main>
  );
}
