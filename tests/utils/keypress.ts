export enum Key {
  // Modifier keys
  Ctrl = "Control",
  Shift = "Shift",
  Alt = "Alt",
  Esc = "Escape",
  Delete = "Delete",
  Enter = "Enter",
  // Function keys
  F1 = "F1",
  F6 = "F6",
  F7 = "F7",
  F8 = "F8",
  F9 = "F9",
  F10 = "F10",
  // Arrow keys
  ArrowUp = "ArrowUp",
  // Letters
  A = "A",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G",
  J = "J",
  L = "L",
  M = "M",
  N = "N",
  O = "O",
  R = "R",
  S = "S",
  T = "T",
  V = "V",
  I = "I",
}
export const pressKeys = async (page: any, keys: Key[]) => {
  for (const key of keys) {
    await page.keyboard.down(key);
  }

  for (const key of keys) {
    await page.keyboard.up(key);
  }
};
