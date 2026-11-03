#!/usr/bin/env node

/**
 * Portfolio Cinematic Showcase Video Generator
 *
 * Produces a broadcast-grade 1080p 30fps MP4 showcase video of Faruk's portfolio.
 * Highlights:
 * - Page load & hero section with 3D Systems Sculpture in motion
 * - "The Living Blueprint" geometric linework and scroll-revealed engineering arcs
 * - The interactive flying bee companion moving organically across all sections
 * - Deep dive into project showcases (Parvis, Papertrail, WithWords, Nexus)
 * - 4-tier Architecture & Engineering Range
 * - Contact section with WhatsApp direct link (+2348088429227) and footer
 *
 * Usage:
 *   node scripts/record-showcase.mjs
 */

import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = resolve(__dirname, '..');

const PORT = 4195;
const DEBUG_PORT = 9295;
const FFMPEG_BIN = resolve(ROOT_DIR, 'tools/bin/ffmpeg');
const CHROME_BIN = '/usr/bin/google-chrome';
const OUTPUT_FILE = resolve(ROOT_DIR, 'showcase-portfolio.mp4');
const PUBLIC_FILE = resolve(ROOT_DIR, 'public/showcase.mp4');

// Video configuration
const WIDTH = 1920;
const HEIGHT = 1080;
const FPS = 30;
const TOTAL_DURATION_SEC = 38.0;
const TOTAL_FRAMES = Math.round(TOTAL_DURATION_SEC * FPS); // 1,140 frames

console.log('='.repeat(70));
console.log('  PORTFOLIO CINEMATIC SHOWCASE VIDEO RECORDER');
console.log(`  Resolution: ${WIDTH}x${HEIGHT} (1080p)`);
console.log(`  Framerate:  ${FPS} FPS`);
console.log(`  Duration:   ${TOTAL_DURATION_SEC}s (${TOTAL_FRAMES} frames)`);
console.log(`  Output:     ${OUTPUT_FILE}`);
console.log('='.repeat(70));

let previewProcess = null;
let chromeProcess = null;
let ws = null;

function cleanup() {
  console.log('\nCleaning up processes...');
  try {
    if (ws) ws.close();
  } catch {
    // Ignore close errors
  }
  try {
    if (chromeProcess) process.kill(-chromeProcess.pid, 'SIGKILL');
  } catch {
    // Ignore kill errors
  }
  try {
    if (previewProcess) process.kill(-previewProcess.pid, 'SIGKILL');
  } catch {
    // Ignore kill errors
  }
}

process.on('SIGINT', () => { cleanup(); process.exit(1); });
process.on('SIGTERM', () => { cleanup(); process.exit(1); });

