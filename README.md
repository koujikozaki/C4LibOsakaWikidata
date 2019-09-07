# C4LibOsakaWikidata
ウィキデータチュートリアルの情報提供ページです．

## 情報共有用Googleドキュメント
https://docs.google.com/document/d/1l-4w8ll1bvxuEYAvlGYTAyUI2vd8dd1eM5bvj_C46CI/edit?usp=sharing  
※自由に書き込んでください．ただし，人が書いた内容はけさないよう注意しましょう．

## ウィキデータ関係
### 検索サービス
https://query.wikidata.org/

### Wikidata:In one page
https://www.wikidata.org/wiki/Wikidata:In_one_page


### 編集用のデータ（図書館）一覧
大阪府内  
- 一覧　https://w.wiki/7zM　
- MAP　http://lodosaka.jp/C4LibOsaka/MapOsakaLib/  　
  
全国  
- 一覧　https://w.wiki/7zL　
- MAP　http://lodosaka.jp/C4LibOsaka/MapLib/

### 編集担当のメモ用
https://docs.google.com/spreadsheets/d/107gUcO90VkBDV22PJ-DbHBDy2Az_IIjHkgty1Msb3Gw/edit?usp=sharing

### Wikidataで図書館に使われている項目のまとめ（by Suisuiさん）
https://www.wikidata.org/wiki/User:Suisui/Item/図書館

## 成果まとめ
### チュートリアルで入力したデータの検索用クエリ
- 大阪府下の図書館  
クエリ実行 https://w.wiki/7zh  
```SELECT ?s ?sLabel ?point ?area ?books ?image ?update ?isil ?jawp WHERE {
  ?s rdfs:label ?sLabel.
  ?s wdt:P17 wd:Q17;     
      wdt:P791 ?isil;
      wdt:P131/wdt:P273* wd:Q122723.
  FILTER((LANG(?sLabel)) = "ja")
  OPTIONAL{?s wdt:P625 ?point}
  OPTIONAL{?s wdt:P2046 ?area}
  OPTIONAL{?s wdt:P1436 ?books}
  OPTIONAL{?s wdt:P18 ?image}
  OPTIONAL{?jawp schema:about ?s ;
           schema:isPartOf	<https://ja.wikipedia.org/>.
           }
  OPTIONAL { 
    ?s schema:dateModified ?update.
  }
}ORDER BY DESC(?jawp)
LIMIT 1000
```
- 大阪市内の図書館  
クエリ実行　https://w.wiki/7zy  
```
SELECT ?s ?sLabel ?point ?area ?books ?image ?update ?isil ?jawp WHERE {
  ?s wdt:P17 wd:Q17;     
      wdt:P791 ?isil;      
      wdt:P131 wd:Q35765.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],ja". }
  OPTIONAL{?s wdt:P625 ?point}
  OPTIONAL{?s wdt:P2046 ?area}
  OPTIONAL{?s wdt:P1436 ?books}
  OPTIONAL{?s wdt:P18 ?image}
  OPTIONAL{?jawp schema:about ?s ;
           schema:isPartOf	<https://ja.wikipedia.org/>.
           }
  OPTIONAL { 
    ?s schema:dateModified ?update.
  }
}ORDER BY DESC(?isil)
```
※大阪市内のすべての市立図書館の「位置する行政区」に「大阪市」を追加したので，上記のクエリで「大阪市内の図書館」の一覧を取れます．

### 可視化例：大阪市立図書館について
- 所在地を地図で表示 https://w.wiki/7$5
- 面積を比較【棒グラフ】　https://w.wiki/7$9
- 面積を比較【バブルチャート】　https://w.wiki/7$B
- 収蔵数を比較【棒グラフ】　https://w.wiki/7$E
- 収蔵数を比較【バブルチャート】　https://w.wiki/7$C
- 面積当たりの収蔵数を比較【棒グラフ】　https://w.wiki/7$G
- 面積当たりの収蔵数を比較【バブルチャート】　https://w.wiki/7$H
- 人口当たりの収蔵数【某グラフ】　https://w.wiki/7$R
- 人口当たりの収蔵数【バブルチャート】　https://w.wiki/7$K
- 人口当たりの面積【棒グラフ】 https://w.wiki/7$Q
- 人口当たりの面積【バブルチャート】　https://w.wiki/7$M

### 可視化例：大阪府下の図書館について
- 蔵書数　https://w.wiki/7zj
- 面積当たりの蔵書数　https://w.wiki/7zi
