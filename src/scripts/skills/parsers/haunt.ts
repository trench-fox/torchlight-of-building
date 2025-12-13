import {
  extractProgressionTable,
  parseNumericValue,
  validateAllLevels,
} from "../progression_table";
import type { SkillLevelParser } from "../types";
import { createConstantLevels } from "../utils";

export const hauntParser: SkillLevelParser = ($, skillName) => {
  // Parse ShadowQuant from skill card description
  // Find the text-mod value that precedes "Shadow Quantity"
  const explicitModHtml = $("div.card.ui_item.popupItem:not(.previousItem)")
    .first()
    .find("div.explicitMod")
    .first()
    .html();

  if (explicitModHtml === null) {
    throw new Error(`${skillName}: no explicitMod found`);
  }

  // Match pattern like "+2</span> Shadow Quantity" or "+2</span> <e ...>Shadow</e> Quantity"
  const shadowQuantMatch = explicitModHtml.match(
    /<span class="text-mod">([+-]?\d+)<\/span>.*?Shadow.*?Quantity/i,
  );
  if (shadowQuantMatch === null) {
    throw new Error(`${skillName}: could not find Shadow Quantity value`);
  }
  const shadowQuant = parseNumericValue(shadowQuantMatch[1]);
  const shadowQuantLevels = createConstantLevels(shadowQuant);

  // Parse DmgPct from progression table
  const table = extractProgressionTable($);
  if (table === undefined) {
    throw new Error(`No progression table found for "${skillName}"`);
  }

  const dmgPctLevels: Record<number, number> = {};
  for (const row of table.rows) {
    // Haunt progression table has level in column 0 and damage value in column 1
    const dmgValue = row.values[0];
    if (dmgValue === undefined) {
      throw new Error(`${skillName} level ${row.level}: missing damage value`);
    }

    dmgPctLevels[row.level] = parseNumericValue(dmgValue, {
      asPercentage: true,
    });
  }

  validateAllLevels(shadowQuantLevels, skillName);
  validateAllLevels(dmgPctLevels, skillName);

  // Return: [ShadowQuant levels, DmgPct levels]
  return [shadowQuantLevels, dmgPctLevels];
};
