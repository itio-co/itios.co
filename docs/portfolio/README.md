# Itio portfolio

Updated: 2026-11-04

This is the canonical **cross-product portfolio and naming overview** for Itio. Product repositories remain authoritative for their engineering designs, implementations and release status. Repository location and product grouping do not by themselves define a bounded context, deployment or runtime dependency.

## Portfolio map

| Area | Identity and responsibility | Status / boundary |
|---|---|---|
| Itio Verse | The broader vision connecting people, knowledge, creation and systems | Portfolio-level vision, not one deployed product |
| Logical Realm | The deeper logical foundation within the Itio Verse | Vision clarified 2026-11-04 |
| Yai | Language and semantic modeling: expressing meaning and reasoning about models | Separate project; retain its repository and engineering authority |
| Omega | Deep abstraction and execution foundations associated with the Logical Realm | Broader than Kido; not adopted as the name of Kido's platform family |
| Omega Machine | Semantic execution substrate across hardware and topology | Architecture direction; no general production-readiness claim |
| Omega OS | Execution supervision within the Omega architecture | Distinct from Kido OS |
| Omega Factory | Logical-world / node-graph factory simulation and game experience | Separate project identity; intended use of Yai is not proof of shipped integration |
| **Itio Nu (ν)** | Itio-wide knowledge and intelligence pillar | Name and scope accepted 2026-11-04; technical ownership and shared-service boundaries remain open |
| Kido | Augmented-intelligence experiences, application creation and related product families | See [Kido families](kido.md) |
| DevSpace | Collaboration and development/product-management initiative | Separate initiative; its design remains in its own project |
| 28 Kampus | Lifelong-learning initiative | Separate initiative; not reassigned to a Kido family |

Yai, Omega Machine and Omega Factory have independent repository identities. This overview does not move their code or make them Kido-owned components. Exact Omega repository links should be recorded only after verification; none are guessed here.

## Kido families at a glance

| Family | Primary purpose | State |
|---|---|---|
| Sigma (Σ) | Business application suite | Existing accepted family |
| Iota (ι) | Shared application services | Existing accepted family |
| Mu (μ) | Application framework and creation ecosystem | Existing accepted family, expanded experience direction |
| Phi (Φ) | UI and design system | Existing accepted family |
| Omicron (ο) | Workspace experiences: Chat, Code, Bot, CoWork, Design | Naming accepted 2026-11-04; not evidence every mode is implemented |
| **Itio Nu (ν)** — cross-portfolio pillar | Knowledge and intelligence across the ecosystem; Kido Gnosis and Kido Nous are the named Kido products associated with this pillar | Naming accepted; not a Kido-only family or implemented shared service |
| Kido platform family — name open | Kido-specific platform/runtime foundation | Proposed grouping; boundary with Iota and implementation requires design |

Greek-letter brands identify product families. Descriptive names identify experiences, modes, products or capabilities within a family. Do not assume every named capability needs a user-facing mode, separate service or separate repository.

**Brands are for people; semantic names are for code.** Naming changes do not require package, crate or repository renames.

## Knowledge and intelligence: Itio Nu

**Itio Nu (ν)** is the accepted name for the Itio-wide knowledge and intelligence pillar. Nu is a Greek-letter brand; the letter itself does not literally mean knowledge.

- **Kido Gnosis** is the product name for **Kido KBM**, the knowledge-management design.
- **Kido Nous** is the product name for **Kido Intelligence**.

These names were accepted on 2026-11-04. Naming does not establish a deployed service, a new repository, or the completed implementation of either product. Whether Nu supplies a shared service, and how Gnosis and Nous own or consume capabilities within that pillar, remain architectural decisions. Do not assume all knowledge is owned by Kido or Iota.

## Documentation ownership

- **This repository:** cross-product portfolio, naming hierarchy and high-level relationships.
- **[Kido family page](kido.md):** canonical current Kido family naming, accepted discussion direction and unresolved choices.
- **Kido repository:** software specifications, architecture decisions, prototypes, code and implementation evidence.
- **Yai and Omega project repositories:** their language, machine, runtime and simulation designs.
- Historical ADRs remain in their original repositories. Current portfolio changes do not silently rewrite earlier decisions.

The Kido repository's [product-family page](https://github.com/itio-co/kido/blob/main/docs/product-family.md) remains as a pointer and concise local summary. Its [ADR-0013](https://github.com/itio-co/kido/blob/main/docs/adr/0013-kido-product-family-and-brand-vs-semantic-names.md) remains unchanged as historical evidence of the original four-family decision.

## Integration is not ownership

Kido can integrate with Yai and Omega through explicit contracts without absorbing their identities. Existing documents describe Yai owning meaning and Omega realizing execution. They do **not** establish that current Kido OS runs on Omega Machine, that Omega OS is Kido OS, or that Omega Factory already uses a deployed Omega runtime.

See:
- [Omega Machine Principles](https://github.com/itio-co/yailang/blob/main/docs/km/Omega%20Machine%20Principles.md)
- [Omega Layered Semantic Architecture](https://github.com/itio-co/yailang/blob/main/docs/km/Omega%20Layered%20Semantic%20Architecture.md)
- [Kido architectural context](https://github.com/itio-co/kido/blob/main/docs/design/CONTEXT.md)

## Publication and status

This repository is public and backs the Itio website. These Markdown pages are repository documentation, not automatically rendered website pages. Main-branch pushes trigger the existing website build/deployment workflow; this documentation migration changes no website code.

Naming acceptance is not trademark clearance, an implementation claim, or an architectural acceptance test. Public marketing should distinguish planned capabilities from released features.

## Open portfolio decisions

1. Formal portfolio positioning and verified repository links for the wider Omega ecosystem.
2. Technical ownership and service boundaries within Itio Nu, including how Kido Gnosis (KBM) and Kido Nous (Intelligence) participate; the role of Thread remains open.
3. Kido platform family's name and boundary with Iota.
4. Which Mu capabilities are user-facing modes versus framework internals.
5. Design-mode overlap between Omicron and Mu's Weave/Loom.
6. Brand, trademark and package-name checks before treating names as cleared.
