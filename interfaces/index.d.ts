interface BlogPost {
  slug: string; // unique url path for post pretty much an id
  title: string;
  date: string;
  content: string;
}

interface Project {
  title: string;
  shortDescription: string;
  description: string;
  imageFolder: string | null; // path to folder containing images
  sourceURL: string | null;
  sourceLabel: string | null;
  tags: string[];
}
