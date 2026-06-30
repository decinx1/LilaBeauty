import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={`font-display ${styles.brand}`}>Lila Beauty</p>

        <a
          href="https://www.instagram.com/lilabeauty.mzo/"
          aria-label="Instagram de Lila Beauty"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.igLink}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"/>
          </svg>
          @lilabeauty.mzo
        </a>

        <p className={styles.copy}>Hecho con cariño para ti ✨</p>
      </div>
    </footer>
  );
}
