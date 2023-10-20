export enum PageSection {
  HOME = "home",
  ABOUT = "about",
  EXPERIENCE = "experience",
  PROJECTS = "projects",
}

export const orderedSections = [
  PageSection.HOME,
  PageSection.ABOUT,
  PageSection.EXPERIENCE,
  PageSection.PROJECTS,
] as const;
