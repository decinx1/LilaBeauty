import { ScrollReveal } from '../ScrollReveal';
import FloatingParticles from '../FloatingParticles/FloatingParticles';
import styles from './Boxes.module.css';

const BOXES = [
  {
    id: 'glow',
    name: 'Caja Glow',
    desc: 'Lip oil + labial rojo + parches hidrocoloides',
    price: '$25.00',
    emoji: '✨',
  },
  {
    id: 'date-night',
    name: 'Caja Date Night',
    desc: '2 labiales + lip oil + brillo de labios',
    price: '$30.00',
    emoji: '💋',
  },
  {
    id: 'skincare',
    name: 'Caja Skincare',
    desc: 'Limpiador facial + halo glow + parches',
    price: '$28.00',
    emoji: '🌿',
  },
];

const WA_PHONE = '1'; // ← Replace with real number

export default function Boxes() {
  return (
    <section id="cajas" className={`section ${styles.boxes}`}>
      <FloatingParticles count={10} color="peach" />

      <div className="container">
        <ScrollReveal>
          <div className={styles.sectionHead}>
            <h2 className={`font-display ${styles.heading}`}>Armadas con cariño</h2>
            <p className={styles.sub}>
              Combos listos para regalar — o para regalarte.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {BOXES.map((box, i) => {
            const waText = encodeURIComponent(`Hola! Me interesa la ${box.name} (${box.price}). ¿Está disponible?`);
            return (
              <ScrollReveal key={box.id} delay={i * 0.1}>
                <article className={styles.card}>
                  <div className={styles.emoji}>{box.emoji}</div>
                  <div className={styles.info}>
                    <h3 className={`font-display ${styles.name}`}>{box.name}</h3>
                    <p className={styles.desc}>{box.desc}</p>
                    <div className={styles.footer}>
                      <span className={styles.price}>{box.price}</span>
                      <a
                        href={`https://wa.me/${WA_PHONE}?text=${waText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cta}
                        id={`box-cta-${box.id}`}
                      >
                        Pedir ahora
                      </a>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
