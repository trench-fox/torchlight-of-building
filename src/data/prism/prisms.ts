import type { Prism } from "./types";

export const Prisms: readonly Prism[] = [
  {
    type: "Base Affix",
    rarity: "",
    affix: "+75% to the effects of Random Affixes on this Prism",
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Adds an additional effect to the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel:\nBlind\nTarget's damage has a 20% chance to miss before addressed\">Blinds enemies within 15 m when casting Dazzling Bloom\n+12% additional damage for Spirit Magi against Blind\nTarget's damage has a 20% chance to miss before addressed\">Blinded enemies",
    addedCoreTalentAffix:
      "Blind\nTarget's damage has a 20% chance to miss before addressed\">Blinds enemies within 15 m when casting Dazzling Bloom\n+12% additional damage for Spirit Magi against Blind\nTarget's damage has a 20% chance to miss before addressed\">Blinded enemies",
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Adds an additional effect to the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel:\n+1% additional Damage per +5% Movement Speed, up to +12%",
    addedCoreTalentAffix:
      "+1% additional Damage per +5% Movement Speed, up to +12%",
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      'Adds an additional effect to the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel:\n+12% additional Ailment Damage\nTrauma, Ignite, and Wilt">Ailment Damage dealt by Attack Damage and attacks while standing still. -5% additional damage taken',
    addedCoreTalentAffix:
      '+12% additional Ailment Damage\nTrauma, Ignite, and Wilt">Ailment Damage dealt by Attack Damage and attacks while standing still. -5% additional damage taken',
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      'Adds an additional effect to the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel:\n+12% additional Attack Damage and Ailment Damage\nTrauma, Ignite, and Wilt">Ailment Damage dealt by attacks when there are Elite\nElite monsters include rare monsters and bosses">Elites within 10m Nearby\nWithin 6m">nearby\n+50% Skill Area when there are no Elite\nElite monsters include rare monsters and bosses">Elites within 10m Nearby\nWithin 6m">nearby',
    addedCoreTalentAffix:
      '+12% additional Attack Damage and Ailment Damage\nTrauma, Ignite, and Wilt">Ailment Damage dealt by attacks when there are Elite\nElite monsters include rare monsters and bosses">Elites within 10m Nearby\nWithin 6m">nearby\n+50% Skill Area when there are no Elite\nElite monsters include rare monsters and bosses">Elites within 10m Nearby\nWithin 6m">nearby',
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Adds an additional effect to the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel:\n+12% additional Attack Damage when holding a One-Handed Weapon\n+12% additional Base Damage for Two-Handed Weapons",
    addedCoreTalentAffix:
      "+12% additional Attack Damage when holding a One-Handed Weapon\n+12% additional Base Damage for Two-Handed Weapons",
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Adds an additional effect to the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel:\n2.5% additional Minion Damage per Synthetic Troop Minion you own",
    addedCoreTalentAffix:
      "2.5% additional Minion Damage per Synthetic Troop Minion you own",
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Adds an additional effect to the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel:\nEliminates enemies with less than 12% Life and at least 30 stack(s) of Wilt when dealing damage",
    addedCoreTalentAffix:
      "Eliminates enemies with less than 12% Life and at least 30 stack(s) of Wilt when dealing damage",
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      'Adds an additional effect to the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel:\nFor every stack of Max Spell Burst\nAutomatically uses a Spell Skill a certain number of times.\nWhen Spell Burst is fully charged, the next Spell Skill used will activate Spell Burst, which will consume all stacks charged and automatically use the Spell Skill the same number of times.\nSkills that have a cooldown, Triggered Skills, Sentry Skills, Channeled Skills, and Combo Skills cannot activate Spell Burst.">Spell Burst, +4% additional Spell Damage, up to +16% additional Spell Damage',
    addedCoreTalentAffix:
      'For every stack of Max Spell Burst\nAutomatically uses a Spell Skill a certain number of times.\nWhen Spell Burst is fully charged, the next Spell Skill used will activate Spell Burst, which will consume all stacks charged and automatically use the Spell Skill the same number of times.\nSkills that have a cooldown, Triggered Skills, Sentry Skills, Channeled Skills, and Combo Skills cannot activate Spell Burst.">Spell Burst, +4% additional Spell Damage, up to +16% additional Spell Damage',
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Adds an additional effect to the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel:\nWhen channeling Harmonious Field, triggers the Sentry Main Skill if there are no Sentries within 10m. Interval: 1s\n+30% Empower Skill Effect for Harmonious Field",
    addedCoreTalentAffix:
      "When channeling Harmonious Field, triggers the Sentry Main Skill if there are no Sentries within 10m. Interval: 1s\n+30% Empower Skill Effect for Harmonious Field",
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with Commander's Gambit",
    replacementCoreTalent: {
      name: "Commander's Gambit",
      affix:
        "-100% additional Tenacity Blessing, Agility Blessing, and Focus Blessing Effect\nWhen gaining any Blessing, Minions within 10m also gain it\nMinions' max Blessing stacks are twice your own",
    },
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with Effortless Command",
    replacementCoreTalent: {
      name: "Effortless Command",
      affix: "+1000 Max Energy",
    },
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with Self-Delusion",
    replacementCoreTalent: {
      name: "Self-Delusion",
      affix:
        "+12% additional Erosion Damage to an enemy for each type of Crowd Control Effect they are under\nCrowd Control Effects inflicted are reflected back onto you",
    },
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      'Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with Ignite Damage, up to +150%, for every +1% Ignite Chance above 100%\n+3% additional Wilt Damage, up to +150%, for every +1% Wilt Chance above 100%\n+3% additional Trauma Damage, up to +150%, for every +1% Trauma Chance above 100%">Fiery Fantasy',
    replacementCoreTalent: {
      name: "Fiery Fantasy",
      affix:
        "+3% additional Ignite Damage, up to +150%, for every +1% Ignite Chance above 100%\n+3% additional Wilt Damage, up to +150%, for every +1% Wilt Chance above 100%\n+3% additional Trauma Damage, up to +150%, for every +1% Trauma Chance above 100%",
    },
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with Storm's Command",
    replacementCoreTalent: {
      name: "Storm's Command",
      affix:
        "+35% additional Attack Damage for each different Warcry cast for 8s\n100% additional Empower Skill and Defensive Skill Effect",
    },
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with Main-Hand Weapon's Damage to Spells\nAdds 75% of Main-Hand Weapon's Critical Strike Rating to the Base Critical Strike Rating of Spell Skills\nYou cannot deal Ailment Damage\">Towering Presence",
    replacementCoreTalent: {
      name: "Towering Presence",
      affix:
        "Adds 100% of Main-Hand Weapon's Damage to Spells\nAdds 75% of Main-Hand Weapon's Critical Strike Rating to the Base Critical Strike Rating of Spell Skills\nYou cannot deal Ailment Damage",
    },
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with Escalating Affliction",
    replacementCoreTalent: {
      name: "Escalating Affliction",
      affix:
        "Changes the effect of each point of Affliction to: +0.1% - +3% additional Damage Over Time taken. Refreshes every 1s and is affected by Lucky Damage bonuses\n90% of the bonuses and additional bonuses for Max Damage is also applied to Damage Over Time",
    },
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with Crushing Blast",
    replacementCoreTalent: {
      name: "Crushing Blast",
      affix:
        "Enemies have a 25% chance to explode when defeated by Attacks or Spells, dealing True Damage equal to 250% of their Max Life to enemies within a 5m radius\n+30% additional damage dealt to Elites",
    },
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with One For All",
    replacementCoreTalent: {
      name: "One For All",
      affix:
        "Gains Cold and Lightning Resistance equal to 50% of Fire Resistance",
    },
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with Unwavering Fortress",
    replacementCoreTalent: {
      name: "Unwavering Fortress",
      affix:
        "Gains Defense equal to 2% of Armor and absorbs 100% of Non-True Damage taken every 10s. Defense is refreshed when gained again\nMax Life is fixed at 100\nYour Evasion and Max Energy Shield are fixed at 0",
    },
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with Keen Intellect",
    replacementCoreTalent: {
      name: "Keen Intellect",
      affix:
        "Gains different buffs based on the number of different Spell Skills equipped: For every Empower Skill equipped, +13% additional Spell Damage (multiplies)\nFor every Curse Skill equipped, +6% Elemental and Erosion Resistance Penetration and +6% Armor DMG Mitigation Penetration\nFor every Defensive Skill equipped, +13% additional Max Mana (multiplies)\nFor every Mobility Skill equipped, +13% additional Cast Speed (multiplies)",
    },
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with Circle of Life",
    replacementCoreTalent: {
      name: "Circle of Life",
      affix:
        "Gains Growth equal to 80% of the nearest Spirit Magus every 1s, and Growth gains Return Speed equal to Command\nFor every 10 Growth, +1% additional damage for Spirit Magi, +0.1% additional Physique and +0.5% Skill Area for yourself",
    },
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with Unmatched Valor",
    replacementCoreTalent: {
      name: "Unmatched Valor",
      affix: "Has 130 point(s) of fixed Fervor Rating",
    },
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      'Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with Deflection every 0.5s">Adaptive Defense',
    replacementCoreTalent: {
      name: "Adaptive Defense",
      affix:
        "If you haven't been hit recently, +40% Injury Buffer. This effect lasts for 4s longer when you are hit\nIf you have been hit recently, gains 1 stack of Deflection every 0.5s",
    },
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with Scorch instead of Ignite\n-10% Fire Resistance for each stack of Scorch on the enemies within 10m\">Fire's Allure",
    replacementCoreTalent: {
      name: "Fire's Allure",
      affix:
        "Inflicts Scorch instead of Ignite\n-10% Fire Resistance for each stack of Scorch on the enemies within 10m",
    },
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with Dark Advance",
    replacementCoreTalent: {
      name: "Dark Advance",
      affix:
        "Moves in the target direction when casting Dark Gate\n+3 Max Charges for Dark Gate\n+50% additional Cooldown Recovery Speed for Dark Gate\n+30% additional Minion Damage if a Dark Gate has been cast recently",
    },
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with Sweeping Fury",
    replacementCoreTalent: {
      name: "Sweeping Fury",
      affix:
        "On hit, Main Ranged Horizontal Projectile Skills have a 100% chance to cast an additional Main Skill, whose projectiles fire in a ring and deal -60% additional damage. Interval: 0.03s. Does not affect Sentry Skills, Vertical Skills, and Channeled Skills.\nProjectile Quantity upper limit: 5\n+2 Horizontal Projectile Penetration(s)",
    },
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with Juggernaut",
    replacementCoreTalent: {
      name: "Juggernaut",
      affix:
        "Reduces 10% Armor and 2% Elemental and Erosion Resistance for enemies on Critical Strike for 8s. Stacks up to 10 time(s)",
    },
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with Spell Ripple",
    replacementCoreTalent: {
      name: "Spell Ripple",
      affix:
        "Spell Skills on hit have a 50% chance to spawn a Pulse, dealing True Damage equal to 150% of Hit Damage. Interval: 0.03s",
    },
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with Miraculous Touch",
    replacementCoreTalent: {
      name: "Miraculous Touch",
      affix:
        "Triggers Miraculous Gain when casting a Restoration Skill\nRestoration Skills gain 1 Charging Progress every second",
    },
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with Unstoppable Force",
    replacementCoreTalent: {
      name: "Unstoppable Force",
      affix:
        "When a Combo Finisher is in Multistrike, it is guaranteed to deal damage equal to the Max Multistrike Count",
    },
  },
  {
    type: "Base Affix",
    rarity: "",
    affix:
      "Replaces the Core Talent on the God of Might/Goddess of Hunting/Goddess of Knowledge/God of War/Goddess of Deception/God of Machines Advanced Talent Panel with Hare's Agility",
    replacementCoreTalent: {
      name: "Hare's Agility",
      affix:
        "When exiting Stand Still, gains 1 stack of buff that lasts for 2s, up to 5 time(s)\nEnemies in proximity take +14% additional damage for each stack of buff. +8% Attack Speed",
    },
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      "All Legendary Medium Talent within the area can ignore prerequisite point requirements",
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      "All Legendary Medium Talent within the area can ignore prerequisite point requirements\nAll Medium Talent within the area can ignore prerequisite point requirements",
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      "Points can be allocated to all Medium Talent within the area 1 additional time(s)",
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      "Points can be allocated to all Medium Talent within the area 2 additional time(s)",
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      "Points can be allocated to all Medium Talent within the area 3 additional time(s)",
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      "Points can be allocated to all Micro Talent within the area 1 additional time(s)",
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      "Points can be allocated to all Micro Talent within the area 2 additional time(s)",
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      "Points can be allocated to all Micro Talent within the area 3 additional time(s)",
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      "When activating 2 Legendary Medium Talent within the area, -100% Curse effect against you",
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, +1 to Max Agility Blessing\nEvery stack of Agility Blessing grants +4% Attack and Cast Speed and +2% additional damage. Initial max stacks: 4">Agility Blessing Stacks',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, +1 to Max Focus Blessing\nEvery stack of Focus Blessing grants +5% additional damage. Initial max stacks: 4">Focus Blessing Stacks',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, +1 to Max Tenacity Blessing\nEvery stack of Tenacity Blessing grants an additional 4% damage reduction (multiplies). Initial max stacks: 4.">Tenacity Blessing Stacks',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      "When activating 2 Legendary Medium Talent within the area, +100% chance to gain a Barrier upon casting a Defensive Skill",
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      "When activating 2 Legendary Medium Talent within the area, +175% chance to gain a Barrier upon casting a Defensive Skill",
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, +2 to Max Agility Blessing\nEvery stack of Agility Blessing grants +4% Attack and Cast Speed and +2% additional damage. Initial max stacks: 4">Agility Blessing Stacks',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, +2 to Max Focus Blessing\nEvery stack of Focus Blessing grants +5% additional damage. Initial max stacks: 4">Focus Blessing Stacks',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, +2 to Max Tenacity Blessing\nEvery stack of Tenacity Blessing grants an additional 4% damage reduction (multiplies). Initial max stacks: 4.">Tenacity Blessing Stacks',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      "When activating 2 Legendary Medium Talent within the area, Immune to Paralysis and Slow",
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, Gains Attack Aggression\nAdditionally increases Attack Speed and Attack Damage by 5%. Increases Movement Speed by 10%">Attack Aggression when casting an Attack Skill\n+100% Attack Aggression\nAdditionally increases Attack Speed and Attack Damage by 5%. Increases Movement Speed by 10%">Attack Aggression Effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, Gains Attack Aggression\nAdditionally increases Attack Speed and Attack Damage by 5%. Increases Movement Speed by 10%">Attack Aggression when casting an Attack Skill\n+40% Attack Aggression\nAdditionally increases Attack Speed and Attack Damage by 5%. Increases Movement Speed by 10%">Attack Aggression Effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, Gains Spell Aggression\nAdditionally increases Cast Speed and Spell Damage by 7%. Increases Mobility Skill Cooldown Recovery Speed by 7%">Spell Aggression when casting a Spell Skill\n+100% Spell Aggression\nAdditionally increases Cast Speed and Spell Damage by 7%. Increases Mobility Skill Cooldown Recovery Speed by 7%">Spell Aggression Effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, Gains Spell Aggression\nAdditionally increases Cast Speed and Spell Damage by 7%. Increases Mobility Skill Cooldown Recovery Speed by 7%">Spell Aggression when casting a Spell Skill\n+40% Spell Aggression\nAdditionally increases Cast Speed and Spell Damage by 7%. Increases Mobility Skill Cooldown Recovery Speed by 7%">Spell Aggression Effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, Gains a stack of Fortitude\nEach stack of Fortitude additionally reduces Hit Damage taken by 5% for 10s.\nBase Max Fortitude Stacks: 3.">Fortitude when using a Melee Skill\nOwns 1 additional stack(s) of Fortitude\nEach stack of Fortitude additionally reduces Hit Damage taken by 5% for 10s.\nBase Max Fortitude Stacks: 3.">Fortitude',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, Gains a stack of Fortitude\nEach stack of Fortitude additionally reduces Hit Damage taken by 5% for 10s.\nBase Max Fortitude Stacks: 3.">Fortitude when using a Melee Skill\nOwns 2 additional stack(s) of Fortitude\nEach stack of Fortitude additionally reduces Hit Damage taken by 5% for 10s.\nBase Max Fortitude Stacks: 3.">Fortitude',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, Gains a stack of Torment\nEach stack of Torment additionally increases Damage Over Time dealt by 5% for 4s. Stacks up to 3 times">Torment when dealing Damage Over Time\n+100% Torment\nEach stack of Torment additionally increases Damage Over Time dealt by 5% for 4s. Stacks up to 3 times">Torment Effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, Gains a stack of Torment\nEach stack of Torment additionally increases Damage Over Time dealt by 5% for 4s. Stacks up to 3 times">Torment when dealing Damage Over Time\n+40% Torment\nEach stack of Torment additionally increases Damage Over Time dealt by 5% for 4s. Stacks up to 3 times">Torment Effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, Has 100 point(s) of fixed Blur Rating\n+0.3% Evasion and +0.2% chance to avoid damage for every point of Blur Rating you have. The Max Blur Rating is 100">Blur Rating',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, Has 120 point(s) of fixed Blur Rating\n+0.3% Evasion and +0.2% chance to avoid damage for every point of Blur Rating you have. The Max Blur Rating is 100">Blur Rating',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, Inflicts Cold Infiltration\nAdditionally increases Cold Damage taken by 13%. Reduces Movement Speed by 5%">Cold Infiltration on hit\n+100% Cold Infiltration\nAdditionally increases Cold Damage taken by 13%. Reduces Movement Speed by 5%">Cold Infiltration Effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, Inflicts Cold Infiltration\nAdditionally increases Cold Damage taken by 13%. Reduces Movement Speed by 5%">Cold Infiltration on hit\n+40% Cold Infiltration\nAdditionally increases Cold Damage taken by 13%. Reduces Movement Speed by 5%">Cold Infiltration Effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, Inflicts Fire Infiltration\nAdditionally increases Fire Damage taken by 13%. Reduces Skill Area by 8%">Fire Infiltration on hit\n+100% Fire Infiltration\nAdditionally increases Fire Damage taken by 13%. Reduces Skill Area by 8%">Fire Infiltration Effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, Inflicts Fire Infiltration\nAdditionally increases Fire Damage taken by 13%. Reduces Skill Area by 8%">Fire Infiltration on hit\n+40% Fire Infiltration\nAdditionally increases Fire Damage taken by 13%. Reduces Skill Area by 8%">Fire Infiltration Effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, Inflicts Frail\nAdditionally increases Spell Damage taken by 15%">Frail when dealing Spell Damage\n+100% Frail\nAdditionally increases Spell Damage taken by 15%">Frail Effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, Inflicts Frail\nAdditionally increases Spell Damage taken by 15%">Frail when dealing Spell Damage\n+40% Frail\nAdditionally increases Spell Damage taken by 15%">Frail Effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, Inflicts Lightning Infiltration\nAdditionally increases Lightning Damage taken by 13%. Reduces Attack Speed by 5%">Lightning Infiltration on hit\n+100% Lightning Infiltration\nAdditionally increases Lightning Damage taken by 13%. Reduces Attack Speed by 5%">Lightning Infiltration Effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      'When activating 2 Legendary Medium Talent within the area, Inflicts Lightning Infiltration\nAdditionally increases Lightning Damage taken by 13%. Reduces Attack Speed by 5%">Lightning Infiltration on hit\n+40% Lightning Infiltration\nAdditionally increases Lightning Damage taken by 13%. Reduces Attack Speed by 5%">Lightning Infiltration Effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Legendary",
    affix:
      "When activating 2 Legendary Medium Talent within the area, You can cast 1 additional Curses\nGains 1 Lv. 1 random curse for 5 s after casting a Curse Skill",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Legendary Medium Talent within the area also gain: + 3 Command\nEvery point of Command will grant Synthetic Troop Minions +3% additional damage and a bigger Tracking Area.\nThe lowest Command is -100 while the highest is 100. When Command is not 0, 13 point(s) will be returned (reduced/granted) every second until it becomes 0. For every 10 Command increased, +7 additional points will be returned.\nSynthetic Troop Minions' Duration will not reduce when Command is a positive value.\">Command per second",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Legendary Medium Talent within the area also gain: + 5.5 Command\nEvery point of Command will grant Synthetic Troop Minions +3% additional damage and a bigger Tracking Area.\nThe lowest Command is -100 while the highest is 100. When Command is not 0, 13 point(s) will be returned (reduced/granted) every second until it becomes 0. For every 10 Command increased, +7 additional points will be returned.\nSynthetic Troop Minions' Duration will not reduce when Command is a positive value.\">Command per second",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Legendary Medium Talent within the area also gain: Multistrike\nChance to perform an additional attack when using Attack Skills. If the chance exceeds 100%, one additional attack will be performed with every 100% of the chance.\n+20% Attack Speed during Multistrikes.\nMultistrikes consume skill resources as normal and will be interrupted if there are insufficient resources. Moving or using other non-instant skills will interrupt Multistrike.\nMobility, Channeled Skills, and Sentry skills cannot Multistrike">Multistrikes deal 12% increasing damage',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Legendary Medium Talent within the area also gain: Multistrike\nChance to perform an additional attack when using Attack Skills. If the chance exceeds 100%, one additional attack will be performed with every 100% of the chance.\n+20% Attack Speed during Multistrikes.\nMultistrikes consume skill resources as normal and will be interrupted if there are insufficient resources. Moving or using other non-instant skills will interrupt Multistrike.\nMobility, Channeled Skills, and Sentry skills cannot Multistrike">Multistrikes deal 21% increasing damage',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Legendary Medium Talent within the area also gain: +10 to Max Frostbite\nEnemies are inflicted with a fixed amount of Frostbite Rating when they are Frostbitten. This can be increased by raising Max Frostbite Rating. The Max Frostbite Rating is 100.">Frostbite Rating',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Legendary Medium Talent within the area also gain: +12% Origin of Spirit Magus\nBuff effect gained after Activating a Spirit Magus summoning skill.">Origin of Spirit Magus effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Legendary Medium Talent within the area also gain: +15% Numbed\nAn Elemental Ailment that has a chance to be inflicted when Lightning Damage hits its target.\nWhen hitting a Numbed enemy, Lightning Damage inflicts 1 stack of Numbed for every 10% of the sum of Max Energy Shield and Life dealt by Lightning Damage. This threshold can be lowered or raised, but the minimum is 1%.\nThe default duration of Numbed is 2s, and the duration of each stack is calculated independently.\nMax Numbed stacks: 10. Each stack of Numbed increases the Lightning Damage taken by an additional +5%.">Numbed Effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Legendary Medium Talent within the area also gain: +16% Deterioration\nLasts for 1s. When the duration ends, deals True Damage equal to 60% of the Hit Erosion Damage dealt. Stacks up to 99 times. Each stack is calculated independently">Deterioration Chance',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Legendary Medium Talent within the area also gain: +16% Steep Strike\nSlash Strike Skills are cast in Sweep Slash form by default. When casting the skill, there is a chance that it will be cast in Steep Strike form. Some skills gain Steep Strike attempts at specific times. When there are Steep Strike attempts, the skill will be cast in Steep Strike form and consume 1 Steep Strike attempt.">Steep Strike chance.',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Legendary Medium Talent within the area also gain: +21% Origin of Spirit Magus\nBuff effect gained after Activating a Spirit Magus summoning skill.">Origin of Spirit Magus effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Legendary Medium Talent within the area also gain: +24 initial Growth\nSpirit Magi grow into the next Stage for every 100 Growth. They start at Stage 1 and can grow until they reach Stage 5. For every 8 Growth they have, Spirit Magi gain +1% Physique, +5% additional Skill Area, and a bonus every stage:\nAt Stage 2, +30% chance for them to use Enhanced Skill chance.\nAt Stage 3, their Enhanced Skills become stronger.\nAt Stage 4, their Empower Skills become stronger.\nAt Stage 5, they +25% additional damage, +10% additional Skill Area, and gain increased Movement Speed and Tracking Area.\nThe max Growth is 1000.">Growth for Spirit Magi',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Legendary Medium Talent within the area also gain: +25% Reaping Duration",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Legendary Medium Talent within the area also gain: +28% Deterioration\nLasts for 1s. When the duration ends, deals True Damage equal to 60% of the Hit Erosion Damage dealt. Stacks up to 99 times. Each stack is calculated independently">Deterioration Chance',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Legendary Medium Talent within the area also gain: +30% Demolisher Charge\nImpact Skills gain 1 Demolisher Charge at regular intervals.\nUsing a Demolisher Skill will consume its charges and convert the skill into a stronger form">Demolisher Charge Restoration Speed',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Legendary Medium Talent within the area also gain: +42 initial Growth\nSpirit Magi grow into the next Stage for every 100 Growth. They start at Stage 1 and can grow until they reach Stage 5. For every 8 Growth they have, Spirit Magi gain +1% Physique, +5% additional Skill Area, and a bonus every stage:\nAt Stage 2, +30% chance for them to use Enhanced Skill chance.\nAt Stage 3, their Enhanced Skills become stronger.\nAt Stage 4, their Empower Skills become stronger.\nAt Stage 5, they +25% additional damage, +10% additional Skill Area, and gain increased Movement Speed and Tracking Area.\nThe max Growth is 1000.">Growth for Spirit Magi',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Legendary Medium Talent within the area also gain: +44% Reaping Duration",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Legendary Medium Talent within the area also gain: +5% Block Ratio\nBy default, Blocking absorbs 30% damage. Increase Block Ratio to increase the damage absorption ratio.">Block Ratio',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Legendary Medium Talent within the area also gain: +6% additional Phantom\nShadow Strike creates a Shadow that strikes at other targets with the same attack. If no other targets are present, it will strike the character's target.\nMultiple Shadows can attack the same target, and the Shadows' Shotgun Effect falloff coefficient is 70%\nShadow damage and character damage are independent of each other\">Shadow Damage",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Legendary Medium Talent within the area also gain: +6% Aura Effect",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Legendary Medium Talent within the area also gain: +7% Movement Speed",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Legendary Medium Talent within the area also gain: +9% Block Ratio\nBy default, Blocking absorbs 30% damage. Increase Block Ratio to increase the damage absorption ratio.">Block Ratio',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Legendary Medium Talent within the area also gain: +9% Steep Strike\nSlash Strike Skills are cast in Sweep Slash form by default. When casting the skill, there is a chance that it will be cast in Steep Strike form. Some skills gain Steep Strike attempts at specific times. When there are Steep Strike attempts, the skill will be cast in Steep Strike form and consume 1 Steep Strike attempt.">Steep Strike chance.',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Legendary Medium Talent within the area also gain: 10.5% additional Phantom\nShadow Strike creates a Shadow that strikes at other targets with the same attack. If no other targets are present, it will strike the character's target.\nMultiple Shadows can attack the same target, and the Shadows' Shotgun Effect falloff coefficient is 70%\nShadow damage and character damage are independent of each other\">Shadow Damage",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Legendary Medium Talent within the area also gain: 10.5% Aura Effect",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Legendary Medium Talent within the area also gain: 12.5% Movement Speed",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Legendary Medium Talent within the area also gain: 17.5 to Max Frostbite\nEnemies are inflicted with a fixed amount of Frostbite Rating when they are Frostbitten. This can be increased by raising Max Frostbite Rating. The Max Frostbite Rating is 100.">Frostbite Rating',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Legendary Medium Talent within the area also gain: 26.5% Numbed\nAn Elemental Ailment that has a chance to be inflicted when Lightning Damage hits its target.\nWhen hitting a Numbed enemy, Lightning Damage inflicts 1 stack of Numbed for every 10% of the sum of Max Energy Shield and Life dealt by Lightning Damage. This threshold can be lowered or raised, but the minimum is 1%.\nThe default duration of Numbed is 2s, and the duration of each stack is calculated independently.\nMax Numbed stacks: 10. Each stack of Numbed increases the Lightning Damage taken by an additional +5%.">Numbed Effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Legendary Medium Talent within the area also gain: 52.5% Demolisher Charge\nImpact Skills gain 1 Demolisher Charge at regular intervals.\nUsing a Demolisher Skill will consume its charges and convert the skill into a stronger form">Demolisher Charge Restoration Speed',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Medium Talent within the area also gain: +1% Elemental\nFire, Cold, and Lightning">Elemental and Erosion Resistance',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: +10 Dexterity",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: +10 Intelligence",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: +10 Strength",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Medium Talent within the area also gain: +10% Critical Strike Rating\n+10% Minion Critical Strike Rating",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: +14% Projectile Speed",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Medium Talent within the area also gain: +2% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Medium Talent within the area also gain: +2% Elemental\nFire, Cold, and Lightning">Elemental and Erosion Resistance',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Medium Talent within the area also gain: +2% Attack and Cast Speed\n+2% Minion Attack and Cast Speed",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Medium Talent within the area also gain: +2% Attack and Spell Block Chance",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: +2% Aura Effect",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: +2% Max Life",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Medium Talent within the area also gain: +2% Sealed Mana Compensation",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Medium Talent within the area also gain: +4% Origin of Spirit Magus\nBuff effect gained after Activating a Spirit Magus summoning skill.">Origin of Spirit Magus effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: +4% Cold Resistance",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Medium Talent within the area also gain: +4% Erosion Resistance",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: +4% Fire Resistance",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Medium Talent within the area also gain: +4% Lightning Resistance",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: +4% Max Mana",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Medium Talent within the area also gain: +6% Affliction\nWhen the Affliction inflicted per second is not 0, the Damage Over Time dealt will continuously inflicts Affliction on the target\nThe target takes 1% additional Damage Over Time for every Affliction point\nThe max Affliction is 100">Affliction Effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Medium Talent within the area also gain: +6% Spell Burst\nAutomatically uses a Spell Skill a certain number of times.\nWhen Spell Burst is fully charged, the next Spell Skill used will activate Spell Burst, which will consume all stacks charged and automatically use the Spell Skill the same number of times.\nSkills that have a cooldown, Triggered Skills, Sentry Skills, Channeled Skills, and Combo Skills cannot activate Spell Burst.">Spell Burst Charge Speed',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: +6% Attack Damage",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Medium Talent within the area also gain: +6% Critical Strike Damage\n+6% Minion Critical Strike Damage",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: +6% Damage Over Time",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: +6% Minion Damage",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: +6% Spell Damage",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Medium Talent within the area also gain: +7% Origin of Spirit Magus\nBuff effect gained after Activating a Spirit Magus summoning skill.">Origin of Spirit Magus effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: +7% Cold Resistance",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Medium Talent within the area also gain: +7% Erosion Resistance",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: +7% Fire Resistance",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Medium Talent within the area also gain: +7% Lightning Resistance",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: +7% Max Mana",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: +8% Projectile Speed",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Medium Talent within the area also gain: 10.5% Affliction\nWhen the Affliction inflicted per second is not 0, the Damage Over Time dealt will continuously inflicts Affliction on the target\nThe target takes 1% additional Damage Over Time for every Affliction point\nThe max Affliction is 100">Affliction Effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Medium Talent within the area also gain: 10.5% Spell Burst\nAutomatically uses a Spell Skill a certain number of times.\nWhen Spell Burst is fully charged, the next Spell Skill used will activate Spell Burst, which will consume all stacks charged and automatically use the Spell Skill the same number of times.\nSkills that have a cooldown, Triggered Skills, Sentry Skills, Channeled Skills, and Combo Skills cannot activate Spell Burst.">Spell Burst Charge Speed',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: 10.5% Attack Damage",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Medium Talent within the area also gain: 10.5% Critical Strike Damage\n10.5% Minion Critical Strike Damage",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Medium Talent within the area also gain: 10.5% Damage Over Time",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: 10.5% Minion Damage",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: 10.5% Spell Damage",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: 17.5 Dexterity",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: 17.5 Intelligence",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: 17.5 Strength",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Medium Talent within the area also gain: 17.5% Critical Strike Rating\n17.5% Minion Critical Strike Rating",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Medium Talent within the area also gain: 3.5% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Medium Talent within the area also gain: 3.5% Attack and Cast Speed\n3.5% Minion Attack and Cast Speed",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Medium Talent within the area also gain: 3.5% Attack and Spell Block Chance",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: 3.5% Aura Effect",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Medium Talent within the area also gain: 3.5% Max Life",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Medium Talent within the area also gain: 3.5% Sealed Mana Compensation",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Micro Talent within the area also gain: +1% Elemental\nFire, Cold, and Lightning">Elemental and Erosion Resistance',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: +10 Dexterity",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: +10 Intelligence",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: +10 Strength",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Micro Talent within the area also gain: +10% Critical Strike Rating\n+10% Minion Critical Strike Rating",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: +14% Projectile Speed",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Micro Talent within the area also gain: +2% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Micro Talent within the area also gain: +2% Elemental\nFire, Cold, and Lightning">Elemental and Erosion Resistance',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Micro Talent within the area also gain: +2% Attack and Cast Speed\n+2% Minion Attack and Cast Speed",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Micro Talent within the area also gain: +2% Attack and Spell Block Chance",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: +2% Aura Effect",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: +2% Max Life",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Micro Talent within the area also gain: +2% Sealed Mana Compensation",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Micro Talent within the area also gain: +4% Origin of Spirit Magus\nBuff effect gained after Activating a Spirit Magus summoning skill.">Origin of Spirit Magus effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: +4% Cold Resistance",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: +4% Erosion Resistance",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: +4% Fire Resistance",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Micro Talent within the area also gain: +4% Lightning Resistance",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: +4% Max Mana",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Micro Talent within the area also gain: +6% Affliction\nWhen the Affliction inflicted per second is not 0, the Damage Over Time dealt will continuously inflicts Affliction on the target\nThe target takes 1% additional Damage Over Time for every Affliction point\nThe max Affliction is 100">Affliction Effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Micro Talent within the area also gain: +6% Spell Burst\nAutomatically uses a Spell Skill a certain number of times.\nWhen Spell Burst is fully charged, the next Spell Skill used will activate Spell Burst, which will consume all stacks charged and automatically use the Spell Skill the same number of times.\nSkills that have a cooldown, Triggered Skills, Sentry Skills, Channeled Skills, and Combo Skills cannot activate Spell Burst.">Spell Burst Charge Speed',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: +6% Attack Damage",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Micro Talent within the area also gain: +6% Critical Strike Damage\n+6% Minion Critical Strike Damage",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: +6% Damage Over Time",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: +6% Minion Damage",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: +6% Spell Damage",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Micro Talent within the area also gain: +7% Origin of Spirit Magus\nBuff effect gained after Activating a Spirit Magus summoning skill.">Origin of Spirit Magus effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: +7% Cold Resistance",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: +7% Erosion Resistance",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: +7% Fire Resistance",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Micro Talent within the area also gain: +7% Lightning Resistance",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: +7% Max Mana",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: +8% Projectile Speed",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Micro Talent within the area also gain: 10.5% Affliction\nWhen the Affliction inflicted per second is not 0, the Damage Over Time dealt will continuously inflicts Affliction on the target\nThe target takes 1% additional Damage Over Time for every Affliction point\nThe max Affliction is 100">Affliction Effect',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Micro Talent within the area also gain: 10.5% Spell Burst\nAutomatically uses a Spell Skill a certain number of times.\nWhen Spell Burst is fully charged, the next Spell Skill used will activate Spell Burst, which will consume all stacks charged and automatically use the Spell Skill the same number of times.\nSkills that have a cooldown, Triggered Skills, Sentry Skills, Channeled Skills, and Combo Skills cannot activate Spell Burst.">Spell Burst Charge Speed',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: 10.5% Attack Damage",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Micro Talent within the area also gain: 10.5% Critical Strike Damage\n10.5% Minion Critical Strike Damage",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: 10.5% Damage Over Time",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: 10.5% Minion Damage",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: 10.5% Spell Damage",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: 17.5 Dexterity",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: 17.5 Intelligence",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: 17.5 Strength",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Micro Talent within the area also gain: 17.5% Critical Strike Rating\n17.5% Minion Critical Strike Rating",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      'All Micro Talent within the area also gain: 3.5% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense',
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Micro Talent within the area also gain: 3.5% Attack and Cast Speed\n3.5% Minion Attack and Cast Speed",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Micro Talent within the area also gain: 3.5% Attack and Spell Block Chance",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: 3.5% Aura Effect",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix: "All Micro Talent within the area also gain: 3.5% Max Life",
  },
  {
    type: "Prism Gauge",
    rarity: "Rare",
    affix:
      "All Micro Talent within the area also gain: 3.5% Sealed Mana Compensation",
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Adaptive Defense',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Circle of Life',
  },
  {
    type: "",
    rarity: "",
    affix:
      "-15 to All Stats\nStrength, Dexterity, and Intelligence\">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Commander's Gambit",
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Crushing Blast',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Dark Advance',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Effortless Command',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Escalating Affliction',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Extreme Power',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Fiery Fantasy',
  },
  {
    type: "",
    rarity: "",
    affix:
      "-15 to All Stats\nStrength, Dexterity, and Intelligence\">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Fire's Allure",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-15 to All Stats\nStrength, Dexterity, and Intelligence\">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Fortune's Flip",
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Guaranteed Reaping',
  },
  {
    type: "",
    rarity: "",
    affix:
      "-15 to All Stats\nStrength, Dexterity, and Intelligence\">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Hare's Agility",
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Juggernaut',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Keen Intellect',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Miraculous Touch',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: One For All',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Self-Delusion',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Spell Ripple',
  },
  {
    type: "",
    rarity: "",
    affix:
      "-15 to All Stats\nStrength, Dexterity, and Intelligence\">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Storm's Command",
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Sweeping Fury',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Tainted Flesh',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Towering Presence',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Trinity',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Unmatched Valor',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Unstoppable Force',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-15 to All Stats\nStrength, Dexterity, and Intelligence">All Stats\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Unwavering Fortress',
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Adaptive Defense",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Circle of Life",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Commander's Gambit",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Crushing Blast",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Dark Advance",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Effortless Command",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Escalating Affliction",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Extreme Power",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Fiery Fantasy",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Fire's Allure",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Fortune's Flip",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Guaranteed Reaping",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Hare's Agility",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Juggernaut",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Keen Intellect",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Miraculous Touch",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: One For All",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Self-Delusion",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Spell Ripple",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Storm's Command",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Sweeping Fury",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Tainted Flesh",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Towering Presence",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Trinity",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Unmatched Valor",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Unstoppable Force",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-5% Elemental Resistance\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Unwavering Fortress",
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Adaptive Defense',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Circle of Life',
  },
  {
    type: "",
    rarity: "",
    affix:
      "-8% Defense\nThe sum of Armor, Evasion, and Energy Shield\">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Commander's Gambit",
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Crushing Blast',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Dark Advance',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Effortless Command',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Escalating Affliction',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Extreme Power',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Fiery Fantasy',
  },
  {
    type: "",
    rarity: "",
    affix:
      "-8% Defense\nThe sum of Armor, Evasion, and Energy Shield\">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Fire's Allure",
  },
  {
    type: "",
    rarity: "",
    affix:
      "-8% Defense\nThe sum of Armor, Evasion, and Energy Shield\">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Fortune's Flip",
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Guaranteed Reaping',
  },
  {
    type: "",
    rarity: "",
    affix:
      "-8% Defense\nThe sum of Armor, Evasion, and Energy Shield\">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Hare's Agility",
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Juggernaut',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Keen Intellect',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Miraculous Touch',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: One For All',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Self-Delusion',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Spell Ripple',
  },
  {
    type: "",
    rarity: "",
    affix:
      "-8% Defense\nThe sum of Armor, Evasion, and Energy Shield\">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Storm's Command",
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Sweeping Fury',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Tainted Flesh',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Towering Presence',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Trinity',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Unmatched Valor',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Unstoppable Force',
  },
  {
    type: "",
    rarity: "",
    affix:
      '-8% Defense\nThe sum of Armor, Evasion, and Energy Shield">Defense\nMutated Core Talents no longer replace the original talent, but add the following to the Core Talent in the current Talent Panel: Unwavering Fortress',
  },
  {
    type: "",
    rarity: "",
    affix: "The area of effect expands to 2x2 Rectangle",
  },
  {
    type: "",
    rarity: "",
    affix: "The area of effect expands to 2x4 Rectangle",
  },
  {
    type: "",
    rarity: "",
    affix: "The area of effect expands to 3x3 Rectangle",
  },
  {
    type: "",
    rarity: "",
    affix: "The area of effect expands to 3x4 Rectangle",
  },
  {
    type: "",
    rarity: "",
    affix: "The area of effect expands to 4x2 Rectangle",
  },
  {
    type: "",
    rarity: "",
    affix: "The area of effect expands to 4x3 Rectangle",
  },
  {
    type: "",
    rarity: "",
    affix: "The area of effect expands to 7x1 Rectangle",
  },
];
