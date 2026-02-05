export interface CareerItem {
  period: string;
  title: string;
  company: string;
  description: string;
  highlights?: string[];
}

export const career: CareerItem[] = [
  {
    period: '2019年〜現在',
    title: '総務課長',
    company: '小売・卸売業（従業員50〜100名）',
    description: '経理・人事・総務・情シスを兼ねる部門のマネジメントを担当。2023年より課長職。配属当初から放置されていた課題の立て直しに取り組み、業務効率化を進めている。',
    highlights: [
      '課長就任後、離職者ゼロを継続',
      '複数のDXツール導入をPOとして推進（LINE WORKS、SmartHR、Bill One等）',
      '基幹システム刷新プロジェクトのPO（要件定義〜受入テスト）',
      'AIツールを活用した業務支援システムを自作・導入',
      '人事評価制度の策定',
      '採用プロセスの刷新',
      '経理業務のデジタル化・月次決算の短縮',
    ],
  },
  {
    period: '2016年〜2019年',
    title: '営業・販売部門',
    company: '同社',
    description: '営業・販売業務を担当。現場での経験を経て総務部門へ異動。',
    highlights: [
      '現場との関係構築',
      '相手を知ることから始める姿勢',
    ],
  },
];

export interface Qualification {
  name: string;
  year: string;
}

export const qualifications: Qualification[] = [];
