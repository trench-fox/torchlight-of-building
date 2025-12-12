import type { SupportSkillName } from "@/src/data/skill";
import type { Mod } from "../mod";

export type ModWithoutValue = Mod extends infer M
  ? M extends Mod
    ? Omit<M, "value">
    : never
  : never;

export type SkillModTemplate = {
  fixedMods?: Mod[];
  levelMods?: ModWithoutValue[];
};

export const skillModTemplates: Partial<
  Record<SupportSkillName, SkillModTemplate>
> = {
  Willpower: {
    fixedMods: [{ type: "MaxWillpowerStacks", value: 6 }],
    levelMods: [
      { type: "DmgPct", modType: "global", addn: false, per: "willpower" },
    ],
  },
};
