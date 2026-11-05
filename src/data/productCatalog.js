import { kidoFamilies, itioNu, widerPortfolio, itioSpace, kidoCodeFoundations } from './productFamilies.js';
import { productDetails } from './productDetails.js';

export const portfolioSource = 'https://github.com/itio-co/itios.co/tree/main/docs/portfolio';
export const productPath = (slug) => `/products/${slug}/`;

const familyDetails = {
  'kido-sigma': {
    overview: 'Kido Sigma is the business-suite family: applications for the work of running a business. Kido Commerce is its first application direction. Sigma brings business experiences together with shared foundations rather than presenting each common service as a separate end-user product.',
    responsibilities: ['Organize business applications around real operational needs.', 'Start with Commerce across point of sale, inventory, supply, customer and cash.', 'Keep Community and Enterprise as distinct distributions, with open foundations separate from commercial additions.'],
    status: 'Sigma is an established family name. Community and Enterprise are distributions, not separate products. The portfolio does not assert that all business capabilities are released; Sigma is described as a business suite, not an ERP.',
    related: ['kido-commerce', 'kido-iota', 'kido-mu', 'kido-phi'],
  },
  'kido-iota': {
    overview: 'Kido Iota is the business-domain framework and shared application-service layer. It gives business applications a common place for concepts and services that should not be redefined by every app. Its focus is application and business concerns, while Kappa addresses platform mechanisms.',
    responsibilities: ['Define shared business concepts, policies and service contracts.', 'Provide direction for Identity & Access, Organization, Notification, Document, Audit and Search.', 'Support business applications while keeping business policy separate from platform infrastructure.'],
    status: 'Iota is an established family, also called Kido Services. The original package grouping is within Sigma Community. Detailed contracts and the boundary with Kappa still require design; listed services are not a release inventory.',
    related: ['kido-sigma', 'kido-commerce', 'kido-kappa'],
  },
  'kido-mu': {
    overview: 'Kido Mu connects understanding a domain, creating an application and using it in daily work. Weave, Loom and Fabric describe that iterative journey. Sew and Stitch explain the service-building and federation responsibilities beneath the application experience.',
    responsibilities: ['Discover intent, evidence and domain models with Weave.', 'Design and build with Loom, then use and evolve applications with Fabric.', 'Build domain services and subgraphs with Sew, and compose and route them with Stitch.'],
    status: 'Mu is an established family with evolving product names. The shared application model, runtime and integration contracts remain product engineering work. The journey is iterative, not a guaranteed automated pipeline.',
    related: ['kido-weave', 'kido-loom', 'kido-fabric', 'kido-phi'],
  },
  'kido-phi': {
    overview: 'Kido Phi is the shared UI and design-system foundation. It connects reusable interface building blocks with a common visual language so products can feel like parts of one ecosystem. Phi supports the interfaces; it is not the umbrella for every workspace or design tool.',
    responsibilities: ['Supply reusable UI components for product interfaces.', 'Establish common visual and interaction patterns.', 'Help different applications express a coherent product experience.'],
    status: 'Phi is an established family. Its engineering identity remains kido-ui / @kido-app/ui. The portfolio describes its role, not a complete catalog of released components or supported integrations.',
    related: ['kido-mu', 'kido-fabric', 'kido-omicron'],
  },
  'kido-omicron': {
    overview: 'Kido Omicron groups the user-facing working experiences. In the Kido engineering model, Chat, Code, CoWork, Design and Bot are presets over shared ports and harness policy, not separate engines. Chat is tool-free conversation; code runs Kido Code’s everything-as-code workflow; CoWork combines a Room and connector tools to produce documents; Design adds design tools; Bot runs a triggered Profile tied to a Room.',
    responsibilities: ['Choose the right preset for the work: conversation, git-managed changes, documents, design tools or a Room Bot.', 'Use Profiles as the configurations selected in conversations; keep Profile, Bot record and Workflow distinct.', 'Share conversation, room-messaging and harness-configuration foundations through the Kido CLI.'],
    statusLabel: 'Documented mode model',
    status: 'The current Kido glossary and ADRs define these mode contracts. They do not imply separate runtimes or a multi-user hosted workspace. Mode-specific availability follows implementation; Design’s relationship with Mu and Fabric’s shell relationship remain separate design questions.',
    source: 'https://github.com/itio-co/kido/blob/main/docs/design/CONTEXT.md',
    related: ['kido-chat', 'kido-code', 'kido-bot', 'kido-cli'],
  },
  'kido-kappa': {
    overview: 'Kido Kappa is the platform family centered on the Kido OS microkernel. Its direction includes a virtual Computer and a CLI that spans product families. A small coordinating core supports cooperating capabilities through explicit contracts rather than absorbing every business responsibility.',
    responsibilities: ['Coordinate platform capabilities around Kido OS.', 'Define a virtual-computer environment and command-line entry points.', 'Clarify contracts, messaging, security boundaries and observability as the platform design develops.'],
    status: 'Kappa is the accepted family name. The microkernel “hand” is a design metaphor, not a deployed-component inventory. Computer and cross-family integration contracts remain engineering work. Kido OS is distinct from Omega OS.',
    related: ['kido-os', 'kido-computer', 'kido-cli', 'kido-iota'],
  },
};

