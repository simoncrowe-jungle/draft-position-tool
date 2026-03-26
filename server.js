const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Cache static assets for 1 hour, HTML for 5 mins (so updates propagate quickly)
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '5m',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=300');
    }
  }
}));

// All routes serve the same page (SPA-style)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Draft tool running on port ${PORT}`);
});
