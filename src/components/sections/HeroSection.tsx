'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import HeroCanvas from '@/components/canvas/HeroCanvas';

gsap.registerPlugin(ScrollTrigger);

const marqueeItems = [
  'We are Ertqa - Saudi Arabia\'s leading ecosystem fusing manufacturing, craftsmanship, and design into exceptional products.',
  'An integrated ecosystem that unites creativity and manufacturing.',
  'An integrated ecosystem that unites creativity and manufacturing.',
  'An integrated ecosystem that unites creativity and manufacturing.',
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.8 });

      tl.fromTo(
        headingRef.current,
        { y: 80, opacity: 0, filter: 'blur(20px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.4, ease: 'power4.out' }
      )
        .fromTo(
          subRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
          '-=0.9'
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.7'
        );

      // Scroll-based hero fade
      gsap.to(heroRef.current, {
        opacity: 0.3,
        scale: 0.97,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ertqa-dark"
    >
      {/* WebGL Background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-ertqa-dark/40 via-transparent to-ertqa-dark pointer-events-none" />

      {/* Hero image */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Image
          src="https://framerusercontent.com/images/af34sEGOzodSyZyKguUAaLSUWU.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ertqa-dark/70 via-ertqa-dark/40 to-ertqa-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto pt-32">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-ertqa-gold/50" />
          <span className="text-ertqa-gold/80 text-xs tracking-[0.3em] uppercase font-semibold">
            Where emotion becomes tangible
          </span>
          <div className="w-8 h-px bg-ertqa-gold/50" />
        </div>

        {/* Main heading */}
        <div ref={headingRef}>
          <h1 className="text-white font-bold leading-[0.9] tracking-tight">
            <span className="block text-[clamp(3.5rem,10vw,9rem)] text-white/90">
              Where
            </span>
            <span className="block text-[clamp(3.5rem,10vw,9rem)] text-gradient-gold">
              emotion
            </span>
            <span className="block text-[clamp(3.5rem,10vw,9rem)] text-white/80">
              becomes
            </span>
            <span className="block text-[clamp(3.5rem,10vw,9rem)] italic font-light text-white/60">
              Tangible
            </span>
          </h1>
        </div>

        {/* Subtext */}
        <p
          ref={subRef}
          className="mt-8 text-white/55 text-base md:text-lg max-w-xl leading-relaxed"
        >
          We are Ertqa &mdash; Saudi Arabia&apos;s leading ecosystem uniting design,
          craftsmanship, and manufacturing.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="mt-10 flex items-center gap-4">
          <Link
            href="/contact-us-eng"
            className="px-8 py-4 rounded-full bg-ertqa-gold text-ertqa-dark font-bold text-sm tracking-wider hover:bg-ertqa-gold/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-ertqa-gold/20"
          >
            Get Started
          </Link>
          <Link
            href="#about-us-1"
            className="px-8 py-4 rounded-full border border-white/20 text-white/70 font-semibold text-sm tracking-wider hover:border-ertqa-gold/40 hover:text-ertqa-gold transition-all duration-300"
          >
            Discover More
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-ertqa-gold/50 to-transparent animate-pulse" />
      </div>

      {/* Marquee strip */}
      <div
        ref={marqueeRef}
        className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-white/5 bg-white/[0.02] py-3"
      >
        <div className="flex whitespace-nowrap animate-marquee gap-16">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-white/30 text-xs tracking-widest uppercase flex-shrink-0">
              {item} &nbsp;&nbsp;&#x2022;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
