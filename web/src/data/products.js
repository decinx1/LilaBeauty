// Product catalog — edit names, prices and categories as needed
export const WA_PHONE_NUMBER = '5213141614056'; // +52 1 314 161 4056

export const CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'lip-oil', label: 'Lip oils' },
  { id: 'labiales', label: 'Labiales' },
  { id: 'skincare', label: 'Skincare' },
  { id: 'bases', label: 'Bases' },
];

export const PRODUCTS = [
  // ── LIP OILS ──────────────────────────────────────────────────────────────
  { id: 2, name: 'e.l.f. Lip Oil Chocoluxe', brand: 'e.l.f.', price: '$195.00', category: 'lip-oil', image: '/images/img-02.webp' },
  { id: 9, name: 'e.l.f. Lip Oil Honey Talks', brand: 'e.l.f.', price: '$195.00', category: 'lip-oil', image: '/images/img-09.webp' },
  { id: 14, name: 'e.l.f. Lip Oil Super Neutral', brand: 'e.l.f.', price: '$195.00', category: 'lip-oil', image: '/images/img-14.webp' },
  { id: 12, name: 'e.l.f. Lip Oil Crystal Clear', brand: 'e.l.f.', price: '$195.00', category: 'lip-oil', image: '/images/img-12.webp' },
  { id: 4, name: 'NYX Fat Oil Lip Drip FOLD05', brand: 'NYX', price: '$185.00', category: 'lip-oil', image: '/images/img-04.webp' },
  { id: 36, name: 'NYX Fat Oil Lip', brand: 'NYX', price: '$185.00', category: 'lip-oil', image: '/images/img-36.webp' },
  { id: 45, name: 'Lip oil elf Pink quartz', brand: 'e.l.f', price: '$195.00', category: 'lip-oil', image: '/images/img-45.webp' },



  // ── LABIALES ──────────────────────────────────────────────────────────────
  { id: 6, name: 'e.l.f. Satin Lipstick Pink Me Energy', brand: 'e.l.f.', price: '$200.00', category: 'labiales', image: '/images/img-06.webp' },
  { id: 10, name: 'Maybelline Superstay Teddy Tint Skinnydip', brand: 'Maybelline', price: '$200.00', category: 'labiales', image: '/images/img-10.webp' },
  { id: 17, name: 'Maybelline Matte Lipstick 001 Crop Top', brand: 'Maybelline', price: '$200.00', category: 'labiales', image: '/images/img-17.webp' },
  { id: 26, name: 'NYX Jelly Job Gloss Ice Blue', brand: 'NYX', price: '$180.00', category: 'lip-oil', image: '/images/img-26.webp' },
  { id: 38, name: 'REVLON PHOTOREADY INSTANT PLUM SERUM GLOSS-BRILLO', brand: 'REVLON', price: '$180.00', category: 'labiales', image: '/images/img-38.webp' },
  { id: 42, name: 'Lipstick e.l.f. Tono Mauve Mentality', brand: 'e.l.f.', price: '$200.00', category: 'labiales', image: '/images/img-42.webp' },

  // ── SKINCARE ───────────────────────────────────────────────────────────────
  { id: 3, name: 'Limpiador Facial Starface', brand: 'Starface', price: '$200.00', category: 'skincare', image: '/images/img-03.webp' },
  { id: 7, name: 'e.l.f. Halo Glow Blush Wand', brand: 'e.l.f.', price: '$180.00', category: 'skincare', image: '/images/img-07.webp' },
  { id: 13, name: 'L’oréal Plump Ambition', brand: 'L’oréal', price: '$170.00', category: 'lip-oil', image: '/images/img-13.webp' },
  { id: 19, name: 'e.l.f. Squeeze Me Lip Balm Lemon', brand: 'e.l.f.', price: '$150.00', category: 'labiales', image: '/images/img-19.webp' },
  { id: 20, name: 'e.l.f. Glow Reviver Lip Balm Java Chip', brand: 'e.l.f.', price: '$180.00', category: 'skincare', image: '/images/img-20.webp' },
  { id: 23, name: 'Maybelline Cloudtopia Mousse Moonlit Rose 7', brand: 'Maybelline', price: '$180.00', category: 'skincare', image: '/images/img-23.webp' },
  { id: 25, name: 'e.l.f. Squeeze Me Lip Balm Violet', brand: 'e.l.f.', price: '$150.00', category: 'labiales', image: '/images/img-25.webp' },

  // ── NYX JELLY JOB GLOSSES ─────────────────────────────────────────────────
  { id: 30, name: 'NYX Jelly Job Gloss Blue', brand: 'NYX', price: '$180.00', category: 'lip-oil', image: '/images/img-30.webp' },
  { id: 31, name: 'NYX Jelly Job Gloss Red', brand: 'NYX', price: '$180.00', category: 'lip-oil', image: '/images/img-31.webp' },
  { id: 32, name: 'NYX Jelly Job Gloss Pink', brand: 'NYX', price: '$180.00', category: 'lip-oil', image: '/images/img-32.webp' },
  { id: 33, name: 'NYX Jelly Job Gloss Cherry', brand: 'NYX', price: '$180.00', category: 'lip-oil', image: '/images/img-33.webp' },


  // ── BASES ─────────────────────────────────────────────────
  { id: 34, name: 'PALETA DE CONTORNO', brand: 'e.l.f.', price: '$185.00', category: 'bases', image: '/images/img-34.webp' },
  { id: 39, name: 'BASE LIQUIDA INFALLIBLE 24H', brand: 'L’oréal', price: '$200.00', category: 'bases', image: '/images/img-39.webp' },
  { id: 44, name: 'BASE SKIN TINI TONO 40', brand: 'L’oréal', price: '$200.00', category: 'bases', image: '/images/img-44.webp' },

  // ── OTRA CATEGORIA ──────────────────────────────────────────────────────────────
  { id: 35, name: 'Iluminador elf Champagne Campaign', brand: 'e.l.f.', price: '$180.00', category: 'todos', image: '/images/img-35.webp' },

  // ── NUEVOS PRODUCTOS ────────────────────────────────────────────────────────
  { id: 46, name: 'Lip Balm E.L.F. Yummy Gummy Bear', brand: 'e.l.f.', price: '$180.00', category: 'labiales', image: '/images/img-46.png' },
  { id: 47, name: 'Lip Balm E.L.F. Pink Lemonade', brand: 'e.l.f', price: '$180.00', category: 'labiales', image: '/images/img-47.png' },
  { id: 48, name: 'Plump Ambition 380', brand: 'L\'Oréal', price: '$200.00', category: 'lip-oil', image: '/images/img-48.png' },
  { id: 49, name: 'Lifter Gloss Tono 004', brand: 'Maybelline', price: '$200.00', category: 'lip-oil', image: '/images/img-49.png' },
  { id: 50, name: 'Lifter Gloss Tono 006', brand: 'Maybelline', price: '$200.00', category: 'lip-oil', image: '/images/img-50.png' },
  { id: 51, name: 'Lifter Gloss Tono 008', brand: 'Maybelline', price: '$200.00', category: 'lip-oil', image: '/images/img-51.png' },
  { id: 52, name: 'Gloss SUPERSTAY TEDDY TINT Tono 50', brand: 'Maybelline', price: '$200.00', category: 'labiales', image: '/images/img-52.png' },
  { id: 53, name: 'Gloss SUPERSTAY TEDDY TINT Tono 15', brand: 'Maybelline', price: '$200.00', category: 'labiales', image: '/images/img-53.png' },
  { id: 54, name: 'Gloss SUPERSTAY TEDDY TINT Tono 130', brand: 'Maybelline', price: '$200.00', category: 'labiales', image: '/images/img-54.png' },
  { id: 55, name: 'Gloss SUPERSTAY TEDDY TINT Tono 105', brand: 'Maybelline', price: '$200.00', category: 'labiales', image: '/images/img-55.png' },
  { id: 56, name: 'Revlon PhotoReady Instant Blur Liner Tono 007 Filters', brand: 'Revlon', price: '$180.00', category: 'bases', image: '/images/img-56.png' },
  { id: 57, name: 'Revlon PhotoReady Instant Blur Liner Tono 006 Vapor', brand: 'Revlon', price: '$180.00', category: 'bases', image: '/images/img-57.png' },
  { id: 58, name: 'Revlon PhotoReady Instant Blur Liner Tono 009 Murky', brand: 'Revlon', price: '$180.00', category: 'bases', image: '/images/img-58.png' },
  { id: 59, name: 'Maybelline Serum Lipstick Tono 102', brand: 'Maybelline', price: '$200.00', category: 'labiales', image: '/images/img-59.png' },
  { id: 60, name: 'Maybelline Serum Lipstick Tono 106', brand: 'Maybelline', price: '$200.00', category: 'labiales', image: '/images/img-60.png' },
  { id: 61, name: 'Gloss SUPERSTAY TEDDY TINT Tono 95', brand: 'Maybelline', price: '$200.00', category: 'labiales', image: '/images/img-61.png' },
  { id: 62, name: 'Maybelline Serum Lipstick Tono 005', brand: 'Maybelline', price: '$200.00', category: 'labiales', image: '/images/img-62.png' },
  { id: 63, name: 'Maybelline Serum Lipstick Tono 003', brand: 'Maybelline', price: '$200.00', category: 'labiales', image: '/images/img-63.png' },
  { id: 64, name: 'Maybelline Serum Lipstick Tono 001', brand: 'Maybelline', price: '$200.00', category: 'labiales', image: '/images/img-64.png' },
  { id: 65, name: 'Maybelline Serum Lipstick Tono 006', brand: 'Maybelline', price: '$200.00', category: 'labiales', image: '/images/img-65.png' },
  { id: 66, name: 'Blush E.L.F. Sauve Mauve', brand: 'e.l.f.', price: '$200.00', category: 'skincare', image: '/images/img-66.png' },
  { id: 67, name: 'SuperStay Maybelline Tono 305', brand: 'Maybelline', price: '$210.00', category: 'labiales', image: '/images/img-67.png' },
  { id: 68, name: 'SuperStay Maybelline Tono 15', brand: 'Maybelline', price: '$210.00', category: 'labiales', image: '/images/img-68.png' },
  { id: 69, name: 'Base Maybelline Tono 120', brand: 'Maybelline', price: '$220.00', category: 'bases', image: '/images/img-69.png' },
  { id: 70, name: 'Base Maybelline Tono 220', brand: 'Maybelline', price: '$220.00', category: 'bases', image: '/images/img-70.png' },
  { id: 71, name: 'Base Lóréal Infallible 24h Tono 104.5', brand: 'L´oréal', price: '$220.00', category: 'bases', image: '/images/img-71.png' },
  { id: 72, name: 'Tinta E.L.F. Left on Red ', brand: 'e.l.f', price: '$220.00', category: 'labiales', image: '/images/img-72.png' },
  { id: 73, name: 'Tinta E.L.F. Pink Positive ', brand: 'e.l.f.', price: '$220.00', category: 'labiales', image: '/images/img-73.png' },
  { id: 74, name: 'Tinta E.L.F. Orange Crush', brand: 'e.l.f.', price: '$220.00', category: 'labiales', image: '/images/img-74.png' },
  { id: 75, name: 'E.L.F. Camo Corrector Green', brand: 'e.l.f.', price: '$180.00', category: 'bases', image: '/images/img-75.png' },
  { id: 76, name: 'Maybelline Corrector Tono 022', brand: 'Maybelline', price: '$180.00', category: 'bases', image: '/images/img-76.png' },
  { id: 77, name: 'Maybelline Corrector Tono 135', brand: 'Maybelline', price: '$180.00', category: 'bases', image: '/images/img-77.png' },
  { id: 78, name: 'Brush E.L.F. Tono Coral Crush', brand: 'e.l.f.', price: '$200.00', category: 'skincare', image: '/images/img-78.png' },
  { id: 79, name: 'Blush NYX Butta With Time', brand: 'NYX', price: '$220.00', category: 'skincare', image: '/images/img-79.png' },
  { id: 80, name: 'Base E.L.F. Soft Glam Tono 13 Fair Natural', brand: 'e.l.f.', price: '$220.00', category: 'bases', image: '/images/img-80.png' },
  { id: 81, name: 'Blush E.L.F. Tono Dusty Rose', brand: 'e.l.f.', price: '$200.00', category: 'skincare', image: '/images/img-81.png' },
  { id: 82, name: 'E.L.F. Glow Reviver Tono Lovestick', brand: 'e.l.f.', price: '$200.00', category: 'lip-oil', image: '/images/img-82.png' },
  { id: 83, name: 'Labial L´oréal Infalible Tono 560', brand: 'L´oréal', price: '$210.00', category: 'labiales', image: '/images/img-83.png' },
  { id: 84, name: 'Labial L´oréañ Infalible Tono 245', brand: 'L´oréal', price: '$210.00', category: 'labiales', image: '/images/img-84.png' },
  { id: 85, name: 'Monochromatic Multi - Stick E.L.F. Tono Bronzed Cherry', brand: 'e.l.f.', price: '$200.00', category: 'skincare', image: '/images/img-85.png' },
  { id: 86, name: 'Lip Oil E.L.F. Tono Princess Cut', brand: 'e.l.f.', price: '$195.00', category: 'lip-oil', image: '/images/img-86.png' },
  { id: 87, name: 'Base Maybelline Fit Me Tono 115', brand: 'Maybelline', price: '$220.00', category: 'bases', image: '/images/img-87.png' },
  { id: 88, name: 'Lip Oil E.L.F. tono Jam Session', brand: 'e.l.f.', price: '$195.00', category: 'lip-oil', image: '/images/img-88.png' },
  { id: 89, name: 'Plump Ambition tono 641', brand: 'L´oréal', price: '$185.00', category: 'lip-oil', image: '/images/img-89.png' },
  { id: 90, name: 'E.L.F. Tint Burgun-Did That', brand: 'e.l.f.', price: '$220.00', category: 'labiales', image: '/images/img-90.png' },
  { id: 91, name: 'Camo Liquid Bronzer & Contour E.L.F. 8 Deep Intense', brand: 'e.l.f.', price: '$200.00', category: 'bases', image: '/images/img-91.png' },
  { id: 92, name: 'Camo Liquid Bronzer & Contour E.L.F. 1 Fair Tres Clair', brand: 'e.l.f.', price: '$200.00', category: 'bases', image: '/images/img-92.png' },
  { id: 93, name: 'Camo Liquid Bronzer & Contour E.L.F. 4 Light/Medium ', brand: 'e.l.f.', price: '$200.00', category: 'bases', image: '/images/img-93.png' },
  { id: 94, name: 'E.L.F. Camo Corrector Peach', brand: 'e.l.f.', price: '$180.00', category: 'bases', image: '/images/img-94.png' },
  { id: 95, name: 'Labial Maybelline Vinyl tono 50', brand: 'Maybelline', price: '$200.00', category: 'labiales', image: '/images/img-95.png' },
  { id: 96, name: 'Labial Maybelline Vinyl tono 25', brand: 'Maybelline', price: '$200.00', category: 'labiales', image: '/images/img-96.png' },
  { id: 97, name: 'Labial Maybelline Vinyl tono 150', brand: 'Maybelline', price: '$200.00', category: 'labiales', image: '/images/img-97.png' },
  { id: 98, name: 'Superstay Maybelline Tono 335', brand: 'Maybelline', price: '$210.00', category: 'labiales', image: '/images/img-98.png' },
  { id: 99, name: 'Superstay Maybelline Tono 160', brand: 'Maybelline', price: '$210.00', category: 'labiales', image: '/images/img-99.png' },

];

// Hero showcase images (diverse, visually striking)
export const HERO_IMAGES = [
  '/images/img-21.webp',
  '/images/img-04.webp',
  '/images/img-27.webp',
  '/images/img-23.webp',
];
