# Design Docs

## 目的

このディレクトリは、`Aliss-labs` のWebサイトを「何となく良い感じ」にするのではなく、
一貫した思想で設計し、実装判断まで落とし込むための設計資料を置く場所です。

狙う印象は以下です。

- 技術力がありそう
- 若いが軽く見えない
- 受託会社というより、プロダクトを生み出すチームに見える
- 見た目だけでなく、情報の伝わり方も強い

## ドキュメント一覧

- `01_brand_direction.md`
  サイト全体の方向性、避けるべき見た目、ブランドとしての立ち位置
- `02_homepage_structure.md`
  ホームページの情報設計、セクション順、各セクションの役割
- `03_visual_system.md`
  色、タイポグラフィ、余白、素材感、レイアウトルール
- `04_motion_system.md`
  アニメーションとスクロール演出の考え方
- `05_component_principles.md`
  カード、ナビ、CTA、チーム表示など UI コンポーネントの方針
- `06_copy_guidelines.md`
  文言のトーン、見出しの作り方、避けるべき表現

## 使い方

実装時は以下の順で参照するのがよいです。

1. `01_brand_direction.md` で世界観を決める
2. `02_homepage_structure.md` でページ構成を固める
3. `03_visual_system.md` と `05_component_principles.md` でUIを設計する
4. `04_motion_system.md` で動きの強さを調整する
5. `06_copy_guidelines.md` で文言を詰める
