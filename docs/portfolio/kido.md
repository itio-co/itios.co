# Kido product families

Updated: 2026-11-05

Canonical location: Itio portfolio, `docs/portfolio/kido.md`.

This page preserves the original Kido family baseline and records the current product direction following the naming discussion begun on 2026-11-04. The [original accepted ADR-0013](https://github.com/itio-co/kido/blob/main/docs/adr/0013-kido-product-family-and-brand-vs-semantic-names.md) is unchanged. New naming agreement does not establish implemented functionality, a new bounded context or a deployment boundary.

## Current family map

| Family | Purpose | Products, modes or capabilities | Decision state |
|---|---|---|---|
| **Kido Sigma (Σ)** | Business suite | Community and Enterprise distributions; Kido Commerce first | Original accepted family |
| **Kido Iota (ι)** / Kido Services | Business-domain framework and shared application services | Identity & Access, Organization, Notification, Document, Audit, Search | Original accepted family; packages live within Sigma Community |
| **Kido Mu (μ)** | Application framework and creation ecosystem | Weave discovery, Loom design/build, Fabric app workspace, Sew domain services/subgraphs, Stitch GraphQL federation | Original accepted family; expanded naming direction below |
| **Kido Phi (Φ)** | UI and design system | UI components and design system | Original accepted family; not the umbrella for all workspace modes |
| **Kido Omicron (ο)** | User-facing workspace family | Chat, Code, Bot, CoWork, Design | Name and grouping accepted 2026-11-04; implementation status is mode-specific |
| **Itio Nu (ν)** — cross-portfolio pillar | Knowledge and intelligence across the Itio ecosystem | Orbit information framework, Gnosis KBM/retrieval, Grove knowledge workspace, Nous intelligence | Named product direction; technical ownership and shared-service boundaries remain open |
| **Kido Kappa (κ)** | Kido-specific platform family | Kido OS microkernel, virtual Computer and CLI across families | Name and conceptual direction accepted 2026-11-04; implementation boundaries require design |

## Product and mode semantic names

Each product or mode pairs its brand with a human-readable semantic name describing its responsibility. Family brands remain separate from these product names. These labels do not create package identifiers, repositories, services or implementation claims; the original engineering identifiers and baseline below are preserved.

| Family | Product or mode | Human-readable semantic name | Responsibility |
|---|---|---|---|
| Sigma | **Commerce** | Commerce Application | The first business application, covering POS, inventory, supply, customer and cash |
| Omicron | **Chat** | Conversation | Tool-free conversation with a selected Profile |
| Omicron | **Code** | Coding | Everything-as-code work: git-kept source, decisions and Brain; branch/MR and declared Workflow |
| Omicron | **Bot** | Automation | Mode that runs an enrolled Profile with a trigger and target Room; distinct from a Workflow |
| Omicron | **CoWork** | Collaboration | Chat room plus connector tools, producing documents |
| Omicron | **Design** | Design Workspace | CoWork plus design tools; its relationship with Mu remains to be resolved |
| Kappa | **OS** | Platform Microkernel | The Kido platform's small coordinating core |
| Kappa | **Computer** | Virtual Computer | The virtual-computer product direction |
| Kappa | **CLI** | Command-Line Interface | The operator’s terminal and web client for Profile conversations in modes, spanning families |

Mu and Itio Nu product mappings appear in their dedicated tables below. Community and Enterprise remain Sigma distributions, not additional products or modes. Omicron implementation status is mode-specific; Kappa contracts and the virtual Computer implementation still require engineering work.

## Omicron mode semantics and engineering authority

The semantic labels above remain human-readable portfolio names. Their behavior must follow the [Kido glossary](https://github.com/itio-co/kido/blob/main/docs/design/CONTEXT.md), not an inference from “Conversation,” “Coding” or “Automation.” Reviewed against Kido commit `58beb3963d4164f02a670647b9662bf8408a3ce5` on 2026-11-05:

- **Chat** is conversation with **no tools**. Chat and Code select a **Profile**, a harness’s named configuration, not a Bot or an Agent object. Model and effort overrides are limited by the harness, Profile and Policy.
- **Kido Code** is the everything-as-code way of working. Git-kept work has a Brain, branch and worktree, and follows a declared Workflow through development, review and close. The code preset runs that workflow; Kido Code is not the CLI or the name of its web screens.
- **Bot mode** runs a **Bot record**: an enrolled Profile with a trigger and target Room, answering inbound messages in a long-lived conversation. It is not a Workflow. A Bot that speaks first on schedule or event is an **NPC**.
- The specifically named **Kido Bot** is the record over `hermes/kido-worker` in the **Kido Bot Room**, `kido/main`. The [Bot Room design](https://github.com/itio-co/kido/blob/main/docs/design/kido-bot-room.md) separates managed prompted turns from later scheduled/event Bot enrollment. Its execution desk verifies and reviews work, requests decisions, merges only on instruction and closes work; it does not file or re-plan stories.
- **CoWork** is chat room + connector tools → documents. **Design** adds design tools to CoWork. Neither label establishes a multi-user hosted workspace.
- The modes are presets over shared ports and harness policy. [ADR 0014](https://github.com/itio-co/kido/blob/main/docs/adr/0014-kido-cli-is-its-own-harness-three-ports-modes-as-presets.md) establishes the three-port CLI harness; [ADR 0012](https://github.com/itio-co/kido/blob/main/docs/adr/0012-workflows-and-kido-intelligence.md) supersedes its earlier rejection of declared Workflows; [ADR 0018](https://github.com/itio-co/kido/blob/main/docs/adr/0018-kido-addresses-profiles-not-agents.md) supersedes earlier Agent-object terminology with Profile.

These records define behavior and boundaries, not blanket release availability. The public explanatory pages and overview should retain these distinctions.

## Kido Kappa: the hand and the microkernel

**Kido Kappa (κ)** is the accepted platform-family name. **Kido OS** is its central product and microkernel foundation, supported by runtime and platform infrastructure. The product direction also includes a **virtual Computer** and **Kido CLI** spanning families, rather than a CLI limited to Kappa. Concrete integration contracts and the virtual Computer implementation remain engineering work. Kappa supplies the platform foundation; **Iota** remains the distinct business-domain framework and shared application-service layer.

The hand is a conceptual map for explaining how a small core supports cooperating capabilities:

| Hand metaphor | Kido platform concept | Design meaning |
|---|---|---|
| **Palm** | Kido OS microkernel | A small coordinating core supporting the connected capabilities |
| **Fingers** | Capabilities and services | Specialized capabilities cooperate through the platform |
| **Joints** | Contracts and ports | Explicit connection points define how capabilities interact |
| **Nerves** | Messages and events | Communication carries requests and signals between components |
| **Skin** | Security boundary | Access and isolation boundaries protect the system and its capabilities |
| **Senses** | Observability | Signals make behavior and failures visible |

This metaphor is an accepted design explanation, not an implementation inventory. It does not establish a particular process topology, permission model, messaging technology or service deployment. Those remain engineering decisions.

The naming inspiration refers to the historical palm association behind the letter's ancestry. **Kappa is a Greek letter name, not the modern Greek word for hand.** The microkernel, fingers, joints, nerves, skin and senses mapping is Kido's own product metaphor, not an etymological definition.

## Itio Nu across the portfolio

| Product brand | Human-readable semantic name | Responsibility | Status |
|---|---|---|---|
| **Orbit** | Information Framework | Category-theory information framework and Graph-Entity modeling | Named direction; not a completed implementation claim |
| **Gnosis** | Knowledge Management | Knowledge management (KBM), memory, evidence and retrieval | Kido Gnosis/KBM design remains an engineering reference; broader pillar is Itio-wide |
| **Grove** | Knowledge Workspace | Knowledge workspace | Named direction; not a shipped workspace claim |
| **Nous** | Intelligence | Intelligence through models, agents, tools and orchestration | Kido Nous/Intelligence name accepted; naming does not assert new implemented capabilities |

**Itio Nu (ν)** is an Itio-wide knowledge and intelligence pillar, not merely a Kido family. Nu is a Greek-letter brand, not a literal translation of knowledge. These names do not rename code or settle whether Nu is a shared service, where state is owned, or how Orbit, Gnosis, Grove and Nous connect technically. See the [portfolio overview](README.md#knowledge-and-intelligence-itio-nu).

## Mu experiences and capabilities

| Name | Human-readable semantic name | Responsibility | Status |
|---|---|---|---|
| **Weave** | Domain Discovery | Discover intent, evidence, scenarios and domain models | Preferred working name accepted in discussion; design exists |
| **Loom** | Studio (Domain Studio) | Studio: design, build, run and evolve applications from domain models | Product-facing name accepted for the Studio experience |
| **Fabric** | Application Workspace | App/workspace: use the resulting applications day to day | Product-facing name accepted |
| **Stitch** | GraphQL Federation | Federated GraphQL composition/integration and routing | Name accepted for the federation layer; existing architecture uses Hive Router |
| **Sew** | Domain Service Framework | Framework for building domain services and exposing GraphQL subgraphs | Named product direction; not yet an established framework |

Mu includes the shared application model/runtime as well as these experiences. The sequence **Weave → Loom → Fabric** is a useful user journey, not a one-way technical pipeline: users may revisit design and evolve a running application.

Loom retains **Studio (Domain Studio)** as its human-readable semantic name. It develops the existing App Studio direction rather than creating a second unrelated studio by default. Concrete consolidation and model contracts still require engineering decisions.

Stitch is a brand metaphor, **not** a claim that Kido uses the separate GraphQL schema-stitching technique. Business logic belongs to domain services, not the federation router. The product distinction is: Sew builds services/subgraphs; Stitch composes and routes across subgraphs. This describes intended responsibilities, not completed implementation.

Thread and Pattern are liked naming candidates without settled assignments. Thread was previously suggested for a knowledge experience; Grove is now the named knowledge-workspace direction. Pattern remains a candidate for reusable designs/templates; neither Thread nor Pattern is a new accepted family. Do not allocate additional products merely to use the names.

## Boundaries to resolve

- **Omicron vs Mu:** Omicron's Design mode may open Mu's Weave/Loom capabilities; that is a proposal, not an established implementation.
- **Fabric vs Omicron:** Fabric is the app-use experience in Mu's lifecycle; Omicron is the broader Kido workspace. Their shell/entry-point relationship needs design.
- **Iota vs Kappa:** Kappa is the platform family around the Kido OS microkernel. Iota is the distinct business-domain framework and shared application-service layer. Keep platform mechanisms separate from business-domain policy; detailed contracts and service placement require design.
- **Itio Nu:** the Itio-wide knowledge/intelligence pillar now names Orbit, Gnosis, Grove and Nous. Ownership, shared-service architecture and concrete integration remain open; do not assign all knowledge to Iota or Kido by assumption.
- **Omega:** reserve the broader Logical Realm identity rather than relabeling Kido OS as Omega. See the [Itio portfolio](README.md).

## Original accepted baseline, preserved

The following commercial, semantic-name and dependency rules remain in force unless superseded by a later explicit decision. Legacy `itio-io` repository locators are retained as historical identifiers; their current locations have not been verified in this migration.

**Brands are for people, semantic names are for code.** Write "Kido Mu" in a
README sentence or a deck; write `@kido-app/runtime` in an import. Never rename
code to follow a brand.

### Original four products

| Brand | Semantic name | What it is | Licence |
|---|---|---|---|
| **Kido Sigma** (Σ) | `kido-suite`: repo `itio-io/kido-suite`, `@kido-suite/*` | The business suite. **Community** holds the Platform Contexts and generic apps, with **Kido Commerce** first (POS, inventory, supply, customer, cash). **Enterprise** is a separate commercial project adding paid features, Licensing, hosting and support | Community: Apache-2.0 (copyleft under review) · Enterprise: commercial |
| **Kido Iota** (ι), *Kido Services* | inside `kido-suite`: `@kido-suite/identity`, `/organization`, `/notification`, `/document`, `/audit`, `/search` | The Platform Contexts: generic backend that every business app needs | Apache-2.0 (part of Community) |
| **Kido Mu** (μ) | `kido-app`: repo `itio-io/kido-app`, `@kido-app/*` | The app framework: Screens, Flows, runtime, Domain Model, Kido App Studio. μ is the monad *join*: it flattens apps into one runtime | Apache-2.0 |
| **Kido Phi** (Φ) | `kido-ui`, i.e. `@kido-app/ui` | UI and design system | Apache-2.0 |

### Layers

```
 Σ  Kido Sigma Enterprise ── commercial ─────────────────────
     paid features · Licensing · hosting · support
 ─────────────────────────────────────── open core (Apache-2.0)
 Σ  Kido Sigma Community   kido-suite
     Kido Commerce (first app) · more apps later
     ι Kido Iota: Identity & Access, Organization,
       Notification, Document, Audit, Search
 μ  Kido Mu      app framework: Screens, Flows, runtime  (kido-app)
 Φ  Kido Phi     UI / design system                       (kido-ui)
```

Dependencies point down only: Enterprise → Community → Mu/Phi. Nothing open depends on Enterprise.

### Open vs commercial

- **Open:** anything generic. A business with no Enterprise subscription can build and run apps on Mu + Phi + Sigma Community, including Iota.
- **Commercial (Sigma Enterprise):** paid features, Licensing (deliberately never in Community), hosting (cloud) and support.

### Wording rules

- Say **business suite**, not **ERP**, until Sigma has accounting.
- **Community / Enterprise** is the **Distribution**. Never say "edition" for it: products use Edition for self-hosted vs cloud.
- First mention in a doc: brand with letter and semantic name, e.g. "Kido Mu (μ, `kido-app`)". After that, the brand alone.
- Don't use *Alpha* or *One* for any Kido product (pre-release connotation; Zoho One / SAP Business One).
- Kido docs never name customers. Customer repos depend on Kido, never the reverse.

### Open questions

- Historical question: Is Itio Omega part of this portfolio story, or separate? Current discussion keeps its broader Logical Realm identity; exact portfolio integration remains open.
- Name and repo of the Sigma Enterprise project.
- Community licence: Apache-2.0 or copyleft (`kido-suite` ADR-0001).

### Where things live

- `itio-io/kido-app`: Kido Mu + Kido Phi (requirements, SDS, ADRs)
- `itio-io/kido-suite`: Kido Sigma Community + Kido Iota (Platform Contexts spec, ADRs)
- `itio-io/kido`: historical home of this page and the family decision (ADR-0013). Current canonical naming now lives in this Itio portfolio; the original Kido ADR remains in place.


## Migration and related design records

Git and Markdown remain the current documentation source. The website summary follows this naming record; neither surface substitutes for implementation evidence.

On 2026-11-04, cross-product portfolio ownership moved to `itio-co/itios.co/docs/portfolio`. Product engineering documents remain in their product repositories. That migration was a documentation move and naming reconciliation only: no repositories, packages, runtime code, licences or website UI were renamed or moved as part of it.

- [Domain Studio SDS (Loom semantic design)](https://github.com/itio-co/kido/blob/main/docs/design/domain-studio-sds.md)
- [Kido Weave design](https://github.com/itio-co/kido/blob/main/docs/design/kido-weave-design.md)
- [Kido KBM SDS](https://github.com/itio-co/kido/blob/main/docs/design/kido-kbm-sds.md)
- [Kido current architecture](https://github.com/itio-co/kido/blob/main/docs/design/CONTEXT.md)

Related SDSs may retain earlier terminology until a separately scoped reconciliation. They are design documents, not proof that the proposed production capabilities are shipped.

Trademark and npm checks remain owed, including the existing Sigma and Iota concerns recorded by ADR-0013. No new name in this page is asserted to be cleared.
