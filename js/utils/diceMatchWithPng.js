import { dice1, dice2, dice3, dice4, dice5, dice6 } from '../../assets/dices';

export const diceMatchWithPng = dice => {
  switch (dice) {
    case 1:
      return dice1;
    case 2:
      return dice2;
    case 3:
      return dice3;
    case 4:
      return dice4;
    case 5:
      return dice5;
    case 6:
      return dice6;
  }
};
