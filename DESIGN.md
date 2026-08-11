# CScience Brand & Design System

> **Status:** Brand Foundation 0.5 — current working context  
> **Organization:** CScience  
> **Organizational identifier:** `net.cscience`

## 1. Purpose

The CScience Brand & Design System defines the shared identity and visual language of CScience and its research-software systems.

The system should create a recognizable family while allowing SCIRE, SPOT, Lecture Insights, and future systems to retain product-specific symbols and domain-specific visualizations.

---

## 2. Organization and Product Architecture

**CScience is the organization.**

`net.cscience` is the technical and organizational identifier used for GitHub, namespaces, packages, repositories, ownership, and product endorsements.

```text
net.cscience
├── SCIRE
│   └── A net.cscience research platform
├── SPOT
│   ├── Powered by SCIRE
│   └── A net.cscience research application
├── Lecture Insights
└── Future systems
```

There is no separate CScience and net.cscience organization.

### Shared visual inheritance

```text
net.cscience
    ↓
shared typography
shared neutral palette
shared accent family
shared geometry
shared scientific visual language
    ↓
SCIRE / SPOT / Lecture Insights
    ↓
product-specific symbol, accents and visualization style
```

Typography, theme palettes, general UI geometry, spacing, and component language should therefore remain visibly aligned across CScience software.

---

## 3. CScience

| Property | Definition |
|---|---|
| **Organization** | CScience |
| **Identifier** | net.cscience |
| **Role** | University-internal research-software organization and portfolio owner |
| **Descriptor** | Scientific Computing & Research Software |
| **Current logo claim** | Context. Coordinate. Features. |

### Positioning

> CScience develops reusable research software and scientific computing systems for exploring, structuring, indexing, retrieving, and understanding complex information.

### Current preferred graphical concept

The current preferred CScience symbol uses the shared scientific geometry:

- an **open circle / context space**;
- a **central square / coordinate**;
- **rays / relations**;
- a **structured square grid / features**;
- selected cells using the active theme palette.

The symbol is deliberately abstract and should not be interpreted as a targeting reticle.

The experimental mathematical vector text `[1 0]` has been **rejected for the logo lockup**. It may still appear elsewhere as scientific UI or editorial content, but not as part of the CScience mark.

### Current preferred lockup

```text
CScience
Context. Coordinate. Features.
```

The organizational descriptor remains valid for descriptive use:

```text
Scientific Computing & Research Software
```

but is not currently the preferred primary logo claim.

### Status

**Current direction — not yet final vector artwork.**

The generated concept images are visual references. Final production artwork should be manually reconstructed as native vector geometry.

---

## 4. SCIRE

| Property | Definition |
|---|---|
| **Brand** | SCIRE |
| **Expansion** | Scientific Contextual Indexing and Retrieval Engine |
| **Owner** | net.cscience |
| **Role** | Scientific research software backbone |
| **Primary idea** | Context × Coordinate × Feature |

SCIRE is a modular scientific software platform for feature-based indexing and retrieval across heterogeneous information spaces.

Typical contexts include:

- 3D scenes and models;
- videos;
- lectures;
- documents;
- multimodal datasets;
- spatial and temporal information spaces.

### Current preferred graphical baseline

The current preferred SCIRE concept is the manually refined Illustrator direction:

- open circular context space;
- central square origin;
- rays toward a **3 × 5 feature grid**;
- selected feature cells use the current theme palette;
- unselected cells are outlined;
- no crosshair construction;
- simple, consistent line weights.

Conceptually:

```text
Context     → open circular reference space
Coordinate  → central origin
Relations   → rays / vector-like connections
Features    → structured feature grid
Selection   → highlighted feature cells
```

### Lockup

```text
SCIRE
Scientific Contextual Indexing and Retrieval Engine
```

Optional endorsement:

```text
A net.cscience research platform
```

### Status

**Strong current concept — final vector artwork still open.**

---

## 5. SPOT

