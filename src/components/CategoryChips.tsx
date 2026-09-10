'use client';

import React from 'react';

const CATEGORIES = [
  {
    "label": "All",
    "path": "/"
  },
  {
    "label": "Payments & Rails",
    "path": "/category/payments"
  },
  {
    "label": "Ledgers & Billing",
    "path": "/category/billing"
  },
  {
    "label": "Crypto & Assets",
    "path": "/category/crypto"
  },
  {
    "label": "KYC & Compliance",
    "path": "/category/compliance"
  },
  {
    "label": "Treasury APIs",
    "path": "/category/treasury"
  },
  {
    "label": "Banking Infrastructure",
    "path": "/category/developer-tools"
  }
];

export function CategoryChips({ activeCategory }: { activeCategory?: string }) {
  return (
    <div className="category-chips-wrapper">
      <div className="category-chips-scroll category-chips-list">
        {CATEGORIES.map((cat) => {
          const isAll = cat.path === '/';
          const isActive = isAll ? !activeCategory : activeCategory === cat.path.replace('/category/', '');
          return (
            <a
              key={cat.path}
              href={cat.path}
              className={`category-chip ${isActive ? 'active chip-active' : ''}`}
            >
              {cat.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
