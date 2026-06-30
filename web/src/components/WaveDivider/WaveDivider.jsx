import styles from './WaveDivider.module.css';

/**
 * SVG wave that bridges two sections.
 * @param {'rose'|'cream'|'plum'|'peach'} fill — color of the wave (matches NEXT section)
 * @param {'rose'|'cream'|'plum'|'peach'|'transparent'} bg — background behind (matches PREVIOUS section)
 * @param {boolean} flip — mirror vertically for variety
 */
export default function WaveDivider({ fill = 'cream', bg = 'transparent', flip = false }) {
  return (
    <div
      className={`${styles.wave} ${styles[`bg_${bg}`]} ${flip ? styles.flip : ''}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`${styles.svg} ${styles[fill]}`}
      >
        <path d="M0,64 C240,110 480,20 720,64 C960,108 1200,20 1440,64 L1440,120 L0,120 Z" />
      </svg>
    </div>
  );
}
