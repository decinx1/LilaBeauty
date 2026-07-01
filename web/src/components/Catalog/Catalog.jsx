import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CATEGORIES, PRODUCTS } from '../../data/products';
import { ScrollReveal } from '../ScrollReveal';
import ProductCard from './ProductCard';
import styles from './Catalog.module.css';

const PAGE_SIZE = 9;

export default function Catalog() {
  const [active, setActive] = useState('todos');
  const [page, setPage]     = useState(1);

  const filtered = active === 'todos'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === active);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible    = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleFilter(id) {
    setActive(id);
    setPage(1);
  }

  return (
    <section id="catalogo" className={`section ${styles.catalog}`}>
      <div className={styles.blobA} />

      <div className="container">
        {/* Header */}
        <ScrollReveal>
          <div className={styles.sectionHead}>
            <h2 className={`font-display ${styles.heading}`}>Lo que estás buscando</h2>
          </div>
        </ScrollReveal>

        {/* Filter bar */}
        <ScrollReveal delay={0.1}>
          <div className={styles.filterBar} role="group" aria-label="Filtrar productos">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                id={`filter-${cat.id}`}
                className={`${styles.filterPill} ${active === cat.id ? styles.active : ''}`}
                onClick={() => handleFilter(cat.id)}
                aria-pressed={active === cat.id}
              >
                <span className={styles.pillLabel}>{cat.label}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Product grid */}
        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {visible.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              id="catalog-prev"
              className={styles.pageBtn}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              aria-label="Página anterior"
            >
              ←
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                id={`catalog-page-${n}`}
                className={`${styles.pageDot} ${n === page ? styles.pageDotActive : ''}`}
                onClick={() => setPage(n)}
                aria-label={`Página ${n}`}
                aria-current={n === page ? 'page' : undefined}
              >
                {n}
              </button>
            ))}

            <button
              id="catalog-next"
              className={styles.pageBtn}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              aria-label="Siguiente página"
            >
              →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
