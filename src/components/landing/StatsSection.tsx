'use client';

import React from 'react';

const STATS = [
  { value: '100%', label: 'Direct Maker Submissions' },
  { value: 'Realtime', label: 'Verified Catalog Releases' },
  { value: 'Community', label: 'Upvote & Feedback Engine' },
  { value: 'Zero Tracking', label: 'Privacy First Directory' },
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
