export interface Project {
  slug: string
  title: string
  kind: string
  date: string
  summary: string
  stat: {
    value: string
    label: string
  }
  stats: {
    value: string
    label: string
  }[]
  story: string[]
  tech: string[]
  repo: string | null
  demo: string | null
  accent: 'saffron' | 'coral' | 'aqua'
  featured: boolean
  image?: string
}

export type SkillCategory =
  | 'all'
  | 'mern'
  | 'auth'
  | 'genai'
  | 'advanced-genai'
  | 'ai-eng'
  | 'devops'

export interface SkillItem {
  id: string
  name: string
  category: 'mern' | 'auth' | 'genai' | 'advanced-genai' | 'ai-eng' | 'devops'
  categoryName: string
  proficiency: 'Production Expert' | 'Advanced Architecture' | 'Battle-Tested' | 'Specialist'
  proficiencyPercent: number
  summary: string
  highlightBadge: string
  color: 'saffron' | 'coral' | 'aqua' | 'cream'
  glyph: string
  tags: string[]
}

export interface SkillGroup {
  id: 'mern' | 'auth' | 'genai' | 'advanced-genai' | 'ai-eng' | 'devops'
  name: string
  subtitle: string
  color: 'saffron' | 'coral' | 'aqua' | 'cream'
  glyph: string
  skills: SkillItem[]
}

export interface EducationItem {
  id: string
  stage: string
  institution: string
  location: string
  level: string
  status?: string
}

export interface Certificate {
  id: string
  title: string
  organization: string
  type: string
  date: string
  team?: string
  image: string
  pdf?: string
  accentColor: string
}

export interface CertificationItem {
  title: string
  by: string
  glyph: string
}

export interface AchievementItem {
  title: string
  text: string
  glyph: string
}

export interface DsaProof {
  value: number
  suffix: string
  label: string
  topics: string[]
  platforms: string
}
