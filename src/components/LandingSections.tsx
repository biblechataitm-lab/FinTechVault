'use client';

import React from 'react';
import Link from 'next/link';
import { Landmark, CreditCard, ShieldCheck, ArrowRight, CheckCircle2, DollarSign, RefreshCw, Lock, Zap } from 'lucide-react';

export function LandingSections() {
  return (
    <div className="landing-additional-sections">
      {/* 1. Feature Highlights Bento Grid */}
      <section className="landing-feature-grid-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <Landmark size={12} className="text-emerald-400" />
            <span>Institutional Financial Rails</span>
          </div>
          <h2 className="landing-section-heading">Engineered for FinTech Founders & Payment Architects</h2>
          <p className="landing-section-sub">
            Discover verified core banking APIs, FedNow & RTP rails, cross-border FX gateways, KYC/AML verification engines, and stablecoin settlement ledgers.
          </p>
        </div>

        <div className="landing-bento-grid">
          {/* Bento Card 1: Core Banking & FedNow */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box emerald">
                <Landmark size={20} />
              </div>
              <span className="bento-badge">Real-Time Gross Settlement</span>
            </div>
            <h3 className="bento-card-title">FedNow, RTP & Core Banking Ledger APIs</h3>
            <p className="bento-card-desc">
              Sub-second direct bank transfers, virtual account issuance, ACH origination, and automated multi-tenant ledger accounting.
            </p>
            <div className="bento-metric-row">
              <div className="metric-pill">
                <span className="pill-val">180+</span>
                <span className="pill-lbl">Payment Rails</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">&lt;800ms</span>
                <span className="pill-lbl">Settlement</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">SOC-2</span>
                <span className="pill-lbl">PCI-DSS L1</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Cross-Border FX */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box cyan">
                <RefreshCw size={20} />
              </div>
              <span className="bento-badge">140+ Currencies</span>
            </div>
            <h3 className="bento-card-title">Cross-Border FX & Local Payouts</h3>
            <p className="bento-card-desc">
              Wholesale interbank FX rates, SEPA instant rails, and automated international compliance.
            </p>
            <div className="bento-check-list">
              <span className="check-item"><CheckCircle2 size={13} /> Real-Time Mid-Market FX</span>
              <span className="check-item"><CheckCircle2 size={13} /> Local Payout Networks</span>
            </div>
          </div>

          {/* Bento Card 3: Multi-Sig Treasury */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box amber">
                <Lock size={20} />
              </div>
              <span className="bento-badge">Institutional Multi-Sig</span>
            </div>
            <h3 className="bento-card-title">USDC & Yield Treasury Vaults</h3>
            <p className="bento-card-desc">
              Enterprise on-chain settlement, multi-sig MPC custody, and yield-bearing corporate treasuries.
            </p>
          </div>

          {/* Bento Card 4: Issuance & Virtual Cards */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box purple">
                <CreditCard size={20} />
              </div>
              <span className="bento-badge">Mastercard / Visa</span>
            </div>
            <h3 className="bento-card-title">Dynamic Virtual & Physical Card Issuance</h3>
            <p className="bento-card-desc">
              Programmatic spend limits, real-time authorization webhooks, and zero-liability fraud interception.
            </p>
            <div className="bento-tag-row">
              <span className="tag-chip">Auth Webhooks</span>
              <span className="tag-chip">Apple Pay Tokenization</span>
              <span className="tag-chip">Interchange Sharing</span>
              <span className="tag-chip">3D-Secure 2.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Curation Process Section */}
      <section className="landing-process-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <ShieldCheck size={12} className="text-emerald-400" />
            <span>Compliance & Security Verification</span>
          </div>
          <h2 className="landing-section-heading">How FinTechVault Audits Financial APIs</h2>
          <p className="landing-section-sub">
            Every payment provider and ledger API undergoes rigorous regulatory and sandbox reliability audits.
          </p>
        </div>

        <div className="process-steps-grid">
          <div className="process-step-card">
            <div className="step-number">01</div>
            <h4 className="step-title">Regulatory & PCI Audit</h4>
            <p className="step-desc">
              We verify SOC-2 Type II certifications, PCI-DSS Level 1 compliance, and bank sponsorship licenses.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">02</div>
            <h4 className="step-title">API Sandbox Reliability</h4>
            <p className="step-desc">
              We test idempotency keys, webhook delivery SLAs, and authorization latency in real-world conditions.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">03</div>
            <h4 className="step-title">Institutional Spotlight</h4>
            <p className="step-desc">
              Verified financial APIs gain prime directory visibility and reach 28,000+ FinTech CTOs and product leads.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Launch CTA Banner */}
      <section className="landing-launch-cta">
        <div className="launch-cta-content">
          <span className="launch-cta-tag">✦ LAUNCH ON FINTECHVAULT</span>
          <h3 className="launch-cta-heading">Launch Your FinTech API to 28,000+ Payment Architects</h3>
          <p className="launch-cta-desc">
            Connect directly with FinTech founders, neo-banks, and enterprise finance teams searching for modern rails.
          </p>
          <div className="launch-cta-buttons">
            <Link href="/submit" className="launch-cta-primary">
              Submit FinTech API <ArrowRight size={15} />
            </Link>
            <Link href="/category/finance" className="launch-cta-secondary">
              Explore Payment Rails
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
