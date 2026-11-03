export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  type: string;
  shortDescription: string;
  description: string[];
  features?: string[];
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  extraLinks?: ProjectLink[];
  images: ProjectImage[];
}
