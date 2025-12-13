const EXPECTED_LEVELS = 40;

/**
 * Creates a levels record with the same value for all 40 levels.
 * Used for mods that don't vary by skill level.
 */
export const createConstantLevels = (value: number): Record<number, number> => {
  return Object.fromEntries(
    Array.from({ length: EXPECTED_LEVELS }, (_, i) => [i + 1, value]),
  ) as Record<number, number>;
};
