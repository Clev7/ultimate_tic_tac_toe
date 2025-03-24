export function initBoard(): UtttBoard {
  const [R, C, r, c] = [3, 3, 3, 3];
  const INIT_VAL: string = "___";

  return Array.from({ length: R }, () =>
    Array.from({ length: C }, () =>
      Array.from({ length: r }, () => INIT_VAL)
    )
  );
}

export function initBoardResults(): BoardResult[][] {
  const [R, C] = [3, 3];

  return Array.from({ length: R }, () => Array.from({ length: C }, () => BoardResult.UNFINISHED))
}