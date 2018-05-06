import React from 'react';
import Link from 'next/link';

import styles from './styles.pcss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>
        © {currentYear} , All rights reserved
      </div>

      <div className={styles.links}>
        <Link prefetch href="/privacy-policy">
          <a href="/privacy-policy">
            Privacy
          </a>
        </Link>

        <Link prefetch href="/terms">
          <a href="/terms">
            Terms
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
