const { resolve } = require('path');
module.exports = {
  // 导入文件夹别名
  alias: {
    '/@/': resolve(__dirname, './src'),
    '/@views/': resolve(__dirname, './src/views'),
    '/@components/': resolve(__dirname, './src/components'),
    '/@utils/': resolve(__dirname, './src/utils'),
  },
  // 配置Dep优化行为
  optimizeDeps: {
    include: ["lodash"]
  },
  lintOnSave: false
}