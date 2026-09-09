'use client';

import React from 'react';

export function Header({ siteName = 'FinTechVault' }: { siteName?: string }) {
  return (
    <header className="vault-navbar">
      <div className="container vault-nav-inner">
        <a href="/" className="vault-brand">
          <div className="vault-logo-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e8a55a" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          </div>
          <span>FinTechVault</span>
        </a>
        <div className="vault-nav-menu">
        <a href="/">Vault Registry</a>
        <a href="/trends">High-Throughput</a>
        <a href="/category/payments">Payment Rails</a>
        <a href="/sponsor">Underwrite</a>
        </div>
        <a href="/submit" className="vault-cta-btn">+ Vault Instrument</a>
      </div>
    </header>
  );
}
