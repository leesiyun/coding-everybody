module.exports = {
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.experiments = {...config.experiments, topLevelAwait: true}
    return config
  },
}
