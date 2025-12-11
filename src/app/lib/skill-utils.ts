import type {
  ActiveSkill,
  BaseSkill,
  InferredSkillKind,
  SupportSkill,
  SupportTarget,
} from "@/src/data/skill/types";

type TargetSkill = ActiveSkill | BaseSkill;

const matchesTarget = (skill: TargetSkill, target: SupportTarget): boolean => {
  if (target === "any") return true;

  // Matches Spell skills excluding Summon, Channeled, Sentry
  if (target === "spell_burst") {
    const tags = skill.tags;
    return (
      tags.includes("Spell") &&
      !tags.includes("Summon") &&
      !tags.includes("Channeled") &&
      !tags.includes("Sentry")
    );
  }

  // InferredSkillKind string - only active skills have kinds
  if (typeof target === "string") {
    if (skill.type !== "Active") return false;
    return (skill as ActiveSkill).kinds.includes(target as InferredSkillKind);
  }

  // { skillType: "active" | "passive" } optionally with requiredKind
  if ("skillType" in target) {
    const typeMatches =
      (target.skillType === "active" && skill.type === "Active") ||
      (target.skillType === "passive" && skill.type === "Passive");

    if (!typeMatches) return false;

    // Check requiredKind if present
    if ("requiredKind" in target) {
      if (skill.type !== "Active") return false;
      return (skill as ActiveSkill).kinds.includes(target.requiredKind);
    }
    return true;
  }

  // { tags: SkillTag[] } optionally with requiredKind - must have ALL specified tags
  if ("tags" in target) {
    const tagsMatch = target.tags.every((tag) => skill.tags.includes(tag));
    if (!tagsMatch) return false;

    // Check requiredKind if present
    if ("requiredKind" in target) {
      if (skill.type !== "Active") return false;
      return (skill as ActiveSkill).kinds.includes(target.requiredKind);
    }
    return true;
  }

  return false;
};

export const canSupport = (
  skill: TargetSkill,
  supportSkill: SupportSkill,
): boolean => {
  // cannotSupportTargets takes precedence
  if (supportSkill.cannotSupportTargets.some((t) => matchesTarget(skill, t))) {
    return false;
  }

  // Check if any supportTarget matches
  return supportSkill.supportTargets.some((t) => matchesTarget(skill, t));
};

// all the strings are the names of the skills
export interface AvailableSupports {
  compatible: string[];
  activationMedium?: string;
  magnificent?: string;
  noble?: string;
  other: string[];
}

export const listAvailableSupports = (
  skill: TargetSkill,
  // supportSkillSlot is 1-indexed
  supportSkillSlot: number,
): AvailableSupports => {
  throw Error("to be implemented");
};
