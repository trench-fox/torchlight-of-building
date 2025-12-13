import { SupportSkills } from "@/src/data/skill/support";
import type {
  BaseSupportSkill,
  SupportSkillName,
} from "@/src/data/skill/types";
import type { Mod } from "../mod";

export const getSupportSkillMods = (
  skillName: SupportSkillName,
  level: number,
): Mod[] => {
  // re-widen type to BaseSupportSkill
  const skill = SupportSkills.find((s) => s.name === skillName) as
    | BaseSupportSkill
    | undefined;
  if (skill === undefined) {
    throw new Error(`Support skill "${skillName}" not found`);
  }

  const mods: Mod[] = [];

  if (skill.levelMods !== undefined) {
    for (const levelMod of skill.levelMods) {
      const value = levelMod.levels[level];
      if (value === undefined) {
        throw new Error(`Level ${level} not found for "${skillName}" levelMod`);
      }
      mods.push({ ...levelMod.template, value } as Mod);
    }
  }

  return mods;
};
