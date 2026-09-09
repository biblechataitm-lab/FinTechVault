'use client';

import React from 'react';
import { Shield, Zap, BarChart3, Lock, Globe, TrendingUp } from 'lucide-react';

const FEATURES = [
  { icon: Shield, title: 'Compliance Verified', desc: 'PCI-DSS, SOC2, and regulatory compliance status for every product.' },
  { icon: Zap, title: 'API Benchmarks', desc: 'Latency, uptime, and throughput benchmarks for payment processors.' },
  { icon: BarChart3, title: 'Market Intelligence', desc: 'Funding rounds, market share, and competitive landscape analysis.' },
  { icon: Lock, title: 'Security Ratings', desc: 'Independent security audit scores and vulnerability history.' },
  { icon: Globe, title: 'Global Coverage', desc: 'Multi-currency support, regional availability, and licensing data.' },
  { icon: TrendingUp, title: 'FinTech Trends', desc: 'Emerging categories — embedded finance, BNPL, and DeFi infrastructure.' },
];

export function FeaturesSection() {
  return (
    <section className="ftv-features">
      <div className="ftv-features-header">
        <h2 className="ftv-section-title">
          Why <span className="ftv-accent-text">FinTechVault</span>
        </h2>
        <p className="ftv-section-subtitle">More than a directory — a curated ecosystem built for your workflow.</p>
      </div>
      <div className="ftv-features-grid">
        {FEATURES.map((f) => (
          <div key={f.title} className="ftv-feature-card">
            <div className="ftv-feature-icon"><f.icon size={22} /></div>
            <h3 className="ftv-feature-title">{f.title}</h3>
            <p className="ftv-feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
