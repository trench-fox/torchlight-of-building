import { describe, expect, it } from "vitest";
import { parse_loadout } from "./loadout_parser";
import { RawLoadout } from "./core";

describe("parse_loadout", () => {
  it("should parse a simple loadout with single-line affixes", () => {
    const rawLoadout: RawLoadout = {
      equipmentPage: {
        helmet: {
          gearType: "helmet",
          affixes: ["+10% fire damage", "+5% attack speed"],
        },
      },
    };

    const result = parse_loadout(rawLoadout);

    expect(result.equipmentPage.helmet).toBeDefined();
    expect(result.equipmentPage.helmet?.affixes).toHaveLength(2);

    // Check first affix
    expect(result.equipmentPage.helmet?.affixes[0].raw).toBe("+10% fire damage");
    expect(result.equipmentPage.helmet?.affixes[0].mods).toHaveLength(1);
    expect(result.equipmentPage.helmet?.affixes[0].mods[0]).toEqual({
      type: "DmgPct",
      value: 0.1,
      modType: "fire",
      addn: false,
    });

    // Check second affix
    expect(result.equipmentPage.helmet?.affixes[1].raw).toBe("+5% attack speed");
    expect(result.equipmentPage.helmet?.affixes[1].mods).toHaveLength(1);
    expect(result.equipmentPage.helmet?.affixes[1].mods[0]).toEqual({
      type: "AspdPct",
      value: 0.05,
      addn: false,
    });
  });

  it("should parse affixes with multiple mods separated by newlines", () => {
    const rawLoadout: RawLoadout = {
      equipmentPage: {
        chest: {
          gearType: "chest",
          affixes: ["+10% fire damage\n+5% attack speed\n+15% critical strike rating"],
        },
      },
    };

    const result = parse_loadout(rawLoadout);

    expect(result.equipmentPage.chest).toBeDefined();
    expect(result.equipmentPage.chest?.affixes).toHaveLength(1);
    expect(result.equipmentPage.chest?.affixes[0].raw).toBe(
      "+10% fire damage\n+5% attack speed\n+15% critical strike rating"
    );
    expect(result.equipmentPage.chest?.affixes[0].mods).toHaveLength(3);

    // Check all three mods
    expect(result.equipmentPage.chest?.affixes[0].mods[0]).toEqual({
      type: "DmgPct",
      value: 0.1,
      modType: "fire",
      addn: false,
    });
    expect(result.equipmentPage.chest?.affixes[0].mods[1]).toEqual({
      type: "AspdPct",
      value: 0.05,
      addn: false,
    });
    expect(result.equipmentPage.chest?.affixes[0].mods[2]).toEqual({
      type: "CritRatingPct",
      value: 0.15,
      modType: "global",
    });
  });

  it("should handle unrecognized mods by excluding them from mods array", () => {
    const rawLoadout: RawLoadout = {
      equipmentPage: {
        gloves: {
          gearType: "gloves",
          affixes: ["+10% fire damage\nsome unrecognized mod\n+5% attack speed"],
        },
      },
    };

    const result = parse_loadout(rawLoadout);

    expect(result.equipmentPage.gloves).toBeDefined();
    expect(result.equipmentPage.gloves?.affixes).toHaveLength(1);
    expect(result.equipmentPage.gloves?.affixes[0].raw).toBe(
      "+10% fire damage\nsome unrecognized mod\n+5% attack speed"
    );
    // Only 2 mods should be parsed (unrecognized one filtered out)
    expect(result.equipmentPage.gloves?.affixes[0].mods).toHaveLength(2);

    // Check that the two successfully parsed mods are correct
    expect(result.equipmentPage.gloves?.affixes[0].mods[0]).toEqual({
      type: "DmgPct",
      value: 0.1,
      modType: "fire",
      addn: false,
    });
    expect(result.equipmentPage.gloves?.affixes[0].mods[1]).toEqual({
      type: "AspdPct",
      value: 0.05,
      addn: false,
    });
  });

  it("should handle empty affixes array", () => {
    const rawLoadout: RawLoadout = {
      equipmentPage: {
        boots: {
          gearType: "boots",
          affixes: [],
        },
      },
    };

    const result = parse_loadout(rawLoadout);

    expect(result.equipmentPage.boots).toBeDefined();
    expect(result.equipmentPage.boots?.affixes).toHaveLength(0);
  });

  it("should handle multiple gear pieces", () => {
    const rawLoadout: RawLoadout = {
      equipmentPage: {
        helmet: {
          gearType: "helmet",
          affixes: ["+10% fire damage"],
        },
        chest: {
          gearType: "chest",
          affixes: ["+5% attack speed"],
        },
        gloves: {
          gearType: "gloves",
          affixes: ["+15% critical strike rating"],
        },
      },
    };

    const result = parse_loadout(rawLoadout);

    expect(result.equipmentPage.helmet).toBeDefined();
    expect(result.equipmentPage.chest).toBeDefined();
    expect(result.equipmentPage.gloves).toBeDefined();
    expect(result.equipmentPage.helmet?.affixes[0].raw).toBe("+10% fire damage");
    expect(result.equipmentPage.chest?.affixes[0].raw).toBe("+5% attack speed");
    expect(result.equipmentPage.gloves?.affixes[0].raw).toBe("+15% critical strike rating");
  });

  it("should initialize empty talentPage, divinityPage, and customConfiguration", () => {
    const rawLoadout: RawLoadout = {
      equipmentPage: {},
    };

    const result = parse_loadout(rawLoadout);

    expect(result.talentPage).toEqual({ affixes: [], coreTalents: [] });
    expect(result.divinityPage).toEqual({ slates: [] });
    expect(result.customConfiguration).toEqual([]);
  });

  it("should handle affixes with empty lines", () => {
    const rawLoadout: RawLoadout = {
      equipmentPage: {
        belt: {
          gearType: "belt",
          affixes: ["+10% fire damage\n\n+5% attack speed\n"],
        },
      },
    };

    const result = parse_loadout(rawLoadout);

    expect(result.equipmentPage.belt).toBeDefined();
    expect(result.equipmentPage.belt?.affixes[0].mods).toHaveLength(2);
    expect(result.equipmentPage.belt?.affixes[0].raw).toBe("+10% fire damage\n\n+5% attack speed\n");
  });
});
