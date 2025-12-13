import {
  extractProgressionTable,
  parseNumericValue,
  validateAllLevels,
} from "../progression_table";
import type { SkillLevelParser } from "../types";
import { createConstantLevels } from "../utils";

export const steamrollParser: SkillLevelParser = ($, skillName) => {
  // Parse AspdPct from skill card description
  // Find the text-mod value that precedes "Attack Speed"
  const explicitModHtml = $("div.card.ui_item.popupItem:not(.previousItem)")
    .first()
    .find("div.explicitMod")
    .first()
    .html();

  if (explicitModHtml === null) {
    throw new Error(`${skillName}: no explicitMod found`);
  }

  // Match pattern like "-15</span>% Attack Speed"
  const aspdMatch = explicitModHtml.match(
    /<span class="text-mod">([+-]?\d+(?:\.\d+)?)<\/span>%.*?Attack Speed/i,
  );
  if (aspdMatch === null) {
    throw new Error(`${skillName}: could not find Attack Speed value`);
  }
  const aspdPct = parseNumericValue(aspdMatch[1], { asPercentage: true });
  const aspdPctLevels = createConstantLevels(aspdPct);

  // Parse DmgPct values from progression table
  const table = extractProgressionTable($);
  if (table === undefined) {
    throw new Error(`No progression table found for "${skillName}"`);
  }

  const meleeDmgPctLevels: Record<number, number> = {};
  const ailmentDmgPctLevels: Record<number, number> = {};

  for (const row of table.rows) {
    // Steamroll progression table has:
    // - level in column 0
    // - melee damage in column 1 (values[0])
    // - ailment damage in column 2 (values[1])
    const meleeDmgValue = row.values[0];
    const ailmentDmgValue = row.values[1];

    if (meleeDmgValue === undefined) {
      throw new Error(
        `${skillName} level ${row.level}: missing melee damage value`,
      );
    }
    if (ailmentDmgValue === undefined) {
      throw new Error(
        `${skillName} level ${row.level}: missing ailment damage value`,
      );
    }

    meleeDmgPctLevels[row.level] = parseNumericValue(meleeDmgValue, {
      asPercentage: true,
    });
    ailmentDmgPctLevels[row.level] = parseNumericValue(ailmentDmgValue, {
      asPercentage: true,
    });
  }

  validateAllLevels(aspdPctLevels, skillName);
  validateAllLevels(meleeDmgPctLevels, skillName);
  validateAllLevels(ailmentDmgPctLevels, skillName);

  // Return: [AspdPct levels, DmgPct melee levels, DmgPct ailment levels]
  return [aspdPctLevels, meleeDmgPctLevels, ailmentDmgPctLevels];
};
