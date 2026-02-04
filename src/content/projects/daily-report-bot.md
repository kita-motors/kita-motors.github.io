---
title: "日次報告・課題検出ボット"
description: "チームの日次報告を自動収集し、AIで課題検出・感情分析を行うLINE WORKSボット。上長へのサマリー通知で早期対応を支援。"
tags: ["Next.js", "TypeScript", "LINE WORKS API", "Gemini API", "Supabase"]
date: 2026-02-03
---

## 概要

LINE WORKS APIとGoogle Gemini APIを活用し、チームの日次報告を自動化・分析するボットシステムです。

## 主な機能

- **AI課題検出**: 報告内容から技術的問題・リソース不足・依存関係などを自動検出
- **感情分析**: チームメンバーの状況をポジティブ/ネガティブスコアで可視化
- **自動リマインダー**: 未報告者への段階的な通知
- **デイリー/ウィークリーサマリー**: 上長への自動レポート
- **カレンダー連携**: 予定の確認・追加を自然言語で操作
- **休暇管理**: コマンドで休暇登録・確認

## 技術スタック

| 項目 | 技術 |
|------|------|
| フレームワーク | Next.js 15 (App Router) |
| 言語 | TypeScript |
| ホスティング | Vercel |
| データベース | Supabase (PostgreSQL) |
| AI | Google Gemini API |
| メッセージング | LINE WORKS API v2.0 |
| 定期実行 | GitHub Actions |

## 担当範囲

社内DXプロジェクトとして企画・設計・実装を担当。
