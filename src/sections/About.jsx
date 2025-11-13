import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg"; // сюда вставишь своё фото

export default function About() {
  return (
    <section className="w-full py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 tracking-wide">ABOUT US</h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            CGT was founded in 2018 by Ukrainian soldiers from the same unit.
            What started as an idea grew into a mission — to raise the prestige
            of the Ukrainian Armed Forces and bring new people with fresh vision
            and strong values into our military community.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            All profits from our merch go directly toward supporting
            professional Ukrainian fighters on the frontlines — the CGT family.
            Over the years, one small group has grown into several fully
            operational units that require constant support and reliable gear to
            complete their tasks.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Even if you are not a service member, wearing CGT means sharing our
            values: to be a worthy Ukrainian, a professional in your craft, and
            someone who helps our army move closer to victory.
          </p>
        </motion.div>

        {/* IMAGE */}
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
