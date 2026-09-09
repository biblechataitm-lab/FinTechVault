'use client';

import React from 'react';

export function HeroLanding() {
  return (
    <section class="vault-hero">
  <div class="vault-hero-grid container">
    <div class="vault-hero-left">
      <div class="vault-security-tag">
        <span class="vault-lock-dot"></span>
        <span>256-BIT ENCRYPTED FINTECH DIRECTORY</span>
      </div>
      <h1 class="vault-title">
        The High-Security <br/><span class="vault-gold">FinTech Vault</span>
      </h1>
      <p class="vault-desc">
        Curating bank-grade payment gateways, double-entry ledger platforms, automated treasury engines, and compliance software.
      </p>
      <div class="vault-search-box">
        <input type="text" placeholder="Search payment rails, ledger APIs, KYC tools..." class="vault-input" />
        <button class="vault-btn">Unlock</button>
      </div>
      <div class="vault-ticker-tape">
        <span class="ticker-item"><span class="ticker-green">▲ ACH/RTP:</span> 99.999%</span>
        <span class="ticker-item"><span class="ticker-gold">★ SOC2:</span> VERIFIED</span>
        <span class="ticker-item"><span class="ticker-green">▲ FEDNOW:</span> ACTIVE</span>
      </div>
    </div>
    <div class="vault-hero-right">
      <div class="vault-door-graphic">
        <div class="vault-outer-ring">
          <div class="vault-wheel"></div>
          <div class="vault-core-key">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e8a55a" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
