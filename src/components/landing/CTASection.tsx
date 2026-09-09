'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Rocket } from 'lucide-react';

export function CTASection() {
  return (
    <section className="ftv-cta">
      <div className="ftv-cta-glow" aria-hidden="true" />
      <div className="ftv-cta-content">
        <h2 className="ftv-cta-title">List Your FinTech Product</h2>
        <p className="ftv-cta-subtitle">Get discovered by 15K+ finance professionals, CTOs, and institutional investors.</p>
        <div className="ftv-cta-buttons">
          <Link href="/submit" className="ftv-cta-btn-primary">
            <Rocket size={15} /> Submit Product
          </Link>
          <Link href="/sponsor" className="ftv-cta-btn-secondary">
            Sponsor <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
