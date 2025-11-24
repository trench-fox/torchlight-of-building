import { Affix, Gear, GearPage, Loadout, RawGear, RawLoadout } from "./core";
import { parseMod } from "./mod_parser";

const parseAffixString = (affixString: string): Affix => {
  // Split by newline to handle multi-line affixes
  const lines = affixString.split("\n").map((line) => line.trim());

  // Parse each line as a separate mod
  const mods = lines
    .filter((line) => line.length > 0) // Skip empty lines
    .map((line) => parseMod(line))
    .filter((result) => typeof result !== "string"); // Filter out parse failures

  return {
    mods,
    raw: affixString,
  };
};

const parseGear = (rawGear: RawGear): Gear => {
  return {
    gearType: rawGear.gearType,
    affixes: rawGear.affixes.map(parseAffixString),
  };
};

export const parse_loadout = (rawLoadout: RawLoadout): Loadout => {
  const gearPage: GearPage = {};

  // Parse each gear slot in the equipment page
  for (const [slot, rawGear] of Object.entries(rawLoadout.equipmentPage)) {
    if (rawGear) {
      gearPage[slot as keyof GearPage] = parseGear(rawGear);
    }
  }

  return {
    equipmentPage: gearPage,
    talentPage: { affixes: [] },
    divinityPage: { slates: [] },
    customConfiguration: [],
  };
};
