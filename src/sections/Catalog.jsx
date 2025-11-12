import { useState } from "react";
import { motion } from "framer-motion";
import longSleeve from "../assets/products/cgt-long-sleeve-olive.png";
import tshirt from "../assets/products/cgt-tshirt-brown.png";
import hoodie from "../assets/products/cgt-hoodie-green.png";
import jacket from "../assets/products/cgt-jacket-grey.png";
import hat from "../assets/products/cgt-hat-grey.png";
import patch from "../assets/products/cgt-patch-pvh.png";
import socks from "../assets/products/cgt-socks-brown.png";
import soldier from "../assets/backgrounds/bg-soldier.jpg";

export const products = [
  { id: 1, name: "Long Sleeve Olive", image: longSleeve, price: "₴1800" },
  { id: 2, name: "T-Shirt Brown", image: tshirt, price: "₴1200" },
  { id: 3, name: "Hoodie Green", image: hoodie, price: "₴2200" },
  { id: 4, name: "Jacket Grey", image: jacket, price: "₴2800" },
  { id: 5, name: "CGT Beanie", image: hat, price: "₴900" },
  { id: 6, name: "CGT Patch PVC", image: patch, price: "₴350" },
  { id: 7, name: "Tactical Socks", image: socks, price: "₴450" },
];

export default function Catalog() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const start = (page - 1) * itemsPerPage;
  const visibleProducts = products.slice(start, start + itemsPerPage);

  return (
    <section className="relative w-full min-h-[110vh] py-16 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-14 px-6">
        {/* --- LEFT SIDE: IMAGE --- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-[45%] overflow-hidden rounded-3xl shadow-[0_0_60px_rgba(0,255,255,0.15)] translate-x-[-30px]"
        >
          <img
            src={soldier}
            alt="CGT Spirit"
            className="w-full h-[700px] object-cover object-[40%_center] rounded-3xl opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <h3 className="text-[#00E0FF] font-[Orbitron] uppercase tracking-[0.25em] text-lg md:text-xl">
              Strength • Precision • Brotherhood
            </h3>
          </div>
        </motion.div>

        {/* --- RIGHT SIDE: PRODUCTS --- */}
        <div className="w-full lg:w-[55%] flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
            {visibleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-[#0a0a0a]/80 backdrop-blur-md border border-[#00E0FF]/20 rounded-2xl p-5 flex flex-col items-center justify-between transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] hover:-translate-y-2"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain mb-3 group-hover:scale-110 transition-transform duration-500"
                />
                <h3 className="font-[Orbitron] text-sm uppercase tracking-widest text-[#00E0FF] mb-1 text-center">
                  {product.name}
                </h3>
                <p className="text-[#00E0FF] font-semibold text-base">
                  {product.price}
                </p>
              </motion.div>
            ))}
          </div>

          {/* === Pagination Buttons === */}
          <div className="flex items-center gap-6 mt-10">
            {page > 1 && (
              <motion.button
                onClick={() => setPage(page - 1)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-[#00E0FF]/50 text-[#00E0FF] font-[Orbitron] uppercase tracking-widest rounded-full hover:bg-[#00E0FF]/10 transition-all duration-300"
              >
                ← Previous
              </motion.button>
            )}

            {page * itemsPerPage < products.length && (
              <motion.button
                onClick={() => setPage(page + 1)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-[#00E0FF]/50 text-[#00E0FF] font-[Orbitron] uppercase tracking-widest rounded-full hover:bg-[#00E0FF]/10 transition-all duration-300"
              >
                Next →
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
