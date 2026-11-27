
export type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Android'
  | 'Tools'

export interface Skill {
  name: string
  category: SkillCategory
  status: 'Used in Projects' | 'Learning'
}

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', category: 'Frontend', status: 'Used in Projects' },
  { name: 'CSS3', category: 'Frontend', status: 'Used in Projects' },
  { name: 'JavaScript', category: 'Frontend', status: 'Learning' },
  { name: 'React.js', category: 'Frontend', status: 'Used in Projects' },
  { name: 'TypeScript', category: 'Frontend', status: 'Used in Projects' },
  { name: 'Tailwind CSS', category: 'Frontend', status: 'Used in Projects' },

  // Backend
  { name: 'Java', category: 'Backend', status: 'Learning' },
  { name: 'Full Stack Development', category: 'Backend', status: 'Learning' },
  { name: 'Backend Development', category: 'Backend', status: 'Learning' },

  // Android
  { name: 'Kotlin', category: 'Android', status: 'Learning' },
  { name: 'Jetpack Compose', category: 'Android', status: 'Learning' },

  // Tools
  { name: 'VS Code', category: 'Tools', status: 'Used in Projects' },
  { name: 'Git & GitHub', category: 'Tools', status: 'Used in Projects' },
  { name: 'Vite', category: 'Tools', status: 'Used in Projects' },
  { name: 'Android Studio', category: 'Tools', status: 'Learning' },
]
