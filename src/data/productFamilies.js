// Public product direction. Names and responsibilities do not imply release status.
export const kidoFamilies = [
  {
    name: 'Sigma', letter: 'Σ', purpose: 'Business applications',
    description: 'Applications that help teams run their business, starting with Kido Commerce.',
    capabilities: [
      { name: 'Community', description: 'The open business suite and shared foundations.' },
      { name: 'Enterprise', description: 'The commercial distribution for paid capabilities, hosting and support.' },
    ],
  },
  {
    name: 'Iota', letter: 'ι', purpose: 'Business domains & shared services',
    description: 'The business-domain framework and reusable application services that business apps share.',
    capabilities: [
      { name: 'Domain foundations', description: 'Shared business concepts, policies and service contracts.' },
      { name: 'Application services', description: 'Identity & Access, Organization, Notification, Document, Audit and Search.' },
    ],
  },
  {
    name: 'Mu', letter: 'μ', purpose: 'Application creation',
    description: 'An application framework and creation ecosystem, from discovery to everyday use.',
    capabilities: [
      { name: 'Weave', description: 'Discover intent, evidence and domain models.' },
      { name: 'Loom', description: 'Design and build applications.' },
      { name: 'Fabric', description: 'Use applications in an everyday workspace.' },
      { name: 'Sew', description: 'Build domain services and GraphQL subgraphs.' },
      { name: 'Stitch', description: 'Compose and route GraphQL federation.' },
    ],
  },
  {
    name: 'Phi', letter: 'Φ', purpose: 'Design system',
    description: 'A shared visual language and UI foundation for coherent product experiences.',
    capabilities: [
      { name: 'UI components', description: 'Reusable interface building blocks.' },
      { name: 'Design system', description: 'Common patterns that connect the product families.' },
    ],
  },
  {
    name: 'Omicron', letter: 'ο', purpose: 'Workspace experiences',
    description: 'The user-facing workspace family for thinking, making and working with intelligence.',
    capabilities: [
      { name: 'Chat · Code · Bot · CoWork · Design', description: 'Connected modes for conversation, coding, automation, collaboration and design.' },
    ],
  },
  {
    name: 'Kappa', letter: 'κ', purpose: 'Platform & runtime',
    description: 'The platform foundation that supports cooperating capabilities across Kido.',
    capabilities: [
      { name: 'OS', description: 'The Kido OS microkernel and platform foundation.' },
      { name: 'Computer', description: 'A virtual-computer environment.' },
      { name: 'CLI', description: 'A command-line interface across product families.' },
    ],
  },
];

export const itioNu = {
  name: 'Itio Nu', letter: 'ν', purpose: 'Knowledge & intelligence',
  description: 'An Itio-wide pillar connecting information, knowledge and intelligence across the ecosystem.',
  products: [
    { name: 'Orbit', purpose: 'Information framework', description: 'A category-theory-inspired information framework built around the Graph-Entity model.' },
    { name: 'Gnosis', purpose: 'Knowledge management (KBM)', description: 'Knowledge management, memory, evidence and retrieval.' },
    { name: 'Grove', purpose: 'Knowledge workspace', description: 'A workspace for exploring, organizing and working with knowledge.' },
    { name: 'Nous', purpose: 'Intelligence', description: 'Models, agents, tools and orchestration.' },
  ],
};
