'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ApproachSection from '@/components/sections/ApproachSection';
import BrandsSection from '@/components/sections/BrandsSection';
import StatsSection from '@/components/sections/StatsSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative bg-ertqa-dark">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ApproachSection />
      <BrandsSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
