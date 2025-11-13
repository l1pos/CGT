import { motion } from "framer-motion";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 40 }}
        transition={{ duration: 0.3 }}
        className="bg-[#0a0a0a] border border-[#00E0FF]/30 rounded-3xl p-8 w-[90%] max-w-md text-white shadow-[0_0_40px_rgba(0,255,255,0.3)]"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-contain mb-6 rounded-xl"
        />

        <h2 className="font-[Orbitron] text-xl tracking-widest text-[#00E0FF] mb-3 text-center">
          {product.name}
        </h2>

        <p className="text-[#00E0FF] text-2xl font-bold text-center mb-6">
          {product.price}
        </p>

        {/* Button */}
        <a
          href="https://t.me/CGTshop_bot"
          target="_blank"
          className="block text-center px-6 py-3 bg-[#00E0FF]/20 text-[#00E0FF] rounded-full
          font-[Orbitron] uppercase tracking-widest hover:bg-[#00E0FF]/30 transition-all duration-300"
        >
          Order via Telegram
        </a>

        {/* Close button */}
        <button
          onClick={onClose}
          className="mt-6 w-full py-2 text-sm font-light text-gray-400 hover:text-white"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}
