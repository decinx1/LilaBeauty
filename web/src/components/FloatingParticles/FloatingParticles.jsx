import { useMemo } from 'react';
import { motion } from 'framer-motion';
import styles from './FloatingParticles.module.css';

/**
 * Decorative animated sparkles / dots that float gently.
 * @param {number} count - number of particles
 * @param {'rose'|'peach'|'plum'} color - tint
 */
export default function FloatingParticles({ count = 12, color = 'rose' }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: 3 + Math.random() * 5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      dur: 14 + Math.random() * 16,
      delay: Math.random() * 6,
      dx: -20 + Math.random() * 40,
      dy: -30 + Math.random() * 20,
    }));
  }, [count]);

  return (
    <div className={styles.container} aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className={`${styles.dot} ${styles[color]}`}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            x: [0, p.dx, 0],
            y: [0, p.dy, 0],
            opacity: [0, 0.7, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
