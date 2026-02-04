---
title: "SmartBudget"
description: "家事の見える化を実現する統合家計管理アプリ。在庫管理、買い物リスト、カレンダー、家計簿を一元管理。"
tags: ["Kotlin", "Jetpack Compose", "Room", "Clean Architecture"]
date: 2026-01-01
---

## プロジェクト概要

SmartBudgetは、家事に関わる全てを一元管理できるAndroidアプリです。在庫管理から買い物リスト、カレンダー、家計簿、家事の進捗管理まで統合的に管理できます。

## 主な機能

- **在庫管理**: ローリングストック方式での在庫管理
- **買い物リスト**: スキップ機能付きのスマートな買い物リスト
- **カレンダー連携**: 買い物のリマインダーとスケジュール管理
- **家計簿**: 買い物データと連動した家計記録
- **パターン学習**: 買い物パターンを学習してレコメンド

## 技術スタック

- **言語**: Kotlin
- **UI**: Jetpack Compose (Material 3)
- **データベース**: Room
- **アーキテクチャ**: Clean Architecture
- **将来対応**: Kotlin Multiplatform (KMP) for iOS

## アーキテクチャ

Clean Architectureを採用し、将来的なKotlin Multiplatform対応を見据えた設計。

```
app/src/main/java/com/example/smartbudget/
├── domain/          # ビジネスロジック層（KMP対応）
│   ├── entity/      # エンティティ
│   ├── usecase/     # ユースケース
│   └── repository/  # リポジトリインターフェース
├── data/            # データ層
│   ├── local/       # Room データベース
│   └── repository/  # リポジトリ実装
└── ui/              # プレゼンテーション層
    ├── screen/      # 画面
    ├── component/   # UIコンポーネント
    └── navigation/  # ナビゲーション
```

## 開発状況

現在開発中。基本的なエンティティとユースケースのテストを整備しながら実装を進めています。

## 私の役割

個人開発プロジェクトとして、企画・設計・実装を全て担当。
