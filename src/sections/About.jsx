import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";

export default function About() {
  return (
    <section className="w-full py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-wide">
            ABOUT US
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
            CGT was founded in 2018 by Ukrainian soldiers from the same unit...
          </p>

          <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
            All profits from our merch go directly toward supporting fighters...
          </p>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Even if you're not a service member, wearing CGT means sharing our
            values.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <img
            src={aboutImg}
            alt="CGT team"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
