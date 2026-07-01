import { motion } from 'framer-motion';
import { HERO_IMAGES } from '../../data/products';
import FloatingParticles from '../FloatingParticles/FloatingParticles';
import HeroProductFan from './HeroProductFan';
import styles from './Hero.module.css';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      {/* Blobs & Particles */}
      <div className={styles.blobA} />
      <div className={styles.blobB} />
      <div className={styles.blobC} />
      <FloatingParticles count={16} color="rose" />

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Logo Icon Box */}
          <motion.div variants={item} className={styles.logoBoxWrapper}>
            <div className={styles.logoBox}>
              <img src="/images/logo.jpg" alt="Lila Beauty" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={item} className={styles.heading}>
            Belleza que se siente{' '}
            <span className={styles.highlight}>tuya</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={item} className={styles.sub}>
            Productos de belleza originales , seleccionados con cariño y<br className={styles.break} />
            listos para ti.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={item} className={styles.ctaWrapper}>
            <a href="#catalogo" className={styles.ctaButton}>
              <span>Ver Catálogo</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.ctaIcon}>
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </motion.div>

          {/* Product Arch Showcase (Fan Layout) */}
          <HeroProductFan images={HERO_IMAGES} />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className={styles.scrollText}>SCROLL</span>
          <div className={styles.scrollLine} />
        </motion.div>
      </div>
    </section>
  );
}
