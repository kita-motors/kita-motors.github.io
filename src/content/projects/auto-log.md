---
title: "Auto Log"
description: "車とバイクの給油記録・メンテナンス管理を行うAndroidアプリ。燃費自動計算、リマインダー通知、データのエクスポート/インポートに対応。"
tags: ["Kotlin", "Android", "Room", "MVVM", "WorkManager"]
date: 2026-02-02
category: "personal"
---

## プロジェクト概要

Auto Logは、車やバイクの給油記録とメンテナンス管理を行うAndroidアプリケーションです。Google Play Storeで公開中です。

[Google Play Store](https://play.google.com/store/apps/details?id=com.kitamotors.autolog)

## 主な機能

### 車両管理
- 車・バイク両対応
- 車両画像のカスタム登録（トリミング機能付き）
- 型式・エンジン情報・パーツ品番の管理

### 給油記録
- 日付・走行距離・給油量・金額の記録
- オドメーター/トリップメーター対応
- 満タン給油間の燃費を自動計算
- 給油時にリアルタイムで予測燃費を表示

### メンテナンス管理
- オイル交換、タイヤ交換、ブレーキ、バッテリー、車検など6種類に対応
- リマインダー機能（日付・走行距離の両方でリマインド）
- 車検・保険期日の管理

### データ管理
- 定時バックアップ（6時間〜1週間の間隔、最大7世代保持）
- CSV エクスポート/インポート（Googleスプレッドシート対応）
- Fuelioからのデータインポート対応
- SNS共有機能（X、LINE、Instagram等）

### UI/UX
- ダークモード対応（システム設定に追従）
- Material Design準拠
- ダッシュボードから2タップで給油記録追加

## 技術スタック

- **言語**: Kotlin 2.1.0
- **データベース**: Room 2.6.1
- **非同期処理**: Coroutines 1.9.0
- **アーキテクチャ**: MVVM + Flow + LiveData
- **バックグラウンド処理**: WorkManager 2.9.1
- **対象OS**: Android 7.0（API 24）〜 Android 15（API 35）

## 開発状況

Google Play Storeで公開中（2026年2月〜）。

## 私の役割

個人開発プロジェクトとして、企画・設計・実装・ストア公開まで全て担当。
