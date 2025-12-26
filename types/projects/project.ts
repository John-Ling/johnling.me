export type Project = {
  title: string;
  shortDescription: string;
  description: string;
  imageFolder: string | null; // path to folder containing images
  sourceURL: string | null;
  sourceLabel: string | null;
  tags: string[];
};
