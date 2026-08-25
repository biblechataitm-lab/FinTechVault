'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Landmark, CreditCard, ShieldCheck, Lock, ArrowUpRight, Search, DollarSign, RefreshCw, Zap, TrendingUp } from 'lucide-react';

const PAYMENT_RAILS = [
  {
    id: 'fiat-instant',
    name: 'FedNow & RTP Instant Rails',
    network: 'US Banking • Real-Time',
    status: 'Settled Sub-Second',
    volume: '$1.8B/mo',
    lastTx: '+$48,250.00 USD',
    txMeta: 'ACH / Instant RTP Settlement • 240ms',
    compliance: 'PCI-DSS L1 • Nacha Certified',
  },
  {
    id: 'cross-border',
    name: 'Cross-Border FX Engine',
    network: 'Wise • SWIFT ISO 20022',
    status: 'Real-Time FX Matrix',
    volume: '$620M/mo',
    lastTx: '+€14,800.00 EUR',
    txMeta: 'Multi-Currency Clearing • Mid-Market Rate',
    compliance: 'SOC-2 Type II • FinCEN Regulated',
  },
  {
    id: 'stablecoin-rails',
    name: 'Programmable USDC Settlement',
    network: 'Ethereum • Base • Solana',
    status: 'Zero Counterparty Risk',
    volume: '$410M/mo',
    lastTx: '+$125,000.00 USDC',
    txMeta: 'Smart Contract Escrow • 1.2s Finality',
    compliance: 'Fully Backed 1:1 • Smart Contract Audited',
  },
];

export function HeroSection() {
  const [activeRailIndex, setActiveRailIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const currentRail = PAYMENT_RAILS[activeRailIndex];

  return (
    <section className="fintech-hero">
      <div className="fintech-hero-grid">
        {/* Left: Financial Trust Proposition */}
        <div className="fintech-hero-content">
          <div className="fintech-trust-badge">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>Institutional FinTech & Payment Infrastructure Index</span>
          </div>

          <h1 className="fintech-title">
            The Institutional Index for <span className="fintech-gradient-text">Banking Rails</span> & Payment APIs.
          </h1>

          <p className="fintech-lead">
            Explore verified banking-as-a-service platforms, global payout rails, crypto settlement gateways, automated tax engines, and AML compliance stacks.
          </p>

          {/* FinTech Search Box */}
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
              placeholder="Search payment gateways, KYC APIs, ledger engines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="fintech-search-input"
            />
            <button type="submit" className="fintech-search-btn">
              Search Rails
            </button>
          </form>

          {/* Payment Stacks */}
          <div className="fintech-tags-row">
            <span className="fintech-tags-label">Infrastructure:</span>
            <div className="fintech-tags-list">
              <Link href="/category/finance" className="fintech-tag-pill">
                <CreditCard size={12} /> Payment Gateways
              </Link>
              <Link href="/category/security" className="fintech-tag-pill">
                <Lock size={12} /> KYC & AML
              </Link>
              <Link href="/category/developer-tools" className="fintech-tag-pill">
                <Landmark size={12} /> Core Banking
              </Link>
              <Link href="/category/automation" className="fintech-tag-pill">
                <Zap size={12} /> Billing Engines
              </Link>
            </div>
          </div>

          {/* Financial Trust Metrics */}
          <div className="fintech-metrics-strip">
            <div className="fintech-metric-box">
              <span className="fintech-metric-val">$2.4B+</span>
              <span className="fintech-metric-desc">Volume Tracked</span>
            </div>
            <div className="fintech-metric-divider" />
            <div className="fintech-metric-box">
              <span className="fintech-metric-val">SOC-2</span>
              <span className="fintech-metric-desc">Type II Audited</span>
            </div>
            <div className="fintech-metric-divider" />
            <div className="fintech-metric-box">
              <span className="fintech-metric-val">180+</span>
              <span className="fintech-metric-desc">Global Rails</span>
            </div>
          </div>
        </div>

        {/* Right: Glassmorphic Banking Card & Settlement Ledger */}
        <div className="fintech-ledger-card">
          <div className="ledger-card-header">
            <div className="ledger-title-group">
              <span className="ledger-pulse-emerald" />
              <span className="ledger-header-title">Live Settlement Ledger</span>
            </div>
            <span className="ledger-compliance-badge">PCI-DSS LEVEL 1</span>
          </div>

          {/* Rail Switcher Tabs */}
          <div className="ledger-rail-tabs">
            {PAYMENT_RAILS.map((rail, idx) => (
              <button
                key={rail.id}
                onClick={() => setActiveRailIndex(idx)}
                className={`ledger-rail-btn ${activeRailIndex === idx ? 'active' : ''}`}
                type="button"
              >
                {rail.name}
              </button>
            ))}
          </div>

          {/* Glassmorphic Balance & Settlement Preview */}
          <div className="ledger-balance-preview">
            <div className="ledger-balance-top">
              <span className="ledger-network-label">{currentRail.network}</span>
              <span className="ledger-status-tag">{currentRail.status}</span>
            </div>
            <div className="ledger-amount-row">
              <span className="ledger-tx-amount">{currentRail.lastTx}</span>
              <span className="ledger-volume-pill">{currentRail.volume}</span>
            </div>
            <span className="ledger-tx-meta">{currentRail.txMeta}</span>
          </div>

          {/* Compliance & Audit Bar */}
          <div className="ledger-security-spec">
            <div className="security-spec-row">
              <Lock size={12} className="text-emerald-400" />
              <span className="security-spec-text">{currentRail.compliance}</span>
            </div>
          </div>

          {/* Card Action Footer */}
          <div className="ledger-card-footer">
            <span className="ledger-encryption-text">256-Bit Encrypted Vault</span>
            <Link href="/submit" className="ledger-submit-link">
              List Your FinTech <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
