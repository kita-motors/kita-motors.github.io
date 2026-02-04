export interface CareerItem {
  period: string;
  title: string;
  company: string;
  description: string;
  highlights?: string[];
}

export const career: CareerItem[] = [
  {
    period: '現在',
    title: '総務課 課長',
    company: '小売・卸売業（従業員50〜100名）',
    description: '総務部門のマネジメントとDX推進を担当。業務効率化と組織力強化を両立しながら、担当業務の範囲を大幅に拡大。',
    highlights: [
      '課長就任後、離職者ゼロ（寿退社除く）を継続',
      '複数のDXツール導入をPOとして推進（LINE WORKS、SmartHR、Bill One等）',
      '基幹システム刷新プロジェクトのPO（要件定義〜受入テスト）',
      'AIツールを活用した業務支援システムを自作・導入',
      '人事評価制度の策定（外部コンサルと共同）',
      '採用業務・経理業務の取りまとめを担当領域に追加',
    ],
  },
  {
    period: '以前',
    title: '営業・販売部門',
    company: '同社',
    description: '営業・販売業務を担当。現場での経験を経て総務部門へ異動。',
    highlights: [
      '現場視点での業務理解',
      '社内の様々な部署との連携経験',
    ],
  },
];

export interface Qualification {
  name: string;
  year: string;
}

export const qualifications: Qualification[] = [];
