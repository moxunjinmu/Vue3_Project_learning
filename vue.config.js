
const devServerPort = 9527; // TODO: get this variable from setting.ts

module.exports = {
  devServer: {
    port: devServerPort,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    progress: false
  }
};
