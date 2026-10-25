import { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, Layers } from 'lucide-react';

interface SystemLayerSpec {
  id: number;
  code: string;
  name: string;
  role: string;
  detail: string;
  metrics: string;
}

const SYSTEM_LAYERS: SystemLayerSpec[] = [
  {
    id: 0,
    code: '01',
    name: 'Interface',
    role: 'Web, Mobile & Viewport Engine',
    detail: 'React · React Native · PDF.js coordinate canvas',
    metrics: '60 FPS · Sub-pixel UI',
  },
  {
    id: 1,
    code: '02',
    name: 'State & Logic',
    role: 'Client Architecture & Sync',
    detail: 'TypeScript · Zustand · TanStack Query',
    metrics: 'Deterministic state',
  },
  {
    id: 2,
    code: '03',
    name: 'Services & API',
    role: 'Core Runtime & Integrations',
    detail: 'Node.js · NestJS · Express · Socket.IO · Gemini',
    metrics: 'Signed webhooks · Realtime',
  },
  {
    id: 3,
    code: '04',
    name: 'Infrastructure',
    role: 'Persistence, Billing & Storage',
    detail: 'MongoDB · Cloudflare R2 · Paystack · MuPDF',
    metrics: 'Verified persistence',
  },
];

interface Vec3 {
  x: number;
  y: number;
  z: number;
}

interface ProjectedPoint {
  x: number;
  y: number;
  z: number;
  scale: number;
}

type MaterialKind =
  | 'smoked-glass'
  | 'frosted-glass'
  | 'brushed-metal'
  | 'anodized-dark'
  | 'core-accent'
  | 'core-sage'
  | 'plinth';

interface PrismSpec {
  tier: number;
  cx: number;
  cy: number;
  cz: number;
  w: number;
  h: number;
  d: number;
  material: MaterialKind;
  bevelBright?: number;
  hasGrid?: boolean;
  hasReticle?: boolean;
}

interface ConduitSpec {
  fromTier: number;
  toTier: number;
  points: Vec3[];
  accent: 'terracotta' | 'sage';
  speed: number;
  phase: number;
}

// Art-directed asymmetric architectural composition:
// 4 interlocking structural tiers representing Interface -> State -> Services -> Infrastructure.
const ARCHITECTURAL_PRISMS: PrismSpec[] = [
  // TIER 3 (Bottom): 04 / Infrastructure Plinth — Heavy grounded basalt monolith with stepped wells
  {
    tier: 3,
    cx: 0,
    cy: 96,
    cz: 0,
    w: 248,
    h: 22,
    d: 204,
    material: 'plinth',
    bevelBright: 1.0,
    hasGrid: true,
  },
  {
    tier: 3,
    cx: -52,
    cy: 77,
    cz: -32,
    w: 116,
    h: 16,
    d: 108,
    material: 'anodized-dark',
    bevelBright: 1.15,
  },
  {
    tier: 3,
    cx: 58,
    cy: 79,
    cz: 34,
    w: 94,
    h: 14,
    d: 92,
    material: 'brushed-metal',
    bevelBright: 1.2,
  },
  // Structural vertical tension columns anchored into the Infrastructure plinth
  {
    tier: 3,
    cx: -92,
    cy: 38,
    cz: -68,
    w: 12,
    h: 92,
    d: 12,
    material: 'brushed-metal',
    bevelBright: 1.25,
  },
  {
    tier: 3,
    cx: 94,
    cy: 44,
    cz: -64,
    w: 12,
    h: 82,
    d: 12,
    material: 'anodized-dark',
    bevelBright: 1.05,
  },

  // TIER 2: 03 / Services & API Core — Luminous terracotta & sage processor manifold inside smoked containment
  {
    tier: 2,
    cx: -6,
    cy: 30,
    cz: 4,
    w: 198,
    h: 13,
    d: 164,
    material: 'smoked-glass',
    bevelBright: 1.3,
    hasGrid: true,
  },
  {
    tier: 2,
    cx: -14,
    cy: 12,
    cz: -6,
    w: 82,
    h: 24,
    d: 76,
    material: 'core-accent',
    bevelBright: 1.65,
  },
  {
    tier: 2,
    cx: 54,
    cy: 15,
    cz: 22,
    w: 52,
    h: 18,
    d: 66,
    material: 'core-sage',
    bevelBright: 1.4,
  },
  {
    tier: 2,
    cx: -72,
    cy: 16,
    cz: 38,
    w: 44,
    h: 16,
    d: 56,
    material: 'brushed-metal',
    bevelBright: 1.25,
  },

  // TIER 1: 02 / State & Logic Matrix — Asymmetric cantilevered anodized metal blades & routing bridges
  {
    tier: 1,
    cx: 16,
    cy: -28,
    cz: -8,
    w: 214,
    h: 12,
    d: 152,
    material: 'brushed-metal',
    bevelBright: 1.45,
  },
  {
    tier: 1,
    cx: -48,
    cy: -43,
    cz: 18,
    w: 124,
    h: 13,
    d: 92,
    material: 'smoked-glass',
    bevelBright: 1.35,
    hasGrid: true,
  },
  {
    tier: 1,
    cx: 64,
    cy: -42,
    cz: -24,
    w: 76,
    h: 15,
    d: 82,
    material: 'anodized-dark',
    bevelBright: 1.3,
  },

  // TIER 0 (Top): 01 / Interface Canopy — Sculptural smoked-glass viewport slab with optical reticle & floating UI planes
  {
    tier: 0,
    cx: -8,
    cy: -84,
    cz: 6,
    w: 232,
    h: 11,
    d: 178,
    material: 'smoked-glass',
    bevelBright: 1.7,
    hasGrid: true,
    hasReticle: true,
  },
  {
    tier: 0,
    cx: 34,
    cy: -99,
    cz: -14,
    w: 116,
    h: 8,
    d: 92,
    material: 'frosted-glass',
    bevelBright: 1.85,
  },
  {
    tier: 0,
    cx: -62,
    cy: -98,
    cz: 32,
    w: 68,
    h: 9,
    d: 60,
    material: 'core-accent',
    bevelBright: 1.55,
  },
];

