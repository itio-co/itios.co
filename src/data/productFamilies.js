// Public product direction. Names and responsibilities do not imply release status.
export const kidoFamilies = [
  {
    name: 'Sigma', letter: 'Σ', purpose: 'Business applications',
    description: 'Applications that help teams run their business, starting with Kido Commerce.',
    capabilities: [
      { name: 'Commerce', semanticName: 'Commerce Application', description: 'The first business application in the Sigma direction.' },
      { name: 'Community', kind: 'Distribution', description: 'The open business suite and shared foundations.' },
      { name: 'Enterprise', kind: 'Distribution', description: 'The commercial distribution for paid capabilities, hosting and support.' },
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
      { name: 'Weave', semanticName: 'Domain Discovery', description: 'Discover intent, evidence and domain models.' },
      { name: 'Loom', semanticName: 'Studio (Domain Studio)', description: 'Design and build applications.' },
      { name: 'Fabric', semanticName: 'Application Workspace', description: 'Use applications in an everyday workspace.' },
      { name: 'Sew', semanticName: 'Domain Service Framework', description: 'Build domain services and GraphQL subgraphs.' },
      { name: 'Stitch', semanticName: 'GraphQL Federation', description: 'Compose and route GraphQL federation.' },
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
      { name: 'Chat', semanticName: 'Conversation', description: 'Work through ideas in conversation.' },
      { name: 'Code', semanticName: 'Coding', description: 'Work with code in the workspace.' },
      { name: 'Bot', semanticName: 'Automation', description: 'Define and use automated work.' },
      { name: 'CoWork', semanticName: 'Collaboration', description: 'Work together in a shared experience.' },
      { name: 'Design', semanticName: 'Design Workspace', description: 'Explore and shape designs.' },
    ],
  },
  {
    name: 'Kappa', letter: 'κ', purpose: 'Platform & runtime',
    description: 'The platform foundation that supports cooperating capabilities across Kido.',
    capabilities: [
      { name: 'OS', semanticName: 'Platform Microkernel', description: 'The Kido OS microkernel and platform foundation.' },
      { name: 'Computer', semanticName: 'Virtual Computer', description: 'A virtual-computer environment.' },
      { name: 'CLI', semanticName: 'Command-Line Interface', description: 'A command-line interface across product families.' },
    ],
  },
];

export const itioNu = {
  name: 'Itio Nu', letter: 'ν', purpose: 'Knowledge & intelligence',
  description: 'An Itio-wide pillar connecting information, knowledge and intelligence across the ecosystem.',
  products: [
    { name: 'Orbit', semanticName: 'Information Framework', description: 'A category-theory-inspired information framework built around the Graph-Entity model.' },
    { name: 'Gnosis', semanticName: 'Knowledge Management', description: 'KBM: knowledge management, memory, evidence and retrieval.' },
    { name: 'Grove', semanticName: 'Knowledge Workspace', description: 'A workspace for exploring, organizing and working with knowledge.' },
    { name: 'Nous', semanticName: 'Intelligence', description: 'Models, agents, tools and orchestration.' },
  ],
};

export const widerPortfolio = [
  { name: 'Yai', semanticName: 'Language & Semantic Modeling', description: 'Express meaning and reason about models.' },
  {
    name: 'Omega', semanticName: 'Logical Realm Foundations',
    description: 'Abstraction and execution foundations with independent project identities.',
    products: [
      { name: 'Omega Machine', semanticName: 'Semantic Execution Substrate' },
      { name: 'Omega OS', semanticName: 'Execution Supervision' },
      { name: 'Omega Factory', semanticName: 'Logical-World Simulation' },
    ],
  },
  { name: 'DevSpace', semanticName: 'Development Workspace', description: 'Collaboration and development through the Goal-Gap-Gamify approach.' },
  { name: '28 Kampus', semanticName: 'Lifelong Learning', description: 'Learning through storytelling, play and personal growth.' },
];

export const itioSpace = {
  name: 'ITIO Space', semanticName: 'Ecosystem Portal', url: 'https://itio.space/',
};
