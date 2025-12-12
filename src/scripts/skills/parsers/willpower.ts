import {
  extractProgressionTable,
  extractTextModValues,
  parseNumericValue,
  validateAllLevels,
} from "../progression_table";
import type { SkillLevelParser } from "../types";

export const willpowerParser: SkillLevelParser = ($, skillName) => {
  const table = extractProgressionTable($);
  if (table === undefined) {
    throw new Error(`No progression table found for "${skillName}"`);
  }

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

  validateAllLevels(dmgPctLevels, skillName);
  return [dmgPctLevels]; // Array with one entry for the one levelMod
};
