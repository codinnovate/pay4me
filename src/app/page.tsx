import Blog from "@/components/Blog";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";

export default function Home(){
  return (
    <section className="flex flex-col  md:gap-10">
      <Header />
      <Hero />
      <Features />
      <Testimonial />
      <Faq />
      <Blog />
      <Footer />
    </section>
  )
}