import {
  extractProgressionTable,
  extractTextModValues,
  parseNumericValue,
  validateAllLevels,
} from "../progression_table";
import type { SkillLevelParser } from "../types";
import { createConstantLevels } from "../utils";

export const willpowerParser: SkillLevelParser = ($, skillName) => {
  const table = extractProgressionTable($);
  if (table === undefined) {
    throw new Error(`No progression table found for "${skillName}"`);
  }

  // Parse max stacks from description (1st text-mod: "Stacks up to 6 time(s)")
  // This value is constant across all levels
  const firstRow = table.rows[0];
  if (firstRow === undefined) {
    throw new Error(`${skillName}: no rows in progression table`);
  }
  const firstRowValues = extractTextModValues(firstRow.descriptionHtml);
  if (firstRowValues.length < 1) {
    throw new Error(`${skillName}: expected at least 1 text-mod value`);
  }
  const maxStacks = parseNumericValue(firstRowValues[0]);
  const maxStacksLevels = createConstantLevels(maxStacks);

  // Parse damage percentage values (3rd text-mod in each row)
  const dmgPctLevels: Record<number, number> = {};
  for (const row of table.rows) {
    const values = extractTextModValues(row.descriptionHtml);

    if (values.length < 3) {
      throw new Error(
        `${skillName} level ${row.level}: expected at least 3 text-mod values, got ${values.length}`,
      );
    }

    dmgPctLevels[row.level] = parseNumericValue(values[2], {
      asPercentage: true,
    });
  }

  validateAllLevels(maxStacksLevels, skillName);
  validateAllLevels(dmgPctLevels, skillName);

  // Return: [MaxWillpowerStacks levels, DmgPct levels]
  return [maxStacksLevels, dmgPctLevels];
};
