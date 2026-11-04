# Kido product families

Updated: 2026-11-04  
Canonical location: Itio portfolio, `docs/portfolio/kido.md`.

This page preserves the original Kido family baseline and adds the naming direction agreed on 2026-11-04. The [original accepted ADR-0013](https://github.com/itio-co/kido/blob/main/docs/adr/0013-kido-product-family-and-brand-vs-semantic-names.md) is unchanged. New naming agreement does not establish implemented functionality, a new bounded context or a deployment boundary.

## Current family map

| Family | Purpose | Products, modes or capabilities | Decision state |
|---|---|---|---|
| **Kido Sigma (Σ)** | Business suite | Community and Enterprise distributions; Kido Commerce first | Original accepted family |
| **Kido Iota (ι)** / Kido Services | Shared application services | Identity & Access, Organization, Notification, Document, Audit, Search | Original accepted family; packages live within Sigma Community |
| **Kido Mu (μ)** | Application framework and creation ecosystem | Weave, Loom, Fabric; Stitch; proposed Sew | Original accepted family; expanded naming direction below |
| **Kido Phi (Φ)** | UI and design system | UI components and design system | Original accepted family; not the umbrella for all workspace modes |
| **Kido Omicron (ο)** | User-facing workspace family | Chat, Code, Bot, CoWork, Design | Name and grouping accepted 2026-11-04; implementation status is mode-specific |
| **Itio Nu (ν)** — cross-portfolio pillar | Knowledge and intelligence across the Itio ecosystem | **Kido Gnosis** (KBM), **Kido Nous** (Intelligence) | Names accepted 2026-11-04; technical ownership and shared-service boundaries remain open |
| **Platform family — name open** | Kido-specific runtime and operational foundation | Kido OS and potential supporting platform capabilities | Proposed family; exact scope and Greek name unresolved |

## Kido products associated with Itio Nu

| Product brand | Semantic name / responsibility | Status |
|---|---|---|
| **Kido Gnosis** | **Kido KBM**: knowledge management, memory and evidence | Product name accepted; existing KBM design remains the engineering reference |
| **Kido Nous** | **Kido Intelligence** | Product name accepted; naming does not assert new implemented capabilities |

**Itio Nu (ν)** is an Itio-wide knowledge and intelligence pillar, not merely a Kido family. Nu is a Greek-letter brand, not a literal translation of knowledge. These names do not rename code or settle whether Nu is a shared service, where state is owned, or how Gnosis and Nous connect technically. See the [portfolio overview](README.md#knowledge-and-intelligence-itio-nu).

## Mu experiences and capabilities

| Name | Semantic responsibility | Status |
|---|---|---|
| **Weave** | Discover intent, evidence, scenarios and domain models | Preferred working name accepted in discussion; design exists |
| **Loom** | Studio: build, run and evolve applications from domain models | Product-facing name accepted for the Studio experience |
| **Fabric** | App/workspace: use the resulting applications day to day | Product-facing name accepted |
| **Stitch** | Federated GraphQL composition/integration and routing | Name accepted for the federation layer; existing architecture uses Hive Router |
| **Sew** | Framework for building domain services and exposing GraphQL subgraphs | Proposed name/scope; not yet an established framework |

Mu includes the shared application model/runtime as well as these experiences. The sequence **Weave → Loom → Fabric** is a useful user journey, not a one-way technical pipeline: users may revisit design and evolve a running application.

Loom retains **Studio** as its semantic description. It develops the existing App Studio direction rather than creating a second unrelated studio by default. Concrete consolidation and model contracts still require engineering decisions.

Stitch is a brand metaphor, **not** a claim that Kido uses the separate GraphQL schema-stitching technique. Business logic belongs to domain services, not the federation router. The proposed distinction is: Sew builds services/subgraphs; Stitch composes and routes across subgraphs.

Thread and Pattern are liked naming candidates without settled assignments. Thread was suggested for a knowledge experience and Pattern for reusable designs/templates; neither is a new accepted family. Do not allocate additional products merely to use the names.

## Boundaries to resolve

- **Omicron vs Mu:** Omicron's Design mode may open Mu's Weave/Loom capabilities; that is a proposal, not an established implementation.
- **Fabric vs Omicron:** Fabric is the app-use experience in Mu's lifecycle; Omicron is the broader Kido workspace. Their shell/entry-point relationship needs design.
- **Iota vs platform:** Iota provides shared application services. Kido OS provides the Kido-specific platform/control-plane role. A separate platform family must not silently duplicate Iota.
- **Itio Nu:** the knowledge/intelligence pillar and the product names Gnosis (KBM) and Nous (Intelligence) are accepted. Ownership, shared-service architecture and concrete integration remain open; do not assign all knowledge to Iota or Kido by assumption.
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

On 2026-11-04, cross-product portfolio ownership moved to `itio-co/itios.co/docs/portfolio`. Product engineering documents remain in their product repositories. This is a documentation move and naming reconciliation only: no repositories, packages, runtime code, licences or website UI were renamed or moved.

- [Domain Studio SDS (Loom semantic design)](https://github.com/itio-co/kido/blob/main/docs/design/domain-studio-sds.md)
- [Kido Weave design](https://github.com/itio-co/kido/blob/main/docs/design/kido-weave-design.md)
- [Kido KBM SDS](https://github.com/itio-co/kido/blob/main/docs/design/kido-kbm-sds.md)
- [Kido current architecture](https://github.com/itio-co/kido/blob/main/docs/design/CONTEXT.md)

Related SDSs may retain earlier terminology until a separately scoped reconciliation. They are design documents, not proof that the proposed production capabilities are shipped.

Trademark and npm checks remain owed, including the existing Sigma and Iota concerns recorded by ADR-0013. No new name in this page is asserted to be cleared.
