import Header from '@/components/Header';
import Hero from '@/components/Hero';
import News from '@/components/News';
import ConsultationSection from '@/components/ConsultationSection';
import ContactFormSection from '@/components/ContactFormSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <News />
      <ConsultationSection />
      <ContactFormSection />
      <Footer />
    </main>
  );
}