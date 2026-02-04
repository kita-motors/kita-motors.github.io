export interface CareerItem {
  period: string;
  title: string;
  company: string;
  description: string;
  highlights?: string[];
}

export const career: CareerItem[] = [
  {
    period: '2020年 - 現在',
    title: 'DXコンサルタント / 総務マネージャー',
    company: '現職',
    description: '社内DX推進および総務部門のマネジメントを担当。業務効率化システムの企画・導入から運用まで一貫して推進。',
    highlights: [
      '社内AIチャットボット「おしえてタケヤくん」の企画・開発・導入',
      'ペーパーレス化による年間コスト30%削減を達成',
      '総務部門のチームビルディングと業務改革を主導',
    ],
  },
  {
    period: '2015年 - 2020年',
    title: '情報システム担当',
    company: '前職',
    description: '社内インフラの管理・運用、および業務システムの導入・保守を担当。',
    highlights: [
      '基幹システムのクラウド移行プロジェクトを推進',
      '社内ヘルプデスクの立ち上げと運用体制構築',
      'セキュリティポリシーの策定と社内教育の実施',
    ],
  },
];

export interface Qualification {
  name: string;
  year: string;
}

export const qualifications: Qualification[] = [
  { name: '基本情報技術者', year: '2016年' },
  { name: '応用情報技術者', year: '2018年' },
  { name: 'AWS認定ソリューションアーキテクト アソシエイト', year: '2022年' },
];
