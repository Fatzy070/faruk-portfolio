/**
 * THE LIVING BLUEPRINT — Unified Scroll-Revealed Engineering Background
 *
 * A single continuous geometric composition spanning the entire portfolio height
 * (`viewBox="0 0 1440 6920"`, mapped 1:1 to the document's vertical flow).
 * Lines, routed orthogonal paths, large circular outlines, sweeping arcs,
 * triangulated constellations, and intersection nodes draw progressively and
 * reversibly with the visitor's scroll position (`data-bp-range`, `data-bp-node`,
 * `data-bp-pulse`), driven without React re-renders by `useScrollEffects`.
 */

interface PathDef {
  d: string;
  range: string;
  accent?: boolean;
  strong?: boolean;
  mobileHide?: boolean;
  pulseRange?: string;
}

interface CircleDef {
  cx: number;
  cy: number;
  r: number;
  range: string;
  accent?: boolean;
  mobileHide?: boolean;
  rotate?: number;
}

interface NodeDef {
  cx: number;
  cy: number;
  r?: number;
  at: number;
  kind?: 'accent' | 'hollow' | 'muted';
  mobileHide?: boolean;
}

/**
 * Plane A — Continuous routed orthogonal lines, diagonal tangents, & triangulated constellations.
 * Mapped 1:1 to the 1440 × 6920 full-document coordinate space:
 * - Hero:           Y =    0 ..  800
 * - Work Intro:     Y =  820 .. 1115
 * - Parvis Stage:   Y = 1119 .. 1720
 * - Parvis->Paper:  Y = 1720 .. 2082 (open ivory inter-project canvas)
 * - Papertrail:     Y = 2082 .. 2683
 * - Paper->Nexus:   Y = 2683 .. 4138 (open ivory copy, Nexus 2-col, & archive)
 * - Expertise:      Y = 4138 .. 4846 (dark forest-green #272e26 section)
 * - About:          Y = 4846 .. 5368
 * - Experience:     Y = 5368 .. 6221
 * - Contact/Footer: Y = 6221 .. 6920
 */
