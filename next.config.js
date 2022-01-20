module.exports = {
  reactStrictMode: true,
  // DevExtreme kullanımındaki css içerisindeki svg hatalarının çözümü için eklendi
  webpack (config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  }
}
