export interface ProgressionRow {
  level: number;
  descriptionHtml: string;
  values: string[];
}

export interface ProgressionTable {
  headerTemplate: string | undefined;
  rows: ProgressionRow[];
}

export interface SupportParserInput {
  skillName: string;
  description: string[];
  progressionTable: {
    description: Record<number, string>;
    values: Record<number, string[]>;
  };
}

export type SupportLevelParser = (
  input: SupportParserInput,
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
  parser: SupportLevelParser;
}
