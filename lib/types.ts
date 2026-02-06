export interface ServiceData {
  title: string;
  description: string;
  techStack: string[];
}

export interface ServicesPagesData {
  [key: string]: ServiceData;
}