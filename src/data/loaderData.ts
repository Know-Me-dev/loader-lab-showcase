
export const loaderData = [
  {
    id: 1,
    name: "Spinning Circle",
    description: "Classic spinning circle loader with smooth rotation",
    tags: ["circle", "spin"],
    isHot: true,
    css: `
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
    html: `<div class="spinner"></div>`
  },
  {
    id: 2,
    name: "Bouncing Dots",
    description: "Three dots bouncing in sequence with smooth timing",
    tags: ["dots", "bounce"],
    isHot: true,
    css: `
.bouncing-dots {
  display: flex;
  align-items: center;
  gap: 4px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #3b82f6;
  animation: bounce 1.4s ease-in-out infinite both;
}

.dot:nth-child(1) { animation-delay: -0.32s; }
.dot:nth-child(2) { animation-delay: -0.16s; }

@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}`,
    html: `<div class="bouncing-dots">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>`
  },
  {
    id: 3,
    name: "Progress Bar",
    description: "Animated progress bar with gradient fill",
    tags: ["bar", "progress"],
    isHot: false,
    css: `
.progress-bar {
  width: 120px;
  max-width: 100%;
  height: 6px;
  background-color: #f3f3f3;
  border-radius: 3px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 3px;
  animation: progress 2s ease-in-out infinite;
}

@keyframes progress {
  0% {
    width: 0%;
    margin-left: 0%;
  }
  50% {
    width: 75%;
    margin-left: 0%;
  }
  100% {
    width: 0%;
    margin-left: 100%;
  }
}`,
    html: `<div class="progress-bar">
  <div class="progress-fill"></div>
</div>`
  },
  {
    id: 4,
    name: "Pulsing Circle",
    description: "Gentle pulsing circle with opacity animation",
    tags: ["circle", "pulse"],
    isHot: false,
    css: `
.pulse-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #3b82f6;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 1;
  }
  70% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(0.95);
    opacity: 1;
  }
}`,
    html: `<div class="pulse-circle"></div>`
  },
  {
    id: 5,
    name: "Flip Square",
    description: "3D flipping square with perspective animation",
    tags: ["square", "flip"],
    isHot: true,
    css: `
.flip-square {
  width: 40px;
  height: 40px;
  background-color: #3b82f6;
  animation: flip 1.2s infinite ease-in-out;
}

@keyframes flip {
  0%, 100% {
    transform: perspective(400px) rotateY(0deg);
  }
  50% {
    transform: perspective(400px) rotateY(180deg);
  }
}`,
    html: `<div class="flip-square"></div>`
  },
  {
    id: 6,
    name: "Wave Bars",
    description: "Rhythmic wave pattern with multiple bars",
    tags: ["bars", "wave"],
    isHot: false,
    css: `
.wave-bars {
  display: flex;
  align-items: center;
  gap: 3px;
}

.bar {
  width: 4px;
  height: 30px;
  background-color: #3b82f6;
  animation: wave 1s ease-in-out infinite;
}

.bar:nth-child(2) { animation-delay: 0.1s; }
.bar:nth-child(3) { animation-delay: 0.2s; }
.bar:nth-child(4) { animation-delay: 0.3s; }
.bar:nth-child(5) { animation-delay: 0.4s; }

@keyframes wave {
  0%, 40%, 100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}`,
    html: `<div class="wave-bars">
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</div>`
  },
  {
    id: 7,
    name: "Dual Ring",
    description: "Two interlocking rings spinning at different speeds",
    tags: ["ring", "dual"],
    isHot: false,
    css: `
.dual-ring {
  position: relative;
  width: 64px;
  height: 64px;
}

.dual-ring div {
  position: absolute;
  border: 4px solid transparent;
  border-radius: 50%;
  animation: dual-ring 1.2s linear infinite;
}

.dual-ring div:nth-child(1) {
  width: 64px;
  height: 64px;
  border-top-color: #3b82f6;
}

.dual-ring div:nth-child(2) {
  width: 48px;
  height: 48px;
  top: 8px;
  left: 8px;
  border-bottom-color: #8b5cf6;
  animation-direction: reverse;
  animation-duration: 0.8s;
}

