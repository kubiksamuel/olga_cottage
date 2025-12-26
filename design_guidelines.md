# Design Guidelines: Cottage Olga Rental Website

## Design Approach
**Reference-Based**: Drawing inspiration from Airbnb's immersive property showcases and Booking.com's trust-building layouts, adapted for a single-property rental experience that emphasizes natural beauty and authentic mountain hospitality.

**Core Principle**: Create an emotional connection through stunning imagery while providing clear, practical information that builds confidence in booking.

---

## Typography System
- **Primary Font**: Inter or similar (Google Fonts) - clean, modern readability
- **Headings**: Bold weights (700) for H1/H2, Semi-bold (600) for H3
- **Body**: Regular (400) for text, Medium (500) for emphasis
- **Hierarchy**: H1 (text-5xl lg:text-6xl), H2 (text-3xl lg:text-4xl), H3 (text-xl lg:text-2xl), Body (text-base lg:text-lg)

---

## Layout & Spacing
**Tailwind Units**: Consistently use 4, 8, 12, 16, 20, 24 for spacing (p-4, mb-8, gap-12, py-16, py-20, py-24)

**Container Strategy**: max-w-7xl for full sections, max-w-4xl for content-focused areas

**Responsive Grid**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for features/amenities, lg:grid-cols-2 for room cards

---

## Page Structure

### 1. Hero Section (100vh)
Full-screen image from provided exterior photos with overlay gradient
- Centered headline: "Cottage Olga - Your Mountain Retreat in Terchová"
- Subheading: "500m from Jánošík Holes, Heart of Malá Fatra"
- Primary CTA button with backdrop-blur-md background: "Check Availability"
- Scroll indicator at bottom

### 2. Introduction Section (py-20)
Two-column layout (text + image)
- Left: Welcoming description of year-round accommodation
- Right: Interior photo from provided images
- Trust elements: "20 beds + 4 extra", "Year-round availability"

### 3. Accommodation Overview (py-24)
Grid layout showcasing two distinct parts
- Card 1: "Original Section" - 4 rooms, shared kitchen, common area with fireplace
- Card 2: "New Annex" - 2 triple + 2 quad rooms, private amenities
- Each card includes: room count, capacity, key features with icons (toilet, shower, kitchen, TV, balcony)

### 4. Photo Gallery (py-20)
Masonry-style grid (3 columns on desktop, 2 on tablet, 1 on mobile)
- Use all 4 provided images prominently
- Include modal/lightbox interaction for full-screen viewing
- Mix of interior and exterior shots

### 5. Location & Activities (py-24)
Split layout with embedded map placeholder and features list
- Highlight: Jánošík holes (500m), Malá Fatra trails
- Icons for: hiking, nature, winter activities
- Brief descriptions of nearby attractions

### 6. Outdoor Amenities (py-20)
Icon-driven feature cards in 3-column grid
- Fireplace seating area
- Swing & playground elements
- Board games (darts, badminton)
- On-site parking
- Each with descriptive text

### 7. Booking CTA Section (py-24)
Centered, high-contrast section with background image (blurred)
- Headline: "Ready for Your Mountain Adventure?"
- Dual CTAs: "Book Now" (primary) + "Contact Us" (secondary with backdrop-blur)
- Supporting text: Capacity reminder, seasonal availability note

### 8. Footer (py-12)
Comprehensive footer with contact information, quick links, location details
- Contact: Email, phone (placeholder for actual details)
- Location: Terchová, Biely potok section
- Social media placeholders
- Copyright notice

---

## Component Specifications

**Cards**: Rounded corners (rounded-xl), subtle shadows (shadow-lg), padding p-6 to p-8

**Buttons**: 
- Primary: Solid fill, px-8 py-4, rounded-lg, text-lg font-semibold
- On-image buttons: backdrop-blur-md with semi-transparent background
- Secondary: Border style, same sizing

**Icons**: Use Heroicons via CDN, size-6 for inline, size-8 for feature highlights

**Images**: 
- Hero: Object-cover, full viewport height
- Gallery: aspect-ratio-square or aspect-video, object-cover
- Feature images: rounded-lg with subtle shadow

---

## Images Section
**Required Images** (use provided photos strategically):
1. **Hero**: Exterior shot of cottage with mountain backdrop
2. **Introduction**: Cozy interior (common room or bedroom)
3. **Gallery**: All 4 provided images in masonry layout
4. **Background textures**: Mountain/forest scenes as subtle section backgrounds where appropriate

**Image Treatment**: Maintain natural, authentic feel - minimal filters, showcase real cottage atmosphere

---

## Accessibility & Performance
- Semantic HTML structure (header, main, section, footer)
- Alt text for all images describing cottage features
- Focus states on all interactive elements
- Lazy loading for gallery images
- Responsive images with appropriate sizes

---

## Animations
Minimal, purposeful only:
- Subtle fade-in on scroll for section reveals
- Smooth scroll behavior for anchor links
- Gallery lightbox transitions
**No**: Excessive hover effects, distracting parallax, auto-playing carousels

This design creates an immersive, trust-building experience that showcases Cottage Olga's authentic mountain charm while providing clear pathways to booking.