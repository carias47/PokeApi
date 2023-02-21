export interface habilities {
  effect_entries: HabilitiesEffectEntry[];
  id: number;
  name: string;
}

export interface HabilitiesEffectEntry {
  effect: string;
  short_effect: string;
}
