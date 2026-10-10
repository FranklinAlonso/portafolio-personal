import { t, type Lang } from '../i18n';

/**
 * Images: drop files into /public/images and set the paths below.
 * Leave a value as null to show the placeholder.
 */
export const images = {
  avatar: '/images/avatar.jpg' as string | null,
};

export const C = { sap: '#e8e6e1', cloud: '#5cc8e8', bridge: '#f5c84c', base: '#7d848d' };
type World = keyof typeof C;

export const links = {
  linkedin: 'https://www.linkedin.com/in/franklinalonso',
  github: 'https://github.com/FranklinAlonso',
  credly: 'https://www.credly.com/users/franklinalonso',
};

export function changelog(lang: Lang) {
  const es = lang === 'es';
  const raw: { v: string; date: string; title: string; org: string; w: World; items: string[] }[] = [
    { v: 'v5.0.0-β', date: es ? 'ahora' : 'now', title: 'Cloud Developer', org: es ? 'AWS · proyectos propios' : 'AWS · personal projects', w: 'cloud', items: ['AWS Certified Cloud Practitioner', es ? 'Páginas web para pequeñas empresas' : 'Websites for small businesses', es ? 'Desarrollo de productos SaaS' : 'SaaS product development', es ? 'Desarrollo de apps móviles' : 'Mobile app development'] },
    { v: 'v4.0.0', date: es ? '2025 – actualidad' : '2025 – present', title: es ? 'Consultor SAP Senior' : 'Senior SAP Consultant', org: 'Altamira Technology', w: 'bridge', items: [es ? 'Empresas de servicios ambientales y telecomunicaciones satelitales: soporte por bolsa de horas en SAP Business ByDesign' : 'Environmental services and satellite telecom companies: hour-bank support on SAP Business ByDesign', es ? 'Operador de telecomunicaciones: desarrollo en SAP BTP con Fiori y CAP' : 'Telecom operator: SAP BTP development with Fiori and CAP', es ? 'Grupo agroindustrial: desarrollo e implementación de SAP PM y extracción de datos SAP hacia Azure y AWS' : 'Agribusiness group: SAP PM development and implementation, plus SAP data extraction to Azure and AWS', es ? 'Empresa pesquera: desarrollo y diagnóstico de integraciones entre sistemas externos y SAP' : 'Fishing company: development and diagnostics of external-system integrations with SAP'] },
    { v: 'v3.0.0', date: '2023 – 2024', title: es ? 'Consultor SAP' : 'SAP Consultant', org: 'Altamira Technology · Minsait', w: 'sap', items: ['SAP ABAP · ECC', 'SAP BTP · Fiori · CAP', 'SAP BW'] },
    { v: 'v2.0.0', date: '2022', title: es ? 'Practicante de Sistemas' : 'Systems Intern', org: es ? 'Sencico · Dpto. de Informática' : 'Sencico · IT Department', w: 'cloud', items: ['Power BI', 'Oracle', 'GitHub'] },
    { v: 'v1.0.0', date: '2018', title: 'init', org: 'UNMSM', w: 'base', items: [es ? 'Ingeniería de Sistemas' : 'Systems Engineering'] },
  ];
  return raw.map((e) => ({ ...e, color: C[e.w] }));
}

export type ProjectLink = { label: string; url: string; primary: boolean };
export type Project = ReturnType<typeof projects>[number];