| Property | Definition |
|---|---|
| **Brand** | SPOT |
| **Role** | Novice-oriented spatial video-search research application |
| **Platform** | Powered by SCIRE |
| **Current claim** | We spot what matters. |

### Product idea

SPOT focuses on selecting and retrieving a meaningful part of an image or video frame.

The name also supports the playful use of the dog **Spot**, already present in the spatial-video-search design examples.

### Current preferred graphical concept

The current SPOT logo direction is accepted as the preferred concept:

- reuse the CScience/SCIRE open-context geometry;
- use the same square feature-grid language;
- include the dog Spot as the approachable product-specific element;
- use a **highlighted local group of feature squares** to represent the spatial region being spotted;
- connect the source/subject to the selected region using the shared ray language.

This gives SPOT a recognizable product identity while retaining the CScience family geometry.

### Current preferred lockup

```text
SPOT
We spot what matters.
```

Product relationship may additionally be communicated as:

```text
Powered by SCIRE
A net.cscience research application
```

### Status

**Preferred current concept — keep this direction.**

---

## 6. Lecture Insights

Lecture Insights is a research application for lecture indexing, analysis, comparison, and exploration.

Desired qualities:

- analytical;
- structured;
- calm;
- information-dense;
- consistent with the shared CScience system.

A dedicated graphical mark has not yet been selected.

---

## 7. Accepted Shared Visual Foundation

The following decisions are **accepted and should be treated as stable** while product marks are refined.

### 7.1 Theme palettes

The design system has three shared theme families.

#### Light / Calm

| Token | Name | Hex |
|---|---|---|
| 01 | Calm Mint | `#D9F3F2` |
| 02 | Calm Sky | `#C8E6F9` |
| 03 | Calm Lilac | `#D7CCFF` |
| 04 | Calm Coral | `#FF8A80` |
| 05 | Calm Sand | `#F1D6C9` |
| 06 | Calm Stone | `#E6E6E8` |

#### Dark / Studio

| Token | Name | Hex |
|---|---|---|
| 01 | Studio Teal | `#00BDB8` |
| 02 | Studio Blue | `#5A49FF` |
| 03 | Studio Violet | `#6E4BFF` |
| 04 | Studio Coral | `#FF5A4F` |
| 05 | Studio Amber | `#FFB038` |
| 06 | Studio Gray | `#BFC3C8` |
| 07 | Studio Slate | `#8A8F98` |

#### Dark / Futuristic

| Token | Name | Hex |
|---|---|---|
| 01 | Futuristic Teal | `#00F5FF` |
| 02 | Futuristic Blue | `#3D00FF` |
| 03 | Futuristic Violet | `#7A00FF` |
| 04 | Futuristic Magenta | `#C600FF` |
| 05 | Futuristic Green | `#39FF6A` |
| 06 | Futuristic Ink | `#0B1324` |
| 07 | Futuristic Black | `#070B12` |

Approved palette reference:

```text
assets/approved/cscience-theme-palettes-reference.png
```

These palettes are shared across CScience software. Product-specific identity should use the palette differently rather than introduce unrelated color systems.

### 7.2 Typography

**Accepted direction:**

- **Primary UI and supporting brand typography:** Sora
- **Technical / mono typography:** IBM Plex Mono
- **Display wordmarks:** custom / dedicated geometric treatment based on the accepted concepts

Typography should remain aligned across CScience, SCIRE, SPOT, Lecture Insights, and future systems.

### 7.3 UI geometry

The shared application language is **Fluent-inspired and desktop-oriented**, not soft or organically rounded.

Use:

- predominantly rectangular surfaces;
- subtle corner radii;
- restrained borders;
- flat or lightly elevated panels;
- precise alignment;
- clear hierarchy;
- compact scientific controls;
- generous whitespace where appropriate.

Avoid:

- large rounded cards;
- pill-shaped containers as general layout elements;
- excessive softness;
- generic SaaS dashboard styling;
- consumer-mobile visual language.

