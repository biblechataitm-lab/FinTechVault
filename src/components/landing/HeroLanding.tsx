'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, TrendingUp } from 'lucide-react';

export function HeroLanding() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const children = hero.querySelectorAll('.ftv-animate');
    children.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(24px)';
      setTimeout(() => {
        htmlEl.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        htmlEl.style.opacity = '1';
        htmlEl.style.transform = 'translateY(0)';
      }, 100 + i * 100);
    });
  }, []);

  return (
    <section ref={heroRef} className="ftv-hero">
      <div className="ftv-hero-bg" aria-hidden="true" />
      <div className="ftv-hero-container">
        <div className="ftv-hero-content">
          <div className="ftv-animate ftv-hero-badge">
            <span>Financial Technology Intelligence</span>
          </div>
          <h1 className="ftv-animate ftv-hero-title">
            Navigate the{' '}
            <span className="ftv-accent-text">FinTech Landscape</span>
          </h1>
          <p className="ftv-animate ftv-hero-subtitle">
            Discover 1,200+ financial technology products — from payment processors and lending APIs to compliance engines and crypto infrastructure.
          </p>
          <form
            className="ftv-animate ftv-hero-search"
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.querySelector('input');
              if (input?.value.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(input.value.trim())}`;
              }
            }}
          >
            <Search size={16} className="ftv-hero-search-icon" />
            <input type="text" placeholder="Search fintech tools, payment APIs..." />
            <button type="submit">Explore <ArrowRight size={14} /></button>
          </form>
          <div className="ftv-animate ftv-hero-tags">
            <Link href="/category/ai" className="ftv-tag">AI Finance</Link>
            <Link href="/category/developer-tools" className="ftv-tag">Payment APIs</Link>
            <Link href="/category/productivity" className="ftv-tag">Accounting</Link>
            <Link href="/trends" className="ftv-tag ftv-tag-hot">
              <TrendingUp size={12} /> Trending
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
