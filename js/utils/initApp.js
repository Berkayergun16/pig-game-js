import { DOM } from '../dom.js';

export const initApp = () => {
  DOM.score0.textContent = 0;
  DOM.score1.textContent = 0;
  DOM.diceEL.classList.add('hidden');
};
