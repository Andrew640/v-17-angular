export interface PowerGeneration {
  data: PowerGenerationData[];
}

export interface PowerGenerationData {
  from: string;
  to: string;
  generationmix: GenerationMix[];
}

export interface GenerationMix {
  fuel: string;
  perc: number;
}
