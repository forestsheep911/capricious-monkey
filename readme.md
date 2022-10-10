## 背景
油猴（Tamper Monkey）項目開發調試時，每次改完都要複製到油猴中，然後再切換到目標網頁刷新查看效果，非常低效。
這個個問題一直困擾著我，直到我發現了[這個項目](https://github.com/Eished/douyu-helper)。

在這裡表示對Eished的感謝，他的這個項目幾乎完美的達到了我的要求。
但我個人對於項目上的一些設置習慣不同，以及一些自動化的東西覺得還有改進空間。所以複製了他的項目，在這個基礎上做了一些改變，以便我以後的油猴項目，可以基於這個項目上實現。於是有了現在這個項目。
如果你喜歡我的設置，可以用它作為模板，當然也可以用原作者的項目做模板。

## 改變點
- 刪除了所有業務代碼，使其成為一個純的模板
- 代碼風格的一些變化,主要體現在`.prettierrc.js`中
- 讀取`package.json`中的`name`屬性，運用到目標文件名的生成中


