'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, CreditCard, Landmark, Coins, TrendingUp, Lock, Search, ArrowRight, ArrowUpRight, CheckCircle2, Star, Users } from 'lucide-react';

const SETTLEMENT_STREAMS = [
  {
    id: 'instant-fiat',
    name: 'FedNow / RTP Instant Settlement',
    type: 'Instant Fiat Rails',
    volume: '$48,250.00 USD',
    latency: '240ms',
    compliance: 'SOC-2 Type II • Nacha Verified',
    status: 'SETTLED',
    txHash: '0x8f2a...c914',
  },
  {
    id: 'cross-border',
    name: 'Cross-Border FX Clearing Mesh',
    type: 'SWIFT & SEPA Instant',
    volume: '€14,800.00 EUR',
    latency: '850ms',
    compliance: 'PCI-DSS Level 1 • ISO 20022',
    status: 'SETTLED',
    txHash: '0x4e1b...99a0',
  },
  {
    id: 'usdc-treasury',
    name: 'Programmable USDC Settlement',
    type: 'Ethereum L2 / Solana Treasury',
    volume: '$125,000.00 USDC',
    latency: '400ms',
    compliance: 'Circle Mint Partner • Multi-Sig',
    status: 'CONFIRMED',
    txHash: '0x33d8...210f',
  },
];

export function HeroSection() {
  const [activeStreamIndex, setActiveStreamIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const currentStream = SETTLEMENT_STREAMS[activeStreamIndex];

  return (
    <section className="fintech-hero">
      <div className="fintech-ambient-glow" />

      <div className="fintech-hero-grid">
        {/* Left: Financial Institutional Value Prop */}
        <div className="fintech-hero-content">
          <div className="fintech-badge">
            <span className="fintech-shield-icon">🛡️</span>
            <span>Institutional Financial Infrastructure • 2026</span>
            <span className="fintech-badge-pill">SOC-2</span>
          </div>

          <h1 className="fintech-title">
            The Trust Vault for <span className="fintech-emerald-text">Banking Rails</span>, Ledgers & Crypto APIs.
          </h1>

          <p className="fintech-lead">
            Curating high-security payment gateways, core banking rails, crypto settlement ledgers, automated KYC/AML platforms, and embedded finance software.
          </p>

          {/* Search Box */}
          <form 
            action="/search" 
            method="GET" 
            className="fintech-search-box"
            onSubmit={(e) => {
              if (!searchQuery.trim()) e.preventDefault();
            }}
          >
            <Search size={18} className="fintech-search-icon" />
            <input
              type="text"
              name="q"
              placeholder="Search 180+ payment rails, crypto ledgers, KYC tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="fintech-search-input"
            />
            <button type="submit" className="fintech-search-btn">
              Search Rails
            </button>
          </form>

          {/* Dual Action CTAs */}
          <div className="fintech-cta-row">
            <Link href="/category/finance" className="fintech-primary-btn">
              Explore 180+ Financial Rails <ArrowRight size={15} />
            </Link>
            <Link href="/submit" className="fintech-secondary-btn">
              Submit FinTech API
            </Link>
          </div>

          {/* Social Proof */}
          <div className="fintech-social-proof">
            <div className="fintech-avatar-stack">
              <span className="fin-avatar av-1">💳</span>
              <span className="fin-avatar av-2">🏦</span>
              <span className="fin-avatar av-3">💎</span>
              <span className="fin-avatar av-4">🛡️</span>
            </div>
            <div className="fintech-proof-text">
              <div className="fintech-proof-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-emerald-400 text-emerald-400" />
                ))}
                <span className="fintech-rating">4.9/5.0</span>
              </div>
              <span className="fintech-subtext">Trusted by 28,000+ FinTech leaders & payment architects</span>
            </div>
          </div>

          {/* Niche Category Pills */}
          <div className="fintech-tags-row">
            <span className="fintech-tags-label">Sectors:</span>
            <div className="fintech-tags-list">
              <Link href="/category/finance" className="fintech-tag-pill">
                <CreditCard size={12} /> Payment Rails
              </Link>
              <Link href="/category/security" className="fintech-tag-pill">
                <ShieldCheck size={12} /> KYC / AML
              </Link>
              <Link href="/category/productivity" className="fintech-tag-pill">
                <Landmark size={12} /> Core Banking
              </Link>
              <Link href="/category/ai" className="fintech-tag-pill">
                <Coins size={12} /> USDC Treasury
              </Link>
            </div>
          </div>

          {/* Institutional Metrics */}
          <div className="fintech-metrics-strip">
            <div className="fintech-metric-box">
              <span className="fintech-metric-val">$2.4B+</span>
              <span className="fintech-metric-desc">Volume Tracked</span>
            </div>
            <div className="fintech-metric-divider" />
            <div className="fintech-metric-box">
              <span className="fintech-metric-val">180+</span>
              <span className="fintech-metric-desc">Global Rails</span>
            </div>
            <div className="fintech-metric-divider" />
            <div className="fintech-metric-box">
              <span className="fintech-metric-val">PCI-DSS</span>
              <span className="fintech-metric-desc">Level 1 Compliant</span>
            </div>
          </div>
        </div>

        {/* Right: Glassmorphic Banking Rails & Settlement Card */}
        <div className="fintech-ledger-card">
          <div className="ledger-card-header">
            <div className="ledger-title-group">
              <span className="ledger-live-pulse" />
              <span className="ledger-header-title">Live Settlement Ledger</span>
            </div>
            <span className="ledger-status-pill">{currentStream.status}</span>
          </div>

          {/* Rail Stream Switcher */}
          <div className="ledger-tabs-row">
            {SETTLEMENT_STREAMS.map((stream, idx) => (
              <button
                key={stream.id}
                onClick={() => setActiveStreamIndex(idx)}
                className={`ledger-tab-btn ${activeStreamIndex === idx ? 'active' : ''}`}
                type="button"
              >
                {stream.name.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Settlement Highlight Box */}
          <div className="ledger-highlight-box">
            <div className="ledger-val-row">
              <span className="ledger-amount">{currentStream.volume}</span>
              <span className="ledger-latency-tag">⚡ {currentStream.latency}</span>
            </div>
            <span className="ledger-stream-type">{currentStream.name}</span>
          </div>

          {/* Transaction Metadata Grid */}
          <div className="ledger-metadata-grid">
            <div className="ledger-meta-item">
              <span className="meta-label">Protocol & Compliance</span>
              <span className="meta-val">{currentStream.compliance}</span>
            </div>
            <div className="ledger-meta-item">
              <span className="meta-label">Verified Tx Hash</span>
              <span className="meta-val font-mono">{currentStream.txHash}</span>
            </div>
          </div>

          {/* Card Footer Security Guarantee */}
          <div className="ledger-card-footer">
            <div className="ledger-sec-note">
              <Lock size={12} className="text-emerald-400" />
              <span>256-Bit Encrypted Financial Ledger</span>
            </div>
            <Link href="/submit" className="ledger-submit-link">
              Submit Rail <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
