---
title: "Favorite Places"
description: "Google Mapsのお気に入りを活用したAndroid Auto対応のPOI通知アプリ。ドライブ中に登録地点の近くを通ると自動で通知。"
tags: ["Kotlin", "Android Auto", "Hilt", "Coroutines", "Car App Library"]
date: 2026-02-03
category: "personal"
---

## プロジェクト概要

Favorite Placesは、Google Mapsのお気に入りデータを活用した無料のスポット通知アプリです。ドライブ中に登録したお気に入り地点の近くを通ると自動で通知してくれます。

## 主な機能

### お気に入り管理
- Google MapsからエクスポートしたGeoJSON形式のお気に入りデータを読み込み
- カテゴリフィルター（ガソリンスタンド、レストラン、観光地など）で絞り込み

### Android Auto対応
- 車載ディスプレイでお気に入りリストを表示
- ナビゲーション中に近くのお気に入り地点を自動通知
- 通知またはリストからGoogle Mapsナビを直接起動

### カスタマイズ
- テーマ切り替え（ブルー/グリーン/モノトーン）
- ダークモード対応（システム設定に連動 + 手動切り替え）

## アーキテクチャ

MVVM + Repository パターンを採用。

```
com.kita.favoriteplaces/
├── di/                  # Hilt DIモジュール
├── data/
│   ├── model/           # データモデル
│   ├── repository/      # リポジトリ
│   └── location/        # 位置情報ロジック
├── ui/                  # メイン画面・設定画面
├── auto/                # Android Auto関連
└── service/             # バックグラウンドサービス
```

## 技術スタック

- **言語**: Kotlin
- **DI**: Hilt
- **非同期処理**: Coroutines + Flow
- **Android Auto**: Car App Library
- **暗号化**: AndroidX Security Crypto
- **JSON**: Gson

## 今後の予定

- v1.0: Google Play Store公開（AdMob広告実装、インポートガイド追加）
- v1.1: 通知設定カスタマイズ、検索機能、スマホ単体での通知対応
- v2.0: Jetpack Compose移行、訪問ポイント機能

## 私の役割

個人開発プロジェクトとして、企画・設計・実装を全て担当。
