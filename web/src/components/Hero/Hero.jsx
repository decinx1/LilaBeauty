import { motion } from 'framer-motion';
import { HERO_IMAGES } from '../../data/products';
import FloatingParticles from '../FloatingParticles/FloatingParticles';
import styles from './Hero.module.css';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const imgVariant = (delay) => ({
  hidden: { opacity: 0, scale: 0.92 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      {/* Blobs */}
      <div className={styles.blobA} />
      <div className={styles.blobB} />
      <div className={styles.blobC} />
      <FloatingParticles count={16} color="rose" />

      <div className={`container ${styles.grid}`}>
        {/* Text */}
        <motion.div
          className={styles.text}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={item} className={`pill pill-badge ${styles.badge}`}>
            ✨ Nuevo · Cajas armadas a tu gusto
          </motion.span>

          <motion.h1 variants={item} className={`font-display ${styles.heading}`}>
            Belleza que se siente{' '}
            <span className={styles.accent}>tuya</span>
          </motion.h1>

          <motion.p variants={item} className={styles.sub}>
            Lip oils, labiales y skincare que aman tu piel.
            Todo lo que vendemos, en un solo lugar — sin tener que preguntar.
          </motion.p>

          <motion.div variants={item} className={styles.cta}>
            <a href="#catalogo" className="btn-primary">Ver catálogo</a>
            <a href="#cajas" className="btn-secondary">Cajas armadas</a>
          </motion.div>
        </motion.div>

        {/* Product grid mosaic */}
        <div className={styles.mosaic}>
          {HERO_IMAGES.map((src, i) => (
            <motion.div
              key={src}
              className={styles.mosaicItem}
              variants={imgVariant(0.3 + i * 0.1)}
              initial="hidden"
              animate="show"
              whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
            >
              <img src={src} alt="Producto Lila Beauty" loading="eager" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
