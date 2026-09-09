import React from 'react';
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
                <li><a href="/">Today's Launches</a></li>
                <li><a href="/trends">Trending</a></li>
                <li><a href="/collections/this-week">Weekly Top</a></li>
                <li><a href="/collections/this-month">Monthly Top</a></li>
              </ul>
            </div>
            <div>
              <h4 className="ftv-footer-heading">Categories</h4>
              <ul>
                <li><a href="/category/payments">Payments</a></li>
                <li><a href="/category/lending">Lending</a></li>
                <li><a href="/category/compliance">Compliance</a></li>
                <li><a href="/category/crypto">Crypto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="ftv-footer-heading">Directory</h4>
              <ul>
                <li><a href="/submit">Submit Product</a></li>
                <li><a href="/sponsor">Sponsor</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/terms">Terms</a></li>
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
