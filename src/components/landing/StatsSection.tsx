'use client';

import React from 'react';

const STATS = [
  { value: '1,200+', label: 'FinTech Products' },
  { value: '15K+', label: 'Finance Pros' },
  { value: '$2.1T', label: 'Market Tracked' },
  { value: '99.5%', label: 'Data Accuracy' },
];

export function StatsSection() {
  return (
    <section className="ftv-stats">
      <div className="ftv-stats-grid">
        {STATS.map((s) => (
          <div key={s.label} className="ftv-stat-card">
            <div className="ftv-stat-value">{s.value}</div>
            <div className="ftv-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
