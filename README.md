# CScience Organization Portal

Static organization and software-portfolio portal for **CScience (`net.cscience`)**, including its shared visual system.

The homepage introduces CScience, its public repositories, and its research-software systems. The separate `style.html` page documents the accepted themes, typography, interface elements, and palette tokens.

## Source of truth

- [`DESIGN.md`](DESIGN.md) — full design specification and decision history
- [`CONTEXT.md`](CONTEXT.md) — compact current context for design/generation tasks
- `brands/` — product-specific identity notes
- `assets/concepts/` — generated and exploratory concept material
- `assets/approved/` — stable approved assets and references

## Brand family

```text
net.cscience
├── SCIRE
├── SPOT
├── Lecture Insights
└── Future research software systems
```

## Asset rule

Generated logo boards are concept references. Final marks should be manually reconstructed as native vectors rather than auto-traced.

## GitHub Pages portal

The repository root contains a build-free static portal:

```text
index.html
style.html
css/cscience.css
js/theme.js
assets/
```

It uses only relative paths and can be served from a GitHub project subpath. In
the repository settings, configure GitHub Pages to deploy from the repository
root (or copy the same files into the selected Pages source directory).

The theme preference is stored locally in the browser. No framework or build
step is required for the GitHub Pages version.