const families = kidoFamilies.map((family) => ({
  ...family,
  name: `Kido ${family.name}`,
  semanticName: family.purpose,
  kind: 'Product family',
  parent: 'kido',
  items: family.capabilities,
  ...familyDetails[family.slug],
}));

const kido = {
  slug: 'kido', name: 'Kido', semanticName: 'Augmented-Intelligence Product Ecosystem',
  kind: 'Product ecosystem', letter: 'K',
  description: 'Connected business applications, creation tools, workspaces and platform foundations.',
  overview: 'Kido brings augmented intelligence into applications and the work of creating and using them. Its six families separate business applications, shared services, application creation, UI, workspace experiences and platform foundations. Kido also has products within Itio Nu, the wider Itio knowledge and intelligence pillar.',
  responsibilities: ['Connect business and application-creation experiences.', 'Give shared services, UI and platform foundations clear responsibilities.', 'Participate in Itio-wide knowledge and intelligence through Orbit, Gnosis, Grove and Nous.'],
  status: 'This is the accepted product map, not a statement that every product or integration is available. Family grouping does not establish repository ownership, deployment topology or runtime dependencies.',
  items: kidoFamilies.map((family) => ({ ...family, name: `Kido ${family.name}`, semanticName: family.purpose })),
  related: ['itio-nu', 'yai', 'omega'],
};

const nu = {
  ...itioNu, semanticName: itioNu.purpose, kind: 'Itio-wide pillar',
  overview: 'Itio Nu connects information, knowledge and intelligence across the Itio ecosystem. Kido Orbit, Gnosis, Grove and Nous have distinct roles within this wider pillar: modeling information, managing knowledge, working with knowledge and enabling intelligence. Their Kido product names do not make Nu a Kido-only family.',
  responsibilities: ['Model information with Orbit and manage knowledge, evidence and retrieval with Gnosis.', 'Make knowledge approachable through Grove’s workspace direction.', 'Organize models, agents, tools and orchestration through Nous.'],
  status: 'Nu is an Itio-wide product direction. Technical ownership, shared-service boundaries, state ownership and integration contracts remain architectural decisions. No universal shared service or shipped integration is implied.',
  items: itioNu.products.map((product) => ({ ...product, name: `Kido ${product.name}` })),
  related: ['kido-orbit', 'kido-gnosis', 'kido-grove', 'kido-nous'],
};

const omegaBase = widerPortfolio.find((product) => product.slug === 'omega');
const omega = {
  ...omegaBase, kind: 'Portfolio foundation', letter: 'Ω', items: omegaBase.products,
  overview: 'Omega describes the deeper abstraction and execution foundations associated with the Logical Realm. Omega Machine, Omega OS and Omega Factory keep distinct responsibilities and independent project identities. They belong to the broader Itio vision rather than renaming Kido’s platform family.',
  responsibilities: ['Explore a semantic execution substrate through Omega Machine.', 'Separate execution supervision in Omega OS from the Kido OS microkernel.', 'Explore logical-world and node-graph simulation through Omega Factory.'],
  status: 'These are architecture and product directions, not general production-readiness claims. Potential integrations with Yai or Kido require explicit contracts; the portfolio does not establish that they are implemented.',
  related: ['omega-machine', 'omega-os', 'omega-factory', 'yai'],
};

const products = [
  ...kidoFamilies.flatMap((family) => family.capabilities.filter((item) => item.slug).map((item) => ({
    ...item, name: `Kido ${item.name}`, parent: family.slug,
    kind: family.slug === 'kido-omicron' ? 'Workspace mode' : 'Product',
  }))),
  ...itioNu.products.map((item) => ({ ...item, name: `Kido ${item.name}`, parent: 'itio-nu', kind: 'Product' })),
  ...widerPortfolio.filter((item) => item.slug !== 'omega').map((item) => ({ ...item, kind: 'Product initiative' })),
  ...omegaBase.products.map((item) => ({ ...item, parent: 'omega', kind: 'Product' })),
  ...kidoCodeFoundations.map((item) => ({ ...item, parent: 'kido-code', kind: 'Workflow foundation' })),
  { ...itioSpace, kind: 'Ecosystem portal' },
].map((product) => ({
  ...product,
  ...productDetails[product.slug],
  ...(product.slug === 'kido-code' ? {
    items: kidoCodeFoundations,
    itemsTitle: 'Foundations of Kido Code',
    itemsDescription: 'Brain keeps the working record. Skill carries the procedure. Both support the workflow without becoming additional modes or runtimes.',
  } : {}),
}));

export const productPages = [kido, ...families, nu, omega, ...products];
export const productsBySlug = Object.fromEntries(productPages.map((product) => [product.slug, product]));

export function pageForPath(path) {
  const match = path.match(/^\/products\/([a-z0-9-]+)\/?$/);
  return match ? productsBySlug[match[1]] : undefined;
}