### 7.4 Theme character

#### Light / Calm

- clean;
- bright;
- quiet;
- Fluent-like;
- minimal shadows;
- restrained accents;
- primary mode for normal research work.

#### Dark / Studio

- technical;
- calm;
- professional;
- suitable for long sessions;
- strong but restrained contrast.

#### Dark / Futuristic

- near-black surfaces;
- cyan / blue / violet / magenta / green scientific accents;
- controlled luminous effects;
- greater spatial depth;
- futuristic expression focused on data and information structure.

The futuristic theme should not turn the entire application into a decorative HUD.

---

## 8. Shared Scientific Visual Language

Preferred motifs:

- context spaces;
- coordinates;
- vectors and relations;
- feature grids;
- embeddings;
- spatial relationships;
- structured selection;
- scientific plots;
- index structures;
- retrieval paths.

The strongest shared family geometry currently consists of:

```text
open context shape
        +
coordinate / origin
        +
relations
        +
structured square feature representation
```

This geometry may be specialized by each product.

---

## 9. Explicitly Avoid

Do not use as primary brand language:

- military or weapon-like crosshairs;
- targeting reticles;
- generic AI brains or sparkles;
- generic neural-network globes;
- literal gears as primary marks;
- dense mechanical illustrations;
- arbitrary mathematical labels inside logos;
- excessive glow;
- unrelated product color systems;
- excessive rounded-card UI;
- literal Greek motifs such as owls or meanders as the main identity.

Scientific references should have a defensible conceptual connection to the software.

---

## 10. Logo Production Requirements

Final marks should support:

- symbol only;
- horizontal lockup;
- lockup with claim / descriptor;
- lockup without claim;
- monochrome;
- Light / Calm;
- Dark / Studio;
- Dark / Futuristic;
- square `1:1` application icon where appropriate;
- reduced small-size variant.

The final vector masters should be manually reconstructed in Illustrator or equivalent vector software.

Generated images and automatic vector traces are **concept references only**.

Preferred final master/export formats:

```text
.ai   — editable production master
.svg  — software/web use
.pdf  — exchange / print
.eps  — compatibility where needed
.png  — raster preview / documentation
```

---

## 11. Asset Status Model

### Approved

Stable system decisions or production-ready assets.

```text
assets/approved/
```

Currently includes:

- shared theme palette reference.

### Current direction

A selected direction that should guide further work but is not yet production artwork.

Examples:

- CScience context-coordinate-feature symbol;
- SCIRE open-context + rays + 3×5 feature-grid mark;
- SPOT dog + highlighted feature-region mark.

### Concept

Explorations, generated images, alternatives, moodboards, and intermediate studies.

```text
assets/concepts/
```

### Rejected / historical

May remain in the repository for traceability, but should not be presented as a current recommendation.

---

## 12. Current Decisions Summary

### Persist

- three shared theme palettes;
- Sora + IBM Plex Mono typography system;
- shared Fluent-inspired UI geometry;
- common scientific visual language;
- CScience / SCIRE / SPOT family relationship;
- CScience claim: **Context. Coordinate. Features.**
- SPOT claim: **We spot what matters.**
- SPOT dog + highlighted-region concept;
- SCIRE 3×5 feature-grid baseline.

### Do not persist as logo elements

- CScience `[1 0]` vector notation;
- crosshair constructions;
- earlier sphere/network-logo variants as primary directions;
- literal gear/mechanism marks.

---

## 13. Next Steps

1. Add the preferred CScience, SCIRE, and SPOT concept boards to `assets/concepts/`.
2. Use this document as the source of truth for the first CScience GitHub Pages brand portal.
3. Reconstruct selected marks manually as native vector artwork.
4. Normalize the accepted palette into implementation design tokens.
5. Validate typography and geometry in representative Blazor and Godot application screens.
6. Develop the Lecture Insights product mark after the parent-family geometry is stable.
