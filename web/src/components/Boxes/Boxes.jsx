import { ScrollReveal } from '../ScrollReveal';
import FloatingParticles from '../FloatingParticles/FloatingParticles';
import { WA_PHONE_NUMBER } from '../../data/products';
import styles from './Boxes.module.css';

const BOXES = [
  {
    id: '10-piezas',
    name: 'Caja de 10 piezas',
    desc: 'Mix surtido sin piezas repetidas. Combina variedad de labiales, lip oils y skincare de marcas originales, ideal para emprender o compartir.',
    price: '$130',
    unit: 'c/u',
    totalPrice: '$1,300 total',
    badge: 'Para empezar',
    isPopular: false,
    emoji: '📦',
    images: ['/images/img-01.webp', '/images/img-08.webp', '/images/img-07.webp', '/images/img-15.webp'],
  },
  {
    id: '20-piezas',
    name: 'Caja de 20 piezas',
    desc: 'Lote surtido multimarca con amplia variedad de tonos y fórmulas (sin repetir). Excelente margen de ganancia para surtir tu negocio.',
    price: '$120',
    unit: 'c/u',
    totalPrice: '$2,400 total',
    badge: 'Más pedido',
    isPopular: true,
    emoji: '✨',
    images: ['/images/img-06.webp', '/images/img-24.webp', '/images/img-05.webp', '/images/img-31.webp', '/images/img-03.webp'],
  },
  {
    id: '50-piezas',
    name: 'Caja de 50 piezas o más',
    desc: 'El máximo ahorro para mayoristas. Surtido variado premium con la mejor selección de categorías y tonos sin saturar, más trato VIP.',
    price: '$110',
    unit: 'c/u',
    totalPrice: 'Desde $5,500 total',
    badge: 'Mayor ahorro',
    isPopular: false,
    emoji: '👑',
    images: ['/images/img-02.webp', '/images/img-22.webp', '/images/img-13.webp', '/images/img-10.webp', '/images/img-21.webp'],
  },
];

export default function Boxes() {
  return (
    <section id="cajas" className={`section ${styles.boxes}`}>
      <FloatingParticles count={10} color="peach" />

      <div className="container">
        <ScrollReveal>
          <div className={styles.sectionHead}>
            <h2 className={`font-display ${styles.heading}`}>Cajas y Lotes por Piezas</h2>
            <p className={styles.sub}>
              Armadas con cariño — lotes surtidos con variedad de productos y tonos (no son piezas repetidas).
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {BOXES.map((box, i) => {
            const waText = encodeURIComponent(`¡Hola! Me interesa la ${box.name} (${box.price} ${box.unit} - ${box.totalPrice}). Sé que viene surtida sin repetir, ¿qué marcas o tonos tienes disponibles?`);
            return (
              <ScrollReveal key={box.id} delay={i * 0.1}>
                <article className={`${styles.card} ${box.isPopular ? styles.popularCard : ''}`}>
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
                    {box.badge && (
                      <span className={`${styles.badge} ${box.isPopular ? styles.popularBadge : ''}`}>
                        {box.badge}
                      </span>
                    )}
                    <h3 className={`font-display ${styles.name}`}>{box.name}</h3>
                    <p className={styles.desc}>{box.desc}</p>
                    <div className={styles.footer}>
                      <div className={styles.priceContainer}>
                        <div className={styles.price}>
                          <span>{box.price}</span>
                          <span className={styles.unit}>{box.unit}</span>
                        </div>
                        <span className={styles.totalPrice}>{box.totalPrice}</span>
                      </div>
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
