module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['s3.us-west-2.amazonaws.com'],
  },
  webpack(config) {
    config.experiments = {...config.experiments, topLevelAwait: true}
    return config
  },
}
