import { motion } from "framer-motion";
import longSleeve from "../assets/products/cgt-long-sleeve-olive.png";
import tshirt from "../assets/products/cgt-tshirt-brown.png";
import hoodie from "../assets/products/cgt-hoodie-green.png";
import jacket from "../assets/products/cgt-jacket-grey.png";

export const products = [
  {
    id: 1,
    name: "Long Sleeve Olive",
    image: longSleeve,
    price: "₴1800",
    category: "Military Apparel",
  },
  {
    id: 2,
    name: "T-Shirt Brown",
    image: tshirt,
    price: "₴1200",
    category: "Military Apparel",
  },
  {
    id: 3,
    name: "Hoodie Green",
    image: hoodie,
    price: "₴2200",
    category: "Outerwear",
  },
  {
    id: 4,
    name: "Jacket Grey",
    image: jacket,
    price: "₴2800",
    category: "Outerwear",
  },
];

export default function Catalog() {
  return (
    <section className="w-full py-24 bg-[#050505] text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-[Orbitron] uppercase mb-12 tracking-widest text-[#00E0FF]">
          Catalog
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#0d0d0d]/60 backdrop-blur-md border border-[#00E0FF]/20 rounded-2xl overflow-hidden shadow-[inset_0_0_15px_rgba(0,255,200,0.15)] hover:shadow-[0_0_25px_rgba(0,255,200,0.3)] transition-all duration-500"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-all duration-300"
              />
              <div className="p-4 text-center">
                <h3 className="font-[Orbitron] text-lg tracking-widest mb-2">
                  {product.title}
                </h3>
                <p className="text-[#00E0FF] font-semibold">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
