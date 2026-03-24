export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'gifts', label: 'Personalized Gifts' },
  { id: 'corporate', label: 'Corporate Branding' },
  { id: 'industrial', label: 'Industrial Solutions' }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    category: 'gifts',
    title: 'Custom Metal Keychain',
    description: 'Precision etched name with scratch-resistant finish.',
    image: '/assets/products/keepsakes.jpg' // Using existing asset
  },
  {
    id: 2,
    category: 'corporate',
    title: 'Engraved Executive Pen',
    description: 'Laser marked logo for corporate branding events.',
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
  }
  // You can easily add more items here later!
];
