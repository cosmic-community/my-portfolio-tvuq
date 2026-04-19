export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    name?: string;
    short_description?: string;
    description?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    screenshots?: Array<{
      url: string;
      imgix_url: string;
    }>;
    tech_stack?: string[];
    live_url?: string;
    github_url?: string;
    featured?: boolean;
    project_date?: string;
  };
}

export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    name?: string;
    category?: string;
    proficiency?: string | number;
    icon?: string;
    years_experience?: number;
  };
}

export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    company?: string;
    position?: string;
    description?: string;
    logo?: {
      url: string;
      imgix_url: string;
    };
    location?: string;
    start_date?: string;
    end_date?: string;
    current?: boolean;
  };
}

export interface Profile extends CosmicObject {
  type: 'profile';
  metadata: {
    full_name?: string;
    title?: string;
    bio?: string;
    tagline?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    email?: string;
    location?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    resume?: {
      url: string;
      imgix_url: string;
    };
  };
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}