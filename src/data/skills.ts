export interface Skill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  category: 'technical' | 'business' | 'management';
}

export const skills: Skill[] = [
  // 技術スキル
  { name: 'AIツール活用 (Claude Code等)', level: 4, category: 'technical' },
  { name: 'TypeScript / Next.js', level: 2, category: 'technical' },
  { name: 'Kotlin / Android', level: 2, category: 'technical' },
  { name: 'API設計・連携', level: 3, category: 'technical' },
  { name: 'Git / GitHub', level: 3, category: 'technical' },
  { name: 'クラウドサービス (Vercel等)', level: 3, category: 'technical' },

  // 業務スキル
  { name: 'DX推進・ツール導入', level: 5, category: 'business' },
  { name: '要件定義・仕様設計', level: 4, category: 'business' },
  { name: 'ベンダー管理・選定', level: 4, category: 'business' },
  { name: '業務フロー設計', level: 4, category: 'business' },
  { name: '経理業務', level: 3, category: 'business' },
  { name: '情報システム管理', level: 3, category: 'business' },

  // マネジメントスキル
  { name: 'チームマネジメント', level: 4, category: 'management' },
  { name: 'プロジェクト管理 (PO)', level: 4, category: 'management' },
  { name: '人材採用', level: 4, category: 'management' },
  { name: 'ステークホルダー調整', level: 4, category: 'management' },
  { name: '人事制度設計', level: 3, category: 'management' },
];

export const categoryLabels: Record<Skill['category'], string> = {
  technical: '技術',
  business: '業務',
  management: 'マネジメント',
};
