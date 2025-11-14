import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Catalog from "./sections/Catalog";
import About from "./sections/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="catalog">
        <Catalog />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contacts">
        <Footer />
      </section>
    </>
  );
}
