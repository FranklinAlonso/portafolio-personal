export type Lang = 'es' | 'en';
export type Page = 'home' | 'log' | 'proj' | 'blog';

export const EMAIL = 'franalondlc22@gmail.com';

const routes: Record<Lang, Record<Page, string>> = {
  es: { home: '/', log: '/changelog', proj: '/proyectos', blog: '/blog' },
  en: { home: '/en', log: '/en/changelog', proj: '/en/projects', blog: '/en/blog' },
};

export const navLabels: Record<Lang, Record<Page, string>> = {
  es: { home: '~/inicio', log: '/changelog', proj: '/proyectos', blog: '/blog' },
  en: { home: '~/home', log: '/changelog', proj: '/projects', blog: '/blog' },
};

export const route = (lang: Lang, page: Page) => routes[lang][page];
export const postUrl = (lang: Lang, slug: string) => `${routes[lang].blog}/${slug}`;

export function formatDate(d: Date, lang: Lang) {
  const dd = String(d.getUTCDate()).padStart(2, '0');
  const y = d.getUTCFullYear();
  if (lang === 'es') {
    const m = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'][d.getUTCMonth()];
    return `${dd} ${m} ${y}`;
  }
  const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getUTCMonth()];
  return `${m} ${dd}, ${y}`;
}

export const ui = {
  es: {
    heroSub: 'Consultor SAP Senior y desarrollador backend. Conecto SAP, sistemas no-SAP y la nube: S/4HANA, ABAP y SAP BTP.',
    learning: 'aprendiendo cloud', copy: 'Copiar email', copied: '✓ Email copiado',
    sapWorld: 'Mundo SAP', sapDesc: 'Desarrollo e implementación sobre el core: S/4HANA, ECC, ByDesign, ABAP y SAP BW.',
    cloudWorld: 'Mundo Cloud', cloudDesc: 'Multicloud con AWS, GCP y Azure: desarrollo sobre sus servicios cloud con JavaScript, TypeScript y Go.',
    bridge: 'Integraciones end-to-end SAP ↔ no-SAP y multi-ERP', tapVersion: 'click en una versión',
    fullHistory: 'ver historial completo', featured: 'destacado', viewCase: 'ver caso', talk: '¿Conectamos sistemas?',
    logIntro: 'Mi carrera, versión por versión. La rama cloud sigue en beta.', projects: 'Proyectos',
    diagram: '[ diagrama de arquitectura ]', blogIntro: 'Artículos cortos sobre lo que voy aprendiendo en SAP y en la nube.',
    soon: '// más artículos en camino', quote: 'si hoy no aprendí algo nuevo… el día no estuvo completo',
    ph: '[Por completar]', reto: 'RETO', sol: 'SOLUCIÓN', res: 'RESULTADO', all: 'Todos', cases: 'Casos', apps: 'Apps',
    app: 'APP', caseT: 'CASO', live: 'en producción', wip: 'en desarrollo', done: 'completado', openApp: 'Abrir app',
    code: 'Código', details: 'detalles', verify: 'Verificar en Credly', example: 'post de ejemplo', read: 'leer',
    minRead: 'min de lectura', esOnly: '', close: 'Cerrar', photo: 'Tu foto', appShot: 'captura de la app',
    authorBio: 'Consultor SAP Senior · escribo lo que aprendo entre SAP y la nube.',
    metaDesc: 'Franklin Alonso De La Cruz — Consultor SAP Senior: S/4HANA, ABAP, SAP BTP e integraciones con la nube.',
  },
  en: {
    heroSub: 'Senior SAP Consultant and backend developer. I connect SAP, non-SAP systems and the cloud: S/4HANA, ABAP and SAP BTP.',
    learning: 'learning cloud', copy: 'Copy email', copied: '✓ Email copied',
    sapWorld: 'SAP world', sapDesc: 'Development and implementation on the core: S/4HANA, ECC, ByDesign, ABAP and SAP BW.',
    cloudWorld: 'Cloud world', cloudDesc: 'Multicloud with AWS, GCP and Azure: building on their cloud services with JavaScript, TypeScript and Go.',
    bridge: 'End-to-end SAP ↔ non-SAP and multi-ERP integrations', tapVersion: 'click a version',
    fullHistory: 'full history', featured: 'featured', viewCase: 'view case', talk: 'Shall we connect systems?',
    logIntro: 'My career, version by version. The cloud branch is still in beta.', projects: 'Projects',
    diagram: '[ architecture diagram ]', blogIntro: 'Short articles on what I am learning in SAP and the cloud.',
    soon: '// more posts on the way', quote: 'if I did not learn something new today… the day was not complete',
    ph: '[To be completed]', reto: 'CHALLENGE', sol: 'SOLUTION', res: 'RESULT', all: 'All', cases: 'Cases', apps: 'Apps',
    app: 'APP', caseT: 'CASE', live: 'live', wip: 'in progress', done: 'completed', openApp: 'Open app',
    code: 'Code', details: 'details', verify: 'Verify on Credly', example: 'example post', read: 'read',
    minRead: 'min read', esOnly: '// This post is written in Spanish.', close: 'Close', photo: 'Your photo', appShot: 'app screenshot',
    authorBio: 'Senior SAP Consultant · writing what I learn between SAP and the cloud.',
    metaDesc: 'Franklin Alonso De La Cruz — Senior SAP Consultant: S/4HANA, ABAP, SAP BTP and cloud integrations.',
  },
} as const;

export const t = (lang: Lang) => ui[lang];
