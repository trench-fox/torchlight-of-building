export interface PactspiritRingDetails {
  name: string;
  affix: string;
}

export interface Pactspirit {
  type: string;
  rarity: string;
  name: string;
  innerRing1: PactspiritRingDetails;
  innerRing2: PactspiritRingDetails;
  innerRing3: PactspiritRingDetails;
  innerRing4: PactspiritRingDetails;
  innerRing5: PactspiritRingDetails;
  innerRing6: PactspiritRingDetails;
  midRing1: PactspiritRingDetails;
  midRing2: PactspiritRingDetails;
  midRing3: PactspiritRingDetails;
  effect1: string;
  effect2: string;
  effect3: string;
  effect4: string;
  effect5: string;
  effect6: string;
}
