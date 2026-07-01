import { motion } from 'framer-motion';
import { WA_PHONE_NUMBER } from '../../data/products';
import styles from './WhatsAppFab.module.css';

const WA_MESSAGE = encodeURIComponent('Hola! Tengo una pregunta sobre Lila Beauty');

export default function WhatsAppFab() {
  return (
    <motion.a
      id="whatsapp-fab"
      href={`https://wa.me/${WA_PHONE_NUMBER}?text=${WA_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className={styles.fab}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.42 1.27 4.86L2 22l5.3-1.39a9.9 9.9 0 0 0 4.74 1.2h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.78 14.24c-.25.7-1.46 1.34-2 1.42-.52.08-1.05.12-3.05-.66-2.56-1.02-4.2-3.62-4.33-3.8-.13-.18-1.03-1.37-1.03-2.62s.64-1.86.87-2.12c.23-.25.5-.31.66-.31h.48c.16 0 .37-.02.57.44.25.57.84 1.97.91 2.12.07.14.12.31.02.49-.43.83-.9.81-.59 1.31.95 1.5 1.9 2.06 3.27 2.7.24.11.39.1.53-.04.18-.18.74-.86.94-1.16.2-.3.4-.25.66-.15.27.1 1.69.8 1.98.95.29.14.48.21.55.33.07.13.07.73-.18 1.43Z" />
      </svg>

      {/* Pulse ring */}
      <span className={styles.pulse} aria-hidden="true" />
    </motion.a>
  );
}
