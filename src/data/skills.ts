export interface Skill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  category: 'technical' | 'business' | 'management';
}

export const skills: Skill[] = [
  // 技術スキル
  { name: 'TypeScript', level: 4, category: 'technical' },
  { name: 'Next.js', level: 4, category: 'technical' },
  { name: 'React', level: 4, category: 'technical' },
  { name: 'Astro', level: 3, category: 'technical' },
  { name: 'Python', level: 3, category: 'technical' },
  { name: 'Node.js', level: 3, category: 'technical' },
  { name: 'Git/GitHub', level: 4, category: 'technical' },
  { name: 'AWS', level: 3, category: 'technical' },
  { name: 'Docker', level: 3, category: 'technical' },
  { name: 'SQL', level: 3, category: 'technical' },

  // 業務スキル
  { name: '業務フロー設計', level: 5, category: 'business' },
  { name: 'DX推進', level: 5, category: 'business' },
  { name: '要件定義', level: 4, category: 'business' },
  { name: 'ドキュメント作成', level: 5, category: 'business' },
  { name: 'ベンダー管理', level: 4, category: 'business' },
  { name: '予算管理', level: 4, category: 'business' },

  // マネジメントスキル
  { name: 'チームマネジメント', level: 4, category: 'management' },
  { name: 'プロジェクト管理', level: 4, category: 'management' },
  { name: '組織改革', level: 4, category: 'management' },
  { name: 'ステークホルダー調整', level: 5, category: 'management' },
  { name: '採用・育成', level: 4, category: 'management' },
];

export const categoryLabels: Record<Skill['category'], string> = {
  technical: '技術',
  business: '業務',
  management: 'マネジメント',
};
