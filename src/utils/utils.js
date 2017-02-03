/* global window fetch */

export function pad2(number) {
  let newNumber = 0;
  if (number <= 99) {
    newNumber = (`0${number}`).slice(-2);
  } else {
    newNumber = number;
  }
  return newNumber;
}

export function durationFromMs(ms) {
  if (typeof ms !== 'number') {
    return '';
  }
  let x = ms / 1000;
  const seconds = pad2(Math.floor(x % 60));
  x /= 60;
  const minutes = pad2(Math.floor(x % 60));
  x /= 60;
  let hours = Math.floor(x % 24);
  hours = hours ? `${pad2(hours)}:` : '';
  return `${hours}${minutes}:${seconds}`;
}
