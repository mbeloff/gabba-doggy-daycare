// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
module.exports = {
  configureWebpack: {
    plugins: [
      // new SitemapPlugin("https://gabbadoggydaycare.com", paths, {
      //   lastmod: true,
      //   changefreq: "monthly",
      //   priority: "0.5"
      // })
      // new BundleAnalyzerPlugin()
    ]
  },
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Gabba Doggy Day Care"
    }
  }
};