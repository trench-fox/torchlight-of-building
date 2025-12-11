import { useMemo } from "react";
import {
  SearchableSelect,
  type SearchableSelectOption,
  type SearchableSelectOptionGroup,
} from "@/src/app/components/ui/SearchableSelect";
import { canSupport } from "@/src/app/lib/skill-utils";
import { SupportSkills } from "@/src/data/skill";
import type { ActiveSkill, BaseSkill } from "@/src/data/skill/types";

interface SupportSkillSelectorProps {
  mainSkill: ActiveSkill | BaseSkill | undefined;
  selectedSkill?: string;
  excludedSkills: string[];
  onChange: (skillName: string | undefined) => void;
}

export const SupportSkillSelector: React.FC<SupportSkillSelectorProps> = ({
  mainSkill,
  selectedSkill,
  excludedSkills,
  onChange,
}) => {
  const availableSkills = SupportSkills.filter(
    (skill) =>
      skill.name === selectedSkill || !excludedSkills.includes(skill.name),
  );

  const { options, groups } = useMemo(() => {
    const opts: SearchableSelectOption<string>[] = availableSkills.map(
      (skill) => ({
        value: skill.name,
        label: skill.name,
      }),
    );

    if (!mainSkill) {
      return { options: opts, groups: undefined };
    }

    const compatible: SearchableSelectOption<string>[] = [];
    const other: SearchableSelectOption<string>[] = [];

    for (const skill of availableSkills) {
      const option = { value: skill.name, label: skill.name };
      if (canSupport(mainSkill, skill)) {
        compatible.push(option);
      } else {
        other.push(option);
      }
    }

    const grps: SearchableSelectOptionGroup<string>[] = [];
    if (compatible.length > 0) {
      grps.push({ label: "Compatible", options: compatible });
    }
    if (other.length > 0) {
      grps.push({ label: "Other", options: other });
    }

    return { options: opts, groups: grps };
  }, [availableSkills, mainSkill]);

  return (
    <SearchableSelect
      value={selectedSkill}
      onChange={onChange}
      options={options}
      groups={groups}
      placeholder="<Empty slot>"
      size="sm"
    />
  );
};
