// Product catalog — edit names, prices and categories as needed
export const WA_PHONE_NUMBER = '5213141614056'; // +52 1 314 161 4056

export const CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'lip-oil', label: 'Lip oils' },
  { id: 'labiales', label: 'Labiales' },
  { id: 'skincare', label: 'Skincare' },
];

export const PRODUCTS = [
  // ── LIP OILS ──────────────────────────────────────────────────────────────
  { id: 1, name: 'e.l.f. Lip Oil Rose Envy', brand: 'e.l.f.', price: '$195', category: 'lip-oil', image: '/images/img-01.jpg' },
  { id: 2, name: 'e.l.f. Lip Oil Chocoluxe', brand: 'e.l.f.', price: '$195', category: 'lip-oil', image: '/images/img-02.jpg' },
  { id: 5, name: 'e.l.f. Lip Oil Papayarazzi', brand: 'e.l.f.', price: '$195', category: 'lip-oil', image: '/images/img-05.jpg' },
  { id: 9, name: 'e.l.f. Lip Oil Honey Talks', brand: 'e.l.f.', price: '$195', category: 'lip-oil', image: '/images/img-09.jpg' },
  { id: 14, name: 'e.l.f. Lip Oil Super Neutral', brand: 'e.l.f.', price: '$195', category: 'lip-oil', image: '/images/img-14.jpg' },
  { id: 12, name: 'e.l.f. Lip Oil Crystal Clear', brand: 'e.l.f.', price: '$200', category: 'lip-oil', image: '/images/img-12.jpg' },
  { id: 15, name: 'e.l.f. Skin Bronzing Drops Pure Gold', brand: 'e.l.f. Skin', price: '$200', category: 'skincare', image: '/images/img-15.jpg' },
  { id: 4, name: 'NYX Fat Oil Lip Drip FOLD05', brand: 'NYX', price: '$185', category: 'lip-oil', image: '/images/img-04.jpg' },

  // ── LABIALES ──────────────────────────────────────────────────────────────
  { id: 6, name: 'e.l.f. Satin Lipstick Pink Me Energy', brand: 'e.l.f.', price: '$200', category: 'labiales', image: '/images/img-06.jpg' },
  { id: 8, name: 'e.l.f. Satin Lipstick Cherry On Top', brand: 'e.l.f.', price: '$200', category: 'labiales', image: '/images/img-08.jpg' },
  { id: 11, name: 'Maybelline Skinnydip', brand: 'Maybelline', price: '$10.00', category: 'labiales', image: '/images/img-11.jpg' },
  { id: 10, name: 'Maybelline Superstay Teddy Tint Petalcore', brand: 'Maybelline', price: '$11.00', category: 'labiales', image: '/images/img-10.jpg' },
  { id: 16, name: 'Maybelline Matte Lipstick 101 Upstate Satin', brand: 'Maybelline', price: '$10.00', category: 'labiales', image: '/images/img-16.jpg' },
  { id: 17, name: 'Maybelline Matte Lipstick 001 Crop Top', brand: 'Maybelline', price: '$10.00', category: 'labiales', image: '/images/img-17.jpg' },
  { id: 24, name: 'Maybelline Superstay Vinyl Ink 105 Golden', brand: 'Maybelline', price: '$200', category: 'labiales', image: '/images/img-24.jpg' },
  { id: 27, name: 'NYX Smushy Matte Watermelon', brand: 'NYX', price: '$9.00', category: 'labiales', image: '/images/img-27.jpg' },
  { id: 28, name: 'NYX Smushy Matte Pink', brand: 'NYX', price: '$9.00', category: 'labiales', image: '/images/img-28.jpg' },
  { id: 29, name: 'NYX Smushy Matte Berry', brand: 'NYX', price: '$9.00', category: 'labiales', image: '/images/img-29.jpg' },
  { id: 21, name: 'Pixi On-the-Glow Superglow', brand: 'Pixi', price: '$170', category: 'skincare', image: '/images/img-21.jpg' },
  { id: 26, name: 'NYX Jelly Job Gloss Ice Blue', brand: 'NYX', price: '$9.00', category: 'lip-oil', image: '/images/img-26.jpg' },

  // ── SKINCARE ───────────────────────────────────────────────────────────────
  { id: 3, name: 'Limpiador Facial Starface', brand: 'Starface', price: '$200', category: 'skincare', image: '/images/img-03.jpg' },
  { id: 7, name: 'e.l.f. Halo Glow Blush Wand', brand: 'e.l.f.', price: '$180', category: 'skincare', image: '/images/img-07.jpg' },
  { id: 13, name: 'L’oréal Plump Ambition', brand: 'L’oréal', price: '$170.00', category: 'lip-oil', image: '/images/img-13.jpg' },
  { id: 18, name: 'e.l.f. Máscara de Pestañas', brand: 'e.l.f.', price: '$200', category: 'skincare', image: '/images/img-18.jpg' },
  { id: 19, name: 'e.l.f. Squeeze Me Lip Balm Lemon', brand: 'e.l.f.', price: '$150', category: 'labiales', image: '/images/img-19.jpg' },
  { id: 20, name: 'e.l.f. Glow Reviver Lip Balm Java Chip', brand: 'e.l.f.', price: '$8.00', category: 'skincare', image: '/images/img-20.jpg' },
  { id: 22, name: 'e.l.f. Halo Glow Skin Tint 6 Light Cool', brand: 'e.l.f.', price: '$200', category: 'skincare', image: '/images/img-22.jpg' },
  { id: 23, name: 'Maybelline Cloudtopia Mousse Moonlit Rose 7', brand: 'Maybelline', price: '$180', category: 'skincare', image: '/images/img-23.jpg' },
  { id: 25, name: 'e.l.f. Squeeze Me Lip Balm Violet', brand: 'e.l.f.', price: '$150', category: 'labiales', image: '/images/img-25.jpg' },

  // ── NYX JELLY JOB GLOSSES ─────────────────────────────────────────────────
  { id: 30, name: 'NYX Jelly Job Gloss Blue', brand: 'NYX', price: '$9.00', category: 'lip-oil', image: '/images/img-30.jpg' },
  { id: 31, name: 'NYX Jelly Job Gloss Red', brand: 'NYX', price: '$9.00', category: 'lip-oil', image: '/images/img-31.jpg' },
  { id: 32, name: 'NYX Jelly Job Gloss Pink', brand: 'NYX', price: '$9.00', category: 'lip-oil', image: '/images/img-32.jpg' },
  { id: 33, name: 'NYX Jelly Job Gloss Cherry', brand: 'NYX', price: '$9.00', category: 'lip-oil', image: '/images/img-33.jpg' },
  { id: 34, name: 'NYX Jelly Job Gloss Terracota', brand: 'NYX', price: '$9.00', category: 'lip-oil', image: '/images/img-34.jpg' },
];

// Hero showcase images (diverse, visually striking)
export const HERO_IMAGES = [
  '/images/img-01.jpg',
  '/images/img-05.jpg',
  '/images/img-11.jpg',
  '/images/img-23.jpg',
];
