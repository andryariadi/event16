"use client";

import Image from "next/image";
import Link from "next/link";

const ExploreBtn = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <button type="button" id="explore-btn" className="mx-auto mt-10 md:animate-bounce hover:animate-none">
      <Link href="#events" onClick={handleScroll}>
        <span className="flex items-center justify-center gap-2">
          Explore Events
          <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24} />
        </span>
      </Link>
    </button>
  );
};

export default ExploreBtn;
