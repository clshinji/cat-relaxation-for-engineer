# ねこカフェ for Engineers

## プロジェクト概要
エンジニア向けの猫リラクゼーションWebアプリ。猫のアニメーション、名言表示、環境音ミキサーを備えた静的サイト。

## 技術スタック
- HTML / CSS / JavaScript（バニラ、フレームワークなし）
- Web Audio API（環境音再生）
- GitHub Pages でデプロイ（GitHub Actions）

## ファイル構成
- `index.html` - メインHTML
- `style.css` - スタイルシート
- `app.js` - 全ロジック（IIFE、即時実行関数式でラップ）
- `audio/` - 環境音MP3ファイル（Pixabay License / CC0）

## 環境音の追加方法
1. `audio/` フォルダにMP3ファイルを配置
2. `app.js` の `SOUND_CATEGORIES` オブジェクトに登録（カテゴリ名、ファイルパス、ラベル）

## 開発時の注意点
- **モバイル音声**: iOS/Android では AudioContext がユーザー操作なしに再生できない（suspended 状態になる）。最初のタッチイベントで `audioContext.resume()` を呼ぶ必要がある
- **音源ファイルのライセンス**: `audio/` 内のファイルは [Moodist](https://moodist.mvze.net/) から取得（Pixabay License / CC0）。ライセンスに注意して追加すること
- **ビルドツールなし**: バンドラーやトランスパイラは使っていない。`app.js` を直接編集する
- **テストフレームワークなし**: 手動でブラウザ確認を行う
- **デプロイ**: `main` ブランチへのマージで GitHub Actions が GitHub Pages に自動デプロイ
