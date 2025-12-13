import type {
  CritDmgModType,
  CritRatingModType,
  DmgModType,
} from "./constants";
import type { DmgRange } from "./core";

export type DmgType = "physical" | "cold" | "lightning" | "fire" | "erosion";

export type StackableBuff = "willpower";

export type Mod =
  | {
      type: "DmgPct";
      value: number;
      modType: DmgModType;
      addn: boolean;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "FlatDmgToAtks";
      value: DmgRange;
      dmgType: DmgType;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "FlatDmgToAtksAndSpells";
      value: DmgRange;
      dmgType: DmgType;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "FlatDmgToSpells";
      value: DmgRange;
      dmgType: DmgType;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "CritRatingPct";
      value: number;
      modType: CritRatingModType;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "CritDmgPct";
      value: number;
      addn: boolean;
      modType: CritDmgModType;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "AspdPct";
      value: number;
      addn: boolean;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "CspdPct";
      value: number;
      addn: boolean;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "AspdAndCspdPct";
      value: number;
      addn: boolean;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "MinionAspdAndCspdPct";
      value: number;
      addn: boolean;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "DblDmg";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "Str";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "StrPct";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "Dex";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "DexPct";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "FervorEff";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "SteepStrikeChance";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "SteepStrikeDmg";
      value: number;
      addn: boolean;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "SweepSlashDmg";
      value: number;
      addn: boolean;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "Fervor";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "CritDmgPerFervor";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "AddnMainHandDmgPct";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "GearAspdPct";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "FlatGearDmg";
      value: DmgRange;
      modType:
        | "physical"
        | "cold"
        | "lightning"
        | "fire"
        | "erosion"
        | "elemental";
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "GearPhysDmgPct";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "AttackBlockChancePct";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "SpellBlockChancePct";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "MaxLifePct";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "MaxEnergyShieldPct";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "ArmorPct";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "EvasionPct";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "LifeRegainPct";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "EnergyShieldRegainPct";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "MultistrikeChancePct";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "ConvertDmgPct";
      from: DmgType;
      to: DmgType;
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "AddsDmgAs";
      from: DmgType;
      to: DmgType;
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "MaxWillpowerStacks";
      value: number;
      per?: StackableBuff;
      src?: string;
    }
  | {
      type: "foo";
      src?: string;
    }
  | {
      type: "CoreTalent";
      name:
        | "Last Stand"
        | "Dirty Tricks"
        | "Centralize"
        | "Tenacity"
        | "Hidden Mastery"
        | "Formless"
        | "Tradeoff"
        | "Unmatched Valor";
      src?: string;
    };

export type ModOfType<T> = Extract<Mod, { type: T }>;

// Compile-time check: all Mod variants must have src?: string
type _AssertAllModsHaveSrc = Mod["src"];

// Compile-time check: all Mod variants with a value property must have per?: StackableBuff
type _ModsWithValue = Extract<Mod, { value: unknown }>;
type _AssertValueHasPer = _ModsWithValue["per"];
