import { ScrollReveal } from '../ScrollReveal';
import FloatingParticles from '../FloatingParticles/FloatingParticles';
import { WA_PHONE_NUMBER } from '../../data/products';
import styles from './Boxes.module.css';

const BOXES = [
  {
    id: 'glow',
    name: 'Caja Glow',
    desc: 'e.l.f. Lip Oil Coral + Satin Lipstick Red + Halo Glow Blush Wand',
    price: '$25.00',
    emoji: '✨',
    images: ['/images/img-01.jpg', '/images/img-08.jpg', '/images/img-07.jpg'],
  },
  {
    id: 'date-night',
    name: 'Caja Date Night',
    desc: 'e.l.f. Satin Lipstick + Maybelline Vinyl Ink + Lip Oil + NYX Jelly Gloss',
    price: '$30.00',
    emoji: '💋',
    images: ['/images/img-06.jpg', '/images/img-24.jpg', '/images/img-05.jpg', '/images/img-31.jpg'],
  },
  {
    id: 'skincare',
    name: 'Caja Skincare',
    desc: 'Star Wash Salicylic Cleanser + e.l.f. Halo Glow Skin Tint + Bronzing Drops',
    price: '$28.00',
    emoji: '🌿',
    images: ['/images/img-03.jpg', '/images/img-25.jpg', '/images/img-13.jpg'],
  },
];

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
            const waText = encodeURIComponent(`¡Hola! Me interesa la ${box.name} (${box.price}). ¿Está disponible?`);
            return (
              <ScrollReveal key={box.id} delay={i * 0.1}>
                <article className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.emoji}>{box.emoji}</div>
                    <div className={styles.productsComposition}>
                      {box.images?.map((imgUrl, idx) => (
                        <div key={imgUrl} className={styles.miniCard} style={{ zIndex: 10 + idx }}>
                          <img src={imgUrl} alt={`${box.name} ítem ${idx + 1}`} className={styles.miniImg} loading="lazy" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.info}>
                    <h3 className={`font-display ${styles.name}`}>{box.name}</h3>
                    <p className={styles.desc}>{box.desc}</p>
                    <div className={styles.footer}>
                      <span className={styles.price}>{box.price}</span>
                      <a
                        href={`https://wa.me/${WA_PHONE_NUMBER}?text=${waText}`}
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
