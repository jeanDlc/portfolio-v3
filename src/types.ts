export interface Job {
  role: string;
  description: string;
  company: string;
  url: string;
  from: string;
  to?: string;
  stack: string[];
  id: string;
}

export interface Project {
  name: string;
  description: string;
  image: Record<string, string>;
  slug: string;
  stack: string[];
  demo: string;
  repository: string;
  id: string;
  company?: string;
}

export interface About {
  skills: string[];
  name: string;
  lastname: string;
  introduction: string;
  role: string;
  languages: string[];
  contact: {
    github: string;
    gmail: string;
    linkedin: string;
  };
}
