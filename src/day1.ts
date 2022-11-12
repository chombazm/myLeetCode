export const palindromeNumber = (num: number): boolean => {
  let reversed = 0;

  if (num < 0 || (num % 10 === 0 && num !== 0)) return false;

  while (num > reversed) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return num === reversed || num === Math.floor(reversed / 10);
};
