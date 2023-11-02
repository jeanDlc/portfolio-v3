export interface Job {
  role: string;
  description: string;
  company: string;
  url: string;
  from: string;
  to: string;
  stack: string[];
  id: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image: any;
  demoUrl: string;
  slug: string;
  stack: string[];
  repoUrl: string;
  company?: string;
}
