"use client";

import { TooltipTitle } from "@/src/app/components/ui/Tooltip";
import { type Gear, getAllAffixes } from "@/src/tli/core";

export const GearTooltipContent: React.FC<{ item: Gear }> = ({ item }) => {
  const isLegendary = item.rarity === "legendary";
  const affixes = getAllAffixes(item);

  return (
    <>
      <TooltipTitle>{item.legendaryName ?? item.equipmentType}</TooltipTitle>
      {isLegendary && (
        <div className="text-xs text-zinc-500 mb-2">{item.equipmentType}</div>
      )}
      {item.baseStats && (
        <div className="text-xs text-amber-300 mb-2">
          <div>{item.baseStats.text}</div>
        </div>
      )}
      {affixes.length > 0 ? (
        <ul className="space-y-1">
          {affixes.map((affix, affixIdx) =>
            affix.affixLines.map((line, lineIdx) => (
              <li
                // biome-ignore lint/suspicious/noArrayIndexKey: affixes can have duplicate text, index is stable
                key={`${affixIdx}-${lineIdx}`}
                className="text-xs text-zinc-400"
              >
                {line.text}
              </li>
            )),
          )}
        </ul>
      ) : (
        <p className="text-xs text-zinc-500 italic">No affixes</p>
      )}
    </>
  );
};
