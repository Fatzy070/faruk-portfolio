import { useEffect, useRef } from 'react';

/**
 * FlightBee — An organic, scroll-responsive animated bee character that accompanies
 * visitors throughout the entire portfolio.
 *
 * Architecture & Performance:
 * - Direct DOM manipulation via requestAnimationFrame (0 React state re-renders).
 * - Damped spring kinematics with velocity-based banking and natural 3D turns.
 * - Multi-harmonic hover curves so the character feels continuously alive when idle.
 * - Dynamic scroll coupling: accelerates, banks, and catches lift from scroll currents.
 * - Natural meandering path guiding the bee through every section down to the footer.
 * - Non-intrusive: pointer-events-none, never blocks clicks or text selection.
 * - Passive cursor evasion: playfully flutters away if the cursor comes too close.
 * - Full prefers-reduced-motion compliance and background tab throttling.
 */
export function FlightBee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced-motion preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return;

    const outerEl = outerRef.current;
    const innerEl = innerRef.current;
    if (!outerEl || !innerEl) return;

    // Viewport dimensions & safe bounds
    let vw = window.innerWidth;
    let vh = window.innerHeight;

    // Kinematics state
    let x = vw * 0.78;
    let y = Math.max(120, vh * 0.26);
    let vx = 0;
    let vy = 0;
    let facing = 1; // 1 = facing right, -1 = facing left
    let currentPitch = 0;

    // Scroll tracking
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    // Interactive cursor evasion (curious / playful dodge)
    let mouseX = -2000;
    let mouseY = -2000;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Autonomous wandering targets
    let wanderX = 0;
    let wanderY = 0;
    let nextWanderTime = performance.now() + 2000;

    // Playful loop-de-loop burst
    let burstActive = false;
    let burstStartTime = 0;
    let nextBurstTime = performance.now() + 7000;

    const getScrollProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      return max > 0 ? Math.max(0, Math.min(1, window.scrollY / max)) : 0;
    };

    /**
     * Meandering home anchor across sections:
     * - Progress ~0.00 (Hero): upper-right flank admiring the 3D sculpture
     * - Progress ~0.20 (Parvis): glides across to the left/mid margin
     * - Progress ~0.40 (Papertrail): drifts to right flank
     * - Progress ~0.55 (WithWords): hovers near the digital letters showcase
     * - Progress ~0.70 (Nexus & Expertise): explores left-center linework
     * - Progress ~0.88 (Contact): swoops down towards the conversation arrow
     * - Progress ~1.00 (Footer): settles comfortably in the lower right
     */
    const getHomeAnchor = (progress: number) => {
      let normX = 0.78;
      let normY = 0.26;

      if (progress < 0.16) {
        // Hero section
        const t = progress / 0.16;
        normX = 0.78 - t * 0.14;
        normY = 0.25 + t * 0.12;
      } else if (progress < 0.38) {
        // Parvis (Selected Work #01)
        const t = (progress - 0.16) / 0.22;
        // Sweeps toward left margin then meanders back toward center
        normX = 0.64 - Math.sin(t * Math.PI) * 0.44; // reaches ~0.20 on left
        normY = 0.37 + t * 0.15;
      } else if (progress < 0.58) {
        // Papertrail & WithWords (#02 & #03)
        const t = (progress - 0.38) / 0.2;
        normX = 0.45 + Math.sin(t * Math.PI) * 0.36; // swings toward ~0.81
        normY = 0.48 + t * 0.12;
      } else if (progress < 0.78) {
        // Nexus & Expertise range
        const t = (progress - 0.58) / 0.2;
        normX = 0.76 - t * 0.48; // shifts to ~0.28
        normY = 0.55 + Math.sin(t * Math.PI) * 0.14;
      } else if (progress < 0.92) {
        // Contact section
        const t = (progress - 0.78) / 0.14;
        normX = 0.28 + t * 0.48; // swoops toward contact arrow (~0.76)
        normY = 0.58 + t * 0.15;
      } else {
        // Footer
        const t = (progress - 0.92) / 0.08;
        normX = 0.76 + t * 0.06;
        normY = 0.73 + t * 0.08;
      }

      return {
        x: normX * vw,
        y: normY * vh,
      };
    };

    let rafId = 0;
    let lastTime = performance.now();
    let isPaused = false;

    const onVisibilityChange = () => {
      if (document.hidden) {
        isPaused = true;
        cancelAnimationFrame(rafId);
      } else {
        isPaused = false;
        lastTime = performance.now();
        lastScrollY = window.scrollY;
        rafId = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    const onResize = () => {
      vw = window.innerWidth;
      vh = window.innerHeight;
      const isMobile = vw < 768;
      const pad = isMobile ? 18 : 44;
      const beeW = isMobile ? 44 : 56;
      const beeH = isMobile ? 33 : 42;
      x = Math.max(pad, Math.min(vw - pad - beeW, x));
      y = Math.max(88, Math.min(vh - pad - beeH, y));
    };
    window.addEventListener('resize', onResize);

    function animate(now: number) {
      if (isPaused || !outerEl || !innerEl) return;

      const dt = Math.min(0.04, Math.max(0.001, (now - lastTime) / 1000));
      lastTime = now;

      const scrollY = window.scrollY;
      const instantScrollVel = scrollY - lastScrollY;
      lastScrollY = scrollY;

      // Filtered scroll velocity with smooth decay
      scrollVelocity += (instantScrollVel - scrollVelocity) * 0.28;

      const progress = getScrollProgress();
      const home = getHomeAnchor(progress);

      // Periodically choose a gentle exploratory wander offset
      if (now > nextWanderTime) {
        nextWanderTime = now + 3200 + Math.random() * 4500;
        const maxRangeX = vw < 768 ? 55 : 120;
        const maxRangeY = vw < 768 ? 45 : 95;
        wanderX = (Math.random() - 0.5) * maxRangeX * 2;
        wanderY = (Math.random() - 0.5) * maxRangeY * 2;
      }

      // Multi-harmonic gentle bobbing hover (breathing flight)
      const tSec = now * 0.001;
      const hoverX = Math.sin(tSec * 1.25) * 15 + Math.cos(tSec * 2.3) * 7;
      const hoverY = Math.cos(tSec * 1.05) * 13 + Math.sin(tSec * 1.85) * 6;

      // Occasional playful loop burst when idle
      let burstX = 0;
      let burstY = 0;
      if (!burstActive && now > nextBurstTime && Math.abs(scrollVelocity) < 3.5) {
        burstActive = true;
        burstStartTime = now;
        nextBurstTime = now + 9000 + Math.random() * 9000;
      }
      if (burstActive) {
        const bProgress = (now - burstStartTime) / 1300;
        if (bProgress >= 1) {
          burstActive = false;
        } else {
          const angle = bProgress * Math.PI * 2;
          burstX = Math.sin(angle) * (facing * 34);
          burstY = (1 - Math.cos(angle)) * -24;
        }
      }

      // Scroll vertical impulse: downward scroll pushes bee down slightly then gives lift
      const scrollLiftY = Math.max(-55, Math.min(55, scrollVelocity * 0.24));

      // Cursor evasion (playful startle/dodge if mouse approaches closely)
      let evadeX = 0;
      let evadeY = 0;
      const distToMouse = Math.hypot(x - mouseX, y - mouseY);
      if (distToMouse < 85 && distToMouse > 0) {
        const force = (1 - distToMouse / 85) * 55;
        evadeX = ((x - mouseX) / distToMouse) * force;
        evadeY = ((y - mouseY) / distToMouse) * force;
      }

      // Composite target position
      let targetX = home.x + wanderX + hoverX + burstX + evadeX;
      let targetY = home.y + wanderY + hoverY + burstY + scrollLiftY + evadeY;

      // Safe viewport boundary clamping (stays clear of sticky header & screen edges)
      const isMobile = vw < 768;
      const padX = isMobile ? 18 : 42;
      const headerTopPad = isMobile ? 80 : 96;
      const bottomPad = isMobile ? 30 : 44;

      const beeW = isMobile ? 44 : 56;
      const beeH = isMobile ? 33 : 42;

      targetX = Math.max(padX, Math.min(vw - padX - beeW, targetX));
      targetY = Math.max(headerTopPad, Math.min(vh - bottomPad - beeH, targetY));

      // Damped spring physics
      const springK = 3.4;
      const damping = 0.8;

      const ax = (targetX - x) * springK;
      const ay = (targetY - y) * springK;

      vx = (vx + ax * dt) * Math.pow(damping, dt * 60);
      vy = (vy + ay * dt) * Math.pow(damping, dt * 60);

      x += vx * dt * 24;
      y += vy * dt * 24;

      // Update facing orientation based on horizontal velocity
      if (vx > 1.4) facing = 1;
      else if (vx < -1.4) facing = -1;

      // Smooth banking / pitch angle based on vertical & horizontal movement
      const loopPitch = burstActive
        ? Math.cos(((now - burstStartTime) / 1300) * Math.PI * 2) * 32
        : 0;
      const targetPitch = Math.max(-26, Math.min(26, vy * 0.85 * facing + loopPitch));
      currentPitch += (targetPitch - currentPitch) * Math.min(1, dt * 11);

      // Flap speed adjustment: flaps faster when zooming/diving
      const speed = Math.hypot(vx, vy);
      const flapSpeed = speed > 2.8 ? '0.045s' : '0.07s';
      outerEl.style.setProperty('--bee-flap-speed', flapSpeed);

      // Apply transforms
      outerEl.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${currentPitch.toFixed(1)}deg)`;
      innerEl.style.transform = `rotateY(${facing === 1 ? 0 : 180}deg)`;

      rafId = requestAnimationFrame(animate);
    }

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flight-bee-container pointer-events-none fixed inset-0 z-[35] overflow-hidden select-none print:hidden!"
      aria-hidden="true"
    >
      <div
        ref={outerRef}
        className="flight-bee-outer absolute top-0 left-0 w-[56px] h-[42px] mobile:w-[44px] mobile:h-[33px] will-change-transform"
        style={{
          transform: 'translate3d(80vw, 25vh, 0)',
        }}
      >
        <div
          ref={innerRef}
          className="flight-bee-inner w-full h-full [transform-style:preserve-3d] [transition:transform_0.22s_cubic-bezier(0.2,0.8,0.2,1)]"
        >
          <svg
            className="w-full h-full overflow-visible drop-shadow-[0_2px_5px_rgba(0,0,0,0.16)] dark:drop-shadow-[0_2px_7px_rgba(0,0,0,0.48)]"
            viewBox="0 0 48 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="bee-honey-gradient"
                x1="8"
                y1="12"
                x2="34"
                y2="28"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#fde047" />
                <stop offset="45%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <clipPath id="bee-body-clip">
                <ellipse cx="21" cy="19.5" rx="12.5" ry="9.5" />
              </clipPath>
            </defs>

            {/* Hind wing (fluttering behind body) */}
            <g className="bee-wing-hind">
              <path
                d="M18 14 C14 7, 16 1, 24 1.5 C29 1.8, 27 8, 20 14 Z"
                fill="rgba(240, 249, 255, 0.9)"
                stroke="#64748b"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
              <path
                d="M19 13 C20 8, 22 4, 25 3"
                stroke="#94a3b8"
                strokeWidth="0.5"
                strokeLinecap="round"
              />
            </g>

            {/* Little curled legs */}
            <path
              d="M15 25 C14 28, 12 30, 10 29.5"
              stroke="#24201e"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M22 26 C22 29, 20 31, 18 31"
              stroke="#24201e"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />

            {/* Stinger */}
            <path
              d="M9 19 L2 19.5 L9 20.5 Z"
              fill="#24201e"
              stroke="#24201e"
              strokeWidth="0.4"
              strokeLinejoin="round"
            />

            {/* Chubby Abdomen Base */}
            <ellipse
              cx="21"
              cy="19.5"
              rx="12.5"
              ry="9.5"
              fill="url(#bee-honey-gradient)"
              stroke="#d97706"
              strokeWidth="0.6"
            />

            {/* Clipped espresso stripes + top gloss highlight */}
            <g clipPath="url(#bee-body-clip)">
              <path
                d="M14 8 C16 15, 16 24, 14 31 L11 31 C13 24, 13 15, 11 8 Z"
                fill="#24201e"
              />
              <path
                d="M20 7 C22.5 15, 22.5 24, 20 32 L17 32 C19.5 24, 19.5 15, 17 7 Z"
                fill="#24201e"
              />
              <path
                d="M26 8 C28 15, 28 24, 26 31 L23.5 31 C25.5 24, 25.5 15, 23.5 8 Z"
                fill="#24201e"
              />
              <ellipse
                cx="21"
                cy="12"
                rx="9"
                ry="2.2"
                fill="rgba(255, 255, 255, 0.45)"
              />
            </g>

            {/* Head with subtle definition rim */}
            <circle
              cx="32.5"
              cy="19"
              r="6.2"
              fill="#24201e"
              stroke="#3d3733"
              strokeWidth="0.7"
            />

            {/* Antennae with rounded tips */}
            <path
              d="M34 13.5 C35.5 9, 39 5.5, 41.5 6.5"
              stroke="#24201e"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="41.7" cy="6.6" r="1.1" fill="#24201e" />
            <path
              d="M32 13.5 C32.5 9.5, 35 6.5, 37.5 7.5"
              stroke="#24201e"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="37.7" cy="7.6" r="1" fill="#24201e" />

            {/* Expressive Eye & specular highlights */}
            <ellipse cx="34.5" cy="17" rx="1.8" ry="2.2" fill="#ffffff" />
            <ellipse cx="35" cy="17" rx="1.2" ry="1.5" fill="#0f172a" />
            <circle cx="35.5" cy="16.3" r="0.55" fill="#ffffff" />

            {/* Cheerful Coral Cheek Blush */}
            <circle cx="33" cy="21.8" r="1.4" fill="#fb7185" opacity="0.5" />

            {/* Fore wing (fluttering in front of body) */}
            <g className="bee-wing-fore">
              <path
                d="M21 14 C18 6, 22 0, 31 0.5 C36 1, 35 7, 24 14.5 Z"
                fill="rgba(240, 249, 255, 0.94)"
                stroke="#475569"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
              <path
                d="M22 13 C24 7, 27 3, 31 2"
                stroke="#64748b"
                strokeWidth="0.6"
                strokeLinecap="round"
              />
              <path
                d="M25 10 C27 8, 29 6, 32 5.5"
                stroke="#94a3b8"
                strokeWidth="0.45"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
