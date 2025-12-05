import type { EquipmentType } from "./gear_data_types";
import type { Mod } from "./mod";

export interface Affix {
  mods?: Mod[];
  maxDivinity?: number;
  src?: string;
  text?: string;
}

export interface DmgRange {
  // inclusive on both ends
  min: number;
  max: number;
}

export interface Configuration {
  fervor: {
    enabled: boolean;
    points: number;
  };
}

export interface DivinitySlate {
  affixes: Affix[];
}

export interface Gear {
  equipmentType: EquipmentType;
  affixes: Affix[];
}

export interface TalentPage {
  affixes: Affix[];
}

export interface DivinityPage {
  slates: DivinitySlate[];
}

export interface EquippedGear {
  helmet?: Gear;
  chest?: Gear;
  neck?: Gear;
  gloves?: Gear;
  belt?: Gear;
  boots?: Gear;
  leftRing?: Gear;
  rightRing?: Gear;
  mainHand?: Gear;
  offHand?: Gear;
}

export interface GearPage {
  equippedGear: EquippedGear;
  inventory: Gear[];
}

export interface Loadout {
  gearPage: GearPage;
  talentPage: TalentPage;
  divinityPage: DivinityPage;
  customConfiguration: Affix[];
}
