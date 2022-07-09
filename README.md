# Gatsby.js Sample Main
**デプロイサイトリンク**

https://samplegatsbyjsmainmain.gatsbyjs.io/

基となっているリポジトリ

https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-default

## 🚀 Quick start

1.  **Install gatsby**
    ```shell
    npm install -g gatsby-cli
    ```

1. **Clone this repository**
    ```shell
    git clone https://github.com/ichizokichinosuke/sample-gatsbyjs-main.git
    ```

1.  **Start developing.**
    ```shell
    cd sample-gatsbyjs-main/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

## 💫 Deploy

Gatsby Cloudにデプロイする。
以下のボタンをクリックし、会員登録した後に Add a site ボタンを押し、画面に表示されている指示に従う。
[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard)

## サンプルコード

### 40x対応
404エラー時に表示するページを ```src/pages/404.js``` に作成した。

特に設定を行う必要はない。

**参考**

https://www.gatsbyjs.com/docs/how-to/adding-common-features/add-404-page/


### 50x対応
500エラー時に表示するページを ```src/pages/500.js``` に作成した。

エラーを ```src/pages/raising-500-error.js``` の ```getServerData関数内```で発生させている。

デプロイサイトの上部、Example pagesのうち、Raising 500 Error をクリックすると確認可能。

**参考**

https://www.gatsbyjs.com/docs/how-to/adding-common-features/add-500-page/

### sitemap対応
プラグイン[gatsby-plugin-sitemap](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/)を使用して実現。

手順はリンク先の通り。

**デプロイサイトのサイトマップリンク**

https://samplegatsbyjsmainmain.gatsbyjs.io/sitemap/sitemap-0.xml
### 単体テスト
Jestを使用。[公式ドキュメント](https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/)通りに実装。

**参考**

https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/
