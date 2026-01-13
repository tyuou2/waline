// packages/server/config.js
const path = require('path');

// 显式指定 .env 文件的路径，假设 .env 在 packages/server 的上一级或更上级
// 根据你的实际目录结构调整 '../' 的数量
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

module.exports = {
  db: 'sqlite',

  // SQLite 配置
  sqlite: {
    path: path.join(
      __dirname,
      process.env.SQLITE_PATH || 'data',
      'waline.sqlite'
    ),
  },

  // 从环境变量读取 JWT 密钥
  jwtSecret: process.env.JWT_TOKEN || 'fallback_secret_if_not_set',
};

