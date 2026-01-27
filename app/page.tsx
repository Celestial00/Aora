import ContactPage from "./components/common/ContactForm";
import About from "./components/main/About";
import BlogSection from "./components/main/BlogSection";
import Hero from "./components/main/hero";
import WhyUs from "./components/main/WhyUs";

export default function page() {
  return (
    <>
      <Hero />
      <About />
      <WhyUs />
      <BlogSection />
      <ContactPage />
    </>
  );
}
