import { useState } from "react";
import { motion } from "framer-motion";
import ProductModal from "../components/ProductModal";

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
  const [selectedProduct, setSelectedProduct] = useState(null);

  const itemsPerPage = 6;
  const start = (page - 1) * itemsPerPage;
  const visibleProducts = products.slice(start, start + itemsPerPage);

  return (
    <section className="relative w-full py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-14 px-4 sm:px-6">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            relative w-full lg:w-[45%]
            h-[360px] sm:h-[420px] md:h-[500px] lg:h-[700px]
            overflow-hidden rounded-3xl shadow-[0_0_60px_rgba(0,255,255,0.15)]
          "
        >
          <img
            src={soldier}
            alt="CGT Spirit"
            className="w-full h-full object-cover object-center rounded-3xl opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <h3 className="text-[#00E0FF] font-[Orbitron] uppercase tracking-[0.25em] text-sm sm:text-lg">
              Strength • Precision • Brotherhood
            </h3>
          </div>
        </motion.div>

        {/* Products */}
        <div className="w-full lg:w-[55%] flex flex-col items-center">
          <div
            className="grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            gap-6 md:gap-8 
            w-full"
          >
            {visibleProducts.map((product, i) => (
              <motion.div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer relative bg-[#0a0a0a]/80 backdrop-blur-md 
                border border-[#00E0FF]/20 rounded-2xl p-5 flex flex-col items-center 
                transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] hover:-translate-y-2"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 object-contain mb-3 group-hover:scale-110 transition-transform duration-500"
                />
                <h3 className="font-[Orbitron] text-xs sm:text-sm uppercase tracking-widest text-[#00E0FF] mb-1 text-center">
                  {product.name}
                </h3>
                <p className="text-[#00E0FF] font-semibold text-sm sm:text-base">
                  {product.price}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center gap-4 mt-8 md:mt-12">
            {page > 1 && (
              <motion.button
                onClick={() => setPage(page - 1)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-[#00E0FF]/50 text-[#00E0FF] font-[Orbitron] uppercase tracking-widest rounded-full hover:bg-[#00E0FF]/10 transition-all duration-300"
              >
                ← Previous
              </motion.button>
            )}

            {page * itemsPerPage < products.length && (
              <motion.button
                onClick={() => setPage(page + 1)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-[#00E0FF]/50 text-[#00E0FF] font-[Orbitron] uppercase tracking-widest rounded-full hover:bg-[#00E0FF]/10 transition-all duration-300"
              >
                Next →
              </motion.button>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
