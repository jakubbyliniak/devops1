const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || 'v1.0.0';

app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello from CI/CD pipeline!',
    version: VERSION,
    hostname: require('os').hostname() // zobaczysz nazwę poda w K8s
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`App ${VERSION} running on port ${PORT}`);
});
