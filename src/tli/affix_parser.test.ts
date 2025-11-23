import { expect, test } from "vitest";
import { parseAffix } from "./affix_parser";

test("parse basic damage without type (global)", () => {
  const result = parseAffix("+9% damage");
  expect(result).toEqual({
    type: "DmgPct",
    value: 0.09,
    modType: "global",
    addn: false,
  });
});

test("parse typed damage", () => {
  const result = parseAffix("+18% fire damage");
  expect(result).toEqual({
    type: "DmgPct",
    value: 0.18,
    modType: "fire",
    addn: false,
  });
});

test("parse additional global damage", () => {
  const result = parseAffix("+9% additional damage");
  expect(result).toEqual({
    type: "DmgPct",
    value: 0.09,
    modType: "global",
    addn: true,
  });
});

test("parse additional typed damage", () => {
  const result = parseAffix("+9% additional attack damage");
  expect(result).toEqual({
    type: "DmgPct",
    value: 0.09,
    modType: "attack",
    addn: true,
  });
});

test("parse decimal damage", () => {
  const result = parseAffix("+12.5% fire damage");
  expect(result).toEqual({
    type: "DmgPct",
    value: 0.125,
    modType: "fire",
    addn: false,
  });
});

test("return unrecognized for invalid damage type", () => {
  const result = parseAffix("+10% invalid damage");
  expect(result).toBe("unrecognized");
});

test("parse global critical strike rating", () => {
  const result = parseAffix("+10% Critical Strike Rating");
  expect(result).toEqual({
    type: "CritRatingPct",
    value: 0.1,
    modType: "global",
  });
});

test("parse typed critical strike rating", () => {
  const result = parseAffix("+10% Attack Critical Strike Rating");
  expect(result).toEqual({
    type: "CritRatingPct",
    value: 0.1,
    modType: "attack",
  });
});

test("parse crit rating with decimal percentage", () => {
  const result = parseAffix("+12.5% Attack Critical Strike Rating");
  expect(result).toEqual({
    type: "CritRatingPct",
    value: 0.125,
    modType: "attack",
  });
});

test("return unrecognized for invalid crit rating mod type", () => {
  const result = parseAffix("+10% Fire Critical Strike Rating");
  expect(result).toBe("unrecognized");
});

test("parse basic attack speed", () => {
  const result = parseAffix("+6% attack speed");
  expect(result).toEqual({
    type: "AspdPct",
    value: 0.06,
    addn: false,
  });
});

test("parse additional attack speed", () => {
  const result = parseAffix("+6% additional attack speed");
  expect(result).toEqual({
    type: "AspdPct",
    value: 0.06,
    addn: true,
  });
});

test("parse attack speed with decimal percentage", () => {
  const result = parseAffix("+12.5% attack speed");
  expect(result).toEqual({
    type: "AspdPct",
    value: 0.125,
    addn: false,
  });
});

test("parse basic cast speed", () => {
  const result = parseAffix("+6% cast speed");
  expect(result).toEqual({
    type: "CspdPct",
    value: 0.06,
    addn: false,
  });
});

test("parse basic attack and cast speed", () => {
  const result = parseAffix("+6% attack and cast speed");
  expect(result).toEqual({
    type: "AspdAndCspdPct",
    value: 0.06,
    addn: false,
  });
});

test("parse basic minion attack and cast speed", () => {
  const result = parseAffix("+6% minion attack and cast speed");
  expect(result).toEqual({
    type: "MinionAspdAndCspdPct",
    value: 0.06,
    addn: false,
  });
});

test("parse attack block chance", () => {
  const result = parseAffix("+4% Attack Block Chance");
  expect(result).toEqual({
    type: "AttackBlockChancePct",
    value: 0.04,
  });
});

test("parse spell block chance", () => {
  const result = parseAffix("+4% Spell Block Chance");
  expect(result).toEqual({
    type: "SpellBlockChancePct",
    value: 0.04,
  });
});

test("parse max life", () => {
  const result = parseAffix("+3% Max Life");
  expect(result).toEqual({
    type: "MaxLifePct",
    value: 0.03,
  });
});

test("parse max energy shield", () => {
  const result = parseAffix("+3% Max Energy Shield");
  expect(result).toEqual({
    type: "MaxEnergyShieldPct",
    value: 0.03,
  });
});

test("parse armor", () => {
  const result = parseAffix("+5% Armor");
  expect(result).toEqual({
    type: "ArmorPct",
    value: 0.05,
  });
});

test("parse evasion", () => {
  const result = parseAffix("+5% Evasion");
  expect(result).toEqual({
    type: "EvasionPct",
    value: 0.05,
  });
});

test("parse life regain", () => {
  const result = parseAffix("1.5% Life Regain");
  expect(result).toEqual({
    type: "LifeRegainPct",
    value: 0.015,
  });
});

test("parse energy shield regain", () => {
  const result = parseAffix("1.5% Energy Shield Regain");
  expect(result).toEqual({
    type: "EnergyShieldRegainPct",
    value: 0.015,
  });
});

test("parse multistrike chance", () => {
  const result = parseAffix("+32% chance to Multistrike");
  expect(result).toEqual({
    type: "MultistrikeChancePct",
    value: 0.32,
  });
});

test("parse flat strength", () => {
  const result = parseAffix("+6 Strength");
  expect(result).toEqual({
    type: "Str",
    value: 6,
  });
});

test("parse flat dexterity", () => {
  const result = parseAffix("+6 Dexterity");
  expect(result).toEqual({
    type: "Dex",
    value: 6,
  });
});

test("parse percentage strength", () => {
  const result = parseAffix("+4% Strength");
  expect(result).toEqual({
    type: "StrPct",
    value: 0.04,
  });
});

test("parse percentage dexterity", () => {
  const result = parseAffix("+4% Dexterity");
  expect(result).toEqual({
    type: "DexPct",
    value: 0.04,
  });
});

test("parse fervor effect", () => {
  const result = parseAffix("+4% Fervor effect");
  expect(result).toEqual({
    type: "FervorEff",
    value: 0.04,
  });
});

test("parse steep strike chance", () => {
  const result = parseAffix("+12% Steep Strike chance");
  expect(result).toEqual({
    type: "SteepStrikeChance",
    value: 0.12,
  });
});