// 3D Internal fiber-optic conduits connecting Infrastructure -> API -> State -> Interface
const SYSTEM_CONDUITS: ConduitSpec[] = [
  {
    fromTier: 3,
    toTier: 0,
    points: [
      { x: -14, y: 86, z: -6 },
      { x: -14, y: 12, z: -6 },
      { x: -14, y: -32, z: -6 },
      { x: -14, y: -84, z: 6 },
    ],
    accent: 'terracotta',
    speed: 0.48,
    phase: 0.0,
  },
  {
    fromTier: 3,
    toTier: 0,
    points: [
      { x: 54, y: 82, z: 22 },
      { x: 54, y: 15, z: 22 },
      { x: 54, y: -30, z: -10 },
      { x: 34, y: -96, z: -14 },
    ],
    accent: 'sage',
    speed: 0.38,
    phase: 0.33,
  },
  {
    fromTier: 0,
    toTier: 3,
    points: [
      { x: -62, y: -94, z: 32 },
      { x: -48, y: -42, z: 20 },
      { x: -68, y: 18, z: 36 },
      { x: -52, y: 74, z: -22 },
    ],
    accent: 'terracotta',
    speed: 0.42,
    phase: 0.66,
  },
  {
    fromTier: 2,
    toTier: 1,
    points: [
      { x: -14, y: 12, z: -6 },
      { x: 54, y: 12, z: 22 },
      { x: 64, y: -40, z: -24 },
    ],
    accent: 'terracotta',
    speed: 0.55,
    phase: 0.18,
  },
];

const CAMERA_DIST = 720;

// Right-handed 3D rotation where +X is right, +Y is down, +Z is toward viewer.
// Positive pitch tilts the top (-Y) toward the viewer (+Z).
function rotatePoint(p: Vec3, pitch: number, yaw: number, roll: number): Vec3 {
  const cosY = Math.cos(yaw);
  const sinY = Math.sin(yaw);
  const x1 = p.x * cosY + p.z * sinY;
  const z1 = -p.x * sinY + p.z * cosY;

  const cosX = Math.cos(pitch);
  const sinX = Math.sin(pitch);
  const y2 = p.y * cosX + z1 * sinX;
  const z2 = -p.y * sinX + z1 * cosX;

  const cosZ = Math.cos(roll);
  const sinZ = Math.sin(roll);
  const x3 = x1 * cosZ - y2 * sinZ;
  const y3 = x1 * sinZ + y2 * cosZ;

  return { x: x3, y: y3, z: z2 };
}

function projectPoint(p: Vec3, centerX: number, centerY: number, fov: number): ProjectedPoint {
  const depth = Math.max(220, CAMERA_DIST - p.z);
  const scale = fov / depth;
  return {
    x: centerX + p.x * scale,
    y: centerY + p.y * scale,
    z: p.z,
    scale,
  };
}

