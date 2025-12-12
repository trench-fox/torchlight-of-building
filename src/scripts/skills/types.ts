import type { CheerioAPI } from "cheerio";

export interface ProgressionRow {
  level: number;
  descriptionHtml: string;
  values: string[];
}

export interface ProgressionTable {
  headerTemplate: string | undefined;
  rows: ProgressionRow[];
}

// Parser returns an array of level maps, one for each levelMod in the template
export type SkillLevelParser = (
  $: CheerioAPI,
  skillName: string,
) => Record<number, number>[];

export type SkillCategory =
  | "support"
  | "active"
  | "passive"
  | "activation_medium"
  | "magnificent_support"
  | "noble_support";

export interface SkillParserEntry {
  skillName: string;
  categories: SkillCategory[];
  parser: SkillLevelParser;
}
