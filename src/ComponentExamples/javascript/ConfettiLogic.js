export const button1 = 'Submit'

import confetti from 'canvas-confetti';

export const fireConfetti = () => {
  confetti({
    particleCount: 150,
    spread: 60,
    origin: { y: 0.7 },
  });
};