const PLANE_A_PATHS: PathDef[] = [
  // ── 01 · HERO (Y = 0..800, partially visible at scrollY = 0, extends into Selected Work) ──
  {
    d: 'M 56 0 V 760',
    range: '-0.25,0.06',
    mobileHide: true,
  },
  {
    d: 'M -20 136 H 384 Q 412 136 412 164 V 238 Q 412 266 440 266 H 740',
    range: '-0.18,0.05',
  },
  {
    d: 'M 468 72 L 892 496',
    range: '-0.12,0.08',
    mobileHide: true,
  },
  {
    d: 'M 740 118 L 868 68 L 964 148 L 838 206 Z',
    range: '-0.10,0.09',
    accent: true,
    mobileHide: true,
  },
  {
    // Primary arterial spine descending from the Hero gap into Selected Work
    d: 'M 684 266 V 568 Q 684 596 712 596 H 916 Q 944 596 944 624 V 1040',
    range: '-0.06,0.16',
    strong: true,
    pulseRange: '0.01,0.17',
  },

  // ── 02 · SECTION REVEAL ("01 / Selected work — The product is the proof.", Y = 820..1115) ──
  {
    d: 'M 944 912 H 524 Q 496 912 496 940 V 1042 Q 496 1070 468 1070 H 96',
    range: '0.02,0.19',
  },
  {
    d: 'M 684 596 V 962 Q 684 990 712 990 H 1356 Q 1384 990 1384 1018 V 1812',
    range: '0.03,0.31',
    strong: true,
  },
  {
    // Triangulated node connections in the open center-right header space
    d: 'M 564 882 L 684 826 L 788 912 L 652 978 Z',
    range: '0.05,0.19',
    accent: true,
  },
  {
    d: 'M 588 1048 L 948 838',
    range: '0.06,0.21',
    mobileHide: true,
  },

  // ── 03A · PARVIS → PAPERTRAIL INTER-PROJECT ROUTING (Y = 1720..2082) ──
  {
    // Left margin spine descending past Parvis and routing across the open gap above Papertrail
    d: 'M 56 760 V 1764 Q 56 1792 84 1792 H 644 Q 672 1792 672 1820 V 1916 Q 672 1944 700 1944 H 1268',
    range: '0.08,0.28',
  },
  {
    // Main right-to-left routed crossover between Parvis and Papertrail (Reference 2 style)
    d: 'M 1384 1812 Q 1384 1840 1356 1840 H 416 Q 388 1840 388 1868 V 2772',
    range: '0.13,0.34',
    strong: true,
    pulseRange: '0.15,0.33',
  },
  {
    // Orthogonal U-loop & vertical intersection in the Parvis–Papertrail open space
    d: 'M 268 1840 V 1756 Q 268 1732 292 1732 H 532 Q 556 1732 556 1756 V 2024',
    range: '0.14,0.28',
    mobileHide: true,
  },
  {
    // Secondary S-curve branch on the right wing entering Papertrail
    d: 'M 836 1740 V 1992 Q 836 2020 864 2020 H 1340 Q 1368 2020 1368 2048 V 2844',
    range: '0.16,0.37',
  },
  {
    d: 'M 968 1996 L 1408 1556',
    range: '0.15,0.29',
    accent: true,
    mobileHide: true,
  },

  // ── 03B · PAPERTRAIL → NEXUS → ARCHIVE ROUTING (Y = 2683..4138) ──
  {
    // Papertrail -> Nexus inter-project routing manifold
    d: 'M 388 2772 Q 388 2800 416 2800 H 1044 Q 1072 2800 1072 2828 V 3980',
    range: '0.26,0.48',
    strong: true,
    pulseRange: '0.28,0.46',
  },
  {
    d: 'M 1368 2844 Q 1368 2872 1340 2872 H 236 Q 208 2872 208 2900 V 4180',
    range: '0.28,0.52',
  },
  {
    // Rounded U-turn loop & intersection in the Papertrail–Nexus gap
    d: 'M 164 2732 H 92 Q 68 2732 68 2756 V 2828 Q 68 2852 92 2852 H 612',
    range: '0.27,0.40',
    mobileHide: true,
  },
  {
    // Geometric node constellation between Papertrail and Nexus
    d: 'M 664 2800 L 772 2736 L 884 2800 L 772 2872 Z',
    range: '0.28,0.41',
    accent: true,
  },
  {
    // Secondary routed branch behind the open Nexus left column & Earlier Explorations
    d: 'M 208 3580 H 584 Q 612 3580 612 3608 V 3980 H 1290',
    range: '0.40,0.60',
  },
  {
    d: 'M 312 3720 L 668 3460',
    range: '0.42,0.58',
    accent: true,
    mobileHide: true,
  },

  // ── 04 · EXPERTISE ("Across the stack. Close to the product.", Y = 4138..4846) ──
  {
    // Horizontal circuit bus across the dark forest-green section
    d: 'M 208 4180 V 4432 Q 208 4460 236 4460 H 1360',
    range: '0.56,0.75',
    strong: true,
    pulseRange: '0.58,0.75',
  },
  {
    d: 'M 240 4460 V 4810',
    range: '0.60,0.76',
  },
  {
    // Column 02 vertical drop continuing down into the About & Experience sections
    d: 'M 720 4460 V 5162 Q 720 5190 692 5190 H 432 Q 404 5190 404 5218 V 6380',
    range: '0.61,0.92',
    strong: true,
  },
  {
    d: 'M 1180 4460 V 4820',
    range: '0.63,0.77',
  },
  {
    // Upper-right dark-section geometric constellation
    d: 'M 984 4254 L 1124 4186 L 1256 4266 L 1172 4362 Z',
    range: '0.57,0.73',
    accent: true,
    mobileHide: true,
  },
  {
    d: 'M 920 4460 L 1348 4160',
    range: '0.58,0.74',
    mobileHide: true,
  },

  // ── 05 · ABOUT (Y = 4846..5368) & EXPERIENCE (Y = 5368..6221) ──
  {
    d: 'M 1072 3980 V 5012 Q 1072 5040 1044 5040 H 212 Q 184 5040 184 5068 V 5920',
    range: '0.66,0.88',
  },
  {
    d: 'M 244 5188 L 692 4964',
    range: '0.69,0.83',
    accent: true,
    mobileHide: true,
  },
  {
    // Experience section multi-track orthogonal loop in the open left column (Y = 5760..6180)
    d: 'M 184 5840 Q 184 5868 212 5868 H 548 Q 576 5868 576 5896 V 6420',
    range: '0.78,0.94',
  },
  {
    d: 'M 96 5720 V 6012 Q 96 6040 124 6040 H 496',
    range: '0.80,0.93',
    mobileHide: true,
  },

  // ── 06 · CONTACT (Y = 6221..6715) & FOOTER (Y = 6736..6920) CONCLUSION ──
  {
    // Contact section converging path from left into the directional arrow target
    d: 'M 104 6180 V 6482 Q 104 6510 132 6510 H 1096 L 1176 6430 H 1336',
    range: '0.84,0.99',
    strong: true,
    pulseRange: '0.85,0.99',
  },
  {
    d: 'M 404 6380 V 6430 H 1176',
    range: '0.86,0.98',
  },
  {
    d: 'M 1068 6582 L 1356 6294',
    range: '0.88,0.99',
    accent: true,
  },
  {
    // Terminal continuation line settling into the Footer
    d: 'M 664 6510 V 6895',
    range: '0.90,1.00',
  },
];

