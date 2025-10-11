import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

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
  url?: string;
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
};

type AppData = {
    profile: Profile;
    resources: Resource[];
}

const dataPath = path.join(process.cwd(), 'src', 'lib', 'data.yaml');
const fileContents = fs.readFileSync(dataPath, 'utf8');
const data = yaml.load(fileContents) as AppData;

export const resources: Resource[] = data.resources;
export const profile: Profile = data.profile;