export function SystemsSculpture() {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const [exploded, setExploded] = useState(false);

  const interactionRef = useRef({
    targetPointerX: 0,
    targetPointerY: 0,
    currentPointerX: 0,
    currentPointerY: 0,
    activeLayer: null as number | null,
    exploded: false,
    unfoldAmount: 0,
    assembleAmount: 0,
  });

  useEffect(() => {
    interactionRef.current.activeLayer = activeLayer;
  }, [activeLayer]);

  useEffect(() => {
    interactionRef.current.exploded = exploded;
  }, [exploded]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!canvas || !stage) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let isVisible = true;
    let animationFrameId = 0;
    const startTime = performance.now();

    const renderScene = (now: number) => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      if (width <= 0 || height <= 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const targetW = Math.max(1, Math.round(width * dpr));
      const targetH = Math.max(1, Math.round(height * dpr));
      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
      }

      ctx.save();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.dataset.theme === 'dark';
      const reducedMotion = reducedMotionQuery.matches;

      // Read scroll-linked hero unfold progress (0 to 1)
      const heroScrollRaw = parseFloat(
        document.documentElement.style.getPropertyValue('--hero-scroll') || '0',
      );
      const heroScroll = Number.isFinite(heroScrollRaw)
        ? Math.max(0, Math.min(1, heroScrollRaw))
        : 0;

      // Entrance assembly curve: 0 -> 1 over 1.35s with cubic-out settle
      const elapsedSec = Math.max(0, (now - startTime) / 1000);
      const rawAssemble = reducedMotion ? 1 : Math.min(1, elapsedSec / 1.35);
      const assembleEase = 1 - Math.pow(1 - rawAssemble, 3.4);
      interactionRef.current.assembleAmount = assembleEase;

      // Smooth spring damping on pointer coordinates
      const state = interactionRef.current;
      state.currentPointerX += (state.targetPointerX - state.currentPointerX) * 0.085;
      state.currentPointerY += (state.targetPointerY - state.currentPointerY) * 0.085;

      // Target unfold combines manual Explode toggle, active layer inspection, and scroll-linked unfold
      const targetUnfold =
        (state.exploded ? 0.78 : 0) +
        (state.activeLayer !== null ? 0.32 : 0) +
        heroScroll * 0.88 +
        (1 - assembleEase) * 1.1;
      state.unfoldAmount += (targetUnfold - state.unfoldAmount) * (reducedMotion ? 1 : 0.11);

      // Continuous subtle orbital breathing when idle
      const idlePitch = reducedMotion ? 0 : Math.sin(elapsedSec * 0.65) * 0.028;
      const idleYaw = reducedMotion ? 0 : Math.cos(elapsedSec * 0.48) * 0.052;
      const idleRoll = reducedMotion ? 0 : Math.sin(elapsedSec * 0.35) * 0.01;

      const basePitch = 0.48 + heroScroll * 0.12 + (1 - assembleEase) * 0.2;
      const baseYaw = -0.64 + heroScroll * 0.25 - (1 - assembleEase) * 0.36;

      const pitch = basePitch + idlePitch - state.currentPointerY * 0.17;
      const yaw = baseYaw + idleYaw + state.currentPointerX * 0.24;
      const roll = idleRoll + state.currentPointerX * 0.025;

      const centerX = width * 0.52;
      const centerY = height * 0.43 - state.unfoldAmount * 8;
      const responsiveScale =
        Math.min(width / 430, height / 410, 1.15) * 500 * (1 - state.unfoldAmount * 0.075);

      // 1. Ambient atmospheric studio backlight glow
      const glowX = centerX + state.currentPointerX * 26;
      const glowY = centerY - 10 + state.currentPointerY * 20;
      const ambientGrad = ctx.createRadialGradient(
        glowX,
        glowY,
        14,
        centerX,
        centerY,
        Math.max(width, height) * 0.54,
      );
      if (isDark) {
        ambientGrad.addColorStop(0, 'rgba(243, 140, 112, 0.19)');
        ambientGrad.addColorStop(0.45, 'rgba(54, 115, 91, 0.09)');
        ambientGrad.addColorStop(1, 'rgba(27, 30, 26, 0)');
      } else {
        ambientGrad.addColorStop(0, 'rgba(185, 67, 44, 0.13)');
        ambientGrad.addColorStop(0.5, 'rgba(54, 115, 91, 0.07)');
        ambientGrad.addColorStop(1, 'rgba(246, 245, 240, 0)');
      }
      ctx.fillStyle = ambientGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Grounded volumetric drop shadow under Infrastructure Plinth
      const shadowSpread = 1 + state.unfoldAmount * 0.14;
      const shadowCenter = projectPoint(
        rotatePoint({ x: 0, y: 126 + state.unfoldAmount * 20, z: 0 }, pitch, yaw, roll),
        centerX,
        centerY,
        responsiveScale,
      );
      ctx.save();
      ctx.translate(shadowCenter.x, shadowCenter.y);
      ctx.scale(1.42 * shadowSpread, 0.56 * shadowSpread);
      const floorShadow = ctx.createRadialGradient(0, 0, 12, 0, 0, 150);
      floorShadow.addColorStop(0, isDark ? 'rgba(0, 0, 0, 0.62)' : 'rgba(28, 32, 25, 0.25)');
      floorShadow.addColorStop(0.6, isDark ? 'rgba(0, 0, 0, 0.24)' : 'rgba(28, 32, 25, 0.09)');
      floorShadow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = floorShadow;
      ctx.beginPath();
      ctx.arc(0, 0, 150, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Compute dynamic vertical offset per tier for assemble, hover, active isolation, and scroll unfold
      const getTierOffset = (tier: number): Vec3 => {
        const centeredIndex = tier - 1.5; // -1.5, -0.5, 0.5, 1.5
        const unfoldY = centeredIndex * state.unfoldAmount * 30;
        const waveY = reducedMotion ? 0 : Math.sin(elapsedSec * 1.55 - tier * 0.85) * 2.8;

        // Differential horizontal parallax per layer on pointer movement
        const layerParallaxX = (1.5 - tier) * state.currentPointerX * 7.5;
        const layerParallaxZ = (1.5 - tier) * state.currentPointerY * 7.5;

        // If a specific layer is inspected, elevate/highlight it and gently part neighboring layers
        let inspectY = 0;
        let inspectX = 0;
        if (state.activeLayer !== null) {
          if (tier < state.activeLayer) inspectY -= 14;
          if (tier > state.activeLayer) inspectY += 14;
          if (tier === state.activeLayer) {
            inspectY -= 5;
            inspectX -= 6;
          }
        }

        return {
          x: layerParallaxX + inspectX,
          y: unfoldY + waveY + inspectY,
          z: layerParallaxZ,
        };
      };

      // Directional key light vector pointing from upper-front-left toward the sculpture
      const lightToSourceRaw = {
        x: -0.45 + state.currentPointerX * 0.32,
        y: -0.72 - state.currentPointerY * 0.24,
        z: 0.65,
      };
      const lightLen =
        Math.hypot(lightToSourceRaw.x, lightToSourceRaw.y, lightToSourceRaw.z) || 1;
      const lightToSource = {
        x: lightToSourceRaw.x / lightLen,
        y: lightToSourceRaw.y / lightLen,
        z: lightToSourceRaw.z / lightLen,
      };

      interface RenderFace {
        prism: PrismSpec;
        faceName: 'top' | 'bottom' | 'front' | 'back' | 'left' | 'right';
        pts2d: ProjectedPoint[];
        pts3d: Vec3[];
        normal: Vec3;
        sortKey: number;
        tier: number;
      }

      const facesToRender: RenderFace[] = [];

      for (const prism of ARCHITECTURAL_PRISMS) {
        const offset = getTierOffset(prism.tier);
        const hw = prism.w / 2;
        const hh = prism.h / 2;
        const hd = prism.d / 2;
        const cx = prism.cx + offset.x;
        const cy = prism.cy + offset.y;
        const cz = prism.cz + offset.z;

        // 8 vertices of the prism (+Z is front/viewer, -Z is back, -Y is top, +Y is bottom)
        const rawVerts: Vec3[] = [
          { x: cx - hw, y: cy - hh, z: cz - hd }, // 0: top-back-left
          { x: cx + hw, y: cy - hh, z: cz - hd }, // 1: top-back-right
          { x: cx + hw, y: cy - hh, z: cz + hd }, // 2: top-front-right
          { x: cx - hw, y: cy - hh, z: cz + hd }, // 3: top-front-left
          { x: cx - hw, y: cy + hh, z: cz - hd }, // 4: bottom-back-left
          { x: cx + hw, y: cy + hh, z: cz - hd }, // 5: bottom-back-right
          { x: cx + hw, y: cy + hh, z: cz + hd }, // 6: bottom-front-right
          { x: cx - hw, y: cy + hh, z: cz + hd }, // 7: bottom-front-left
        ];

        const rotVerts = rawVerts.map((v) => rotatePoint(v, pitch, yaw, roll));
        const projVerts = rotVerts.map((v) =>
          projectPoint(v, centerX, centerY, responsiveScale),
        );

        const prismCenter3D = rotatePoint({ x: cx, y: cy, z: cz }, pitch, yaw, roll);

        const faceDefs: {
          name: RenderFace['faceName'];
          indices: [number, number, number, number];
          localNormal: Vec3;
        }[] = [
          { name: 'top', indices: [0, 1, 2, 3], localNormal: { x: 0, y: -1, z: 0 } },
          { name: 'bottom', indices: [7, 6, 5, 4], localNormal: { x: 0, y: 1, z: 0 } },
          { name: 'front', indices: [3, 2, 6, 7], localNormal: { x: 0, y: 0, z: 1 } },
          { name: 'back', indices: [1, 0, 4, 5], localNormal: { x: 0, y: 0, z: -1 } },
          { name: 'left', indices: [0, 3, 7, 4], localNormal: { x: -1, y: 0, z: 0 } },
          { name: 'right', indices: [2, 1, 5, 6], localNormal: { x: 1, y: 0, z: 0 } },
        ];

        for (const f of faceDefs) {
          const normal = rotatePoint(f.localNormal, pitch, yaw, roll);
          const pts3d = f.indices.map((i) => rotVerts[i]);
          const faceCenter = {
            x: (pts3d[0].x + pts3d[1].x + pts3d[2].x + pts3d[3].x) * 0.25,
            y: (pts3d[0].y + pts3d[1].y + pts3d[2].y + pts3d[3].y) * 0.25,
            z: (pts3d[0].z + pts3d[1].z + pts3d[2].z + pts3d[3].z) * 0.25,
          };

          // Exact perspective view vector from face center to camera at (0, 0, CAMERA_DIST)
          const vx = -faceCenter.x;
          const vy = -faceCenter.y;
          const vz = CAMERA_DIST - faceCenter.z;
          const dotView = normal.x * vx + normal.y * vy + normal.z * vz;

          if (dotView <= 0) continue;

          const pts2d = f.indices.map((i) => projVerts[i]);
          // Hierarchical painter's sort key: lower tiers (larger tier index) render first,
          // then sorted by prism Z and face Z from farthest (smallest Z) to nearest (largest Z).
          const sortKey =
            (3 - prism.tier) * 140 + prismCenter3D.z * 0.65 + faceCenter.z * 0.35;

          facesToRender.push({
            prism,
            faceName: f.name,
            pts2d,
            pts3d,
            normal,
            sortKey,
            tier: prism.tier,
          });
        }
      }

      // Sort farthest to nearest
      facesToRender.sort((a, b) => a.sortKey - b.sortKey);

      // Render all visible 3D faces with PBR-inspired material shading
      for (const face of facesToRender) {
        const { prism, pts2d, normal, faceName, tier } = face;
        const isLayerSelected = state.activeLayer === tier;
        const isLayerDimmed = state.activeLayer !== null && state.activeLayer !== tier;
        const dimFactor = isLayerDimmed ? 0.42 : 1;

        // Diffuse + Specular lighting calculation (normal · lightToSource)
        const ndotl = Math.max(
          0,
          normal.x * lightToSource.x +
            normal.y * lightToSource.y +
            normal.z * lightToSource.z,
        );
        // Half-vector specular toward camera (0, 0, +1)
        const hx = lightToSource.x;
        const hy = lightToSource.y;
        const hz = lightToSource.z + 1;
        const hLen = Math.hypot(hx, hy, hz) || 1;
        const specRaw = Math.max(
          0,
          normal.x * (hx / hLen) + normal.y * (hy / hLen) + normal.z * (hz / hLen),
        );
        const specular = Math.pow(specRaw, 16);

        ctx.save();
        ctx.globalAlpha = assembleEase * (isLayerDimmed ? 0.54 : 1);

        ctx.beginPath();
        ctx.moveTo(pts2d[0].x, pts2d[0].y);
        ctx.lineTo(pts2d[1].x, pts2d[1].y);
        ctx.lineTo(pts2d[2].x, pts2d[2].y);
        ctx.lineTo(pts2d[3].x, pts2d[3].y);
        ctx.closePath();

        const grad = ctx.createLinearGradient(
          pts2d[0].x,
          pts2d[0].y,
          pts2d[2].x,
          pts2d[2].y,
        );

        const bevelMult = (prism.bevelBright ?? 1) * (isLayerSelected ? 1.35 : 1);

        if (prism.material === 'smoked-glass' || prism.material === 'frosted-glass') {
          const isFrosted = prism.material === 'frosted-glass';
          if (isDark) {
            const baseAlpha = isFrosted ? 0.78 : 0.68;
            const specBoost = Math.round(52 + ndotl * 42 + specular * 75);
            grad.addColorStop(
              0,
              `rgba(${specBoost + 14}, ${specBoost + 20}, ${specBoost + 16}, ${baseAlpha})`,
            );
            grad.addColorStop(0.55, `rgba(34, 42, 36, ${baseAlpha * 0.92})`);
            grad.addColorStop(
              1,
              `rgba(${26 + Math.round(specular * 85)}, ${32 + Math.round(specular * 60)}, 28, ${baseAlpha + 0.08})`,
            );
          } else {
            const baseAlpha = isFrosted ? 0.84 : 0.76;
            const l1 = Math.min(255, Math.round(58 + ndotl * 46 + specular * 82));
            grad.addColorStop(0, `rgba(${l1}, ${l1 + 5}, ${l1 - 1}, ${baseAlpha})`);
            grad.addColorStop(0.52, `rgba(38, 44, 37, ${baseAlpha * 0.9})`);
            grad.addColorStop(
              1,
              `rgba(${30 + Math.round(specular * 70)}, 36, 31, ${baseAlpha})`,
            );
          }
          ctx.fillStyle = grad;
          ctx.fill();

          // Internal architectural grid & optical reticle on top faces of glass strata
          if (faceName === 'top' && prism.hasGrid) {
            ctx.save();
            ctx.clip();
            ctx.strokeStyle = isDark
              ? `rgba(239, 239, 229, ${0.12 * dimFactor})`
              : `rgba(246, 245, 240, ${0.16 * dimFactor})`;
            ctx.lineWidth = 0.75;
            const steps = 6;
            for (let i = 1; i < steps; i++) {
              const t = i / steps;
              const ax = pts2d[0].x + (pts2d[1].x - pts2d[0].x) * t;
              const ay = pts2d[0].y + (pts2d[1].y - pts2d[0].y) * t;
              const bx = pts2d[3].x + (pts2d[2].x - pts2d[3].x) * t;
              const by = pts2d[3].y + (pts2d[2].y - pts2d[3].y) * t;
              ctx.beginPath();
              ctx.moveTo(ax, ay);
              ctx.lineTo(bx, by);
              ctx.stroke();

              const cxLine = pts2d[0].x + (pts2d[3].x - pts2d[0].x) * t;
              const cyLine = pts2d[0].y + (pts2d[3].y - pts2d[0].y) * t;
              const dxLine = pts2d[1].x + (pts2d[2].x - pts2d[1].x) * t;
              const dyLine = pts2d[1].y + (pts2d[2].y - pts2d[1].y) * t;
              ctx.beginPath();
              ctx.moveTo(cxLine, cyLine);
              ctx.lineTo(dxLine, dyLine);
              ctx.stroke();
            }

            // Diagonal specular reflection ribbon across glass surface
            const sheenShift = (state.currentPointerX - state.currentPointerY) * 0.22;
            const sheenGrad = ctx.createLinearGradient(
              pts2d[0].x,
              pts2d[0].y,
              pts2d[2].x,
              pts2d[2].y,
            );
            const mid = Math.max(0.15, Math.min(0.85, 0.48 + sheenShift));
            sheenGrad.addColorStop(Math.max(0, mid - 0.18), 'rgba(255, 255, 255, 0)');
            sheenGrad.addColorStop(
              mid,
              isDark
                ? `rgba(255, 245, 235, ${0.16 + specular * 0.2})`
                : `rgba(255, 255, 250, ${0.24 + specular * 0.22})`,
            );
            sheenGrad.addColorStop(Math.min(1, mid + 0.18), 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = sheenGrad;
            ctx.fill();

            if (prism.hasReticle) {
              const rcx = (pts2d[0].x + pts2d[1].x + pts2d[2].x + pts2d[3].x) * 0.25;
              const rcy = (pts2d[0].y + pts2d[1].y + pts2d[2].y + pts2d[3].y) * 0.25;
              ctx.strokeStyle = isDark
                ? 'rgba(243, 140, 112, 0.62)'
                : 'rgba(243, 140, 112, 0.78)';
              ctx.lineWidth = 1.1;
              ctx.beginPath();
              ctx.ellipse(rcx, rcy, 36, 20, -0.22, 0, Math.PI * 2);
              ctx.stroke();

              ctx.strokeStyle = 'rgba(239, 239, 229, 0.34)';
              ctx.beginPath();
              ctx.ellipse(rcx, rcy, 62, 34, -0.22, 0, Math.PI * 2);
              ctx.stroke();
            }
            ctx.restore();
          }
        } else if (prism.material === 'brushed-metal') {
          const base = isDark ? 74 : 92;
          const lit = Math.min(248, Math.round(base + ndotl * 68 + specular * 88));
          const shadow = Math.max(28, Math.round(base - 20 + ndotl * 26));
          grad.addColorStop(0, `rgb(${lit}, ${lit + 3}, ${lit - 3})`);
          grad.addColorStop(
            0.55,
            `rgb(${Math.round((lit + shadow) * 0.5)}, ${Math.round((lit + shadow) * 0.51)}, ${Math.round((lit + shadow) * 0.48)})`,
          );
          grad.addColorStop(1, `rgb(${shadow}, ${shadow + 2}, ${shadow - 2})`);
          ctx.fillStyle = grad;
          ctx.fill();
        } else if (prism.material === 'anodized-dark' || prism.material === 'plinth') {
          const base = prism.material === 'plinth' ? (isDark ? 28 : 38) : isDark ? 46 : 56;
          const lit = Math.min(210, Math.round(base + ndotl * 46 + specular * 58));
          const low = Math.max(16, base - 10);
          grad.addColorStop(0, `rgb(${lit}, ${lit + 3}, ${lit - 1})`);
          grad.addColorStop(1, `rgb(${low}, ${low + 2}, ${low - 1})`);
          ctx.fillStyle = grad;
          ctx.fill();

          if (faceName === 'top' && prism.hasGrid) {
            ctx.save();
            ctx.clip();
            ctx.strokeStyle = isDark
              ? 'rgba(243, 140, 112, 0.16)'
              : 'rgba(246, 245, 240, 0.18)';
            ctx.lineWidth = 0.75;
            const steps = 8;
            for (let i = 1; i < steps; i++) {
              const t = i / steps;
              const ax = pts2d[0].x + (pts2d[1].x - pts2d[0].x) * t;
              const ay = pts2d[0].y + (pts2d[1].y - pts2d[0].y) * t;
              const bx = pts2d[3].x + (pts2d[2].x - pts2d[3].x) * t;
              const by = pts2d[3].y + (pts2d[2].y - pts2d[3].y) * t;
              ctx.beginPath();
              ctx.moveTo(ax, ay);
              ctx.lineTo(bx, by);
              ctx.stroke();
            }
            ctx.restore();
          }
        } else if (prism.material === 'core-accent') {
          // Luminous Terracotta Processor Core (--accent)
          const pulse = reducedMotion ? 0.5 : 0.5 + 0.5 * Math.sin(elapsedSec * 2.8);
          const r = Math.min(255, Math.round(188 + ndotl * 48 + pulse * 18));
          const g = Math.min(255, Math.round(70 + ndotl * 48 + specular * 68 + pulse * 14));
          const b = Math.min(255, Math.round(46 + ndotl * 34 + specular * 48));
          grad.addColorStop(0, `rgb(${r}, ${g}, ${b})`);
          grad.addColorStop(
            1,
            `rgb(${Math.max(115, r - 54)}, ${Math.max(34, g - 26)}, ${Math.max(22, b - 16)})`,
          );
          ctx.fillStyle = grad;
          ctx.fill();
        } else if (prism.material === 'core-sage') {
          // Engineered Sage Subsystem Module
          const r = Math.min(255, Math.round(54 + ndotl * 40 + specular * 48));
          const g = Math.min(255, Math.round(116 + ndotl * 50 + specular * 58));
          const b = Math.min(255, Math.round(92 + ndotl * 40 + specular * 48));
          grad.addColorStop(0, `rgb(${r}, ${g}, ${b})`);
          grad.addColorStop(
            1,
            `rgb(${Math.max(30, r - 22)}, ${Math.max(62, g - 34)}, ${Math.max(48, b - 26)})`,
          );
          ctx.fillStyle = grad;
          ctx.fill();
        }

        // Crisp metallic chamfered edge highlight
        const edgeAlpha = Math.min(
          0.95,
          (faceName === 'top' ? 0.46 : 0.26) * bevelMult + specular * 0.35,
        );
        if (isLayerSelected) {
          ctx.strokeStyle = isDark
            ? `rgba(243, 140, 112, ${Math.min(1, edgeAlpha * 1.45)})`
            : `rgba(185, 67, 44, ${Math.min(1, edgeAlpha * 1.45)})`;
          ctx.lineWidth = faceName === 'top' ? 1.5 : 1.1;
        } else {
          ctx.strokeStyle = isDark
            ? `rgba(239, 239, 229, ${edgeAlpha * 0.72})`
            : `rgba(255, 255, 250, ${edgeAlpha * 0.82})`;
          ctx.lineWidth = faceName === 'top' ? 1.15 : 0.8;
        }
        ctx.stroke();
        ctx.restore();
      }

      // 3. Internal System Signal Conduits & Flowing Data Pulses
      for (const conduit of SYSTEM_CONDUITS) {
        const projectedPath: ProjectedPoint[] = conduit.points.map((pt, idx) => {
          const tTier =
            conduit.fromTier +
            ((conduit.toTier - conduit.fromTier) * idx) /
              Math.max(1, conduit.points.length - 1);
          const floorT = Math.floor(tTier);
          const ceilT = Math.min(3, Math.ceil(tTier));
          const frac = tTier - floorT;
          const offA = getTierOffset(floorT);
          const offB = getTierOffset(ceilT);
          const worldPt: Vec3 = {
            x: pt.x + offA.x + (offB.x - offA.x) * frac,
            y: pt.y + offA.y + (offB.y - offA.y) * frac,
            z: pt.z + offA.z + (offB.z - offA.z) * frac,
          };
          return projectPoint(
            rotatePoint(worldPt, pitch, yaw, roll),
            centerX,
            centerY,
            responsiveScale,
          );
        });

        ctx.save();
        ctx.globalAlpha = assembleEase * 0.88;
        ctx.beginPath();
        ctx.moveTo(projectedPath[0].x, projectedPath[0].y);
        for (let i = 1; i < projectedPath.length; i++) {
          ctx.lineTo(projectedPath[i].x, projectedPath[i].y);
        }
        ctx.strokeStyle =
          conduit.accent === 'terracotta'
            ? isDark
              ? 'rgba(243, 140, 112, 0.42)'
              : 'rgba(185, 67, 44, 0.38)'
            : isDark
              ? 'rgba(116, 198, 157, 0.4)'
              : 'rgba(54, 115, 91, 0.36)';
        ctx.lineWidth = 1.4;
        ctx.setLineDash([3, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw structural anchor nodes at conduit vertices
        for (const node of projectedPath) {
          ctx.fillStyle =
            conduit.accent === 'terracotta'
              ? isDark
                ? '#f38c70'
                : '#b9432c'
              : isDark
                ? '#74c69d'
                : '#36735b';
          ctx.beginPath();
          ctx.arc(node.x, node.y, 2.4, 0, Math.PI * 2);
          ctx.fill();
        }

        // Animated light packet flowing along the 3D conduit
        const speedBoost = 1 + heroScroll * 1.25;
        const progress = reducedMotion
          ? (conduit.phase + 0.45) % 1
          : (elapsedSec * conduit.speed * speedBoost + conduit.phase) % 1;
        const totalSegments = projectedPath.length - 1;
        const segFloat = Math.max(0, progress) * totalSegments;
        const segIndex = Math.max(0, Math.min(totalSegments - 1, Math.floor(segFloat)));
        const segT = segFloat - segIndex;
        const pA = projectedPath[segIndex];
        const pB = projectedPath[segIndex + 1];
        const px = pA.x + (pB.x - pA.x) * segT;
        const py = pA.y + (pB.y - pA.y) * segT;

        const pulseRadius = 15;
        const pulseGlow = ctx.createRadialGradient(px, py, 1, px, py, pulseRadius);
        if (conduit.accent === 'terracotta') {
          pulseGlow.addColorStop(0, 'rgba(255, 242, 232, 0.98)');
          pulseGlow.addColorStop(0.35, 'rgba(243, 140, 112, 0.76)');
          pulseGlow.addColorStop(1, 'rgba(185, 67, 44, 0)');
        } else {
          pulseGlow.addColorStop(0, 'rgba(235, 255, 245, 0.98)');
          pulseGlow.addColorStop(0.35, 'rgba(92, 178, 138, 0.72)');
          pulseGlow.addColorStop(1, 'rgba(54, 115, 91, 0)');
        }
        ctx.fillStyle = pulseGlow;
        ctx.beginPath();
        ctx.arc(px, py, pulseRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 4. Precision architectural callout markers & labels on each 3D tier
      const tierLabels = ['L1 · UI', 'L2 · STATE', 'L3 · API', 'L4 · DATA'];
      for (let tier = 0; tier < 4; tier++) {
        const off = getTierOffset(tier);
        const anchorY = [-84, -28, 26, 92][tier] + off.y;
        const anchor3D = rotatePoint(
          { x: -124 + off.x, y: anchorY, z: 22 + off.z },
          pitch,
          yaw,
          roll,
        );
        const proj = projectPoint(anchor3D, centerX, centerY, responsiveScale);
        const isCurrent = state.activeLayer === tier;

        ctx.save();
        ctx.globalAlpha = assembleEase * (isCurrent ? 1 : 0.55);
        const strokeColor = isCurrent
          ? isDark
            ? '#f38c70'
            : '#b9432c'
          : isDark
            ? 'rgba(239, 239, 229, 0.45)'
            : 'rgba(35, 38, 32, 0.42)';
        ctx.strokeStyle = strokeColor;
        ctx.fillStyle = strokeColor;
        ctx.lineWidth = isCurrent ? 1.3 : 0.85;
        ctx.beginPath();
        ctx.arc(proj.x, proj.y, isCurrent ? 3.5 : 2.3, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(proj.x - 6, proj.y);
        ctx.lineTo(proj.x - 22, proj.y);
        ctx.stroke();

        ctx.font = '500 8.5px "DM Sans Variable", sans-serif';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText(tierLabels[tier], proj.x - 26, proj.y);
        ctx.restore();
      }

      ctx.restore();

      if (!reducedMotion && isVisible && !document.hidden) {
        animationFrameId = requestAnimationFrame(renderScene);
      }
    };

    const startLoop = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(renderScene);
    };

    // Pause continuous rendering when Hero is scrolled out of viewport
    let visibilityObserver: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window) {
      visibilityObserver = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (!entry) return;
          isVisible = entry.isIntersecting;
          if (isVisible) {
            startLoop();
          } else {
            cancelAnimationFrame(animationFrameId);
          }
        },
        { threshold: 0.02 },
      );
      visibilityObserver.observe(stage);
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (reducedMotionQuery.matches) return;
      const rect = stage.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      interactionRef.current.targetPointerX = Math.max(-1, Math.min(1, nx));
      interactionRef.current.targetPointerY = Math.max(-1, Math.min(1, ny));
    };

    const handlePointerLeave = () => {
      interactionRef.current.targetPointerX = 0;
      interactionRef.current.targetPointerY = 0;
    };

    const handleResize = () => {
      startLoop();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else if (isVisible) {
        startLoop();
      }
    };

    // Re-render static frame on scroll or theme switch when reduced motion is enabled
    const handleScrollWhenReduced = () => {
      if (reducedMotionQuery.matches && isVisible) {
        startLoop();
      }
    };

    const themeObserver = new MutationObserver(() => {
      if (isVisible) startLoop();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    stage.addEventListener('pointermove', handlePointerMove, { passive: true });
    stage.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScrollWhenReduced, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    reducedMotionQuery.addEventListener('change', startLoop);

    startLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      visibilityObserver?.disconnect();
      themeObserver.disconnect();
      stage.removeEventListener('pointermove', handlePointerMove);
      stage.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScrollWhenReduced);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      reducedMotionQuery.removeEventListener('change', startLoop);
    };
  }, [activeLayer, exploded]);

  const activeSpec = activeLayer !== null ? SYSTEM_LAYERS[activeLayer] : null;

  return (
    <div
      ref={stageRef}
      className="systems-stage relative select-none rounded-[4px] [border:1px_solid_var(--line)] bg-[linear-gradient(155deg,_color-mix(in_srgb,_var(--surface)_78%,_transparent),_color-mix(in_srgb,_var(--paper)_94%,_transparent))] overflow-hidden shadow-[0_24px_70px_-28px_rgba(20,24,18,0.18)] print:hidden!"
      aria-label="Interactive 3D architectural visualization of software layers from interface to infrastructure"
      role="region"
    >
      {/* Subtle architectural coordinate hairlines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.38] [background-image:linear-gradient(to_right,_var(--line)_1px,_transparent_1px),_linear-gradient(to_bottom,_var(--line)_1px,_transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(circle_at_52%_44%,_black_22%,_transparent_80%)]"
        aria-hidden="true"
      />

      {/* Top telemetry bar */}
      <div className="relative z-[2] flex items-center justify-between px-[18px] py-[12px] [border-bottom:1px_solid_var(--line)] text-[9px] font-medium tracking-[1px] uppercase text-muted mobile:px-[14px] mobile:py-[10px] mobile:text-[8px]">
        <span className="flex items-center gap-[8px]">
          <span
            className="w-[6px] h-[6px] rounded-[50%] bg-accent animate-pulse"
            aria-hidden="true"
          />
          SYSTEMS IN MOTION · 04 STRATA
        </span>
        <button
          type="button"
          onClick={() => setExploded((prev) => !prev)}
          aria-pressed={exploded}
          className="inline-flex items-center gap-[6px] py-[4px] px-[9px] rounded-[2px] [border:1px_solid_var(--line)] bg-paper text-ink text-[9px] tracking-[0.8px] uppercase [&:hover]:border-accent [&:hover]:text-accent mobile:text-[8px]"
        >
          <Layers size={11} aria-hidden="true" />
          {exploded ? 'Assemble view' : 'Unfold layers'}
        </button>
      </div>

      {/* Main 3D Viewport Stage */}
      <div className="relative h-[400px] wide:h-[440px] tablet:h-[360px] mobile:h-[300px] compact:h-[265px]">
        <canvas
          ref={canvasRef}
          className="relative z-[1] block w-full h-full cursor-grab active:cursor-grabbing"
        >
          Layered system architecture: 01 Interface, 02 State and Logic, 03 Services and API, 04
          Infrastructure.
        </canvas>

        {/* Preserved "BUILT TO BE USED" circular badge integrated into the upper-right spatial field */}
        <a
          className="z-[3] absolute right-[16px] top-[14px] w-[104px] h-[104px] [border:1px_solid_var(--line)] bg-[color-mix(in_srgb,_var(--paper)_82%,_transparent)] backdrop-blur-[6px] rounded-[50%] flex items-center justify-center gap-[6px] [transform:rotate(-12deg)] [transition:transform_0.4s,border-color_0.3s] [&:hover]:[transform:rotate(0)] [&:hover]:border-accent [&_>_svg]:w-[28px] [&_>_svg]:h-[28px] [&_>_svg]:text-accent tablet:w-[92px] tablet:h-[92px] tablet:[&_>_svg]:w-[22px] mobile:hidden"
          href="#work"
          aria-label="Explore selected work"
        >
          <ArrowDownRight strokeWidth={1.15} />
          <span className="text-[8px] leading-[1.5] tracking-[1.2px] font-medium">
            BUILT TO
            <br />
            BE USED
          </span>
        </a>

        {/* Live Telemetry Readout Pill in bottom-left of 3D stage */}
        <div
          className="pointer-events-none z-[2] absolute left-[16px] bottom-[12px] right-[16px] flex items-end justify-between gap-[12px] mobile:left-[12px] mobile:right-[12px] mobile:bottom-[10px]"
          aria-live="polite"
        >
          <div className="max-w-[310px] px-[12px] py-[8px] rounded-[3px] [border:1px_solid_var(--line)] bg-[color-mix(in_srgb,_var(--paper)_88%,_transparent)] backdrop-blur-[8px]">
            <p className="text-[9px] font-medium uppercase tracking-[0.9px] text-accent">
              {activeSpec
                ? `${activeSpec.code} / ${activeSpec.name} — ${activeSpec.role}`
                : '01–04 / Full-Stack Architecture'}
            </p>
            <p className="text-[11px] text-ink mt-[2px] leading-[1.4] mobile:text-[10px]">
              {activeSpec
                ? activeSpec.detail
                : 'Smoked glass interface · API runtime · Persistent storage'}
            </p>
          </div>
          <span className="text-[9px] tracking-[0.8px] uppercase text-muted bg-[color-mix(in_srgb,_var(--paper)_84%,_transparent)] px-[8px] py-[5px] rounded-[2px] [border:1px_solid_var(--line)] mobile:hidden">
            {activeSpec ? activeSpec.metrics : 'Interactive 3D'}
          </span>
        </div>
      </div>

      {/* Interactive 4-Layer Architectural Selector Bar */}
      <div
        className="relative z-[2] grid grid-cols-4 [border-top:1px_solid_var(--line)] bg-[color-mix(in_srgb,_var(--paper)_90%,_transparent)] mobile:grid-cols-2"
        role="group"
        aria-label="Inspect architecture layers"
      >
        {SYSTEM_LAYERS.map((layer) => {
          const isSelected = activeLayer === layer.id;
          return (
            <button
              key={layer.code}
              type="button"
              onMouseEnter={() => setActiveLayer(layer.id)}
              onMouseLeave={() => setActiveLayer(null)}
              onFocus={() => setActiveLayer(layer.id)}
              onBlur={() => setActiveLayer(null)}
              onClick={() =>
                setActiveLayer((current) => (current === layer.id ? null : layer.id))
              }
              aria-pressed={isSelected}
              className={`text-left px-[13px] py-[11px] [border-right:1px_solid_var(--line)] [&:last-child]:border-r-0 mobile:[&:nth-child(2)]:border-r-0 mobile:[&:nth-child(-n+2)]:[border-bottom:1px_solid_var(--line)] transition-colors ${
                isSelected
                  ? 'bg-surface text-ink'
                  : 'text-muted [&:hover]:bg-surface [&:hover]:text-ink'
              }`}
            >
              <span className="flex items-center justify-between text-[8px] font-medium tracking-[0.9px] uppercase">
                <span className={isSelected ? 'text-accent' : ''}>{layer.code}</span>
                <span
                  className={`w-[5px] h-[5px] rounded-[50%] transition-transform ${
                    isSelected ? 'bg-accent scale-125' : 'bg-[var(--line)]'
                  }`}
                />
              </span>
              <span className="block text-[11px] font-medium text-ink mt-[3px] tracking-[-0.2px]">
                {layer.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
