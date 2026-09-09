import React from 'react';
import Link from 'next/link';
import { ExternalLink, MessageCircle, Mail } from 'lucide-react';

export function Footer({ siteName = 'FinTechVault' }: { siteName?: string }) {
  return (
    <footer className="ftv-footer">
      <div className="ftv-footer-content">
        <div className="ftv-footer-top">
          <div className="ftv-footer-brand-area">
            <div className="ftv-footer-brand"><span>{siteName}</span></div>
            <p className="ftv-footer-tagline">The curated financial technology directory. Discover payment APIs, lending platforms, compliance engines, and crypto infrastructure.</p>
            <div className="ftv-footer-socials">
              <a href="#" aria-label="Website"><ExternalLink size={16} /></a>
              <a href="#" aria-label="Community"><MessageCircle size={16} /></a>
              <a href="#" aria-label="Email"><Mail size={16} /></a>
            </div>
          </div>
          <div className="ftv-footer-links-grid">
            <div>
              <h4 className="ftv-footer-heading">Explore</h4>
              <ul>
                <li><Link href="/">Today's Launches</Link></li>
                <li><Link href="/trends">Trending</Link></li>
                <li><Link href="/collections/this-week">Weekly Top</Link></li>
                <li><Link href="/collections/this-month">Monthly Top</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="ftv-footer-heading">Categories</h4>
              <ul>
                <li><Link href="/category/payments">Payments</Link></li>
                <li><Link href="/category/lending">Lending</Link></li>
                <li><Link href="/category/compliance">Compliance</Link></li>
                <li><Link href="/category/crypto">Crypto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="ftv-footer-heading">Directory</h4>
              <ul>
                <li><Link href="/submit">Submit Product</Link></li>
                <li><Link href="/sponsor">Sponsor</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ftv-footer-bottom">
          <span>&copy; {new Date().getFullYear()} {siteName}. All rights reserved.</span>
          <span>Powered by the Publisher Ad Network</span>
        </div>
      </div>
    </footer>
  );
}
