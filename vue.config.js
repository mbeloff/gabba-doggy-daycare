// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
const SitemapPlugin = require("sitemap-webpack-plugin").default;
// const routes = require('./src/router/index.js');
const paths = [
  {
    path: "/home/brisbane",
    priority: 0.8
  },
  {
    path: "/home/adelaide",
    priority: 0.8
  },
  {
    path: "/contact/brisbane",
    priority: 0.5
  },
  {
    path: "/contact/adelaide",
    priority: 0.5
  },
  {
    path: "/question/brisbane",
    priority: 0.3
  },
  {
    path: "/question/adelaide",
    priority: 0.3
  },
  {
    path: "/grooming/brisbane",
    priority: 0.5
  },
  {
    path: "/vaccinations",
    priority: 0.4
  },
  {
    path: "/sign-up/brisbane",
    priority: 0.7
  },
  {
    path: "/sign-up/adelaide",
    priority: 0.7
  },
  {
    path: "/explore/brisbane",
    priority: 0.6
  },
  {
    path: "/feedback/brisbane",
    priority: 0.4
  },
  {
    path: "/feedback/adelaide",
    priority: 0.4
  },
  {
    path: "/daycare/brisbane",
    priority: 0.7
  },
  {
    path: "/daycare/adelaide",
    priority: 0.7
  },
  {
    path: "/jobs/brisbane",
    priority: 0.2
  },
  {
    path: "/jobs/adelaide",
    priority: 0.2
  },
  {
    path: "/privacy",
    priority: 0.2
  },
]

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(pdf)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'files/[name].[hash:8].[ext]'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new SitemapPlugin({
        base: "https://www.gabbadoggydaycare.com", 
        paths, 
        options: {
        lastmod: true,
        changefreq: "monthly",
        priority: 0.5
      }}),
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
      title: "Gabba Doggy Daycare"
    }
  }
};