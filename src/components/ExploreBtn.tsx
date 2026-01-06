// components/ExploreBtn.tsx
"use client";

import Image from "next/image";

const ExploreBtn = () => {
  const handleScroll = () => {
    const element = document.getElementById("events");

    if (element) {
      // Dapatkan tinggi navbar dari CSS atau hitung
      const navbar = document.querySelector("header");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      // Scroll dengan offset
      const y = element.getBoundingClientRect().top + window.pageYOffset - (navbarHeight + 20);

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <button type="button" id="explore-btn" className="mx-auto mt-10 md:animate-bounce hover:animate-none" onClick={handleScroll}>
      <span className="flex items-center justify-center gap-2">
        Explore Events
        <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24} />
      </span>
    </button>
  );
};

export default ExploreBtn;