/**
 * Plane B — Large thin circular outlines & sweeping compass arcs on a subtle depth layer.
 */
const PLANE_B_CIRCLES: CircleDef[] = [
  // 01 · Hero circles framing the 3D sculpture
  { cx: 1084, cy: 324, r: 348, range: '-0.20,0.08' },
  { cx: 1084, cy: 324, r: 248, range: '-0.14,0.10', accent: true, rotate: -45 },
  { cx: 190, cy: 640, r: 220, range: '-0.08,0.14', mobileHide: true, rotate: 20 },

  // 02 · Selected Work ("The product is the proof", Y = 820..1115) circles
  { cx: 764, cy: 948, r: 176, range: '0.03,0.21', rotate: -90 },
  { cx: 764, cy: 948, r: 228, range: '0.05,0.23', accent: true, mobileHide: true, rotate: 35 },

  // 03A · Parvis -> Papertrail gap (Y = 1720..2082) right-edge extending circles
  { cx: 1388, cy: 1840, r: 356, range: '0.12,0.30', rotate: 110 },
  { cx: 1388, cy: 1840, r: 252, range: '0.14,0.32', accent: true, rotate: -140 },

  // 03B · Papertrail -> Nexus gap (Y = 2683..3150) left-edge extending circles
  { cx: 64, cy: 2840, r: 348, range: '0.25,0.44', rotate: -30 },
  { cx: 64, cy: 2840, r: 244, range: '0.27,0.46', accent: true, mobileHide: true, rotate: 15 },
  // Calibration ring in the Nexus / Archive zone (Y = 3400..4050)
  { cx: 460, cy: 3620, r: 218, range: '0.39,0.58', rotate: -60 },
  { cx: 1072, cy: 3980, r: 148, range: '0.46,0.64', accent: true, mobileHide: true, rotate: 40 },

  // 04 · Expertise dark section (Y = 4138..4846) circles
  { cx: 1172, cy: 4346, r: 286, range: '0.56,0.76', rotate: 95 },
  { cx: 1172, cy: 4346, r: 196, range: '0.59,0.78', accent: true, mobileHide: true, rotate: -120 },

  // 05 · About (Y = 4846..5368) & Experience (Y = 5368..6221) circles
  { cx: 468, cy: 5110, r: 232, range: '0.68,0.85', rotate: -40 },
  { cx: 468, cy: 5110, r: 156, range: '0.71,0.87', accent: true, mobileHide: true, rotate: 60 },
  { cx: 312, cy: 5920, r: 196, range: '0.78,0.93', mobileHide: true, rotate: -80 },

  // 06 · Contact & Footer (Y = 6221..6920) converging target circles around the directional arrow
  { cx: 1236, cy: 6430, r: 214, range: '0.84,0.98', mobileHide: true, rotate: 120 },
  { cx: 1236, cy: 6430, r: 152, range: '0.86,0.99', accent: true, rotate: -90 },
  { cx: 1236, cy: 6430, r: 98, range: '0.88,1.00', rotate: 45 },
];