export function projects(lang: Lang) {
  const es = lang === 'es';
  const T = t(lang);
  const L = (label: string, url: string, primary = false): ProjectLink => ({ label, url, primary });
  const raw: {
    type: 'case' | 'app'; title: string; summary: string; tags: string[]; world: string; color: string;
    st: 'done' | 'wip' | 'live'; links: ProjectLink[]; img?: string; blocks?: { reto: string; sol: string; res: string };
  }[] = [
    {
      type: 'app', title: 'franklinalonso.dev',
      summary: es ? 'Este portafolio: Astro + Content Collections, bilingüe, desplegado en AWS.' : 'This portfolio: Astro + Content Collections, bilingual, deployed on AWS.',
      tags: ['Astro', 'TypeScript', 'S3', 'CloudFront', 'Route 53', 'GitHub Actions'], world: 'cloud', color: C.cloud, st: 'wip',
      img: '/images/projects/franklinalonso-dev.png',
      links: [L(T.openApp, 'https://franklinalonso.dev', true), L(T.code, `${links.github}/portafolio-personal`)],
      blocks: es
        ? {
            reto: 'Mostrar en un solo lugar mi experiencia SAP y mi camino en cloud, en español e inglés, sin depender de plataformas de terceros.',
            sol: 'Sitio estático con Astro y TypeScript: rutas ES/EN, blog en Markdown con Content Collections y certificaciones obtenidas de Credly al compilar. Se publica en S3 detrás de CloudFront, con el dominio en Route 53, y cada push a main se despliega con GitHub Actions.',
            res: 'Un sitio rápido y sin backend que actualizo editando archivos de datos y posts, sin tocar la maquetación.',
          }
        : {
            reto: 'Show my SAP experience and my cloud path in one place, in Spanish and English, without depending on third-party platforms.',
            sol: 'Static site with Astro and TypeScript: ES/EN routes, Markdown blog with Content Collections and certifications pulled from Credly at build time. It is hosted on S3 behind CloudFront, with the domain on Route 53, and every push to main is deployed with GitHub Actions.',
            res: 'A fast, backend-free site that I update by editing data files and posts, without touching the layout.',
          },
    },
  ];
  return raw.map((p, i) => ({
    ...p,
    id: `proj-${i}`,
    blocks: [{ k: T.reto, v: p.blocks?.reto ?? T.ph }, { k: T.sol, v: p.blocks?.sol ?? T.ph }, { k: T.res, v: p.blocks?.res ?? T.ph }],
    ph: p.type === 'app' ? T.appShot : T.diagram,
    typeLabel: p.type === 'app' ? T.app : T.caseT,
    typeBg: p.type === 'app' ? C.cloud : '#e8e6e1',
    status: T[p.st],
    statusColor: p.st === 'live' ? '#6fd08c' : p.st === 'wip' ? C.bridge : '#7d848d',
  }));
}

const chip = (name: string, color: string, on = false) => ({ name, color, on });

export const sapStack = [chip('S/4HANA', C.sap, true), chip('ECC', C.sap, true), chip('SAC', C.sap, true), chip('ABAP', C.sap, true), chip('SAP BTP', C.bridge, true), chip('SAP BW', C.sap), chip('ByDesign', C.sap)];
export const cloudStack = [chip('AWS ✓', C.cloud, true), chip('GCP', C.cloud, true), chip('Azure', C.cloud, true), chip('JavaScript', C.cloud, true), chip('TypeScript', C.cloud, true), chip('Go', C.cloud, true), chip('Java', C.cloud), chip('Spring Boot', C.cloud), chip('Git', C.cloud)];

export type Cert = { img: string | null; url: string; name: string; by: string; cloud: boolean };

type CredlyBadge = {
  id: string;
  badge_template: { name: string; image_url: string };
  issuer: { entities: { primary: boolean; entity: { name: string } }[] };
};

let credly: Promise<Cert[]> | undefined;

/** Public badges from Credly, fetched once per build. Returns [] if Credly is unreachable. */
export function certs(): Promise<Cert[]> {
  credly ??= fetch(`${links.credly}/badges.json`, { headers: { Accept: 'application/json' } })
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`Credly ${r.status}`))))
    .then(({ data }: { data: CredlyBadge[] }) =>
      data.map((b) => {
        const by = b.issuer.entities.find((e) => e.primary)?.entity.name ?? '';
        return {
          img: b.badge_template.image_url.replace('images.credly.com/images/', 'images.credly.com/size/112x112/images/'),
          url: `https://www.credly.com/badges/${b.id}`,
          name: b.badge_template.name,
          by,
          cloud: /amazon|aws|google|azure|microsoft/i.test(by),
        };
      }),
    )
    .catch((err) => {
      console.warn('[credly] could not load badges:', err.message);
      return [];
    });
  return credly;
}

export const topics = (lang: Lang) => ['SAP BTP', 'ABAP', 'S/4HANA', 'AWS', lang === 'es' ? 'integraciones' : 'integrations'];
