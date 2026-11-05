// Public product direction. Names and responsibilities do not imply release status.
export const kidoFamilies = [
  {
    name: 'Sigma', slug: 'kido-sigma', letter: 'Σ', purpose: 'Business applications',
    description: 'Applications that help teams run their business, starting with Kido Commerce.',
    capabilities: [
      { name: 'Commerce', slug: 'kido-commerce', semanticName: 'Commerce Application', description: 'The first business application in the Sigma direction.' },
      { name: 'Community', kind: 'Distribution', description: 'The open business suite and shared foundations.' },
      { name: 'Enterprise', kind: 'Distribution', description: 'The commercial distribution for paid capabilities, hosting and support.' },
    ],
  },
  {
    name: 'Iota', slug: 'kido-iota', letter: 'ι', purpose: 'Business domains & shared services',
    description: 'The business-domain framework and reusable application services that business apps share.',
    capabilities: [
      { name: 'Domain foundations', description: 'Shared business concepts, policies and service contracts.' },
      { name: 'Application services', description: 'Identity & Access, Organization, Notification, Document, Audit and Search.' },
    ],
  },
  {
    name: 'Mu', slug: 'kido-mu', letter: 'μ', purpose: 'Application creation',
    description: 'An application framework and creation ecosystem, from discovery to everyday use.',
    capabilities: [
      { name: 'Weave', slug: 'kido-weave', semanticName: 'Domain Discovery', description: 'Discover intent, evidence and domain models.' },
      { name: 'Loom', slug: 'kido-loom', semanticName: 'Studio (Domain Studio)', description: 'Design and build applications.' },
      { name: 'Fabric', slug: 'kido-fabric', semanticName: 'Application Workspace', description: 'Use applications in an everyday workspace.' },
      { name: 'Sew', slug: 'kido-sew', semanticName: 'Domain Service Framework', description: 'Build domain services and GraphQL subgraphs.' },
      { name: 'Stitch', slug: 'kido-stitch', semanticName: 'GraphQL Federation', description: 'Compose and route GraphQL federation.' },
    ],
  },
  {
    name: 'Phi', slug: 'kido-phi', letter: 'Φ', purpose: 'Design system',
    description: 'A shared visual language and UI foundation for coherent product experiences.',
    capabilities: [
      { name: 'UI components', description: 'Reusable interface building blocks.' },
      { name: 'Design system', description: 'Common patterns that connect the product families.' },
    ],
  },
  {
    name: 'Omicron', slug: 'kido-omicron', letter: 'ο', purpose: 'Workspace experiences',
    description: 'The family of working experiences expressed as presets over the Kido CLI’s shared ports and harness policy.',
    capabilities: [
      { name: 'Chat', slug: 'kido-chat', semanticName: 'Conversation', description: 'Tool-free conversation with a selected Profile.' },
      { name: 'Code', slug: 'kido-code', semanticName: 'Coding', description: 'Everything-as-code work through a Brain, branch, merge request and Workflow.' },
      { name: 'Bot', slug: 'kido-bot', semanticName: 'Automation', description: 'An enrolled Profile with a trigger and target Room; Bot mode runs the record.' },
      { name: 'CoWork', slug: 'kido-cowork', semanticName: 'Collaboration', description: 'Chat-room work with connector tools, producing documents.' },
      { name: 'Design', slug: 'kido-design', semanticName: 'Design Workspace', description: 'The CoWork preset extended with design tools.' },
    ],
  },
  {
    name: 'Kappa', slug: 'kido-kappa', letter: 'κ', purpose: 'Platform & runtime',
    description: 'The platform foundation that supports cooperating capabilities across Kido.',
    capabilities: [
      { name: 'OS', slug: 'kido-os', semanticName: 'Platform Microkernel', description: 'The Kido OS microkernel and platform foundation.' },
      { name: 'Computer', slug: 'kido-computer', semanticName: 'Virtual Computer', description: 'A virtual-computer environment.' },
      { name: 'CLI', slug: 'kido-cli', semanticName: 'Command-Line Interface', description: 'The operator’s terminal and web client for Profile conversations and modes, spanning families.' },
    ],
  },
];

export const itioNu = {
  name: 'Itio Nu', slug: 'itio-nu', letter: 'ν', purpose: 'Knowledge & intelligence',
  description: 'An Itio-wide pillar connecting information, knowledge and intelligence across the ecosystem.',
  products: [
    { name: 'Orbit', slug: 'kido-orbit', semanticName: 'Information Framework', description: 'A category-theory-inspired information framework built around the Graph-Entity model.' },
    { name: 'Gnosis', slug: 'kido-gnosis', semanticName: 'Knowledge Management', description: 'KBM: knowledge management, memory, evidence and retrieval.' },
    { name: 'Grove', slug: 'kido-grove', semanticName: 'Knowledge Workspace', description: 'A workspace for exploring, organizing and working with knowledge.' },
    { name: 'Nous', slug: 'kido-nous', semanticName: 'Intelligence', description: 'Models, agents, tools and orchestration.' },
  ],
};

export const widerPortfolio = [
  { name: 'Yai', slug: 'yai', semanticName: 'Language & Semantic Modeling', description: 'Express meaning and reason about models.' },
  {
    name: 'Omega', slug: 'omega', semanticName: 'Logical Realm Foundations',
    description: 'Abstraction and execution foundations with independent project identities.',
    products: [
      { name: 'Omega Machine', slug: 'omega-machine', semanticName: 'Semantic Execution Substrate' },
      { name: 'Omega OS', slug: 'omega-os', semanticName: 'Execution Supervision' },
      { name: 'Omega Factory', slug: 'omega-factory', semanticName: 'Logical-World Simulation' },
    ],
  },
  { name: 'DevSpace', slug: 'devspace', semanticName: 'Development Workspace', description: 'Collaboration and development through the Goal-Gap-Gamify approach.' },
  { name: '28 Kampus', slug: '28-kampus', semanticName: 'Lifelong Learning', description: 'Learning through storytelling, play and personal growth.' },
];

export const itioSpace = {
  name: 'ITIO Space', slug: 'itio-space', semanticName: 'Ecosystem Portal', url: 'https://itio.space/',
};

// Supporting foundations of Kido Code, not additional workspace modes or families.
export const kidoCodeFoundations = [
  {
    name: 'Kido Brain', slug: 'kido-brain', semanticName: 'Persistent Working Memory',
    description: 'The git-backed record of a unit of work: its plan, tasks, decisions, evidence and handoff.',
  },
  {
    name: 'Kido Skill', slug: 'kido-skill', semanticName: 'Workflow Skill',
    description: 'The /kido working procedure that carries the Kido workflow and standards across enrolled harnesses.',
  },
];