/**
 * Intersection & terminal nodes that appear as their connecting lines reach them.
 */
const BLUEPRINT_NODES: NodeDef[] = [
  // 01 · Hero nodes
  { cx: 56, cy: 136, r: 2.8, at: -0.05, kind: 'muted', mobileHide: true },
  { cx: 412, cy: 202, r: 3.2, at: -0.02, kind: 'accent' },
  { cx: 684, cy: 266, r: 3.4, at: 0.0, kind: 'accent' },
  { cx: 868, cy: 68, r: 2.6, at: 0.01, kind: 'accent', mobileHide: true },
  { cx: 964, cy: 148, r: 3.0, at: 0.03, kind: 'hollow', mobileHide: true },
  { cx: 838, cy: 206, r: 2.6, at: 0.04, kind: 'muted', mobileHide: true },
  { cx: 684, cy: 596, r: 3.5, at: 0.06, kind: 'accent' },

  // 02 · Selected Work Intro nodes
  { cx: 944, cy: 912, r: 3.4, at: 0.08, kind: 'accent' },
  { cx: 564, cy: 882, r: 2.8, at: 0.10, kind: 'muted' },
  { cx: 684, cy: 826, r: 3.2, at: 0.12, kind: 'accent' },
  { cx: 788, cy: 912, r: 3.0, at: 0.14, kind: 'hollow' },
  { cx: 652, cy: 978, r: 2.8, at: 0.15, kind: 'accent' },
  { cx: 496, cy: 990, r: 3.0, at: 0.16, kind: 'hollow' },
  { cx: 96, cy: 1070, r: 3.6, at: 0.18, kind: 'muted' },

  // 03A · Parvis -> Papertrail inter-project nodes (Y = 1732..2020)
  { cx: 388, cy: 1840, r: 3.4, at: 0.19, kind: 'accent' },
  { cx: 556, cy: 1840, r: 2.8, at: 0.21, kind: 'muted', mobileHide: true },
  { cx: 672, cy: 1840, r: 3.2, at: 0.22, kind: 'hollow' },
  { cx: 836, cy: 1840, r: 3.4, at: 0.24, kind: 'accent' },
  { cx: 836, cy: 1944, r: 2.8, at: 0.25, kind: 'muted' },
  { cx: 1268, cy: 1944, r: 4.0, at: 0.27, kind: 'accent' },

  // 03B · Papertrail -> Nexus & Archive nodes (Y = 2736..3980)
  { cx: 388, cy: 2800, r: 3.4, at: 0.31, kind: 'accent' },
  { cx: 664, cy: 2800, r: 2.8, at: 0.33, kind: 'muted' },
  { cx: 772, cy: 2736, r: 3.2, at: 0.34, kind: 'accent' },
  { cx: 884, cy: 2800, r: 3.0, at: 0.36, kind: 'hollow' },
  { cx: 772, cy: 2872, r: 3.2, at: 0.37, kind: 'accent' },
  { cx: 1072, cy: 2872, r: 3.5, at: 0.39, kind: 'accent' },
  { cx: 612, cy: 3580, r: 3.2, at: 0.48, kind: 'hollow' },
  { cx: 1072, cy: 3980, r: 3.4, at: 0.54, kind: 'accent' },

  // 04 · Expertise dark section nodes (Y = 4186..4460)
  { cx: 240, cy: 4460, r: 3.6, at: 0.63, kind: 'accent' },
  { cx: 720, cy: 4460, r: 3.6, at: 0.66, kind: 'accent' },
  { cx: 1180, cy: 4460, r: 3.6, at: 0.69, kind: 'accent' },
  { cx: 984, cy: 4254, r: 2.8, at: 0.62, kind: 'muted', mobileHide: true },
  { cx: 1124, cy: 4186, r: 3.2, at: 0.64, kind: 'accent', mobileHide: true },
  { cx: 1256, cy: 4266, r: 2.8, at: 0.67, kind: 'muted', mobileHide: true },

  // 05 · About & Experience nodes (Y = 5040..6040)
  { cx: 720, cy: 5040, r: 3.4, at: 0.74, kind: 'accent' },
  { cx: 468, cy: 5040, r: 3.0, at: 0.77, kind: 'hollow' },
  { cx: 404, cy: 5868, r: 3.2, at: 0.83, kind: 'accent' },
  { cx: 576, cy: 5868, r: 2.8, at: 0.86, kind: 'muted' },

  // 06 · Contact & Footer convergence nodes (Y = 6430..6582)
  { cx: 404, cy: 6430, r: 3.0, at: 0.89, kind: 'muted' },
  { cx: 664, cy: 6510, r: 3.4, at: 0.91, kind: 'hollow' },
  { cx: 1096, cy: 6510, r: 3.4, at: 0.93, kind: 'accent' },
  { cx: 1176, cy: 6430, r: 3.8, at: 0.95, kind: 'accent' },
  { cx: 1236, cy: 6278, r: 3.0, at: 0.96, kind: 'accent' },
  { cx: 1236, cy: 6582, r: 3.0, at: 0.97, kind: 'muted' },
];

