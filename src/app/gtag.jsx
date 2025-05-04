'use client';

import { useEffect } from 'react';

export default function GtagScript() {
  useEffect(() => {
    const gtagScript = document.createElement("script");
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-16960746136";
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    const configScript = document.createElement("script");
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16960746136');
    `;
    document.head.appendChild(configScript);
  }, []);

  return null; // Tidak merender apa-apa
}
