import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import data from './data.json';

type RawProfile = {
    name: string;
    bio: string;
    skills?: string[];
    avatarImageId: string;
    email: string;
    location?: string;
    social: {
        github?: string;
        twitter?: string;
        linkedin?: string;
    }
};

export type Resource = {
  id: string;
  slug: string;
  type: 'blog' | 'project';
  title: string;
  description: string;
  author: string;
  date: string;
  content: string;
  imageId?: string;
  tags?: string[];
  url?: string | null;
  githubUrl?: string;
};

export type Profile = {
    name: string;
    bio: string;
    skills: string[];
    avatarImageId: string;
    email: string;
    location: string;
    social: {
        github: string;
        twitter: string;
        linkedin: string;
    }
}

const rawProfile: RawProfile = data.profile;

export const profile: Profile = {
  ...rawProfile,
  skills: rawProfile.skills ?? [],
  location: rawProfile.location ?? '',
  social: {
    github: rawProfile.social?.github ?? '',
    twitter: rawProfile.social?.twitter ?? '',
    linkedin: rawProfile.social?.linkedin ?? '',
  },
};

export const resources: Resource[] = (data.resources as any[]).filter(
  (r) => r.type === "blog" || r.type === "project"
) as Resource[];

