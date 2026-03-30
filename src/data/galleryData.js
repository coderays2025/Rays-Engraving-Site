/**
 * Portfolio Data Configuration
 * Purpose: Centralized source of truth for all gallery categories and individual items.
 * 
 * Each object in GALLERY_ITEMS must contain:
 * - id: (Integer) Unique identifier, used for variant-page redirection.
 * - category: (String) Must match a category ID in GALLERY_CATEGORIES.
 * - title: (String) Primary heading displayed on card hover.
 * - description: (String) Sub-text detail for the project.
 * - image: (String) Absolute path or relative URL to the project photo.
 */

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'gifts', label: 'Personalized Gifts' },
  { id: 'corporate', label: 'Corporate Branding' },
  { id: 'industrial', label: 'Industrial Solutions' },
  // 'process' category handles technical laser-marking demonstration snippets
  { id: 'process', label: 'Engraving Process' }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    category: 'gifts',
    title: 'Custom Metal Keychain',
    description: 'Precision etched name with scratch-resistant finish.',
    image: '/assets/products/keepsakes.jpg'
  },
  {
    id: 2,
    category: 'process',
    title: 'Laser Marking Action',
    description: 'A close-up view of the laser fiber technology in action.',
    image: '/assets/services/corporate-branding.jpg'
  },
  {
    id: 3,
    category: 'industrial',
    title: 'Stainless Steel Serial Plate',
    description: 'Industrial marking for tool and machinery tracking.',
    image: '/assets/services/industrial-solutions.jpg'
  },
  {
    id: 4,
    category: 'gifts',
    title: 'Engraved Water Bottle',
    description: 'Permanent personalization on powder-coated steel.',
    image: '/assets/products/precisionmark.jpg'
  },
  {
    id: 5,
    category: 'corporate',
    title: 'Precision Logo Etching',
    description: 'Fast, high-quality logo marking on aluminum surfaces.',
    image: '/assets/services/corporate-branding.jpg'
  }
];
