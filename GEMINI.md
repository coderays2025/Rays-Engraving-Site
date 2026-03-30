# Rays Laser - Project Copilot Context

This file serves as the long-term memory and architectural guide for the **Rays Laser** project. It outlines our mission, design mandates, completed work, and future roadmap.

## 1. Project Mission
To build and evolve a premium, high-converting digital presence for **Rays Laser Marking & Engraving** (Mysuru, India). The site must showcase artisan-level precision and handle professional B2B/B2C inquiries.

## 2. Core Mandates (Non-Negotiable)
- **Visual Identity:** STRICTLY adhere to the **Black & Gold** theme.
- **Tone:** Professional, industrial-luxury, and craftsman-focused.
- **Functionality:** Every user action (Quote form, WhatsApp button, Bulk Modal) must lead to a clear conversion path.

## 3. Current Architecture (Modernized)
- **Framework:** React 17 + Vite (Migrated from react-scripts).
- **Data Strategy:** **Data-Driven UI.** All site content is decoupled into `src/data/` (Service, Product, Gallery, Testimonials).
- **Styling:** Bootstrap 5 + Glassmorphism + Custom CSS Variables.
- **Lead Capture:**
    - **EmailJS:** Connected to `rayslasermarking@gmail.com`.
    - **WhatsApp:** Direct redirection for high-res design files (25MB+).
    - **Bulk Modal:** Session-aware popup for large inquiries.

## 4. Completed Milestones (March 2026 Sprint)
- [x] **Vite Migration:** Fixed legacy Node/OpenSSL issues and boosted performance.
- [x] **Header Redesign:** High-end glassmorphic navbar with dropdown grouping.
- [x] **Services Refactor:** Switched from heavy cards to minimalist icon-based grid.
- [x] **Materials Section:** Launched `MaterialsSection.jsx` featuring Stainless Steel, Aluminum, and Acrylic expertise.
- [x] **Gallery Lightbox:** Implemented a full-screen zoom modal for portfolio precision viewing.
- [x] **About Section Refactor:** Modernized "Who We Are" with a Core Values grid and glassmorphic layout.
- [x] **SEO Activation:** Optimized `index.html` with local search tags for Mysuru and Karnataka.

## 5. Strategic Roadmap (Next Steps)
1. **Gallery Content:** Replace placeholders in `src/data/galleryData.js` with real high-res project photos from the client.
2. **Performance:** Audit asset sizes (images in `/public/assets`) to ensure fast loading on mobile.
3. **Analytics:** Integrate Google Analytics or a simple tracking pixel to monitor inquiry conversions.

## 6. Business Context
- **Primary Email:** `rayslasermarking@gmail.com`
- **Location:** No 140/2B, KRS main road, Kumbara koppal Kaveri layout, Metagalli post Mysuru, 570016
- **WhatsApp Business Link:** `https://wa.me/message/RWLHY3TJR6VDN1`

---
*This file should be updated after every major sprint or architectural change.*