@keyframes dual-ring {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
    html: `<div class="dual-ring">
  <div></div>
  <div></div>
</div>`
  },
  {
    id: 8,
    name: "Typing Dots",
    description: "Classic typing indicator with sequential dots",
    tags: ["dots", "typing"],
    isHot: true,
    css: `
.typing-dots {
  display: flex;
  align-items: center;
  gap: 4px;
}

.typing-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #3b82f6;
  animation: typing 1.4s ease-in-out infinite;
}

.typing-dot:nth-child(1) { animation-delay: 0s; }
.typing-dot:nth-child(2) { animation-delay: 0.2s; }
.typing-dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  30% {
    transform: translateY(-10px);
    opacity: 1;
  }
}`,
    html: `<div class="typing-dots">
  <div class="typing-dot"></div>
  <div class="typing-dot"></div>
  <div class="typing-dot"></div>
</div>`
  },
  {
    id: 9,
    name: "Morphing Square",
    description: "Square morphing into circle and back",
    tags: ["square", "morph"],
    isHot: false,
    css: `
.morphing-square {
  width: 40px;
  height: 40px;
  background-color: #3b82f6;
  animation: morph 2s ease-in-out infinite;
}

@keyframes morph {
  0%, 100% {
    border-radius: 0%;
    transform: rotate(0deg);
  }
  25% {
    border-radius: 50%;
    transform: rotate(45deg);
  }
  50% {
    border-radius: 50%;
    transform: rotate(90deg);
  }
  75% {
    border-radius: 0%;
    transform:   135deg);
  }
}`,
    html: `<div class="morphing-square"></div>`
  },
  {
    id: 10,
    name: "Ripple Effect",
    description: "Expanding ripple rings with fade out effect",
    tags: ["ripple", "rings"],
    isHot: true,
    css: `
.ripple {
  position: relative;
  width: 60px;
  height: 60px;
}

.ripple div {
  position: absolute;
  border: 2px solid #3b82f6;
  border-radius: 50%;
  animation: ripple 1.2s ease-out infinite;
}

.ripple div:nth-child(2) {
  animation-delay: -0.6s;
}

@keyframes ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}`,
    html: `<div class="ripple">
  <div></div>
  <div></div>
</div>`
  },
  {
    id: 11,
    name: "Clock Spinner",
    description: "Clock-like spinner with smooth hand rotation",
    tags: ["clock", "hand"],
    isHot: false,
    css: `
.clock-spinner {
  position: relative;
  width: 40px;
  height: 40px;
  border: 2px solid #f3f3f3;
  border-radius: 50%;
}

.clock-hand {
  position: absolute;
  top: 2px;
  left: 50%;
  width: 2px;
  height: 16px;
  background-color: #3b82f6;
  transform-origin: center bottom;
  margin-left: -1px;
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
    html: `<div class="clock-spinner">
  <div class="clock-hand"></div>
</div>`
  },
  {
    id: 12,
    name: "Heartbeat",
    description: "Pulsing heart animation with beat rhythm",
    tags: ["heart", "pulse"],
    isHot: false,
    css: `
.heartbeat {
  width: 40px;
  height: 40px;
  background-color: #ef4444;
  transform: rotate(-45deg);
  animation: heartbeat 1.5s ease-in-out infinite;
  position: relative;
}

.heartbeat:before,
.heartbeat:after {
  content: '';
  width: 40px;
  height: 40px;
  position: absolute;
  background-color: #ef4444;
  border-radius: 50%;
}

.heartbeat:before {
  top: -20px;
  left: 0;
}

.heartbeat:after {
  left: 20px;
  top: 0;
}

@keyframes heartbeat {
  0%, 50%, 100% {
    transform: rotate(-45deg) scale(1);
  }
  25% {
    transform: rotate(-45deg) scale(1.15);
  }
}`,
    html: `<div class="heartbeat"></div>`
  }
,
  {
    id: 13,
    name: "Spinning Hexagon",
    description: "Hexagon that rotates for modern aesthetics",
    tags: ["hexagon", "spin"],
    isHot: false,
    css: `
.hexagon {
  width: 40px;
  height: 40px;
  background: #3b82f6;
  clip-path: polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
    html: `<div class="hexagon"></div>`
  },
  {
    id: 14,
    name: "Tri-Pulse Loader",
    description: "Three triangles pulsing and rotating in a synchronized animation",
    tags: ["triangle", "pulse"],
    isHot: false,
    css: `
.tri-pulse-loader {
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tri-pulse-loader .triangle {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 24px solid #3b82f6;
  opacity: 0.8;
  transform-origin: 50% 80%;
  animation: tri-pulse 1.2s infinite;
}

.tri-pulse-loader .triangle:nth-child(1) {
  transform: rotate(0deg) translateY(-8px);
  animation-delay: 0s;
}

.tri-pulse-loader .triangle:nth-child(2) {
  transform: rotate(120deg) translateY(-8px);
  animation-delay: 0.2s;
}

.tri-pulse-loader .triangle:nth-child(3) {
  transform: rotate(240deg) translateY(-8px);
  animation-delay: 0.4s;
}

@keyframes tri-pulse {
  0%, 100% {
    opacity: 0.8;
    transform: scale(1) translateY(-8px);
  }
  50% {
    opacity: 1;
    transform: scale(1.2) translateY(-12px);
  }
}
`,
    html: `<div class="tri-pulse-loader">
  <div class="triangle"></div>
  <div class="triangle"></div>
  <div class="triangle"></div>
</div>`
  },
  {
    id: 15,
    name: "Firefly Trail",
    description: "A glowing dot leaves a fading trail as it zips around a rectangular path",
    tags: ["line", "glow"],
    isHot: false,
    css: `
.firefly-trail {
  width: 56px;
  height: 32px;
  position: relative;
  background: transparent;
}
.firefly-dot {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #3b82f6;
  box-shadow: 0 0 12px 4px #3b82f6aa;
  animation: firefly-move 1.6s cubic-bezier(.68,-0.55,.27,1.55) infinite;
}
.firefly-trail-dot {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #3b82f6;
  opacity: 0.3;
  filter: blur(2px);
  animation: firefly-trail 1.6s cubic-bezier(.68,-0.55,.27,1.55) infinite;
}
.firefly-trail-dot:nth-child(2) { animation-delay: 0.12s; }
.firefly-trail-dot:nth-child(3) { animation-delay: 0.24s; }
.firefly-trail-dot:nth-child(4) { animation-delay: 0.36s; }

@keyframes firefly-move {
  0%   { left: 0;   top: 0; }
  25%  { left: 54px; top: 0; }
  50%  { left: 54px; top: 22px; }
  75%  { left: 0;   top: 22px; }
  100% { left: 0;   top: 0; }
}
@keyframes firefly-trail {
  0%   { left: 0;   top: 0; opacity: 0.3; }
  25%  { left: 54px; top: 0; opacity: 0.2; }
  50%  { left: 54px; top: 22px; opacity: 0.1; }
  75%  { left: 0;   top: 22px; opacity: 0.05; }
  100% { left: 0;   top: 0; opacity: 0; }
}
`,
    html: `<div class="firefly-trail">
  <div class="firefly-dot"></div>
  <div class="firefly-trail-dot"></div>
  <div class="firefly-trail-dot"></div>
  <div class="firefly-trail-dot"></div>
</div>`
  },
  {
    id: 16,
    name: "Glowing Dot",
    description: "Dot with a glowing effect",
    tags: ["dot", "glow"],
    isHot: false,
    css: `
.glowing-dot {
  width: 20px;
  height: 20px;
  background-color: #3b82f6;
  border-radius: 50%;
  animation: glow 1.5s ease-in-out infinite;
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 5px #3b82f6; }
  50% { box-shadow: 0 0 20px #3b82f6; }
}`,
    html: `<div class="glowing-dot"></div>`
  },
  {
    id: 17,
    name: "Orbiting Dots",
    description: "Four dots orbiting a center in a smooth circular path",
    tags: ["dots", "orbit"],
    isHot: false,
    css: `
.orbiting-dots {
  position: relative;
  width: 48px;
  height: 48px;
}
.orbit-dot {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #3b82f6;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: orbit 1.2s linear infinite;
}
.orbit-dot:nth-child(1) { animation-delay: 0s; }
.orbit-dot:nth-child(2) { animation-delay: 0.3s; }
.orbit-dot:nth-child(3) { animation-delay: 0.6s; }
.orbit-dot:nth-child(4) { animation-delay: 0.9s; }

@keyframes orbit {
  0% { transform: translate(-50%, -50%) rotate(0deg) translateX(18px); }
  100% { transform: translate(-50%, -50%) rotate(360deg) translateX(18px); }
}
`,
    html: `<div class="orbiting-dots">
  <div class="orbit-dot"></div>
  <div class="orbit-dot"></div>
  <div class="orbit-dot"></div>
  <div class="orbit-dot"></div>
</div>`
  },
  {
    id: 18,
    name: "Stacked Bars",
    description: "Three bars stacking up and down in a wave motion",
    tags: ["bars", "wave"],
    isHot: false,
    css: `
.stacked-bars {
  display: flex;
  align-items: flex-end;
  height: 32px;
  gap: 4px;
}
.stacked-bar {
  width: 8px;
  background: #3b82f6;
  border-radius: 4px;
  animation: stack-wave 1.2s infinite;
}
.stacked-bar:nth-child(1) { height: 12px; animation-delay: 0s; }
.stacked-bar:nth-child(2) { height: 20px; animation-delay: 0.2s; }
.stacked-bar:nth-child(3) { height: 28px; animation-delay: 0.4s; }

@keyframes stack-wave {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(1.7); }
}
`,
    html: `<div class="stacked-bars">
  <div class="stacked-bar"></div>
  <div class="stacked-bar"></div>
  <div class="stacked-bar"></div>
</div>`
  },
  {
    id: 19,
    name: "Pulse Ring",
    description: "A ring that pulses with a glowing effect",
    tags: ["ring", "pulse"],
    isHot: false,
    css: `
.pulse-ring {
  width: 48px;
  height: 48px;
  border: 4px solid #3b82f6;
  border-radius: 50%;
  box-shadow: 0 0 0 0 #3b82f6;
  animation: pulse-ring 1.2s infinite;
}
@keyframes pulse-ring {
  0% {
    box-shadow: 0 0 0 0 #3b82f6;
    opacity: 1;
  }
  70% {
    box-shadow: 0 0 0 12px rgba(59,130,246,0);
    opacity: 0.7;
  }
  100% {
    box-shadow: 0 0 0 0 #3b82f6;
    opacity: 1;
  }
}
`,
    html: `<div class="pulse-ring"></div>`
  },
  {
    id: 20,
    name: "Flip Dots",
    description: "Dots flipping in 3D with a staggered animation",
    tags: ["dots", "flip"],
    isHot: false,
    css: `
.flip-dots {
  display: flex;
  gap: 8px;
}
.flip-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #3b82f6;
  animation: flip-dot 1.2s cubic-bezier(.68,-0.55,.27,1.55) infinite;
  transform-style: preserve-3d;
}
.flip-dot:nth-child(1) { animation-delay: 0s; }
.flip-dot:nth-child(2) { animation-delay: 0.2s; }
.flip-dot:nth-child(3) { animation-delay: 0.4s; }
.flip-dot:nth-child(4) { animation-delay: 0.6s; }

@keyframes flip-dot {
  0%, 100% { transform: rotateY(0deg); }
  50% { transform: rotateY(180deg); }
}
`,
    html: `<div class="flip-dots">
  <div class="flip-dot"></div>
  <div class="flip-dot"></div>
  <div class="flip-dot"></div>
  <div class="flip-dot"></div>
</div>`
  },
  {
    id: 21,
    name: "Rotating Bars",
    description: "Four bars rotating around a center with a fading effect",
    tags: ["bars", "rotate"],
    isHot: false,
    css: `
.rotating-bars {
  position: relative;
  width: 48px;
  height: 48px;
}
.rot-bar {
  position: absolute;
  width: 8px;
  height: 24px;
  background: #3b82f6;
  border-radius: 4px;
  opacity: 0.5;
  left: 20px;
  top: 0;
  transform-origin: 4px 24px;
  animation: rot-bar-fade 1.2s linear infinite;
}
.rot-bar:nth-child(1) { transform: rotate(0deg); animation-delay: 0s; }
.rot-bar:nth-child(2) { transform: rotate(90deg); animation-delay: 0.3s; }
.rot-bar:nth-child(3) { transform: rotate(180deg); animation-delay: 0.6s; }
.rot-bar:nth-child(4) { transform: rotate(270deg); animation-delay: 0.9s; }

@keyframes rot-bar-fade {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}
`,
    html: `<div class="rotating-bars">
  <div class="rot-bar"></div>
  <div class="rot-bar"></div>
  <div class="rot-bar"></div>
  <div class="rot-bar"></div>
</div>`
  },
  {
    id: 22,
    name: "Heartbeat Dots",
    description: "Three dots pulsing in a heartbeat rhythm",
    tags: ["dots", "pulse"],
    isHot: false,
    css: `
.heartbeat-dots {
  display: flex;
  gap: 8px;
  align-items: center;
}
.heartbeat-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #3b82f6;
  animation: heartbeat-dot 1.1s infinite;
}
.heartbeat-dot:nth-child(2) { animation-delay: 0.2s; }
.heartbeat-dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes heartbeat-dot {
  0%, 100% { transform: scale(1); opacity: 0.7; }
  30% { transform: scale(1.3); opacity: 1; }
  60% { transform: scale(0.9); opacity: 0.5; }
}
`,
    html: `<div class="heartbeat-dots">
  <div class="heartbeat-dot"></div>
  <div class="heartbeat-dot"></div>
  <div class="heartbeat-dot"></div>
</div>`
  },
  {
    id: 23,
    name: "Morphing Ring",
    description: "A ring morphs between circle and square with a smooth transition",
    tags: ["ring", "morph"],
    isHot: false,
    css: `
.morphing-ring {
  width: 40px;
  height: 40px;
  border: 4px solid #3b82f6;
  border-radius: 50%;
  animation: morph-ring 1.6s ease-in-out infinite;
}
@keyframes morph-ring {
  0%, 100% { border-radius: 50%; }
  50% { border-radius: 0%; }
}
`,
    html: `<div class="morphing-ring"></div>`
  },
  {
    id: 24,
    name: "Wave Dots",
    description: "Five dots moving up and down in a wave pattern",
    tags: ["dots", "wave"],
    isHot: false,
    css: `
.wave-dots {
  display: flex;
  gap: 6px;
  align-items: flex-end;
  height: 24px;
}
.wave-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #3b82f6;
  animation: wave-dot 1.2s infinite;
}
.wave-dot:nth-child(1) { animation-delay: 0s; }
.wave-dot:nth-child(2) { animation-delay: 0.15s; }
.wave-dot:nth-child(3) { animation-delay: 0.3s; }
.wave-dot:nth-child(4) { animation-delay: 0.45s; }
.wave-dot:nth-child(5) { animation-delay: 0.6s; }

@keyframes wave-dot {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
`,
    html: `<div class="wave-dots">
  <div class="wave-dot"></div>
  <div class="wave-dot"></div>
  <div class="wave-dot"></div>
  <div class="wave-dot"></div>
  <div class="wave-dot"></div>
</div>`
  },
  {
    id: 25,
    name: "Dot Orbit",
    description: "A single dot orbits around a central dot in a smooth circular path.",
    tags: ["dots", "orbit"],
    isHot: false,
    css: `
.dot-orbit-container {
  position: relative;
  width: 40px;
  height: 40px;
}
.dot-orbit-center {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #3b82f6;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dot-orbit {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #8b5cf6;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(0deg) translateX(16px);
  animation: dot-orbit-anim 1.2s linear infinite;
}
@keyframes dot-orbit-anim {
  0% { transform: translate(-50%, -50%) rotate(0deg) translateX(16px);}
  100% { transform: translate(-50%, -50%) rotate(360deg) translateX(16px);}
}
`,
    html: `<div class="dot-orbit-container">
  <div class="dot-orbit-center"></div>
  <div class="dot-orbit"></div>
</div>`
  },
  {
    id: 26,
    name: "Bar Pulse",
    description: "A single bar pulses up and down in the center.",
    tags: ["bar", "pulse"],
    isHot: false,
    css: `
.bar-pulse {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bar-pulse-bar {
  width: 8px;
  height: 24px;
  background: #3b82f6;
  border-radius: 4px;
  animation: bar-pulse-anim 1s infinite;
}
@keyframes bar-pulse-anim {
  0%, 100% { transform: scaleY(1);}
  50% { transform: scaleY(1.5);}
}
`,
    html: `<div class="bar-pulse">
  <div class="bar-pulse-bar"></div>
</div>`
  },
  {
    id: 27,
    name: "Rotating Square",
    description: "A square rotates and morphs its border radius for a geometric effect.",
    tags: ["square", "spin"],
    isHot: false,
    css: `
.rotating-square-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}
.rotating-square {
  width: 24px;
  height: 24px;
  background: #3b82f6;
  border-radius: 6px;
  animation: rotating-square-spin 1.1s linear infinite, rotating-square-morph 2.2s ease-in-out infinite;
}
@keyframes rotating-square-spin {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}
@keyframes rotating-square-morph {
  0%, 100% { border-radius: 6px;}
  25% { border-radius: 50% 6px 6px 6px;}
  50% { border-radius: 50%;}
  75% { border-radius: 6px 50% 6px 6px;}
}
`,
    html: `<div class="rotating-square-container">
  <div class="rotating-square"></div>
</div>`
  },
  {
    id: 28,
    name: "Dual Dots",
    description: "Two dots bounce up and down in opposite phase.",
    tags: ["dots", "bounce"],
    isHot: false,
    css: `
.dual-dots {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  height: 24px;
}
.dual-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #3b82f6;
  animation: dual-dot-bounce 1s infinite;
}
.dual-dot:last-child {
  background: #8b5cf6;
  animation-delay: 0.5s;
}
@keyframes dual-dot-bounce {
  0%, 100% { transform: translateY(0);}
  50% { transform: translateY(-12px);}
}
`,
    html: `<div class="dual-dots">
  <div class="dual-dot"></div>
  <div class="dual-dot"></div>
</div>`
  },
  // 29: Dynamic Grid
  {
    id: 29,
    name: "Dynamic Grid",
    description: "A 3x3 grid of dots animating in a wave pattern for a modern, high-end look.",
    tags: ["grid", "wave"],
    isHot: true,
    css: `
.dynamic-grid {
  display: grid;
  grid-template-columns: repeat(3, 12px);
  grid-template-rows: repeat(3, 12px);
  gap: 8px;
  justify-content: center;
  align-items: center;
}
.dynamic-grid-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #3b82f6;
  animation: grid-wave 1.2s infinite;
}
.dynamic-grid-dot:nth-child(1) { animation-delay: 0s; }
.dynamic-grid-dot:nth-child(2) { animation-delay: 0.1s; }
.dynamic-grid-dot:nth-child(3) { animation-delay: 0.2s; }
.dynamic-grid-dot:nth-child(4) { animation-delay: 0.1s; }
.dynamic-grid-dot:nth-child(5) { animation-delay: 0.2s; }
.dynamic-grid-dot:nth-child(6) { animation-delay: 0.3s; }
.dynamic-grid-dot:nth-child(7) { animation-delay: 0.2s; }
.dynamic-grid-dot:nth-child(8) { animation-delay: 0.3s; }
.dynamic-grid-dot:nth-child(9) { animation-delay: 0.4s; }

@keyframes grid-wave {
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.4); opacity: 1; }
}
`,
    html: `<div class="dynamic-grid">
  <div class="dynamic-grid-dot"></div>
  <div class="dynamic-grid-dot"></div>
  <div class="dynamic-grid-dot"></div>
  <div class="dynamic-grid-dot"></div>
  <div class="dynamic-grid-dot"></div>
  <div class="dynamic-grid-dot"></div>
  <div class="dynamic-grid-dot"></div>
  <div class="dynamic-grid-dot"></div>
  <div class="dynamic-grid-dot"></div>
</div>`
  },
  // 30: Infinity Spinner
  {
    id: 30,
    name: "Infinity Spinner",
    description: "An elegant infinity symbol loader with flowing gradient animation.",
    tags: ["infinity", "gradient"],
    isHot: true,
    css: `
.infinity-spinner {
  width: 56px;
  height: 32px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.infinity-shape {
  width: 56px;
  height: 32px;
  position: absolute;
  left: 0;
  top: 0;
}
.infinity-path {
  fill: none;
  stroke: var(--loader-primary, #3b82f6);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 140;
  stroke-dashoffset: 0;
  animation: infinity-dash 1.4s alternate infinite;
}
@keyframes infinity-dash {
  0% { stroke-dashoffset: 140; }
  100% { stroke-dashoffset: 0; }
}
`,
    html: `<div class="infinity-spinner">
  <svg class="infinity-shape" viewBox="0 0 56 34">
    <path class="infinity-path" d="M8,16 C8,8 24,8 24,16 C24,24 40,24 40,16 C40,8 56,8 56,16 C56,24 40,24 40,16 C40,8 24,8 24,16 C24,24 8,24 8,16 Z"/>
  </svg>
</div>`
  },
  // 31: Neural Network
  {
    id: 31,
    name: "Neural Network",
    description: "Animated network of nodes and connections, simulating neural activity.",
    tags: ["network", "pulse"],
    isHot: true,
    css: `
.neural-network {
  width: 56px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.neural-node {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #3b82f6;
  animation: node-pulse 1.2s infinite;
}
.neural-node.n1 { left: 4px;  top: 16px; animation-delay: 0s; }
.neural-node.n2 { left: 22px; top: 4px;  animation-delay: 0.2s; }
.neural-node.n3 { left: 22px; top: 28px; animation-delay: 0.4s; }
.neural-node.n4 { left: 42px; top: 16px; animation-delay: 0.6s; }
.neural-conn {
  position: absolute;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  opacity: 0.4;
  border-radius: 2px;
}
.neural-conn.c1 { left: 9px; top: 12px; width: 15px; height: 2px; transform: rotate(-25deg);}
.neural-conn.c2 { left: 9px; top: 28px; width: 15px; height: 2px; transform: rotate(25deg);}
.neural-conn.c3 { left: 31px; top: 13px; width: 15px; height: 2px; transform: rotate(25deg);}
.neural-conn.c4 { left: 31px; top: 27px; width: 15px; height: 2px; transform: rotate(-25deg);}
@keyframes node-pulse {
  0%, 100% { box-shadow: 0 0 0 0 #3b82f6; opacity: 1; }
  50% { box-shadow: 0 0 8px 2px #8b5cf6; opacity: 0.7; }
}
`,
    html: `<div class="neural-network">
  <div class="neural-node n1"></div>
  <div class="neural-node n2"></div>
  <div class="neural-node n3"></div>
  <div class="neural-node n4"></div>
  <div class="neural-conn c1"></div>
  <div class="neural-conn c2"></div>
  <div class="neural-conn c3"></div>
  <div class="neural-conn c4"></div>
</div>`
  },
  // 32: Quantum Dots
  {
    id: 32,
    name: "Quantum Dots",
    description: "Four dots split and merge in a quantum-inspired animation.",
    tags: ["dots", "quantum"],
    isHot: true,
    css: `
.quantum-dots {
  position: relative;
  width: 48px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.qdot {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #3b82f6;
  animation: qdot-move 1.2s infinite;
}
.qdot:nth-child(1) { left: 19px; animation-delay: 0s; }
.qdot:nth-child(2) { left: 29px; animation-delay: 0.3s; }
.qdot:nth-child(3) { left: 19px; animation-delay: 0.6s; }
.qdot:nth-child(4) { left: 29px; animation-delay: 0.9s; }
@keyframes qdot-move {
  0%, 100% { top: 7px; transform: scale(1);}
  25% { top: 0px; transform: scale(1.2);}
  50% { top: 7px; transform: scale(1);}
  75% { top: 14px; transform: scale(0.8);}
}
`,
    html: `<div class="quantum-dots">
  <div class="qdot"></div>
  <div class="qdot"></div>
  <div class="qdot"></div>
  <div class="qdot"></div>
</div>`
  }
];
