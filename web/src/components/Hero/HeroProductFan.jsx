import { motion } from 'framer-motion';
import styles from './HeroProductFan.module.css';

// Arch layout configuration for 4 items (calculating angle, X offset, and Y curve)
const FAN_CONFIG = [
  { rotate: -14, x: -85, y: 16, delay: 0.3 },
  { rotate: -4,  x: -28, y: 2,  delay: 0.45 },
  { rotate: 4,   x: 28,  y: 2,  delay: 0.6 },
  { rotate: 14,  x: 85,  y: 16, delay: 0.75 },
];

export default function HeroProductFan({ images = [] }) {
  if (!images || images.length === 0) return null;

  return (
    <div className={styles.fanWrapper} aria-hidden="true">
      {images.slice(0, 4).map((imgUrl, idx) => {
        const cfg = FAN_CONFIG[idx] || FAN_CONFIG[0];

        return (
          <motion.div
            key={imgUrl}
            className={styles.card}
            style={{ zIndex: 10 + idx }}
            initial={{ opacity: 0, scale: 0.5, y: 40, rotate: 0, x: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: cfg.rotate,
              x: cfg.x,
              y: [cfg.y, cfg.y - 6, cfg.y],
            }}
            transition={{
              opacity: { duration: 0.6, delay: cfg.delay },
              scale: { duration: 0.6, delay: cfg.delay, ease: [0.22, 1, 0.36, 1] },
              rotate: { duration: 0.6, delay: cfg.delay, ease: [0.22, 1, 0.36, 1] },
              x: { duration: 0.6, delay: cfg.delay, ease: [0.22, 1, 0.36, 1] },
              y: {
                duration: 3 + idx * 0.5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: cfg.delay,
              },
            }}
            whileHover={{
              scale: 1.15,
              y: cfg.y - 14,
              rotate: 0,
              zIndex: 50,
              transition: { duration: 0.25 },
            }}
            whileTap={{
              scale: 1.1,
              y: cfg.y - 10,
              rotate: 0,
              zIndex: 50,
            }}
          >
            <div className={styles.imageWrap}>
              <img
                src={imgUrl}
                alt=""
                className={styles.img}
                loading="eager"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
