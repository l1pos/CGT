import bgDesktop from "../assets/backgrounds/bg-dekstop.jpg";
import bgTablet from "../assets/backgrounds/bg-tab.jpg";
import bgMobile from "../assets/backgrounds/bg-mob.jpg";

export default function Hero() {
  return (
    <section
      className="
      relative w-full 
      min-h-[85vh] 
      md:min-h-screen 
      flex flex-col items-center justify-start
      text-white overflow-hidden
    "
    >
      {/* === MOBILE (до 768px) === */}
      <img
        src={bgMobile}
        alt="Hero Mobile"
        className="
          absolute inset-0 w-full h-full 
          object-cover object-center 
          md:hidden
        "
      />

      {/* === TABLET (768px — 1024px) === */}
      <img
        src={bgTablet}
        alt="Hero Tablet"
        className="
          absolute inset-0 w-full h-full 
          object-cover object-[center_20%]
          hidden md:block lg:hidden
        "
      />

      {/* === DESKTOP (1024px+) === */}
      <img
        src={bgDesktop}
        alt="Hero Desktop"
        className="
          absolute inset-0 w-full h-full 
          object-cover object-center
          hidden lg:block
        "
      />

      {/* === Overlay === */}
      <div className="absolute inset-0 bg-black/50 md:bg-black/40" />

      {/* === Content (TEXT HIGH UP) === */}
      <div
        className="
        relative z-10 text-center px-4
        pt-40 sm:pt-48 md:pt-56 lg:pt-64
      "
      >
        <h1
          className="
            text-4xl 
            sm:text-5xl 
            md:text-6xl 
            lg:text-7xl 
            font-[Orbitron] font-bold 
            uppercase tracking-wide
          "
        >
          Company Group
        </h1>

        <p
          className="
            mt-3 
            text-sm sm:text-lg md:text-xl 
            text-gray-300 
            tracking-wide uppercase
          "
        >
          Ukrainian Military Apparel — Built for Heroes
        </p>
      </div>

      {/* === Bottom fade === */}
      <div
        className="
        absolute bottom-0 left-0 w-full 
        h-28 bg-gradient-to-t 
        from-black/100 via-black/10 to-transparent 
        pointer-events-none
      "
      ></div>
    </section>
  );
}
