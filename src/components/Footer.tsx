'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#040e0c] border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="https://framerusercontent.com/images/pmmr9z5snD2P20Bedm7yUIerAkE.png"
              alt="ERTQA"
              width={48}
              height={48}
              className="rounded-sm"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Saudi Arabia&apos;s leading ecosystem fusing manufacturing,
              craftsmanship, and design into exceptional products.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/30 text-xs tracking-widest uppercase mb-5">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {['HOME', 'ABOUT', 'WHY US', 'SERVICES'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white/60 text-sm hover:text-ertqa-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/30 text-xs tracking-widest uppercase mb-5">Contact</h4>
            <Link
              href="/contact-us-eng"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ertqa-gold/40 text-ertqa-gold text-sm hover:bg-ertqa-gold/10 transition"
            >
              Start Your Journey
            </Link>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <span>© {new Date().getFullYear()} ERTQA. All rights reserved.</span>
          <span>Crafted with mastery in Saudi Arabia</span>
        </div>
      </div>
    </footer>
  );
}