async function main() {
  try {
    // 1. Ensure Vite production build exists
    if (!existsSync(resolve(ROOT_DIR, 'dist/index.html'))) {
      console.log('Building portfolio for production...');
      const build = spawn('npm', ['run', 'build'], { cwd: ROOT_DIR, stdio: 'inherit' });
      await new Promise((res, rej) => build.on('close', code => (code === 0 ? res() : rej())));
    }

    // 2. Start Vite preview server
    console.log(`Starting preview server on port ${PORT}...`);
    previewProcess = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
      cwd: ROOT_DIR,
      detached: true,
      stdio: 'ignore',
    });

    let serverReady = false;
    for (let i = 0; i < 40; i++) {
      try {
        const res = await fetch(`http://127.0.0.1:${PORT}/`);
        if (res.ok) {
          serverReady = true;
          break;
        }
      } catch {
        // Wait for preview server to be responsive
      }
      await delay(100);
    }
    if (!serverReady) {
      throw new Error(`Preview server failed to start on port ${PORT}`);
    }
    console.log('Preview server is up!');

    // 3. Launch Chrome headless
    console.log('Launching headless Chrome...');
    chromeProcess = spawn(
      CHROME_BIN,
      [
        '--headless=new',
        '--no-sandbox',
        '--disable-gpu',
        `--remote-debugging-port=${DEBUG_PORT}`,
        `--window-size=${WIDTH},${HEIGHT}`,
        `http://127.0.0.1:${PORT}/`,
      ],
      { detached: true, stdio: 'ignore' }
    );

    // 4. Connect to Chrome CDP
    let wsUrl = '';
    for (let i = 0; i < 40; i++) {
      try {
        const res = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/list`);
        const pages = await res.json();
        const page = pages.find((p) => p.type === 'page');
        if (page?.webSocketDebuggerUrl) {
          wsUrl = page.webSocketDebuggerUrl;
          break;
        }
      } catch {
        // Wait for Chrome remote debugging port
      }
      await delay(100);
    }
    if (!wsUrl) throw new Error('Could not connect to Chrome DevTools port');

    ws = new WebSocket(wsUrl);
    await new Promise((resolve, reject) => {
      ws.addEventListener('open', resolve, { once: true });
      ws.addEventListener('error', reject, { once: true });
    });

    let msgId = 0;
    const pending = new Map();
    ws.addEventListener('message', (evt) => {
      const data = JSON.parse(String(evt.data));
      if (data.id && pending.has(data.id)) {
        const { resolve, reject } = pending.get(data.id);
        pending.delete(data.id);
        if (data.error) reject(new Error(JSON.stringify(data.error)));
        else resolve(data.result);
      }
    });

    function send(method, params = {}) {
      const id = ++msgId;
      ws.send(JSON.stringify({ id, method, params }));
      return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
    }

    async function evaluate(expression) {
      const res = await send('Runtime.evaluate', {
        expression,
        returnByValue: true,
        awaitPromise: true,
      });
      return res.result?.value;
    }

    // Setup viewport
    await send('Page.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: WIDTH,
      height: HEIGHT,
      deviceScaleFactor: 1,
      mobile: false,
    });

    // 5. Injected Presentation Environment
    // - Hide OS scrollbars
    // - Set up deterministic virtual clock for RAF and performance.now
    // - Provide helper for stepping scroll, virtual clock, and hover simulation
    await evaluate(`(() => {
      const style = document.createElement("style");
      style.textContent = \`
        ::-webkit-scrollbar { display: none !important; }
        html, body {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
      \`;
      document.head.appendChild(style);

      window.__virtualNow = performance.now();
      performance.now = () => window.__virtualNow;

      const origRAF = window.requestAnimationFrame.bind(window);
      window.requestAnimationFrame = (callback) => {
        return origRAF(() => callback(window.__virtualNow));
      };

      // Ensure smooth CSS wing flutter pace
      document.documentElement.style.setProperty('--bee-flap-speed', '0.12s');

      window.__stepSim = (targetScrollY, dtMs) => {
        window.__virtualNow += dtMs;
        window.scrollTo({ top: targetScrollY, behavior: 'instant' });
        window.dispatchEvent(new Event('scroll'));
      };
    })()`);

    // Wait for fonts, Three.js sculpture, and initial layout to settle
    console.log('Waiting for initial site assets and 3D sculpture initialization...');
    await delay(2000);

    // 6. Measure real DOM layout coordinates
    const layout = await evaluate(`(() => {
      const getBox = id => {
        const el = document.getElementById(id) || document.querySelector(id);
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { top: Math.round(r.top + window.scrollY), height: Math.round(r.height) };
      };
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      return {
        maxScroll,
        parvis: getBox('parvis'),
        papertrail: getBox('papertrail'),
        withwords: getBox('withwords'),
        expertise: getBox('expertise'),
        contact: getBox('contact'),
      };
    })()`);

    console.log('Dynamic layout coordinates:', layout);

    // Compute center scroll positions
    const posHero = 0;
    const posParvis = layout.parvis ? Math.max(0, layout.parvis.top - Math.round((HEIGHT - layout.parvis.height) / 2)) : 1310;
    const posPapertrail = layout.papertrail ? Math.max(0, layout.papertrail.top - Math.round((HEIGHT - layout.papertrail.height) / 2)) : 2270;
    const posWithWords = layout.withwords ? Math.max(0, layout.withwords.top - Math.round((HEIGHT - layout.withwords.height) / 2)) : 3250;
    const posExpertise = layout.expertise ? Math.max(0, layout.expertise.top - Math.round((HEIGHT - layout.expertise.height) / 2)) : 5220;
    const posContact = layout.maxScroll || 5731;

    console.log('Cinematic Keyframe Targets:', {
      Hero: posHero,
      Parvis: posParvis,
      Papertrail: posPapertrail,
      WithWords: posWithWords,
      Expertise: posExpertise,
      Contact: posContact,
    });

    // 7. Define Smooth Cinematic Scroll & Mouse Choreography
    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    // Keyframe Schedule (seconds):
    // 0.0s - 4.5s:  Hero Section (headline typewriter, 3D sculpture rotates, Unfold Layers click at 2.2s, bee on right)
    // 4.5s - 7.5s:  Transition: Hero -> Parvis (Blueprint lines & arcs draw, bee swoops down & banks left)
    // 7.5s - 13.0s: Feature Showcase: 01 / Parvis (interactive stage hover tilt, tags, bee hovering along margin)
    // 13.0s - 15.5s: Transition: Parvis -> Papertrail (geometric blueprint circles expand, bee banks right)
    // 15.5s - 20.5s: Feature Showcase: 02 / Papertrail (document workspace stage, coordinate canvas, bee harmonic breathing)
    // 20.5s - 23.0s: Transition: Papertrail -> WithWords (blueprint interconnects descend, bee loops playfully)
    // 23.0s - 28.0s: Feature Showcase: 03 / WithWords (3D envelope platform, candlelit atmosphere, tags, bee nearby)
    // 28.0s - 30.5s: Transition: WithWords -> Architecture / Expertise (downward structural paths, node illumination)
    // 30.5s - 34.0s: Section Showcase: Engineering Range & Architecture (4 tiers, technical stratum, bee in lane)
    // 34.0s - 36.5s: Transition: Architecture -> Contact & Footer (smooth descent to conversation & WhatsApp)
    // 36.5s - 38.0s: Contact & Footer Settle (WhatsApp direct link, footer, bee resting peacefully, gentle fade)

    function getChoreography(timeSec) {
      let scrollY = 0;
      let mouse = { x: 1200, y: 450 }; // default over 3D sculpture / visual area
      let clickAction = null;

      if (timeSec < 4.5) {
        // Hero hold
        scrollY = posHero;
        // At 2.2s, trigger unfold on the 3D sculpture layers
        if (timeSec >= 2.0 && timeSec < 2.1) {
          clickAction = 'unfold';
        }
        // Mouse moves gently over 3D sculpture stage
        const mt = (timeSec / 4.5) * Math.PI * 2;
        mouse = { x: 1250 + Math.sin(mt) * 60, y: 440 + Math.cos(mt) * 35 };
      } else if (timeSec < 7.5) {
        // Transition: Hero -> Parvis
        const t = (timeSec - 4.5) / 3.0;
        const eased = easeInOutCubic(t);
        scrollY = posHero + (posParvis - posHero) * eased;
        mouse = { x: 1200 - eased * 300, y: 450 + Math.sin(t * Math.PI) * 50 };
      } else if (timeSec < 13.0) {
        // Parvis hold
        scrollY = posParvis;
        // Mouse glides smoothly across the interactive card stage, triggering 3D tilt
        const t = (timeSec - 7.5) / 5.5;
        const sweep = Math.sin(t * Math.PI);
        mouse = { x: 1100 + sweep * 220, y: 430 + sweep * 60 };
      } else if (timeSec < 15.5) {
        // Transition: Parvis -> Papertrail
        const t = (timeSec - 13.0) / 2.5;
        const eased = easeInOutCubic(t);
        scrollY = posParvis + (posPapertrail - posParvis) * eased;
        mouse = { x: 1200, y: 450 };
      } else if (timeSec < 20.5) {
        // Papertrail hold
        scrollY = posPapertrail;
        // Mouse glides across workspace stage
        const t = (timeSec - 15.5) / 5.0;
        const sweep = Math.sin(t * Math.PI);
        mouse = { x: 1080 + sweep * 200, y: 420 + sweep * 50 };
      } else if (timeSec < 23.0) {
        // Transition: Papertrail -> WithWords
        const t = (timeSec - 20.5) / 2.5;
        const eased = easeInOutCubic(t);
        scrollY = posPapertrail + (posWithWords - posPapertrail) * eased;
        mouse = { x: 1150, y: 450 };
      } else if (timeSec < 28.0) {
        // WithWords hold
        scrollY = posWithWords;
        // Mouse explores 3D digital letter preview card
        const t = (timeSec - 23.0) / 5.0;
        const sweep = Math.sin(t * Math.PI);
        mouse = { x: 1050 + sweep * 240, y: 440 + sweep * 60 };
      } else if (timeSec < 30.5) {
        // Transition: WithWords -> Architecture
        const t = (timeSec - 28.0) / 2.5;
        const eased = easeInOutCubic(t);
        scrollY = posWithWords + (posExpertise - posWithWords) * eased;
        mouse = { x: 960, y: 500 };
      } else if (timeSec < 34.0) {
        // Architecture & Engineering Range hold
        scrollY = posExpertise;
        const t = (timeSec - 30.5) / 3.5;
        mouse = { x: 750 + t * 400, y: 480 };
      } else if (timeSec < 36.5) {
        // Transition: Architecture -> Contact & Footer
        const t = (timeSec - 34.0) / 2.5;
        const eased = easeInOutCubic(t);
        scrollY = posExpertise + (posContact - posExpertise) * eased;
        mouse = { x: 1200, y: 700 };
      } else {
        // Contact & Footer finale hold
        scrollY = posContact;
        mouse = { x: 1400, y: 880 };
      }

      return { scrollY: Math.round(scrollY), mouse, clickAction };
    }

    // 8. Launch FFmpeg encoder process
    console.log('Spawning FFmpeg process...');
    // We add a subtle 0.5s fade-in and 0.8s fade-out for cinematic elegance
    const FADE_OUT_START = (TOTAL_DURATION_SEC - 0.8).toFixed(1);
    const videoFilters = `scale=${WIDTH}:${HEIGHT},fade=t=in:st=0:d=0.5,fade=t=out:st=${FADE_OUT_START}:d=0.8`;

    const ffmpegArgs = [
      '-y',
      '-f', 'image2pipe',
      '-vcodec', 'mjpeg',
      '-r', String(FPS),
      '-i', '-',
      '-vf', videoFilters,
      '-c:v', 'libx264',
      '-pix_fmt', 'yuv420p',
      '-movflags', '+faststart',
      '-crf', '17',
      '-preset', 'veryfast',
      OUTPUT_FILE,
    ];

    const ffmpeg = spawn(FFMPEG_BIN, ffmpegArgs);
    let ffmpegErr = '';
    ffmpeg.stderr.on('data', (d) => { ffmpegErr += d.toString(); });

    // 9. Frame Capture Loop
    console.log(`\nRecording ${TOTAL_FRAMES} frames (~${TOTAL_DURATION_SEC}s at ${FPS} FPS)...`);
    const startTimeMs = Date.now();
    let lastUnfolded = false;

    for (let frameIdx = 0; frameIdx < TOTAL_FRAMES; frameIdx++) {
      const timeSec = frameIdx / FPS;
      const { scrollY, mouse, clickAction } = getChoreography(timeSec);

      // Handle interactive actions
      if (clickAction === 'unfold' && !lastUnfolded) {
        lastUnfolded = true;
        await evaluate(`(() => {
          const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent?.includes('Unfold layers'));
          if (btn) btn.click();
        })()`);
      }

      // Step simulation clock and scroll
      await evaluate(`window.__stepSim(${scrollY}, ${1000 / FPS})`);

      // Dispatch mouse hover to trigger 3D card tilt & bee interaction
      if (mouse) {
        await send('Input.dispatchMouseEvent', {
          type: 'mouseMoved',
          x: Math.round(mouse.x),
          y: Math.round(mouse.y),
        });
      }

      // Give browser small microtask pause to commit RAF renders
      await delay(25);

      // Capture high-definition frame
      const shot = await send('Page.captureScreenshot', {
        format: 'jpeg',
        quality: 88,
      });

      const buffer = Buffer.from(shot.data, 'base64');
      ffmpeg.stdin.write(buffer);

      // Progress reporting
      if (frameIdx % 90 === 0 || frameIdx === TOTAL_FRAMES - 1) {
        const percent = ((frameIdx / (TOTAL_FRAMES - 1)) * 100).toFixed(0);
        const elapsedSec = ((Date.now() - startTimeMs) / 1000).toFixed(1);
        const fpsCapture = (frameIdx / (elapsedSec || 1)).toFixed(1);
        const remainingSec = (((TOTAL_FRAMES - frameIdx) / (fpsCapture || 1))).toFixed(0);
        process.stdout.write(`\r[${percent.padStart(3)}%] Frame ${frameIdx + 1}/${TOTAL_FRAMES} | t=${timeSec.toFixed(1)}s | scroll=${scrollY}px | ${fpsCapture} fps | ETA: ${remainingSec}s  `);
      }
    }

    console.log('\nFinalizing video stream in FFmpeg...');
    ffmpeg.stdin.end();

    const exitCode = await new Promise((resolve) => ffmpeg.on('close', resolve));
    if (exitCode !== 0) {
      console.error('FFmpeg error output:', ffmpegErr);
      throw new Error(`FFmpeg exited with error code ${exitCode}`);
    }

    const elapsedTotal = ((Date.now() - startTimeMs) / 1000).toFixed(1);
    console.log(`\nSuccess! Video recorded in ${elapsedTotal}s.`);

    // 10. Copy to public directory
    try {
      mkdirSync(resolve(ROOT_DIR, 'public'), { recursive: true });
      copyFileSync(OUTPUT_FILE, PUBLIC_FILE);
      console.log(`Copied video to ${PUBLIC_FILE}`);
    } catch (e) {
      console.warn('Could not copy to public directory:', e.message);
    }
  } finally {
    cleanup();
  }
}

main().catch((err) => {
  console.error('\nFatal recording error:', err);
  cleanup();
  process.exit(1);
});
