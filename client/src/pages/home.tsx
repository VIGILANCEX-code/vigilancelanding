import Navbar from "@/components/vigilance/Navbar";
import Hero from "@/components/vigilance/Hero";
import About from "@/components/vigilance/About";
import Features from "@/components/vigilance/Features";
import UseCases from "@/components/vigilance/UseCases";
import Contact from "@/components/vigilance/Contact";
import Footer from "@/components/vigilance/Footer";
import Chatbot from "@/components/vigilance/Chatbot";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <UseCases />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
