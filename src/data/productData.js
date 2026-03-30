export const CATEGORIES = [
  {
    id: "drinkware",
    title: "The Drinkware Studio",
    description: "Premium Stanley-style cups, vacuum flasks, and thermal mugs designed for durability.",
    image: "/assets/products/drinkware/main.jpg"
  },
  {
    id: "writing",
    title: "Executive Writing",
    description: "Artisan-crafted luxury pens with high-precision laser engraving for a professional touch.",
    image: "/assets/products/writing/main.jpg"
  },
  {
    id: "gift-sets",
    title: "Combo Gifts",
    description: "Exquisitely paired pen and keychain sets, perfect for professional gifting and milestones.",
    image: "/assets/products/combos/main.jpg"
  },
  {
    id: "essentials",
    title: "Customized Gifts",
    description: "Personalized lifestyle accessories including custom phone stands, keychains, and daily essentials.",
    image: "/assets/products/gifts/main.jpg"
  },
  {
    id: "sublimation",
    title: "Sublimation Studio",
    description: "Vibrant, full-color printing on mugs, puzzles, and specialized coated gifts.",
    image: "/assets/products/sublimation/main.jpg"
  }
];

export const PRODUCTS = [
  // --- DRINKWARE ---
  {
    id: "stanley-cup",
    category: "drinkware",
    title: "Signature Stanley Cup",
    price: 2499,
    originalPrice: 2999,
    caption: "40oz vacuum insulated tumbler with custom name engraving.",
    image: "/assets/products/drinkware/items/StanleyCup1.jpg",
    specifications: [
      { label: "Material", value: "304 Stainless Steel" },
      { label: "Capacity", value: "1.2 Liters (40oz)" },
      { label: "Insulation", value: "Hot (12h) / Cold (24h)" },
      { label: "Customization", value: "Precision Laser Engraving" }
    ]
  },
  {
    id: "stanley-cup-matte",
    category: "drinkware",
    title: "Matte Edition Stanley Cup",
    price: 2699,
    caption: "Sophisticated matte-finish tumbler designed for a premium hand-feel and sleek look.",
    image: "/assets/products/drinkware/items/StanleyCup2.jpg",
    specifications: [
      { label: "Finish", value: "Premium Soft-Touch Matte" },
      { label: "Material", value: "BPA-Free 304 Steel" },
      { label: "Features", value: "Sweat-proof Design" },
      { label: "Customization", value: "High-Contrast Marking" }
    ]
  },
  {
    id: "stanley-cup-luxe",
    category: "drinkware",
    title: "Luxe Metallic Stanley Cup",
    price: 2799,
    caption: "High-gloss metallic series for those who want their hydration to stand out.",
    image: "/assets/products/drinkware/items/StanleyCup3.jpg",
    specifications: [
      { label: "Finish", value: "Glossy Metallic" },
      { label: "Capacity", value: "40oz / 1.2L" },
      { label: "Durability", value: "Heavy-duty Grade" },
      { label: "Best For", value: "Personalized Luxury Gifting" }
    ]
  },
  {
    id: "vacuum-flask-set",
    category: "drinkware",
    title: "Stainless Steel Flask Set",
    price: 999,
    caption: "Premium vacuum flask with two matching cups, perfect for travel.",
    image: "/assets/products/drinkware/items/SteelFlask.jpg",
    specifications: [
      { label: "Material", value: "Food-grade Stainless Steel" },
      { label: "Capacity", value: "500ml Flask + 2 Cups" },
      { label: "Packaging", value: "Gift Box Included" }
    ]
  },
  {
    id: "elite-vacuum-flask",
    category: "drinkware",
    title: "Elite Vacuum Flask",
    price: 1199,
    caption: "Industrial-grade insulation with a rugged, professional aesthetic.",
    image: "/assets/products/drinkware/items/SteelFlask1.jpg",
    specifications: [
      { label: "Type", value: "Elite Insulated Series" },
      { label: "Capacity", value: "750ml" },
      { label: "Performance", value: "24h Temperature Retention" },
      { label: "Marking", value: "Deep-fiber Laser Engraving" }
    ]
  },

  // --- WRITING ---
  {
    id: "gold-zari-pen",
    category: "writing",
    title: "Gold Zari Luxury Pen",
    price: 499,
    originalPrice: 999,
    caption: "Intricate gold zari work on a premium metal body pen.",
    image: "/assets/products/writing/items/gold-zari-pen.jpg",
    isBestSeller: true,
    specifications: [
      { label: "Body", value: "Premium Metal with Gold Zari" },
      { label: "Ink Color", value: "Blue (Ballpoint)" },
      { label: "Engraving", value: "Name/Initials on Clip" }
    ]
  },
  {
    id: "pen-1",
    category: "writing",
    title: "Sleek Matte Rollerball",
    price: 349,
    caption: "High-end matte black finish with smooth writing performance.",
    image: "/assets/products/writing/items/Pen1.jpg",
    specifications: [
      { label: "Ink Type", value: "Precision Rollerball" },
      { label: "Material", value: "Aerospace Aluminum" },
      { label: "Marking", value: "White High-Contrast Laser" }
    ]
  },
  {
    id: "pen-2",
    category: "writing",
    title: "Executive Chrome Signature",
    price: 599,
    caption: "Polished chrome accents for a professional, commanding presence.",
    image: "/assets/products/writing/items/Pen2.jpg",
    specifications: [
      { label: "Weight", value: "Balanced Executive Weight" },
      { label: "Finish", value: "Polished Chrome" },
      { label: "Packaging", value: "Velvet Pouch Included" }
    ]
  },
  {
    id: "pen-3",
    category: "writing",
    title: "Artisan Metallic Series",
    price: 449,
    caption: "Vibrant metallic colors with deep-etched personalization.",
    image: "/assets/products/writing/items/Pen3.jpg",
    specifications: [
      { label: "Colors", value: "Cobalt Blue, Emerald, Crimson" },
      { label: "Engraving", value: "360-Degree Name Engraving" },
      { label: "Refill", value: "Standard Global Refill Support" }
    ]
  },

  // --- COMBO GIFTS ---
  {
    id: "combo-1",
    category: "gift-sets",
    title: "The Professional Duo",
    price: 899,
    caption: "Matching pen and keychain set for a cohesive professional look.",
    image: "/assets/products/combos/items/Combo1.jpg",
    specifications: [
      { label: "Includes", value: "Metal Pen + Bar Keychain" },
      { label: "Customization", value: "Consistent Branding on Both" },
      { label: "Box", value: "Classic Presentation Box" }
    ]
  },
  {
    id: "combo-2",
    category: "gift-sets",
    title: "Signature Executive Set",
    price: 1199,
    caption: "Our best-selling executive gift set for corporate events.",
    image: "/assets/products/combos/items/Combo2.jpg",
    isBestSeller: true,
    specifications: [
      { label: "Material", value: "Tungsten Carbide Accents" },
      { label: "Includes", value: "Luxe Pen + Leather Keychain" },
      { label: "Personalization", value: "Logo + Name Engraving" }
    ]
  },
  {
    id: "combo-3",
    category: "gift-sets",
    title: "Artisan Heritage Combo",
    price: 1499,
    caption: "Premium craftmanship for high-value client appreciation.",
    image: "/assets/products/combos/items/Combo3.jpg",
    specifications: [
      { label: "Weight", value: "Premium Heavyweight Feel" },
      { label: "Packaging", value: "Wooden Heritage Box" },
      { label: "Theme", value: "Gold & Black Luxury" }
    ]
  },
  {
    id: "gift-pack",
    category: "gift-sets",
    title: "Ultimate Corporate Bundle",
    price: 2499,
    caption: "A comprehensive gift pack including a flask, pen, and keychain.",
    image: "/assets/products/combos/items/GiftPack.jpg",
    isNew: true,
    specifications: [
      { label: "Items", value: "Flask + Pen + Bar Keychain" },
      { label: "Finish", value: "Coordinated Matte Black" },
      { label: "Engraving", value: "Precision Marking on 3 Items" }
    ]
  },

  // --- CUSTOMIZED GIFTS ---
  {
    id: "bar-keychain",
    category: "essentials",
    title: "Premium Bar Keychain",
    price: 499,
    caption: "Elegant 4-sided vertical bar keychain with custom laser-engraved names.",
    image: "/assets/products/gifts/items/BarKeychain.jpg",
    specifications: [
      { label: "Material", value: "High-grade Stainless Steel" },
      { label: "Finish", value: "Polished Mirror / Matte" },
      { label: "Engraving", value: "4-Sided Precision Marking" }
    ]
  },
  {
    id: "bracelet-1",
    category: "essentials",
    title: "Customized Name Bracelet",
    price: 799,
    caption: "Sophisticated metal bracelet with high-detail name engraving.",
    image: "/assets/products/gifts/items/bracelate1.jpg",
    specifications: [
      { label: "Material", value: "Hypoallergenic Surgical Steel" },
      { label: "Size", value: "Adjustable One-Size" },
      { label: "Marking", value: "Deep Fiber Laser Marking" }
    ]
  },
  {
    id: "necklace-1",
    category: "essentials",
    title: "Artisan Pendant Necklace",
    price: 899,
    caption: "Beautifully engraved pendant for a personal, stylish statement.",
    image: "/assets/products/gifts/items/necklace1.jpg",
    specifications: [
      { label: "Pendant Shape", value: "Classic Vertical / Square" },
      { label: "Chain", value: "High-durability Linked Chain" },
      { label: "Finishing", value: "Anti-tarnish Coating" }
    ]
  },
  {
    id: "necklace-2",
    category: "essentials",
    title: "Signature Name Necklace",
    price: 999,
    caption: "Premium custom necklace, perfect for special anniversaries.",
    image: "/assets/products/gifts/items/neclace2.jpg",
    isNew: true,
    specifications: [
      { label: "Design", value: "Script / Block Font Options" },
      { label: "Clasp", value: "Secure Lobster Clasp" },
      { label: "Presentation", value: "Jewelry Box Included" }
    ]
  },
  {
    id: "necklace-3",
    category: "essentials",
    title: "Elite Keepsake Pendant",
    price: 1299,
    caption: "A high-end personal gift with double-sided engraving options.",
    image: "/assets/products/gifts/items/neclace3.jpg",
    specifications: [
      { label: "Specialty", value: "Double-sided Laser Marking" },
      { label: "Material", value: "Gold/Silver Plated Stainless Steel" },
      { label: "Engraving", value: "Precision Micro-marking" }
    ]
  },

  // --- SUBLIMATION ---
  {
    id: "cup-1",
    category: "sublimation",
    title: "Signature Color Mug",
    price: 449,
    caption: "Vibrant high-gloss finish for photos and full-color art.",
    image: "/assets/products/sublimation/items/Cup1.jpg",
    specifications: [
      { label: "Capacity", value: "330ml" },
      { label: "Material", value: "Reinforced Ceramic" },
      { label: "Printing", value: "High-Heat Sublimation" }
    ]
  },
  {
    id: "cup-2",
    category: "sublimation",
    title: "Artisan Ceramic Mug",
    price: 499,
    caption: "Premium ceramic with deep, vibrant colors that never fade.",
    image: "/assets/products/sublimation/items/Cup2.jpg",
    specifications: [
      { label: "Coating", value: "High-gloss ORCA Coating" },
      { label: "Durability", value: "500+ Dishwasher Cycles" },
      { label: "Print", value: "Vivid Edge-to-Edge Print" }
    ]
  },
  {
    id: "cup-3",
    category: "sublimation",
    title: "Theme Studio Mug",
    price: 549,
    caption: "Themed designs for birthdays, anniversaries, and holidays.",
    image: "/assets/products/sublimation/items/Cup3.jpg",
    isNew: true,
    specifications: [
      { label: "Themes", value: "Birthday, Anniversary, Travel" },
      { label: "Packaging", value: "Custom Cardboard Box" },
      { label: "Personalization", value: "Name + Photo Integration" }
    ]
  },
  {
    id: "cup-4",
    category: "sublimation",
    title: "Corporate Coffee Series",
    price: 399,
    caption: "Bulk sublimation solution for office branding and teams.",
    image: "/assets/products/sublimation/items/Cup4.jpg",
    specifications: [
      { label: "Bulk Offer", value: "Discount on 50+ Units" },
      { label: "Branding", value: "Logo + Employee Name" },
      { label: "Material", value: "Eco-friendly Ceramic" }
    ]
  },
  {
    id: "cup-5",
    category: "sublimation",
    title: "Elite Photo Mug",
    price: 599,
    caption: "Highest definition printing for complex photo-realistic designs.",
    image: "/assets/products/sublimation/items/Cup5.jpg",
    isBestSeller: true,
    specifications: [
      { label: "Print Quality", value: "300 DPI High-Resolution" },
      { label: "Capacity", value: "11oz / 325ml" },
      { label: "Safety", value: "Non-toxic Inks" }
    ]
  }
];
