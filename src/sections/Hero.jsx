import background from "../assets/bg.jpg";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* === Full-width background === */}
      <img
        src={background}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* === Overlay === */}
      <div className="absolute inset-0 bg-black/40" />

      {/* === Content === */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-[Orbitron] font-bold uppercase tracking-wide">
          Company Group
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 tracking-wide uppercase">
          Ukrainian Military Apparel — Built for Heroes
        </p>
      </div>
    </section>
  );
}
