import { ModNotImplementedIcon } from "@/src/components/ui/ModNotImplementedIcon";
import { TooltipTitle } from "@/src/components/ui/Tooltip";
import { getGearAffixes } from "@/src/tli/calcs/affix-collectors";
import type { Gear } from "@/src/tli/core";

export const GearTooltipContent: React.FC<{ item: Gear }> = ({ item }) => {
  const isLegendary = item.rarity === "legendary";
  const affixes = getGearAffixes(item);

  return (
    <>
      <TooltipTitle>{item.legendaryName ?? item.equipmentType}</TooltipTitle>
      {isLegendary && (
        <div className="text-xs text-zinc-500 mb-2">{item.equipmentType}</div>
      )}
      {affixes.length > 0 ? (
        <div>
          {affixes.map((affix, affixIdx) => (
            <div
              key={affixIdx}
              className={
                affixIdx > 0 ? "mt-1.5 pt-1.5 border-t border-zinc-700" : ""
              }
            >
              {affix.specialName !== undefined && (
                <div className="text-xs font-semibold text-amber-400 mb-0.5">
                  [{affix.specialName}]
                </div>
              )}
              {affix.affixLines.map((line, lineIdx) => (
                <div
                  key={lineIdx}
                  className="text-xs text-zinc-400 flex items-center"
                >
                  <span>{line.text}</span>
                  {line.mods === undefined && <ModNotImplementedIcon />}
                </div>
              ))}
              {affix.maxDivinity !== undefined && (
                <div className="text-xs text-zinc-500">
                  (Max Divinity Effect: {affix.maxDivinity})
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xs text-zinc-500 italic">No affixes</p>
      )}
    </>
  );
};
