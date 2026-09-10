'use client';

import React from 'react';

export function Header({ siteName = 'FinTechVault' }: { siteName?: string }) {
  return (
    <header className="vault-navbar">
      <div className="container vault-nav-inner">
        <a href="/" className="vault-brand">
          <div className="vault-logo-badge">
            <span className="vault-logo-icon">🪙</span>
          </div>
          <span className="vault-brand-text">{siteName}</span>
          <span className="vault-tier-badge">SECURE·TIER-1</span>
        </a>

        <div className="vault-nav-menu">
          <a href="/" className="vault-nav-item active">Vault Registry</a>
          <a href="/category/payments" className="vault-nav-item">Payment Rails</a>
          <a href="/category/compliance" className="vault-nav-item">Ledgers & KYC</a>
          <a href="/category/security" className="vault-nav-item">AML Systems</a>
          <a href="/sponsor" className="vault-nav-item vault-nav-highlight">Underwrite</a>
        </div>

        <div className="vault-nav-actions">
          <div className="vault-ticker-badge">
            <span className="vault-pulse-dot"></span>
            <span className="vault-ticker-text">SETTLEMENT: INSTANT</span>
          </div>
          <a href="/submit" className="vault-cta-btn">
            + List Protocol <span className="vault-cta-chevron">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}

