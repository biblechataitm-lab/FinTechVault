'use client';

import React from 'react';

export function HeroLanding() {
  return (
    <section className="vault-hero">
      <div className="vault-hero-grid container">
        <div className="vault-hero-left">
          <div className="vault-security-tag">
            <span className="vault-lock-dot"></span>
            <span>256-BIT ENCRYPTED · INSTITUTIONAL FINTECH PROTOCOLS</span>
          </div>

          <h1 className="vault-title">
            The High-Velocity <br />
            <span className="vault-gold">FinTech Vault</span>
          </h1>

          <p className="vault-desc">
            Curated directory of bank-grade payment rails, zero-knowledge settlement engines, automated treasury APIs, and institutional compliance software.
          </p>

          <div className="vault-search-box">
            <span className="vault-search-prefix">$FIN://</span>
            <input 
              type="text" 
              placeholder="Search payment rails, ledger APIs, KYC engines, stablecoins..." 
              className="vault-input"
              aria-label="Search fintech protocols" 
            />
            <button className="vault-btn" type="button">
              <span>Execute</span>
            </button>
          </div>

          <div className="vault-ticker-tape">
            <span className="ticker-item"><span className="ticker-green">▲ CURATION:</span> DIRECT MAKERS</span>
            <span className="ticker-item"><span className="ticker-gold">★ SECURITY:</span> VERIFIED RELEASES</span>
            <span className="ticker-item"><span className="ticker-green">▲ PLATFORM:</span> ZERO-TRACKING</span>
            <span className="ticker-item"><span className="ticker-gold">◆ PROTOCOLS:</span> REAL-TIME</span>
          </div>
        </div>

        <div className="vault-hero-right">
          <div className="vault-door-graphic">
            <div className="vault-outer-ring">
              <div className="vault-wheel"></div>
              <div className="vault-core-key">
                <span className="vault-gold-icon">🏦</span>
              </div>
              <div className="vault-badge-ring">
                <span className="vault-ring-label">TIER-1 AUDITED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

