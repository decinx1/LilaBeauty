import { ScrollReveal } from '../ScrollReveal';
import FloatingParticles from '../FloatingParticles/FloatingParticles';
import styles from './About.module.css';

const PILLS = ['Productos originales', 'Curaduría con cariño', 'Respuesta rápida'];

export default function About() {
  return (
    <section id="nosotros" className={`section ${styles.about}`}>
      <div className={styles.blob} />
      <div className={styles.blobB} />
      <FloatingParticles count={10} color="peach" />
      <div className="container">
        <ScrollReveal className={styles.inner}>
          <span className={`pill pill-badge ${styles.badge}`}>Nuestra historia</span>
          <h2 className={`font-display ${styles.heading}`}>
            Belleza con intención
          </h2>
          <p className={styles.body}>
            Creemos que el cuidado personal es un momento para ti. Por eso elegimos
            productos honestos, de marcas en las que confiamos, y los acercamos a ti
            sin complicaciones ni vueltas.
          </p>
          <div className={styles.pills}>
            {PILLS.map((label) => (
              <span key={label} className={`pill pill-muted`}>{label}</span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
