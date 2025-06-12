
export const loaderData = [
  {
    id: 1,
    name: "Spinning Circle",
    description: "Classic spinning circle loader with smooth rotation",
    tags: ["circle", "spin", "classic", "simple"],
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
    tags: ["dots", "bounce", "sequence", "playful"],
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
    tags: ["bar", "progress", "gradient", "linear"],
    isHot: false,
    css: `
.progress-bar {
  width: 200px;
  height: 6px;
  background-color: #f3f3f3;
  border-radius: 3px;
  overflow: hidden;
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
    tags: ["circle", "pulse", "fade", "gentle"],
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
    tags: ["square", "flip", "3d", "perspective"],
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
    tags: ["bars", "wave", "rhythm", "audio"],
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
    tags: ["ring", "dual", "interlocking", "complex"],
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
    tags: ["dots", "typing", "chat", "sequential"],
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
    tags: ["square", "circle", "morph", "transform"],
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
    tags: ["ripple", "rings", "expand", "fade"],
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
    tags: ["clock", "hand", "rotation", "time"],
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
    tags: ["heart", "pulse", "beat", "rhythm"],
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
];
