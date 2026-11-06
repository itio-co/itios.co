import { kidoFamilies, itioNu, widerPortfolio, kidoCodeFoundations } from './productFamilies.js';
import { productsBySlug } from './productCatalog.js';

export const landscapePath = '/landscape/';
export const landscapeGroups = [
  ...kidoFamilies.map((family) => ({
    slug: family.slug,
    children: family.capabilities.filter((item) => item.slug).map((item) => item.slug),
    capabilities: family.capabilities.filter((item) => !item.slug),
    foundations: family.slug === 'kido-omicron' ? kidoCodeFoundations.map((item) => item.slug) : [],
    tone: { Sigma: 'blue', Iota: 'slate', Mu: 'cyan', Phi: 'rose', Omicron: 'amber', Kappa: 'green' }[family.name],
  })),
  { slug: itioNu.slug, children: itioNu.products.map((item) => item.slug), tone: 'violet' },
  ...widerPortfolio.map((item) => ({ slug: item.slug, children: (item.products || []).map((product) => product.slug), tone: 'slate' })),
];

export const landscapeSlugs = ['kido', ...landscapeGroups.flatMap((group) => [group.slug, ...group.children, ...(group.foundations || [])]), 'itio-space'];

export function matchesLandscapeProduct(slug, query) {
  const product = productsBySlug[slug];
  const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const text = [product.name, product.semanticName, product.description, product.kind].filter(Boolean).join(' ').toLocaleLowerCase();
  return terms.every((term) => text.includes(term));
}

export function visibleLandscapeGroup(group, query) {
  return [group.slug, ...group.children, ...(group.foundations || [])].some((slug) => matchesLandscapeProduct(slug, query));
}

const portfolio = 'https://github.com/itio-co/itios.co/blob/main/docs/portfolio/kido.md';
export const landscapeRelationships = [
  {
    id: 'create-applications', label: 'Application journey', type: 'Product direction',
    slugs: ['kido-weave', 'kido-loom', 'kido-fabric'], connector: '→',
    title: 'Discover. Create. Use. Evolve.',
    description: 'Weave explores the domain; Loom designs and builds; Fabric is for everyday application use. Revisit any step as the application evolves. This is an iterative journey, not an automated pipeline.',
    source: `${portfolio}#mu-experiences-and-capabilities`,
  },
  {
    id: 'connect-services', label: 'Service responsibilities', type: 'Product direction',
    slugs: ['kido-sew', 'kido-stitch'], connector: '+',
    title: 'Build services. Compose the graph.',
    description: 'Sew is the domain-service and subgraph framework direction. Stitch composes and routes GraphQL federation. These are complementary responsibilities, not a claim of completed integration.',
    source: `${portfolio}#mu-experiences-and-capabilities`,
  },
  {
    id: 'choose-mode', label: 'Client and experiences', type: 'Documented contract',
    slugs: ['kido-cli', 'kido-omicron'], connector: '↔',
    title: 'One client, different work presets.',
    description: 'Chat, Code, Bot, CoWork and Design use shared ports and harness policy. Chat is tool-free; Design extends CoWork with design tools. They are not five separate engines. Availability is mode-specific.',
    source: 'https://github.com/itio-co/kido/blob/main/docs/adr/0014-kido-cli-is-its-own-harness-three-ports-modes-as-presets.md',
  },
  {
    id: 'preserve-work', label: 'Workflow foundations', type: 'Documented contract',
    slugs: ['kido-brain', 'kido-skill', 'kido-code'], connector: '+',
    title: 'The record and the procedure.',
    description: 'Brain preserves the plan, decisions, evidence and handoff for Kido Code. Skill carries the shared working procedure. Both support the workflow; neither is an additional mode or an independent execution engine.',
    source: 'https://github.com/itio-co/kido/blob/main/docs/design/CONTEXT.md',
  },
  {
    id: 'business-foundations', label: 'Business foundations', type: 'Documented boundary',
    slugs: ['kido-sigma', 'kido-iota', 'kido-mu', 'kido-phi'], connector: '+',
    title: 'Applications on shared foundations.',
    description: 'Sigma brings business applications; Iota supplies shared application services within Community. The baseline dependency direction is Enterprise → Community → Mu/Phi. Community and Enterprise are distributions, and nothing open depends on Enterprise.',
    source: `${portfolio}#original-accepted-baseline-preserved`,
  },
  {
    id: 'knowledge-pillar', label: 'Cross-portfolio pillar', type: 'Product direction',
    slugs: ['kido-orbit', 'kido-gnosis', 'kido-grove', 'kido-nous'], connector: '·',
    title: 'Knowledge and intelligence, across Itio.',
    description: 'Orbit models information, Gnosis manages knowledge, Grove is the knowledge-workspace direction, and Nous covers intelligence. They are siblings under Itio Nu, not a fixed runtime pipeline. Ownership and integration contracts remain open.',
    source: 'https://github.com/itio-co/itios.co/blob/main/docs/portfolio/README.md#knowledge-and-intelligence-itio-nu',
  },
];
