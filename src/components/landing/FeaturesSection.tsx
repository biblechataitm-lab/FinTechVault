'use client';

import React from 'react';

export function FeaturesSection() {
  return (
    <section className="vault-compliance container">
  <div className="vault-section-title">
    <span className="vault-gold-tag">// REGULATORY STANDARDS</span>
    <h2>Bank-Grade Compliance Matrix</h2>
  </div>
  <div className="vault-grid-3">
    <div className="vault-card">
      <div className="v-badge">PCI-DSS L1</div>
      <h3>Cardholder Data Security</h3>
      <p>Zero-compromise tokenization ensuring raw credit card details never touch your server logs.</p>
    </div>
    <div className="vault-card">
      <div className="v-badge">SOC2 TYPE II</div>
      <h3>Continuous Telemetry</h3>
      <p>Automated evidence collection across cloud infrastructure, database encryption, and access controls.</p>
    </div>
    <div className="vault-card">
      <div className="v-badge">DOUBLE-ENTRY</div>
      <h3>Immutable Ledgers</h3>
      <p>Guaranteed accounting symmetry where every credit has a corresponding debit on the ledger.</p>
    </div>
  </div>
</section>
  );
}
