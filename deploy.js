const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4042;
const url = 'http://127.0.0.1:3999'
// 配置代理
app.use('/verify/', createProxyMiddleware({
    target: `${url}/verify/`,
    changeOrigin: true
  }));
  

app.use('/run/', createProxyMiddleware({
  target: `${url}/run/`,
  changeOrigin: true,
}));
  


// 服务静态文件
app.use(express.static(path.join(__dirname, 'dist')));

// 捕获所有其他路由并返回前端应用
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 错误处理
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on  http://127.0.0.1:${PORT}`);
});
