import type { SupportMod } from "../core";
import { t } from "../mod_parser";

const GLOBAL = "global" as const;

/**
 * Generic template parsers for support skill affixes.
 * Handles activation medium, magnificent, and noble support skills.
 */
const allSupportParsers = [
  // Activation medium parsers
  t("auto-used supported skills {value:int%} additional damage").output(
    "DmgPct",
    (c) => ({
      value: c.value,
      dmgModType: GLOBAL,
      addn: true,
    }),
  ),
  t("manually used supported skills {value:int%} additional damage").output(
    "DmgPct",
    (c) => ({
      value: c.value,
      dmgModType: GLOBAL,
      addn: true,
    }),
  ),
  t(
    "{value:int%} additional damage for minions summoned by the supported skill",
  ).output("MinionDmgPct", (c) => ({
    value: c.value,
    addn: true,
  })),

  // Magnificent/noble parsers
  t("{value:int%} additional damage for the supported skill").output(
    "DmgPct",
    (c) => ({
      value: c.value,
      dmgModType: GLOBAL,
      addn: true,
    }),
  ),
  t("{value:int%} projectile size for the supported skill").output(
    "ProjectileSizePct",
    (c) => ({
      value: c.value,
    }),
  ),
  t("{value:int%} additional ignite duration for the supported skill").output(
    "IgniteDurationPct",
    (c) => ({
      value: c.value,
    }),
  ),
  t("{value:int%} additional duration for the supported skill").output(
    "SkillEffDurationPct",
    (c) => ({
      value: c.value,
    }),
  ),
  // Mind Control: Concentrate specific parser
  t(
    "+{value:dec%} additional damage for this skill for every link less than maximum links",
  ).output("DmgPct", (c) => ({
    value: c.value,
    dmgModType: GLOBAL,
    addn: true,
    per: { stackable: "unused_mind_control_link" as const },
  })),
];

/**
 * Parse a single support affix text.
 * Returns undefined if no parser matches.
 */
const parseSupportAffix = (text: string): SupportMod[] | undefined => {
  const normalized = text.trim().toLowerCase();
  for (const parser of allSupportParsers) {
    const mods = parser.parse(normalized);
    if (mods !== undefined) {
      return mods.map((mod) => ({ mod }));
    }
  }
  return undefined;
};

export const parseSupportAffixes = (affixes: string[]): SupportMod[][] => {
  return affixes.map((text) => parseSupportAffix(text) ?? []);
};
