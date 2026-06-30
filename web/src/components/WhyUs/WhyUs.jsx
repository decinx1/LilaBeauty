import { ScrollReveal } from '../ScrollReveal';
import FloatingParticles from '../FloatingParticles/FloatingParticles';
import styles from './WhyUs.module.css';

const FEATURES = [
  {
    id: 'originales',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    title: 'Originales',
    desc: 'Cada producto es 100% original, directo de marca.',
  },
  {
    id: 'cajas',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <rect x="3" y="9" width="18" height="11" rx="1.5"/>
        <path d="M3 9V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M12 5v15M3 9h18"/>
      </svg>
    ),
    title: 'Cajas a tu gusto',
    desc: 'Combos pensados para regalar o regalarte.',
  },
  {
    id: 'entrega',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M3 12c2-4 6-6 9-6s7 2 9 6c-2 4-6 6-9 6s-7-2-9-6Z"/>
        <circle cx="12" cy="12" r="2.5"/>
      </svg>
    ),
    title: 'Entrega coordinada',
    desc: 'Acordamos contigo el punto de entrega por WhatsApp.',
  },
  {
    id: 'rapido',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M21 11.5a8.5 8.5 0 1 1-3.8-7.1"/>
        <path d="M21 4v5h-5"/>
      </svg>
    ),
    title: 'Te respondemos rápido',
    desc: 'Pregunta, decide y pide, todo por WhatsApp.',
  },
];

export default function WhyUs() {
  return (
    <section className={`section ${styles.whyus}`}>
      <FloatingParticles count={14} color="plum" />

      <div className="container">
        <ScrollReveal>
          <h2 className={`font-display ${styles.heading}`}>Por qué elegirnos</h2>
        </ScrollReveal>

        <div className={styles.grid}>
          {FEATURES.map((f, i) => (
            <ScrollReveal key={f.id} delay={i * 0.08}>
              <div className={styles.card}>
                <div className={styles.icon}>{f.icon}</div>
                <p className={styles.title}>{f.title}</p>
                <p className={styles.desc}>{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
