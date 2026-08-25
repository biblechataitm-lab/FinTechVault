'use client';

import React from 'react';
import Hero18 from '@/components/ui/hero-18';

export function HeroSection() {
  return (
    <div className="w-full mb-12">
      <Hero18
        brandName="FinTechVault"
        headingPrefix="The Institutional Directory for"
        headingMiddle="Modern Banking &"
        headingHighlight="Payment Rails."
        description="Verify and benchmark 620+ modern ledger engines, FedNow / RTP connectors, cross-border FX gateways, and multi-sig treasury protocols."
        searchPlaceholder="Search FedNow, Stripe, Multi-Sig..."
        searchButtonLabel="Search Vault"
        ctaLabel="Submit FinTech Platform"
        ctaHref="/submit"
      />
    </div>
  );
}
