'use strict';
import { DOM } from './dom.js';

let scores, currentScore, activePlayer, playing;
const winningScore = 100;

const initApp = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  DOM.score0.textContent = 0;
  DOM.score1.textContent = 0;
  DOM.current0.textContent = 0;
  DOM.current1.textContent = 0;

  DOM.diceEL.classList.add('hidden');
  DOM.player0.classList.add('player--active');
  DOM.player1.classList.remove('player--active');
  DOM.player0.classList.remove('player--winner');
  DOM.player1.classList.remove('player--winner');
};
initApp();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  DOM.player0.classList.toggle('player--active');
  DOM.player1.classList.toggle('player--active');
};

// Rolling dice functionality
DOM.btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // 2. Display dice
    DOM.diceEL.classList.remove('hidden');
    DOM.diceEL.src = `./assets/dices/dice-${dice}.png`;
    // 3. Check for rolled 1: if true, switch to next player

    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

DOM.btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // winning statement
    if (scores[activePlayer] >= winningScore) {
      playing = false;
      DOM.diceEL.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // switch player
      switchPlayer();
    }
  }
});

DOM.btnNew.addEventListener('click', initApp);
