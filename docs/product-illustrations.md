# Product concept illustrations

Every product and family page includes a bespoke architectural line-art study.
These are conceptual pictures of the documented role, not deployment diagrams
or claims that the pictured capabilities have shipped.

## Source and maintenance

- `src/data/productCatalog.js` and its linked product documentation remain the
  authority for product definitions, grouping and status.
- `src/data/productConcepts.js` contains only illustration briefs, accessible
  descriptions and three short reading cues for each picture. It is not another
  product glossary.
- `src/components/ProductConcept.jsx` composes a distinct SVG scene for each slug
  from a shared architectural drawing vocabulary.
- `src/components/ProductConcept.css` provides the line, fill, grid and caption
  styles. The hero places the figure beside text on large screens and below it
  on smaller screens.

The SVGs are inline and prerendered, have intrinsic dimensions, descriptive
titles and descriptions, and scale without external image requests. Captions
and reading cues are HTML so they remain readable as diagrams shrink. The art
has no animation or interactive controls. A high-contrast preference increases
line and caption contrast.

## Content guardrails

- Chat shows conversation and a Profile, with no tool connections.
- Code shows a git branch, Brain and human approval, not automatic merge.
- Bot shows a Profile/trigger/Room record and inbound/reply flow, not an
  autonomous scheduler or a Workflow engine.
- Brain is one git-backed work record, separate from the project repository.
- Skill is a procedure used across enrolled harnesses, not a runtime.
- CLI shows terminal and web surfaces with three shared ports; Omicron modes
  are presets over shared foundations.
- Nu is Itio-wide. Its products are separate conceptual studies, not a settled
  shared-service architecture.
- Omega's three projects are separate studies, not a claimed Factory/OS/Machine
  runtime stack. Kido OS and Omega OS remain distinct.
- Mu includes iteration; Sew retains domain behavior and Stitch composes/routes
  federation. Unsettled integrations are not drawn as product dependencies.

Run `npm run build && npm test` after changing the catalogue or illustrations.
Tests require one unique, accessible, self-contained illustration for every
product page and preserve the key semantic boundaries above. Visually review
new scenes at desktop and narrow widths before publication.
