export default function Footer() {
  return (
    <footer className="w-full py-10 bg-black/80 backdrop-blur-md border-t border-[#00E0FF]/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400 font-[Orbitron] tracking-widest text-sm">
        {/* Left side */}
        <div className="flex items-center gap-3 select-none">
          <img
            src="/src/assets/CGT-logo.png"
            alt="Company Group Logo"
            className="w-10 h-10 object-contain"
          />
          <p className="text-white uppercase">Company Group Team</p>
        </div>

        {/* Center text */}
        <p className="text-gray-500 text-xs md:text-sm">
          © 2025 CGT. All Rights Reserved.
        </p>

        {/* Right side - socials */}
        <div className="flex gap-6 text-[#00E0FF]">
          <a href="https://t.me/cgtshop" target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a
            href="https://www.instagram.com/company_group_team"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
