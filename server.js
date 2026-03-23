#!/usr/bin/env node

/**
 * 简单的HTTP服务器脚本（Node.js版本）
 * 用法: node server.js
 * 然后在浏览器访问 http://localhost:8000
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const os = require('os');
const { spawn } = require('child_process');

const PORT = 8000;
const DIR = __dirname;

// MIME类型映射
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.md': 'text/markdown',
};

const server = http.createServer((req, res) => {
  // 添加CORS头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 解析请求的URL
  let filePath = path.join(DIR, url.parse(req.url).pathname);

  // 处理目录请求
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  // 读取文件
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <title>404 - 页面未找到</title>
            <style>
              body { font-family: Arial; text-align: center; padding: 50px; }
              h1 { color: #333; }
              p { color: #666; }
              a { color: #667eea; text-decoration: none; }
            </style>
          </head>
          <body>
            <h1>404</h1>
            <p>页面未找到: ${req.url}</p>
            <p><a href="/">← 返回首页</a></p>
          </body>
          </html>
        `);
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Server Error: ${err}`);
      }
    } else {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      res.writeHead(200, { 
        'Content-Type': contentType + (contentType.startsWith('text') ? '; charset=utf-8' : '')
      });
      res.end(content);
    }
  });
});

// 获取本地IP地址
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

// 启动服务器
server.listen(PORT, () => {
  const localIP = getLocalIP();
  const localUrl = `http://localhost:${PORT}`;
  const networkUrl = `http://${localIP}:${PORT}`;

  console.log('\n✅ 服务器启动成功！\n');
  console.log(`📱 本地访问: ${localUrl}`);
  console.log(`🌐 局域网访问: ${networkUrl}`);
  console.log(`📁 文件位置: ${DIR}\n`);
  console.log('按 Ctrl+C 停止服务器\n');

  // 在Windows上自动打开浏览器
  if (process.platform === 'win32') {
    setTimeout(() => {
      spawn('start', [localUrl], { shell: true });
    }, 500);
  } else if (process.platform === 'darwin') {
    // macOS
    spawn('open', [localUrl]);
  } else if (process.platform === 'linux') {
    // Linux
    spawn('xdg-open', [localUrl]);
  }
});

// 优雅关闭
process.on('SIGINT', () => {
  console.log('\n✓ 服务器已停止');
  process.exit(0);
});
