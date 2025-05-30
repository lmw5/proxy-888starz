const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  '/',
  createProxyMiddleware({
    target: 'https://888starz.bet',
    changeOrigin: true,
    onProxyRes(proxyRes) {
      delete proxyRes.headers['x-frame-options'];
      delete proxyRes.headers['content-security-policy'];
    }
  })
);

app.listen(process.env.PORT || 3000, () => {
  console.log('Proxy rodando!');
});