export function LivingBlueprint() {
  return (
    <div
      className="living-blueprint pointer-events-none absolute inset-0 z-[1] overflow-hidden select-none print:hidden!"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 6920"
        fill="none"
        preserveAspectRatio="xMidYMin slice"
      >
        {/* PLANE B: Large circular outlines & compass arcs with subtle scroll-depth parallax */}
        <g className="bp-plane-circles">
          {PLANE_B_CIRCLES.map((circle, idx) => (
            <circle
              key={`bp-circle-${idx}`}
              cx={circle.cx}
              cy={circle.cy}
              r={circle.r}
              pathLength={1}
              data-bp-range={circle.range}
              transform={
                circle.rotate
                  ? `rotate(${circle.rotate} ${circle.cx} ${circle.cy})`
                  : undefined
              }
              className={`bp-scroll-path ${circle.accent ? 'bp-stroke-accent' : 'bp-stroke-main'} ${
                circle.mobileHide ? 'mobile:hidden' : ''
              }`}
              strokeWidth={circle.accent ? '0.95' : '0.9'}
            />
          ))}
        </g>

        {/* PLANE A: Continuous routed orthogonal lines, tangents, constellations & pulses */}
        <g className="bp-plane-lines">
          {PLANE_A_PATHS.map((item, idx) => (
            <g
              key={`bp-path-${idx}`}
              className={item.mobileHide ? 'mobile:hidden' : undefined}
            >
              <path
                d={item.d}
                pathLength={1}
                data-bp-range={item.range}
                className={`bp-scroll-path ${
                  item.accent
                    ? 'bp-stroke-accent'
                    : item.strong
                      ? 'bp-stroke-strong'
                      : 'bp-stroke-main'
                }`}
                strokeWidth={item.strong ? '1.15' : '0.95'}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {item.pulseRange && (
                <path
                  d={item.d}
                  pathLength={1}
                  data-bp-pulse={item.pulseRange}
                  className="bp-scroll-pulse"
                  stroke="var(--accent)"
                  strokeWidth="1.65"
                  strokeLinecap="round"
                />
              )}
            </g>
          ))}

          {/* Intersection & endpoint connection nodes */}
          {BLUEPRINT_NODES.map((node, idx) => (
            <circle
              key={`bp-node-${idx}`}
              cx={node.cx}
              cy={node.cy}
              r={node.r ?? 3}
              data-bp-node={node.at}
              className={`bp-scroll-node ${
                node.kind === 'accent'
                  ? 'bp-node-accent'
                  : node.kind === 'hollow'
                    ? 'bp-node-hollow'
                    : 'bp-node-muted'
              } ${node.mobileHide ? 'mobile:hidden' : ''}`}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
