import { ScrollReveal } from '../ScrollReveal';
import FloatingParticles from '../FloatingParticles/FloatingParticles';
import { WA_PHONE_NUMBER } from '../../data/products';
import styles from './Contact.module.css';

const WA_MESSAGE = encodeURIComponent('Hola! Quiero saber más sobre los productos de Lila Beauty 💄');

export default function Contact() {
  return (
    <section id="contacto" className={`section ${styles.contact}`}>
      <div className={styles.blob} />
      <div className={styles.blobB} />
      <FloatingParticles count={12} color="rose" />
      <div className="container">
        <ScrollReveal>
          <div className={styles.inner}>
            <span className={`pill pill-badge ${styles.badge}`}>💬 Escribinos</span>
            <h2 className={`font-display ${styles.heading}`}>
              ¿Lista para tu próximo favorito?
            </h2>
            <p className={styles.sub}>
              Escribinos y te respondemos en minutos.
            </p>
            <p className={styles.note}>
              Coordinamos la entrega contigo por WhatsApp — sin envíos a domicilio.
            </p>

            <a
              id="contact-wa-btn"
              href={`https://wa.me/${WA_PHONE_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waBtn}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.42 1.27 4.86L2 22l5.3-1.39a9.9 9.9 0 0 0 4.74 1.2h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.78 14.24c-.25.7-1.46 1.34-2 1.42-.52.08-1.05.12-3.05-.66-2.56-1.02-4.2-3.62-4.33-3.8-.13-.18-1.03-1.37-1.03-2.62s.64-1.86.87-2.12c.23-.25.5-.31.66-.31h.48c.16 0 .37-.02.57.44.25.57.84 1.97.91 2.12.07.14.12.31.02.49-.43.83-.9.81-.59 1.31.95 1.5 1.9 2.06 3.27 2.7.24.11.39.1.53-.04.18-.18.74-.86.94-1.16.2-.3.4-.25.66-.15.27.1 1.69.8 1.98.95.29.14.48.21.55.33.07.13.07.73-.18 1.43Z"/>
              </svg>
              Escribirnos por WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
