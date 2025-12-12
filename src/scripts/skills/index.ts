import { willpowerParser } from "./parsers/willpower";
import type { SkillCategory, SkillParserEntry } from "./types";

export const SKILL_PARSERS: SkillParserEntry[] = [
  {
    skillName: "Willpower",
    categories: ["support"],
    parser: willpowerParser,
  },
];

export const getParserForSkill = (
  skillName: string,
  category: SkillCategory,
): SkillParserEntry | undefined => {
  return SKILL_PARSERS.find(
    (entry) =>
      entry.skillName === skillName && entry.categories.includes(category),
  );
};
