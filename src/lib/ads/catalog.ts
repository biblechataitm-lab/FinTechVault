import type { Product, ProductPage, GetProductsOptions, SiteConfig } from './types';
import { request, mockMode } from './client';

const MOCK_PRODUCTS: Product[] = [
  {
    "id": "ftv-1",
    "title": "Stripe Billing",
    "tagline": "Flexible recurring billing, subscription logic, and revenue recognition infrastructure",
    "link": "https://stripe.com/billing",
    "category": "Developer Tools",
    "upvotes": 490,
    "tags": [
      "billing",
      "payments",
      "saas"
    ],
    "techStack": [
      "Ruby",
      "Java",
      "API"
    ],
    "maker": {
      "name": "Patrick Collison",
      "avatar": "https://placehold.co/64x64/e8a55a/0a0d14?text=ST"
    }
  },
  {
    "id": "ftv-2",
    "title": "Mercury API",
    "tagline": "Programmatic commercial banking, multi-entity treasury management, and automated wires",
    "link": "https://mercury.com",
    "category": "Automation",
    "upvotes": 460,
    "tags": [
      "banking",
      "api",
      "treasury"
    ],
    "techStack": [
      "Haskell",
      "Postgres"
    ],
    "maker": {
      "name": "Immad Akhund",
      "avatar": "https://placehold.co/64x64/10b981/0a0d14?text=MC"
    }
  },
  {
    "id": "ftv-3",
    "title": "Plaid Link",
    "tagline": "The universal interface to connect user bank accounts, verify identity, and check balances",
    "link": "https://plaid.com",
    "category": "Search & Data",
    "upvotes": 410,
    "tags": [
      "open-banking",
      "identity",
      "api"
    ],
    "techStack": [
      "TypeScript",
      "Go"
    ],
    "maker": {
      "name": "Zach Perret",
      "avatar": "https://placehold.co/64x64/3b82f6/0a0d14?text=PL"
    }
  },
  {
    "id": "ftv-4",
    "title": "Modern Treasury",
    "tagline": "Real-time payment operations platform to initiate, reconcile, and track money movement",
    "link": "https://moderntreasury.com",
    "category": "Automation",
    "upvotes": 380,
    "tags": [
      "payments",
      "ledger",
      "ach"
    ],
    "techStack": [
      "Ruby",
      "PostgreSQL"
    ],
    "maker": {
      "name": "Dimitri Dadiomov",
      "avatar": "https://placehold.co/64x64/f59e0b/0a0d14?text=MT"
    }
  },
  {
    "id": "ftv-5",
    "title": "Ramp Auto",
    "tagline": "Automated corporate card spend controls, vendor contract negotiation, and accounting sync",
    "link": "https://ramp.com",
    "category": "Productivity",
    "upvotes": 360,
    "tags": [
      "cards",
      "accounting",
      "erp"
    ],
    "techStack": [
      "Python",
      "React"
    ],
    "maker": {
      "name": "Eric Glyman",
      "avatar": "https://placehold.co/64x64/a78bfa/0a0d14?text=RP"
    }
  },
  {
    "id": "ftv-6",
    "title": "Lithic",
    "tagline": "Issue branded physical and virtual debit/credit cards programmatically with custom spend limits",
    "link": "https://lithic.com",
    "category": "Developer Tools",
    "upvotes": 330,
    "tags": [
      "card-issuing",
      "fintech",
      "api"
    ],
    "techStack": [
      "Go",
      "Kafka"
    ],
    "maker": {
      "name": "Bo Jiang",
      "avatar": "https://placehold.co/64x64/ec4899/0a0d14?text=LT"
    }
  }
];

const MOCK_SITE: SiteConfig = {
  "key": "fintechvault",
  "name": "FinTechVault",
  "domain": "fintechvault.com",
  "category": "fintech",
  "tags": [
    "fintech",
    "banking",
    "payments",
    "crypto",
    "billing"
  ],
  "status": "live",
  "statusMessage": null,
  "slots": [
    {
      "key": "sidebar-1",
      "slotType": "sidebar",
      "format": "native"
    }
  ]
};

export async function getSiteConfig(timeoutMs?: number): Promise<SiteConfig | null> {
  if (mockMode()) return MOCK_SITE;
  const data = await request<{ site: SiteConfig }>('/api/v1/site', {}, timeoutMs, 'getSiteConfig');
  return data?.site ?? MOCK_SITE;
}

export async function getProducts(options: GetProductsOptions = {}): Promise<ProductPage> {
  const mock = mockMode();
  if (mock) {
    if (mock === 'empty') return { products: [], nextCursor: null, appliedTags: [] };
    let filtered = [...MOCK_PRODUCTS];
    if (options.category) {
      filtered = filtered.filter((p) => p.category.toLowerCase() === options.category?.toLowerCase());
    }
    if (options.q) {
      const q = options.q.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q));
    }
    const sorted = options.sort === 'top' ? filtered.sort((a, b) => b.upvotes - a.upvotes) : filtered;
    return {
      products: sorted.slice(0, options.limit ?? sorted.length),
      nextCursor: null,
      appliedTags: MOCK_SITE.tags,
    };
  }

  const data = await request<ProductPage>(
    '/api/v1/catalog/products',
    {
      tags: options.tags?.join(','),
      category: options.category,
      q: options.q,
      since: options.since,
      sort: options.sort,
      limit: options.limit ? String(options.limit) : undefined,
      cursor: options.cursor,
    },
    options.timeoutMs,
    'getProducts',
  );

  if (!data || !data.products || data.products.length === 0) {
    let filtered = [...MOCK_PRODUCTS];
    if (options.category) {
      filtered = filtered.filter((p) => p.category.toLowerCase() === options.category?.toLowerCase());
    }
    if (options.q) {
      const q = options.q.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q));
    }
    const sorted =
      options.sort === 'top' ? filtered.sort((a, b) => b.upvotes - a.upvotes) : filtered;
    return {
      products: sorted.slice(0, options.limit ?? sorted.length),
      nextCursor: null,
      appliedTags: MOCK_SITE.tags,
    };
  }

  return data;
}

export async function getProduct(id: string, timeoutMs?: number): Promise<Product | null> {
  if (mockMode()) return MOCK_PRODUCTS.find((p) => p.id === id) ?? MOCK_PRODUCTS[0];

  const data = await request<{ product: Product }>(
    `/api/v1/catalog/products/${encodeURIComponent(id)}`,
    {},
    timeoutMs,
    'getProduct',
  );
  return data?.product ?? MOCK_PRODUCTS.find((p) => p.id === id) ?? MOCK_PRODUCTS[0];
}
